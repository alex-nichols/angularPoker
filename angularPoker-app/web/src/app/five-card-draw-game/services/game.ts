import { Injectable } from '@angular/core';
import { Game, GameSteps } from '../models/game';
import { Observable } from 'rxjs/Observable';
import { DeckService } from '../../deck/services/deck.service';
import { Card } from '../../deck/models/card';
import { mergeMap } from 'rxjs/operator/mergeMap';
import { flatMap, mapTo, map, switchMap } from 'rxjs/operators';
import { concat } from 'rxjs/operator/concat';
import { PlayerCard } from '../models/player.card';

@Injectable()
export class GameService {
    constructor(private deckService: DeckService) { }
    public createGame(playerId: string, wager: number): Observable<Game> {

        return this.deckService.LoadDeck()
                    .switchMap(deck => this.deckService.deal(5))
                    .map<Card[], Game>((playerCards, idx) => {
                            return {
                                wager,
                                playerId,
                                error: null,
                                step: GameSteps.Loaded,
                                playerHand: playerCards.map<PlayerCard>(card => ({...card, onHold: false}))
                            }
                    })
    }

    public discardCards(game: Game): Observable<Game> {
        const numberToRequest = game.playerHand.filter((card) => !card.onHold).length

        return this.deckService.deal(numberToRequest)
               .map<Card[], Game>((cards: Card[]) => {

                    const newHand: PlayerCard[] = []
                   for (const card of game.playerHand) {
                       newHand.push(card.onHold ? card : {...cards.pop(), onHold: false})
                   }

                   return {...game, playerHand: newHand, step: GameSteps.Complete}
               })
    }
}
