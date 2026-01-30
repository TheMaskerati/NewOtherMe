import Phaser from 'phaser';
import { SCENES, COLORS, GAME_WIDTH, GAME_HEIGHT } from '@/config/gameConfig';

/**
 * Settings Scene
 * Allows the player to adjust volume and other game settings.
 */
export class SettingsScene extends Phaser.Scene {
    constructor() {
        super(SCENES.SETTINGS);
    }

    create(): void {
        const centerX = GAME_WIDTH / 2;
        const centerY = GAME_HEIGHT / 2;

        this.add.rectangle(0, 0, GAME_WIDTH, GAME_HEIGHT, COLORS.black).setOrigin(0);

        this.add.text(centerX, 100, 'IMPOSTAZIONI', {
            fontFamily: 'serif',
            fontSize: '48px',
            color: '#e0d5c0',
        }).setOrigin(0.5);

        // Volume Settings (Placeholder UI)
        this.createSlider(centerX, 250, 'VOLUME MUSICA', 50);
        this.createSlider(centerX, 350, 'VOLUME EFFETTI', 70);

        const backBtn = this.add.text(centerX, 500, 'INDIETRO', {
            fontFamily: 'monospace',
            fontSize: '24px',
            color: '#ffffff',
        })
            .setOrigin(0.5)
            .setInteractive({ useHandCursor: true });

        backBtn.on('pointerover', () => backBtn.setColor('#d4af37'));
        backBtn.on('pointerout', () => backBtn.setColor('#ffffff'));
        backBtn.on('pointerdown', () => {
            this.scene.stop();
            // Since settings can be reached from Menu or Pause, we just stop it
            // and the calling scene should handle visibility or we use a more robust manager
        });
    }

    private createSlider(x: number, y: number, label: string, value: number): void {
        this.add.text(x, y - 40, label, {
            fontFamily: 'monospace',
            fontSize: '18px',
            color: '#aaaaaa'
        }).setOrigin(0.5);

        const barWidth = 200;
        this.add.rectangle(x, y, barWidth, 10, 0x333333).setOrigin(0.5);
        this.add.rectangle(x - barWidth / 2 + (value * barWidth / 100) / 2, y, value * barWidth / 100, 10, 0xd4af37).setOrigin(0.5);
    }
}
