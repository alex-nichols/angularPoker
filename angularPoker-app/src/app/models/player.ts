import { Card } from './card'

export interface Player {
    id: string,
    name: string,
    avatarUrl: string,
    hand: Card[],
    score: number,
    extendedData: any
}
