import Phaser from "phaser";
import { PHASER_CONFIG } from "@/config/gameConfig";
import { AchievementsScene } from "@/scenes/AchievementsScene";
import { BootScene } from "@/scenes/BootScene";
import { CreditsScene } from "@/scenes/CreditsScene";
import { GameScene } from "@/scenes/GameScene";
import { MenuScene } from "@/scenes/MenuScene";
import { PauseScene } from "@/scenes/PauseScene";
import { SettingsScene } from "@/scenes/SettingsScene";

const config: Phaser.Types.Core.GameConfig = {
    ...PHASER_CONFIG,
    parent: "game",
    scene: [
        BootScene,
        MenuScene,
        GameScene,
        PauseScene,
        SettingsScene,
        AchievementsScene,
        CreditsScene,
    ],
    fps: {
        target: 60,
        forceSetTimeOut: true,
    },
    render: {
        batchSize: 2000,
        pixelArt: true,
        roundPixels: true,
    },
};

document.addEventListener("DOMContentLoaded", () => {
    new Phaser.Game(config);
});
