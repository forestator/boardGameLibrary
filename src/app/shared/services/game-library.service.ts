import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Game} from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameLibraryService {
  private MOCK_GAMES: Array<Game> = [
    {
      id: '1',
      name: 'Test1',
      names: ['Bonsoir'],
      minPlayers: 2,
      maxPlayers: 4,
      minPlaytime: 30,
      maxPlaytime: 90,
      minAge: 10,
      description: 'Test Description',
      descriptionPreview: 'Description Preview',
      thumbUrl: 'testUrl',
      imageUrl: '',
      url: '',
      mechanics: [{id: ''}],
      categories: [{id: ''}],
    },
    {
      id: '2',
      name: 'Test2',
      names: ['Bonsoir'],
      minPlayers: 2,
      maxPlayers: 4,
      minPlaytime: 30,
      maxPlaytime: 90,
      minAge: 10,
      description: 'Test Description',
      descriptionPreview: 'Description Preview',
      thumbUrl: 'testUrl',
      imageUrl: '',
      url: '',
      mechanics: [{id: ''}],
      categories: [{id: ''}],
    },
    {
      id: '3',
      name: 'Test3',
      names: ['Bonsoir'],
      minPlayers: 2,
      maxPlayers: 4,
      minPlaytime: 30,
      maxPlaytime: 90,
      minAge: 10,
      description: 'Test Description',
      descriptionPreview: 'Description Preview',
      thumbUrl: 'testUrl',
      imageUrl: '',
      url: '',
      mechanics: [{id: ''}],
      categories: [{id: ''}],
    }
  ];

  constructor() {
  }

  getGames(): Observable<Array<Game>> {
    return of(this.MOCK_GAMES);
  }
}
