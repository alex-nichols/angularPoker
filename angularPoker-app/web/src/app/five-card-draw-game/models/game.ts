import { PlayerHand } from "./player.hand";
import { GameError } from "./game.error";

export interface Game {
    wager: number,
    playerHand: PlayerHand,
    playerId: string,
    gameRequested: boolean
    loaded: boolean
    error: GameError
}
