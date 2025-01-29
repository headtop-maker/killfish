import {TStructure, TStructureItem} from "../../../shared/models/types";

export const structureToArray = (structure: TStructure): TStructureItem[] => {
    const result: TStructureItem[] = []
    for (const key in structure) {
        const current = structure[key]
        if (current.childs.length > 0) {
            result.push(structure[key])
        }

    }
    return result
}
