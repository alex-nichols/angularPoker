import { Injectable } from '@angular/core';
import { Game } from '../models/game';
import { Observable } from 'rxjs/Observable';
import { DeckService } from '../../deck/services/deck.service';
import { Card } from '../../deck/models/card';
import { mergeMap } from 'rxjs/operator/mergeMap';
import { flatMap, mapTo, map, switchMap } from 'rxjs/operators';
import { concat } from 'rxjs/operator/concat';
import { PlayerCard } from '../models/player.card';

@Injectable()
export class GameService {
    private deck : Card[] = []

    constructor(private deckService: DeckService) { }
    public createGame(playerId: string, wager: number): Observable<Game> {
        const temp: Game = { playerHand: [],
                     wager,
                     playerId }

        return this.deckService.LoadDeck()
                    .switchMap(deck => this.deckService.deal(5))
                    .map<Card[], Game>((playerCards, idx) => {
                            temp.playerHand = playerCards.map<PlayerCard>(card => ({...card, onHold: false}))
                            return temp
                    })
    }
}
