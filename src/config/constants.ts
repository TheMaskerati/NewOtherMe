import { Dialog } from '@/types/dialog';
import { EnemyConfig } from '@/types/entities';
import { LOCALE } from '@/config/locale';

export const DIALOGS: Record<string, Dialog> = {
    intro_apartment: {
        id: 'intro_apartment',
        lines: [
            { text: LOCALE.DIALOGS.intro_apartment.lines[0] as string }, { text: LOCALE.DIALOGS.intro_apartment.lines[1] as string }, { speaker: 'GENNARO', text: (LOCALE.DIALOGS.intro_apartment.lines[2] as any).text }, { speaker: 'GENNARO', text: (LOCALE.DIALOGS.intro_apartment.lines[3] as any).text }
        ]
    },
    generic_intro: {
        id: 'generic_intro',
        lines: [
            { speaker: 'OMBRA', text: (LOCALE.DIALOGS.generic_intro.lines[0] as any).text }, { speaker: 'MASCHERA', text: (LOCALE.DIALOGS.generic_intro.lines[1] as any).text }, { text: LOCALE.DIALOGS.generic_intro.lines[2] as string }
        ]
    },
    dario_intro: {
        id: 'dario_intro',
        lines: [
            { speaker: 'DARIO', text: (LOCALE.DIALOGS.dario_intro.lines[0] as any).text }, { speaker: 'DARIO', text: (LOCALE.DIALOGS.dario_intro.lines[1] as any).text }, { speaker: 'DARIO', text: (LOCALE.DIALOGS.dario_intro.lines[2] as any).text }, { speaker: 'GENNARO', text: LOCALE.DIALOGS.dario_intro.lines[3] as string }, { speaker: 'DARIO', text: (LOCALE.DIALOGS.dario_intro.lines[4] as any).text }
        ],
        choices: [
            { text: LOCALE.DIALOGS.dario_intro.choices![0], action: 'battle_dario_calm', karmaEffect: 1 }, { text: LOCALE.DIALOGS.dario_intro.choices![1], action: 'battle_dario_rage', karmaEffect: -1 }
        ]
    }
};

export const ENEMIES: Record<string, EnemyConfig> = {
    dario: {
        id: 'dario',
        name: LOCALE.ENEMIES.dario.name,
        position: { x: 20, y: 5 },
        sprite: 'dario',
        dialogId: 'dario_intro',
        faceDirection: 'down',
        isBoss: true,
        hp: 80,
        maxHp: 80,
        attacks: [
            { name: LOCALE.ENEMIES.dario.attacks[0].name, damage: 8, temptationIncrease: 5, description: LOCALE.ENEMIES.dario.attacks[0].text }, { name: LOCALE.ENEMIES.dario.attacks[1].name, damage: 12, temptationIncrease: 8, description: LOCALE.ENEMIES.dario.attacks[1].text }, { name: LOCALE.ENEMIES.dario.attacks[2].name, damage: 18, temptationIncrease: 12, description: LOCALE.ENEMIES.dario.attacks[2].text }
        ]
    },
    bully1: {
        id: 'bully1',
        name: LOCALE.ENEMIES.bully.name,
        position: { x: 15, y: 25 },
        sprite: 'bully',
        dialogId: 'bully_encounter',
        faceDirection: 'left',
        isBoss: false,
        hp: 40,
        maxHp: 40,
        attacks: [
            { name: LOCALE.ENEMIES.bully.attacks[0].name, damage: 6, temptationIncrease: 4, description: LOCALE.ENEMIES.bully.attacks[0].text }, { name: LOCALE.ENEMIES.bully.attacks[1].name, damage: 10, temptationIncrease: 6, description: LOCALE.ENEMIES.bully.attacks[1].text }
        ]
    },
    bully2: {
        id: 'bully2',
        name: LOCALE.ENEMIES.teppista.name,
        position: { x: 18, y: 28 },
        sprite: 'bully',
        dialogId: '',
        faceDirection: 'right',
        isBoss: false,
        hp: 35,
        maxHp: 35,
        attacks: [
            { name: LOCALE.ENEMIES.teppista.attacks[0].name, damage: 5, temptationIncrease: 5, description: LOCALE.ENEMIES.teppista.attacks[0].text }, { name: LOCALE.ENEMIES.teppista.attacks[1].name, damage: 12, temptationIncrease: 4, description: LOCALE.ENEMIES.teppista.attacks[1].text }
        ]
    }
};

export const NPC_CONFIGS: Record<string, { map: string; position: { x: number; y: number }; dialogId: string }> = {
    dario: { map: 'theater', position: { x: 20, y: 5 }, dialogId: 'dario_intro' },
    elisa: { map: 'naplesAlley', position: { x: 10, y: 30 }, dialogId: 'elisa_meet' },
    bully1: { map: 'naplesAlley', position: { x: 15, y: 25 }, dialogId: 'bully_encounter' },
    bully2: { map: 'naplesAlley', position: { x: 18, y: 28 }, dialogId: '' },
    father_shadow: { map: 'fatherHouse', position: { x: 12, y: 10 }, dialogId: 'father_confrontation' }
};

export const SPAWN_POINTS: Record<string, { x: number; y: number }> = {
    apartment: { x: 10, y: 10 },
    theater: { x: 5, y: 18 },
    naplesAlley: { x: 8, y: 15 },
    fatherHouse: { x: 12, y: 15 }
};
