import { InventoryItem } from '@/types/game';
import { LOCALE } from '@/config/locale';

export interface ItemEffect {
    type: 'heal' | 'temptation_reduce' | 'damage_boost' | 'defense';
    value: number;
    duration?: number;
}

export interface ItemDefinition {
    id: string;
    name: string;
    description: string;
    effect: ItemEffect;
    usableInBattle: boolean;
    usableInExploration: boolean;
    maxStack: number;
    icon: string;
}

export const ITEM_DEFINITIONS: Record<string, ItemDefinition> = {
    caffe: {
        id: 'caffe',
        name: LOCALE.ITEMS.caffe.name,
        description: LOCALE.ITEMS.caffe.description,
        effect: { type: 'heal', value: 30 },
        usableInBattle: true,
        usableInExploration: true,
        maxStack: 5,
        icon: '☕',
    },
    sfogliatella: {
        id: 'sfogliatella',
        name: LOCALE.ITEMS.sfogliatella.name,
        description: LOCALE.ITEMS.sfogliatella.description,
        effect: { type: 'heal', value: 50 },
        usableInBattle: true,
        usableInExploration: true,
        maxStack: 3,
        icon: '🥐',
    },
    limoncello: {
        id: 'limoncello',
        name: LOCALE.ITEMS.limoncello.name,
        description: LOCALE.ITEMS.limoncello.description,
        effect: { type: 'temptation_reduce', value: 20 },
        usableInBattle: true,
        usableInExploration: false,
        maxStack: 3,
        icon: '🍋',
    },
    amuleto: {
        id: 'amuleto',
        name: LOCALE.ITEMS.amuleto.name,
        description: LOCALE.ITEMS.amuleto.description,
        effect: { type: 'temptation_reduce', value: 40 },
        usableInBattle: true,
        usableInExploration: false,
        maxStack: 2,
        icon: '🔮',
    },
    foto_mamma: {
        id: 'foto_mamma',
        name: LOCALE.ITEMS.foto_mamma.name,
        description: LOCALE.ITEMS.foto_mamma.description,
        effect: { type: 'heal', value: 80 },
        usableInBattle: true,
        usableInExploration: true,
        maxStack: 1,
        icon: '📷',
    },
    biglietto_teatro: {
        id: 'biglietto_teatro',
        name: LOCALE.ITEMS.biglietto_teatro.name,
        description: LOCALE.ITEMS.biglietto_teatro.description,
        effect: { type: 'heal', value: 20 },
        usableInBattle: true,
        usableInExploration: true,
        maxStack: 5,
        icon: '🎭',
    },
};

class InventoryManagerClass {
    private items: Map<string, number> = new Map();

    constructor() {
        this.reset();
    }

    reset(): void {
        this.items.clear();
        // Starting items
        this.addItem('caffe', 2);
        this.addItem('sfogliatella', 1);
    }

    addItem(itemId: string, quantity: number = 1): boolean {
        const definition = ITEM_DEFINITIONS[itemId];
        if (!definition) return false;

        const current = this.items.get(itemId) || 0;
        const newAmount = Math.min(current + quantity, definition.maxStack);
        this.items.set(itemId, newAmount);
        return true;
    }

    removeItem(itemId: string, quantity: number = 1): boolean {
        const current = this.items.get(itemId) || 0;
        if (current < quantity) return false;

        const newAmount = current - quantity;
        if (newAmount <= 0) {
            this.items.delete(itemId);
        } else {
            this.items.set(itemId, newAmount);
        }
        return true;
    }

    hasItem(itemId: string): boolean {
        return (this.items.get(itemId) || 0) > 0;
    }

    getItemCount(itemId: string): number {
        return this.items.get(itemId) || 0;
    }

    getInventory(): { itemId: string; quantity: number; definition: ItemDefinition }[] {
        const result: { itemId: string; quantity: number; definition: ItemDefinition }[] = [];

        this.items.forEach((quantity, itemId) => {
            const definition = ITEM_DEFINITIONS[itemId];
            if (definition && quantity > 0) {
                result.push({ itemId, quantity, definition });
            }
        });

        return result;
    }

    getBattleItems(): { itemId: string; quantity: number; definition: ItemDefinition }[] {
        return this.getInventory().filter(item => item.definition.usableInBattle);
    }

    useItem(itemId: string): ItemEffect | null {
        if (!this.hasItem(itemId)) return null;

        const definition = ITEM_DEFINITIONS[itemId];
        if (!definition) return null;

        this.removeItem(itemId);
        return definition.effect;
    }

    getDefinition(itemId: string): ItemDefinition | null {
        return ITEM_DEFINITIONS[itemId] || null;
    }

    getTotalItems(): number {
        let total = 0;
        this.items.forEach(qty => total += qty);
        return total;
    }

    saveState(): Record<string, number> {
        const state: Record<string, number> = {};
        this.items.forEach((qty, id) => state[id] = qty);
        return state;
    }

    loadState(state: Record<string, number>): void {
        this.items.clear();
        Object.entries(state).forEach(([id, qty]) => {
            this.items.set(id, qty);
        });
    }
}

export const InventoryManager = new InventoryManagerClass();
