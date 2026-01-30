import Phaser from 'phaser';

/**
 * HUD System
 * Displays Karma, Health, and other UI elements during gameplay.
 */
export class HUD {
    private scene: Phaser.Scene;
    private container: Phaser.GameObjects.Container;
    private karmaText: Phaser.GameObjects.Text;
    private karmaIndicator: Phaser.GameObjects.Arc;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
        this.container = this.scene.add.container(0, 0);
        this.container.setScrollFactor(0);
        this.container.setDepth(100);

        this.createHUD();
    }

    private createHUD(): void {
        // Karma Background
        const bg = this.scene.add.rectangle(20, 20, 150, 40, 0x000000, 0.5);
        bg.setOrigin(0);

        // Karma Indicator (Circle)
        this.karmaIndicator = this.scene.add.arc(40, 40, 10, 0, 360, false, 0xffffff);

        // Karma Text
        this.karmaText = this.scene.add.text(60, 30, 'KARMA: 0', {
            fontFamily: 'monospace',
            fontSize: '18px',
            color: '#ffffff'
        });

        this.container.add([bg, this.karmaIndicator, this.karmaText]);
    }

    /**
     * Updates the HUD with current karma value.
     */
    public updateKarma(value: number): void {
        this.karmaText.setText(`KARMA: ${value}`);

        // Color feedback
        if (value > 0) {
            this.karmaIndicator.setFillStyle(0xd4af37); // Gold for good
        } else if (value < 0) {
            this.karmaIndicator.setFillStyle(0xc41e3a); // Red for bad
        } else {
            this.karmaIndicator.setFillStyle(0xffffff); // White for neutral
        }

        // Pulse effect on change
        this.scene.tweens.add({
            targets: this.karmaIndicator,
            scale: 1.5,
            duration: 200,
            yoyo: true
        });
    }

    public setVisible(visible: boolean): void {
        this.container.setVisible(visible);
    }
}
