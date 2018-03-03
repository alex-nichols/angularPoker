import { PlayerHand } from "./player.hand";

export interface Game {
    wager: number,
    playerHand: PlayerHand,
    playerId: string
}
