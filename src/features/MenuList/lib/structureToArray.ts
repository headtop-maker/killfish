import {TStructure, TStructureItem} from "../../../shared/models/types";

export const structureToArray = (structure: TStructure): TStructureItem[] => {
    const result: TStructureItem[] = []
    for (const key in structure) {
        result.push(structure[key])
    }
    return result
}
