import { PlayerHand } from "./player.hand";
import { GameError } from "./game.error";

export enum GameSteps {
    New = "New",
    Loading = "Loading",
    Loaded = "Loaded",
    DiscardRequested = "Discard Requested",
    Complete = "Complete",
    Error = "Error"
}

export interface Game {
    wager: number
    playerHand: PlayerHand
    playerId: string
    error: GameError
    step: GameSteps
}
