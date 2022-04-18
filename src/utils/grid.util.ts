import { TGrid } from "../components/Field/types"

export const generateGridData = (size: number) => {
    let gridData: TGrid = []
    for(let x = 1; x<= size; x++) {
        for(let y = 1; y<= size; y++) {
            gridData.push({x, y})
        }
    }

    return gridData
}