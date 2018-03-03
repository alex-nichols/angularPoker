import { Injectable } from '@angular/core';
import { Game } from '../models/game';
import { Observable } from 'rxjs/Observable';
import { DeckService } from '../../deck/services/deck.service';
import { Card } from '../../deck/models/card';
import { mergeMap } from 'rxjs/operator/mergeMap';
import { flatMap, map } from 'rxjs/operators';
import { concat } from 'rxjs/operator/concat';
import { switchMap } from 'rxjs/operator/switchMap';

@Injectable()
export class GameService {
    private deck : Card[] = []

    constructor(private deckService: DeckService) { }
    public createGame(playerId: string, wager: number): Observable<Game> {

        return this.deckService.LoadDeck()
                    .switchMap(deck => this.deckService.deal(5))
                    .map(playerCards => ({playerCards, wager, playerId}) )
    }
}
