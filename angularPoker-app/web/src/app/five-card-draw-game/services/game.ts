import { Injectable } from '@angular/core';
import { Game, GameSteps } from '../models/game';
import { Observable } from 'rxjs/Observable';
import { DeckService } from '../../deck/services/deck.service';
import { Card } from '../../deck/models/card';
import { mergeMap } from 'rxjs/operator/mergeMap';
import { flatMap, mapTo, map, switchMap } from 'rxjs/operators';
import { concat } from 'rxjs/operator/concat';
import { PlayerCard } from '../models/player.card';

import * as pokerChecker from 'poker-hands';
import { HandTypes } from '../models/hand.types';
import { PlayerHand } from '../models/player.hand';
import { DefaultPaytable } from '../models/paytable';




@Injectable()
export class GameService {

    private currentGame: Game

    constructor(private deckService: DeckService) { }

    public createGame(playerId: string, wager: number): Observable<Game> {

        return this.deckService.LoadDeck()
                    .switchMap(deck => this.deckService.deal(5))
                    .map<Card[], Game>((playerCards, idx) => {

                            const newCards = playerCards.map<PlayerCard>(card => ({...card, onHold: false}))

                            this.currentGame = {
                                gameId: 'Game',
                                wager,
                                playerId,
                                paytable: DefaultPaytable,
                                handValue: this.determineHand(newCards),
                                error: null,
                                step: GameSteps.Loaded,
                                playerHand: newCards
                            }

                            return this.currentGame
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

                   this.currentGame = game
                   return {...game, playerHand: newHand, handValue: this.determineHand(newHand), step: GameSteps.Complete}
               })
    }

    hashHand = (cards: Card[]) => {
        const values = cards.map(card => `${card.rank}${card.suit}`)
        return values.join(' ')
    }


    private determineHand(hand: PlayerHand): HandTypes {
        const hash = this.hashHand(hand)

        let value: HandTypes = pokerChecker.getHandStrength(hash)

        if (value === HandTypes.Pair) {

            const pairRank = pokerChecker.hasPair(hash)
            console.log(pairRank)
            if (pairRank !== 'J' && pairRank !== 'Q' && pairRank !== 'K') {
                value = HandTypes.highestCard
            }
        }

        return value
    }
}
