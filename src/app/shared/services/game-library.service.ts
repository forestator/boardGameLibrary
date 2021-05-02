import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Game} from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameLibraryService {
  private MOCK_GAMES: Array<Game> = [];

  constructor() {
  }

  getGames(): Observable<Array<Game>> {
    return of(this.MOCK_GAMES);
  }
}
