import { Card } from '../../deck/models/card';

export interface Game {
    wager: number,
    playerCards: Card[],
    playerId: string
}
