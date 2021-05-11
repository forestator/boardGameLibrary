import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Thing} from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameLibraryService {
  games: Array<Thing> = [];

  constructor() {
  }

  getGames(): Observable<Array<Thing>> {
    return of(this.games);
  }
}
