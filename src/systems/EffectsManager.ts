import Phaser from 'phaser';

/**
 * Effects Manager
 * Handles screen-wide visual feedback, dynamic lighting, weather, and particles.
 */
export class EffectsManager {
    private scene: Phaser.Scene;

    /* Lighting */
    private ambientLayer!: Phaser.GameObjects.Rectangle;
    private lightsLayer!: Phaser.GameObjects.Container;
    private vignette!: Phaser.GameObjects.Graphics;

    /* Weather */
    private dustEmitter!: Phaser.GameObjects.Particles.ParticleEmitter;
    private rainEmitter!: Phaser.GameObjects.Particles.ParticleEmitter;

    /* Settings */
    private isLowQuality: boolean = false;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
        this.createSystems();
    }

    private createSystems(): void {
        /* 1. Lighting System (Fake 2D Lighting) */
        /* Ambient Layer: Multiplies color over the screen to set mood */
        this.ambientLayer = this.scene.add.rectangle(0, 0, this.scene.scale.width, this.scene.scale.height, 0x000000, 0);
        this.ambientLayer.setOrigin(0);
        this.ambientLayer.setScrollFactor(0);
        this.ambientLayer.setDepth(900); /* High depth but below UI */
        this.ambientLayer.setBlendMode(Phaser.BlendModes.MULTIPLY);

        /* Lights Layer: Adds light back on top of ambient */
        this.lightsLayer = this.scene.add.container(0, 0);
        this.lightsLayer.setDepth(901);
        this.lightsLayer.setBlendMode(Phaser.BlendModes.ADD);

        /* Vignette: Darkens edges */
        this.vignette = this.scene.add.graphics();
        this.vignette.setScrollFactor(0);
        this.vignette.setDepth(1100); /* Above UI if needed, or just below HUD */
        this.vignette.fillStyle(0x000000, 1);
        /* Draw a big hollow rect or use gradient texture. Simple implementation: */
        this.vignette.fillGradientStyle(0x000000, 0x000000, 0x000000, 0x000000, 1, 1, 0, 0);
        this.vignette.fillRect(0, 0, this.scene.scale.width, this.scene.scale.height);
        this.vignette.setAlpha(0.6);
        this.vignette.setVisible(false);

        /* 2. Particle System */
        const texture = this.scene.textures.exists('star') ? 'star' : 'particle';
        if (!this.scene.textures.exists(texture)) {
            /* Fallback generic textgen */
            const canvas = this.scene.textures.createCanvas('particle', 4, 4);
            const source = canvas.getSourceImage();
            if (source instanceof HTMLCanvasElement) {
                const ctx = source.getContext('2d');
                if (ctx) {
                    ctx.fillStyle = '#ffffff';
                    ctx.fillRect(0, 0, 4, 4);
                }
            }
            canvas.refresh();
        }

        /* Emitters */
        this.dustEmitter = this.scene.add.particles(0, 0, texture, {
            alpha: { start: 0.3, end: 0 },
            scale: { start: 0.5, end: 1 },
            tint: 0xffd700,
            lifespan: 3000,
            speed: { min: 10, max: 30 },
            angle: { min: 0, max: 360 },
            frequency: -1, /* Manual or stopped */
            blendMode: 'ADD',
            emitting: false
        });
        this.dustEmitter.setDepth(899);

        this.rainEmitter = this.scene.add.particles(0, 0, texture, {
            alpha: { start: 0.5, end: 0.2 },
            scaleX: 0.1,
            scaleY: 2,
            tint: 0xaaddff,
            lifespan: 600,
            speedY: { min: 300, max: 500 },
            speedX: { min: -10, max: 10 },
            frequency: -1,
            blendMode: 'NORMAL',
            emitting: false
        });
        this.rainEmitter.setDepth(899);
    }

    /**
     * Updates the lighting and atmosphere based on the map/scene type.
     * @param mapId The ID of the current map (e.g. 'theater', 'naplesAlley')
     */
    public setAtmosphere(mapId: string): void {
        /* Reset */
        this.dustEmitter.stop();
        this.rainEmitter.stop();
        this.lightsLayer.removeAll(true);
        this.vignette.setVisible(false);
        this.ambientLayer.setFillStyle(0x000000, 0); // Reset

        switch (mapId) {
            case 'theater':
                /* Warm, mysterious, dusty */
                this.ambientLayer.setFillStyle(0x1a0522, 0.6); /* Deep Purple */
                this.vignette.setVisible(true);
                this.vignette.setAlpha(0.5);

                /* Gold Dust */
                this.dustEmitter.setPosition(this.scene.scale.width / 2, this.scene.scale.height / 2);
                this.dustEmitter.setEmitZone({
                    source: new Phaser.GameObjects.Particles.Zones.RandomZone(
                        new Phaser.Geom.Rectangle(0, 0, this.scene.scale.width, this.scene.scale.height)
                    ),
                    type: 'random'
                });
                this.dustEmitter.setFrequency(200);
                this.dustEmitter.setParticleTint(0xffd700);
                this.dustEmitter.start();
                break;

            case 'naplesAlley':
                /* Cold, dark, dangerous */
                this.ambientLayer.setFillStyle(0x001133, 0.7); /* Deep Blue */
                this.vignette.setVisible(true);
                this.vignette.setAlpha(0.7);

                /* Rain/Mist (simulated) */
                this.rainEmitter.setPosition(this.scene.scale.width / 2, -10);
                this.rainEmitter.setEmitZone({
                    source: new Phaser.GameObjects.Particles.Zones.RandomZone(
                        new Phaser.Geom.Rectangle(0, 0, this.scene.scale.width, 1)
                    ),
                    type: 'random'
                });
                this.rainEmitter.setFrequency(50);
                this.rainEmitter.start();
                break;

            case 'fatherHouse':
                /* Sepia, nostalgic, old */
                this.ambientLayer.setFillStyle(0x443322, 0.4); /* Sepia */
                this.vignette.setVisible(true);
                this.vignette.setAlpha(0.3);
                break;

            case 'apartment':
            default:
                /* Neutral */
                this.ambientLayer.setFillStyle(0x000000, 0.2);
                break;
        }
    }

    public update(time: number, delta: number, player: Phaser.Physics.Arcade.Sprite): void {
        /* Lighting follows camera/player mainly */
        /* If we had specific light sources, we would update them here */

        /* Shadow Trail Logic (Echo) */
        if (player.body.velocity.length() > 50) {
            if (time % 200 < delta) { /* Every few frames roughly */
                this.createShadowEcho(player);
            }
        }
    }

    private createShadowEcho(target: Phaser.Physics.Arcade.Sprite): void {
        const echo = this.scene.add.sprite(target.x, target.y, target.texture.key, target.frame.name);
        echo.setTint(0x000000);
        echo.setAlpha(0.3);
        echo.setDepth(target.depth - 1);

        this.scene.tweens.add({
            targets: echo,
            alpha: 0,
            scale: 1.1,
            duration: 500,
            onComplete: () => echo.destroy()
        });
    }

    /* Standard Effects (Keep existing API) */
    public shake(duration: number = 200, intensity: number = 0.01): void {
        this.scene.cameras.main.shake(duration, intensity);
    }

    public flash(duration: number = 500, color: number = 0xffffff): void {
        this.scene.cameras.main.flash(duration, (color >> 16) & 0xff, (color >> 8) & 0xff, color & 0xff);
    }
}
