/**
 * Localization strings for the game.
 * Centralizes all text used in UI, HUD, system messages, dialogues, and objectives.
 */
export const LOCALE = {
    UI: {
        OBJECTIVE_PREFIX: "OBIETTIVO: ",
        KARMA_PREFIX: "KARMA: ",
        STAGE_PREFIX: "STAGE ",
        UNKNOWN: "???",
        CONTINUE_PROMPT: "[INVIO] continua",
        CONFIRM_PROMPT: "[INVIO] conferma",
        INTERACTION_PROMPT: "[E] INTERAGISCI",
        CHALLENGE_PROMPT: "[E] Sfida ",
        CHOICE_PREFIX_SELECTED: "> ",
        CHOICE_PREFIX_NORMAL: "  ",
        MAP_NAME_SEPARATOR: " - ROUND ",
        DOOR_DEFAULT_LABEL: "Avanti",
    },
    MAP_NAMES: {
        apartment: "Il Risveglio",
        theater: "Il Teatro",
        bar: "Il Bar",
        fatherHouse: "La Casa",
        naplesAlley: "I Vicoli",
    },
    TIME: {
        MORNING: "MATTINA",
        AFTERNOON: "POMERIGGIO",
        EVENING: "SERA",
        NIGHT: "NOTTE",
    },
    MINIGAME: {
        NEW_RECORD: "NUOVO RECORD!",
        WIN: "VITTORIA!",
        LOSS: "SCONFITTA...",
        INSTRUCTIONS: {
            QTE: "PREMI SPAZIO RAPIDAMENTE!\n",
            BALANCE: "TIENI LA BARRA AL CENTRO!",
            RHYTHM: "PREMI SPAZIO QUANDO I CERCHI COMBACIANO!",
            HOLD: "TIENI PREMUTO SPAZIO PER RIEMPIRE!",
            BREATH: "PREMI SPAZIO QUANDO IL CERCHIO SI ALLARGA (INSPIRA/ESPIRA)",
            FOCUS: "INSEGUI LA STELLA CON IL MOUSE!",
            MEMORY: "TROVA LE COPPIE!",
            REACTION: "SCHIVA GLI OSTACOLI! [A/D o FRECCE]",
            PATTERN: "MEMORIZZA LA SEQUENZA!",
            PATTERN_MEMORIZE: "MEMORIZZA!",
            PATTERN_REPEAT: "RIPETI LA SEQUENZA!",
        },
        DODGES_PREFIX: "SCHIVA!\nDodges: ",
        RHYTHM_PREFIX: "RITMO! ",
        COMBO_PREFIX: "\nCOMBO ",
    },
    DIALOG: {
        CHOICE_QUESTION: "Cosa fai?",
    },
    MENU: {
        TITLE: "IL TEATRO\nDELLE OMBRE",
        SUBTITLE: "Un viaggio nei sogni di Gennaro",
        NEW_GAME: "NUOVA PARTITA",
        CONTINUE: "CONTINUA",
        LOAD: "CARICA",
        SETTINGS: "IMPOSTAZIONI",
        ACHIEVEMENTS: "TROFEI",
        CREDITS: "CREDITI",
        SAVE_TITLE: "ULTIMO SALVATAGGIO",
        SAVE_MAP: "Mappa: ",
        SAVE_TIME: "Tempo: ",
        SAVE_KARMA: "Anima: ",
        SAVE_DATE: "Data: ",
        STATS_CHALLENGES: "Sfide: ",
        STATS_ACHIEVEMENTS: "Achievements: ",
        FOOTER_CREDITS: "Global Game Jam 2026 | The Maskerati",
    },
    ITEMS: {
        caffe: {
            name: "Caffè Napoletano",
            description: "Restaura 30 HP. Il sapore di casa.",
        },
        sfogliatella: {
            name: "Sfogliatella",
            description: "Restaura 50 HP. Croccante fuori, morbida dentro.",
        },
        limoncello: {
            name: "Limoncello",
            description: "Riduce la Tentazione di 20. Il gusto della costa.",
        },
        amuleto: {
            name: "Corno Portafortuna",
            description: "Riduce la Tentazione di 40. Protezione antica.",
        },
        foto_mamma: {
            name: "Foto della Mamma",
            description: "Restaura 80 HP e riduce Tentazione di 30. Ricordi felici.",
        },
        biglietto_teatro: {
            name: "Biglietto del Teatro",
            description: "Un ricordo dei bei tempi. +20 HP.",
        },
    },
    DIALOGS: {
        intro_apartment: {
            lines: [
                "Napoli. Un monolocale al quinto piano.",
                "Piatti sporchi. Caffe freddo. Insonnia.",
                { speaker: "GENNARO", text: "...Ancora quel sogno." },
                { speaker: "GENNARO", text: "Meglio alzarsi. Stasera ho lo spettacolo." },
            ],
        },
        generic_intro: {
            lines: [
                { speaker: "OMBRA", text: "Ti senti osservato." },
                { speaker: "MASCHERA", text: "Un'altra prova ti attende." },
                "L'aria si fa pesante. Scegli la tua Maschera.",
            ],
        },
        dario_intro: {
            lines: [
                { speaker: "DARIO", text: "Esposito! Ancora in ritardo." },
                { speaker: "DARIO", text: "Sai qual è il tuo problema?" },
                { speaker: "DARIO", text: "Non hai TALENTO. Solo ambizioni vuote." },
                "...",
                { speaker: "DARIO", text: "Lascia che ti insegni il tuo posto!" },
            ],
            choices: [
                "Mantieni la calma e rispondi con dignità",
                "Lascia che la rabbia prenda il controllo",
            ],
        },
    },
    OBJECTIVES: {
        apartment: {
            initial: "ALZATI DAL LETTO",
            afterTutorial: "VAI AL TEATRO SAN CARLO",
            nearDoor: "ESCI DI CASA",
        },
        theater: {
            initial: "ESPLORA IL TEATRO",
            nearDario: "AFFRONTA DARIO",
            defeatedDario: "ESCI DAL TEATRO",
            talked_dario: "LASCIA IL TEATRO",
        },
        naplesAlley: {
            initial: "ATTRAVERSA I VICOLI DI NAPOLI",
            nearBully: "SUPERA I TEPPISTI",
            nearElisa: "PARLA CON ELISA",
            talked_elisa: "RIFLETTI SULLE PAROLE DI ELISA",
            defeatedBully: "PROSEGUI VERSO CASA",
            afterAll: "TROVA LA CASA DEL PADRE",
        },
        fatherHouse: {
            initial: "ENTRA NELLA CASA DEI RICORDI",
            exploring: "ESPLORA LA CASA",
            nearFather: "AFFRONTA L'OMBRA DEL PADRE",
            talked_father_shadow: "FAI I CONTI CON IL PASSATO",
            defeatedFather: "TROVA LA PACE INTERIORE",
        },
    },
    ENEMIES: {
        dario: {
            name: "Dario Izzo",
            attacks: [
                { name: "Insulto", text: "Sei solo una comparsa!" },
                { name: "Umiliazione", text: "Non vali niente!" },
                { name: "Licenziamento", text: "SEI FUORI!" },
            ],
        },
        bully: {
            name: "Bullo",
            attacks: [
                { name: "Scherno", text: "Che sfigato!" },
                { name: "Spintone", text: "Levati dai piedi!" },
            ],
        },
        teppista: {
            name: "Teppista",
            attacks: [
                { name: "Minaccia", text: "Ti facciamo a pezzi!" },
                { name: "Pugno", text: "*WHACK*" },
            ],
        },
        elisa: {
            name: "Elisa",
        },
        father_shadow: {
            name: "Ombra del Padre",
            attacks: [
                { name: "Delusione", text: "Non sei mio figlio." },
                { name: "Abbandono", text: "Avrei dovuto lasciarti." },
                { name: "Verita", text: "Sei NIENTE!" },
            ],
        },
    },
};
