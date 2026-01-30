import Phaser from 'phaser';

/**
 * Centralized Audio Manager system.
 * Handles background music, sound effects, and volume settings.
 */
export class AudioManager {
    private scene: Phaser.Scene;
    private music: Map<string, Phaser.Sound.BaseSound> = new Map();
    private sfx: Map<string, Phaser.Sound.BaseSound> = new Map();
    private currentMusic: string | null = null;
    private musicVolume: number = 0.5;
    private sfxVolume: number = 0.7;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
    }

    /**
     * Plays background music. Automatically fades out previous music if different.
     */
    public playMusic(key: string, loop: boolean = true): void {
        if (this.currentMusic === key) return;

        // Stop current music
        if (this.currentMusic) {
            const current = this.music.get(this.currentMusic);
            if (current) {
                this.scene.tweens.add({
                    targets: current,
                    volume: 0,
                    duration: 1000,
                    onComplete: () => current.stop()
                });
            }
        }

        // Start new music
        let sound = this.music.get(key);
        if (!sound) {
            sound = this.scene.sound.add(key, { loop, volume: 0 });
            this.music.set(key, sound);
        }

        this.currentMusic = key;
        sound.play();
        this.scene.tweens.add({
            targets: sound,
            volume: this.musicVolume,
            duration: 1000
        });
    }

    /**
     * Stops current background music.
     */
    public stopMusic(): void {
        if (this.currentMusic) {
            const current = this.music.get(this.currentMusic);
            if (current) {
                this.scene.tweens.add({
                    targets: current,
                    volume: 0,
                    duration: 500,
                    onComplete: () => {
                        current.stop();
                        this.currentMusic = null;
                    }
                });
            }
        }
    }

    /**
     * Plays a sound effect once.
     */
    public playSFX(key: string, volume: number = this.sfxVolume): void {
        this.scene.sound.play(key, { volume });
    }

    /**
     * Sets music volume (0.0 to 1.0).
     */
    public setMusicVolume(value: number): void {
        this.musicVolume = Phaser.Math.Clamp(value, 0, 1);
        if (this.currentMusic) {
            const current = this.music.get(this.currentMusic);
            if (current) (current as any).setVolume(this.musicVolume);
        }
    }

    /**
     * Sets SFX volume (0.0 to 1.0).
     */
    public setSFXVolume(value: number): void {
        this.sfxVolume = Phaser.Math.Clamp(value, 0, 1);
    }

    /**
     * Cleans up resources.
     */
    public destroy(): void {
        this.music.forEach(s => s.destroy());
        this.music.clear();
        this.sfx.forEach(s => s.destroy());
        this.sfx.clear();
    }
}
