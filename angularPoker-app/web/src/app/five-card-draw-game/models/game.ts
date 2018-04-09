import { PlayerHand } from "./player.hand";
import { GameError } from "./game.error";
import { HandTypes } from "./hand.types";
import { Paytable } from "./paytable";

export enum GameSteps {
    New = "New",
    Loading = "Loading",
    Loaded = "Loaded",
    DiscardRequested = "Discard Requested",
    Complete = "Complete",
    Error = "Error"
}

export interface Game {
    gameId: string
    wager: number
    playerHand: PlayerHand
    handValue: HandTypes
    playerId: string
    error: GameError
    step: GameSteps
    paytable: Paytable
}
