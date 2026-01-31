import { Dialog } from '@/types/dialog';
import { EnemyConfig } from '@/types/entities';

export const DIALOGS: Record<string, Dialog> = {



    intro_apartment: {
        id: 'intro_apartment',
        lines: [
            { text: 'Napoli, ore 6:00. Un monolocale che puzza di muffa e sogni andati a male.' },
            { text: 'Piatti sporchi nella piluccia. Caffè freddo da ieri. Un orologio che batte i secondi come chiodi.' },
            { speaker: 'GENNARO', text: '...Ancora quella faccia. Pulcinella che ride mentre affogo.' },
            { text: 'Gennaro Esposito. Quarantacinque anni di invisibilità.' },
            { text: 'Magazziniere di giorno, ombra che cammina al Teatro San Carlo di sera.' },
            { speaker: 'GENNARO', text: 'Susu, Gennà. Alzati. La scena non aspetta, anche se sei solo una comparsa.' },
        ],
    },

    generic_intro: {
        id: 'generic_intro',
        lines: [
            { speaker: 'OMBRA', text: 'Ti senti osservato.' },
            { speaker: 'MASCHERA', text: 'Un\'altra prova ti attende.' },
            { text: 'L\'aria si fa pesante. Scegli la tua Maschera.' },
        ],
    },

    minigame_win: {
        id: 'minigame_win',
        lines: [
            { text: 'Riesci a mantenere il controllo.' },
            { speaker: 'GENNARO', text: 'Non questa volta.' },
            { text: 'L\'ostacolo svanisce nel nulla.' },
        ],
    },

    minigame_loss: {
        id: 'minigame_loss',
        lines: [
            { text: 'La pressione è troppo forte.' },
            { speaker: 'MASCHERA', text: 'Sei debole.' },
            { text: 'La maschera prende il sopravvento per un istante.' },
        ],
    },

    dario_intro: {
        id: 'dario_intro',
        lines: [
            { speaker: 'DARIO', text: 'Esposito! Pure stasera in ritardo? Ma che tieni in quel cranio, la segatura?' },
            { speaker: 'DARIO', text: 'Sai qual è la tragedia? Che credi pure di essere un artista.' },
            { speaker: 'DARIO', text: 'Ma guardati. Sei solo un vuoto a perdere. Una macchia sul palcoscenico del San Carlo.' },
            { speaker: 'GENNARO', text: '...Sto solo cercando di fare il mio lavoro, Direttò.' },
            { speaker: 'DARIO', text: 'Il tuo lavoro è sparire! E se non sai sparire da solo, ti cancello io!' },
        ],
        choices: [
            { text: 'Abbassa lo sguardo e ingoia il veleno (Dignità)', action: 'battle_dario_calm', karmaEffect: 1 },
            { text: 'Sputagli in faccia tutta la tua rabbia (Vera Natura)', action: 'battle_dario_rage', karmaEffect: -1 },
        ],
    },

    dario_defeated: {
        id: 'dario_defeated',
        lines: [
            { speaker: 'DARIO', text: '...Non è finita qui.' },
            { text: 'Dario si allontana, umiliato.' },
            { speaker: 'GENNARO', text: 'Forse dovrei uscire a prendere aria.' },
        ],
    },

    dario_victory_mask: {
        id: 'dario_victory_mask',
        lines: [
            { speaker: 'MASCHERA', text: 'Bravo. Hai mostrato la tua vera natura.' },
            { speaker: 'DARIO', text: 'C-cosa...?' },
            { text: 'La paura negli occhi di Dario ti fa sentire potente.' },
        ],
    },

    elisa_meet: {
        id: 'elisa_meet',
        lines: [
            { speaker: 'ELISA', text: 'Gennaro? Ma overo si tu?' },
            { speaker: 'GENNARO', text: 'Elisa... Gesù, sono passati vent\'anni.' },
            { speaker: 'ELISA', text: 'Ti ho cercato, sai? Ma sei diventato un fantasma. Ti sono rimasti solo gli occhi di allora.' },
            { speaker: 'GENNARO', text: 'Quelli sono l\'unica cosa che non sono riusciti a vendermi.' },
            { speaker: 'ELISA', text: 'Vieni a prenderti un caffè. Per ricordare chi eravamo prima di diventare così.' },
        ],
        choices: [
            { text: 'Sorridi e prova a sentire di nuovo (Umanità)', nextDialogId: 'elisa_accept', karmaEffect: 1 },
            { text: 'Chiudi la porta al passato (Freddezza)', nextDialogId: 'elisa_refuse', karmaEffect: -1 },
        ],
    },

    elisa_accept: {
        id: 'elisa_accept',
        lines: [
            { speaker: 'GENNARO', text: 'Mi piacerebbe molto.' },
            { speaker: 'ELISA', text: 'Perfetto! Ci vediamo dopo.' },
            { text: 'Un calore dimenticato ti scalda il petto.' },
        ],
    },

    elisa_refuse: {
        id: 'elisa_refuse',
        lines: [
            { speaker: 'GENNARO', text: 'Non ho tempo per queste cose.' },
            { speaker: 'ELISA', text: 'Oh... Capisco.' },
            { text: 'La maschera sussurra approvazione.' },
        ],
    },

    bully_encounter: {
        id: 'bully_encounter',
        lines: [
            { speaker: 'BULLO', text: 'Ehi, vecchio! Che ci fai qui?' },
            { speaker: 'BULLO', text: 'Questo è il nostro vicolo.' },
            { speaker: 'GENNARO', text: '...' },
        ],
        choices: [
            { text: 'Ignora e prosegui', nextDialogId: 'bully_ignore', karmaEffect: 1 },
            { text: 'Affronta con rabbia', nextDialogId: 'bully_confront', karmaEffect: -1 },
        ],
    },

    bully_ignore: {
        id: 'bully_ignore',
        lines: [
            { text: 'Li oltrepassi in silenzio.' },
            { speaker: 'BULLO', text: 'Tsk. Codardo.' },
            { text: 'Ma qualcosa in te ti dice che hai fatto la cosa giusta.' },
        ],
    },

    bully_confront: {
        id: 'bully_confront',
        lines: [
            { speaker: 'GENNARO', text: 'BASTA!' },
            { text: 'La tua voce rimbomba nel vicolo.' },
            { speaker: 'BULLO', text: 'Oh, vuoi fare il duro?' },
            { speaker: 'BULLO', text: 'Vediamo se sai difenderti!' },
        ],
        choices: [
            { text: 'Cerca di calmare la situazione', action: 'battle_bully_calm', karmaEffect: 1 },
            { text: 'Attacca per primo con violenza', action: 'battle_bully_rage', karmaEffect: -1 },
        ],
    },

    father_house_enter: {
        id: 'father_house_enter',
        lines: [
            { text: 'La casa di tuo padre. Tutto è come lo ricordavi.' },
            { text: 'L\'odore di tabacco. Le foto sbiadite.' },
            { speaker: 'GENNARO', text: 'Perché sono tornato qui?' },
        ],
    },

    father_confrontation: {
        id: 'father_confrontation',
        lines: [
            { speaker: 'OMBRA', text: 'Bentornato a casa, fallito.' },
            { speaker: 'GENNARO', text: 'Sei solo un fantasma nella mia testa. Papà è morto da un pezzo.' },
            { speaker: 'OMBRA', text: 'Ma io vivo dentro di te. Ogni volta che hai paura, ogni volta che ti senti una nullità... quello sono io.' },
            { speaker: 'OMBRA', text: 'Sei il mio capolavoro di delusione. Non vali nemmeno la polvere su queste foto.' },
            { speaker: 'GENNARO', text: 'Oggi... oggi deve finire.' },
            { speaker: 'OMBRA', text: 'Allora muori come sei vissuto: nell\'ombra!' },
        ],
        choices: [
            { text: 'Perdona il ricordo per liberare te stesso (Luce)', action: 'battle_father_peaceful', karmaEffect: 1 },
            { text: 'Diventa il mostro che lui ha creato (Ombra)', action: 'battle_father_aggressive', karmaEffect: -1 },
        ],
    },

    father_defeated_resist: {
        id: 'father_defeated_resist',
        lines: [
            { speaker: 'GENNARO', text: 'No. Non ti lascerò definire chi sono.' },
            { text: 'L\'ombra si dissolve.' },
            { speaker: 'GENNARO', text: 'Ero solo un bambino. Non era colpa mia.' },
            { text: 'Una luce calda inizia a filtrare dalla finestra.' },
        ],
    },

    father_defeated_mask: {
        id: 'father_defeated_mask',
        lines: [
            { speaker: 'MASCHERA', text: 'Finalmente. Ora siamo uno.' },
            { text: 'L\'ombra ride mentre la maschera aderisce al tuo volto.' },
            { speaker: 'OMBRA', text: 'Sei diventato esattamente come me.' },
        ],
    },

    mask_whisper_1: {
        id: 'mask_whisper_1',
        lines: [
            { speaker: 'MASCHERA', text: 'Falli soffrire come hai sofferto tu.' },
        ],
    },

    mask_whisper_2: {
        id: 'mask_whisper_2',
        lines: [
            { speaker: 'MASCHERA', text: 'Il potere è a portata di mano.' },
        ],
    },

    mask_whisper_3: {
        id: 'mask_whisper_3',
        lines: [
            { speaker: 'MASCHERA', text: 'Indossami. Diventa forte.' },
        ],
    },
};

export const ENEMIES: Record<string, EnemyConfig> = {
    dario: {
        id: 'dario',
        name: 'Dario Izzo',
        position: { x: 20, y: 5 },
        sprite: 'dario',
        dialogId: 'dario_intro',
        faceDirection: 'down',
        isBoss: true,
        hp: 80,
        maxHp: 80,
        attacks: [
            { name: 'Insulto', damage: 8, temptationIncrease: 5, description: 'Sei solo una comparsa!' },
            { name: 'Umiliazione', damage: 12, temptationIncrease: 8, description: 'Non vali niente!' },
            { name: 'Licenziamento', damage: 18, temptationIncrease: 12, description: 'SEI FUORI!' },
        ],
    },

    bully1: {
        id: 'bully1',
        name: 'Bullo',
        position: { x: 15, y: 25 },
        sprite: 'bully',
        dialogId: 'bully_encounter',
        faceDirection: 'left',
        isBoss: false,
        hp: 40,
        maxHp: 40,
        attacks: [
            { name: 'Scherno', damage: 6, temptationIncrease: 4, description: 'Che sfigato!' },
            { name: 'Spintone', damage: 10, temptationIncrease: 6, description: 'Levati dai piedi!' },
        ],
    },

    bully2: {
        id: 'bully2',
        name: 'Teppista',
        position: { x: 18, y: 28 },
        sprite: 'bully',
        dialogId: '',
        faceDirection: 'right',
        isBoss: false,
        hp: 35,
        maxHp: 35,
        attacks: [
            { name: 'Minaccia', damage: 5, temptationIncrease: 5, description: 'Ti facciamo a pezzi!' },
            { name: 'Pugno', damage: 12, temptationIncrease: 4, description: '*WHACK*' },
        ],
    },

    elisa: {
        id: 'elisa',
        name: 'Elisa',
        position: { x: 10, y: 30 },
        sprite: 'elisa',
        dialogId: 'elisa_meet',
        faceDirection: 'down',
        isBoss: false,
        hp: 0,
        maxHp: 0,
        attacks: [],
    },

    father_shadow: {
        id: 'father_shadow',
        name: 'Ombra del Padre',
        position: { x: 12, y: 10 },
        sprite: 'shadow',
        dialogId: 'father_confrontation',
        faceDirection: 'down',
        isBoss: true,
        hp: 120,
        maxHp: 120,
        attacks: [
            { name: 'Delusione', damage: 10, temptationIncrease: 8, description: 'Non sei mio figlio.' },
            { name: 'Silenzio', damage: 8, temptationIncrease: 10, description: '...' },
            { name: 'Abbandono', damage: 15, temptationIncrease: 12, description: 'Avrei dovuto lasciarti.' },
            { name: 'Verita Crudele', damage: 20, temptationIncrease: 15, description: 'Sei NIENTE!' },
        ],
    },
};

export const NPC_CONFIGS: Record<string, { map: string; position: { x: number; y: number }; dialogId: string }> = {
    dario: { map: 'theater', position: { x: 20, y: 5 }, dialogId: 'dario_intro' },
    elisa: { map: 'naplesAlley', position: { x: 10, y: 30 }, dialogId: 'elisa_meet' },
    bully1: { map: 'naplesAlley', position: { x: 15, y: 25 }, dialogId: 'bully_encounter' },
    bully2: { map: 'naplesAlley', position: { x: 18, y: 28 }, dialogId: '' },
    father_shadow: { map: 'fatherHouse', position: { x: 12, y: 10 }, dialogId: 'father_confrontation' },
};

export const SPAWN_POINTS: Record<string, { x: number; y: number }> = {
    apartment: { x: 10, y: 10 },
    theater: { x: 5, y: 18 },
    naplesAlley: { x: 8, y: 15 },
    fatherHouse: { x: 12, y: 15 },
};
