export interface Paytable {
    creditMultipliers: [number, number, number, number, number]
    handMultipliers: [number, number, number, number, number, number, number, number, number]
}

export const DefaultPaytable: Paytable = {
    creditMultipliers: [1, 2, 3, 4, 5],
    handMultipliers: [250, 25, 15, 9, 5, 3, 2, 2, 1]
}
