import { LOCALE } from "@/config/locale";
import type { MapKey } from "@/types/game";

export interface MapObjectives {
    initial: string;
    [key: string]: string;
}

export const OBJECTIVES: Record<MapKey | string, MapObjectives> = {
    apartment: {
        initial: LOCALE.OBJECTIVES.apartment.initial,
        afterTutorial: LOCALE.OBJECTIVES.apartment.afterTutorial,
        nearDoor: LOCALE.OBJECTIVES.apartment.nearDoor,
    },
    theater: {
        initial: LOCALE.OBJECTIVES.theater.initial,
        nearDario: LOCALE.OBJECTIVES.theater.nearDario,
        defeatedDario: LOCALE.OBJECTIVES.theater.defeatedDario,
        talked_dario: LOCALE.OBJECTIVES.theater.talked_dario,
    },
    naplesAlley: {
        initial: LOCALE.OBJECTIVES.naplesAlley.initial,
        nearBully: LOCALE.OBJECTIVES.naplesAlley.nearBully,
        nearElisa: LOCALE.OBJECTIVES.naplesAlley.nearElisa,
        talked_elisa: LOCALE.OBJECTIVES.naplesAlley.talked_elisa,
        defeatedBully: LOCALE.OBJECTIVES.naplesAlley.defeatedBully,
        afterAll: LOCALE.OBJECTIVES.naplesAlley.afterAll,
    },
    fatherHouse: {
        initial: LOCALE.OBJECTIVES.fatherHouse.initial,
        exploring: LOCALE.OBJECTIVES.fatherHouse.exploring,
        nearFather: LOCALE.OBJECTIVES.fatherHouse.nearFather,
        talked_father_shadow: LOCALE.OBJECTIVES.fatherHouse.talked_father_shadow,
        defeatedFather: LOCALE.OBJECTIVES.fatherHouse.defeatedFather,
    },
};

export const OBJECTIVE_TRIGGERS: Record<string, { map: string; objectiveKey: string }> = {
    tutorial_complete: { map: "apartment", objectiveKey: "afterTutorial" },
    near_door: { map: "apartment", objectiveKey: "nearDoor" },
    near_dario: { map: "theater", objectiveKey: "nearDario" },
    defeated_dario: { map: "theater", objectiveKey: "defeatedDario" },
    talked_dario: { map: "theater", objectiveKey: "talked_dario" },
    near_bully: { map: "naplesAlley", objectiveKey: "nearBully" },
    near_bully1: { map: "naplesAlley", objectiveKey: "nearBully" },
    near_elisa: { map: "naplesAlley", objectiveKey: "nearElisa" },
    talked_elisa: { map: "naplesAlley", objectiveKey: "talked_elisa" },
    defeated_bully1: { map: "naplesAlley", objectiveKey: "defeatedBully" },
    near_father_shadow: { map: "fatherHouse", objectiveKey: "nearFather" },
    talked_father_shadow: { map: "fatherHouse", objectiveKey: "talked_father_shadow" },
    defeated_father_shadow: { map: "fatherHouse", objectiveKey: "defeatedFather" },
};
