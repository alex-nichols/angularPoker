import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable'
import { v4 as uuid } from 'uuid'
import { Game } from '../models/game';
import { Player } from '../models/player';
import { DeckService } from './deck.service';
import { Card } from '../models/card';

@Injectable()
export class GameService {

  private gameStarted = false;
  private game: Game 
  
  constructor(private _deck: DeckService) { }

  public registerGame(playerName: string): Observable<Game> {

    const player: Player = {
      id: uuid(),
      hand: [],
      name: playerName,
      score: 0,
      avatarUrl: "http://avatars.jurko.net/pic/3232/",
      extendedData: {}
    }

    this.game = {
      id: uuid(),
      players: [player]
    }

    return Observable.of(this.game)
  }

  public playerNext(gameId: string): Observable<Game> {
    return this._deck.deal(5)
          .map(cards => {
            this.game.players[0].hand.concat(cards)
            return this.game
          })
  }

  public playerChooseCards(gameId:string, cards: Card[]) {
    return this._deck.deal(cards.length)
            .map(newCards=> {
              this.game.players[0].hand.filter(handCard => cards.find(discard=> discard === handCard))
              this.game.players[0].hand.concat(newCards)
              return this.game
            })
  }

  
}
