import {Injectable} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {Thing} from '../models/game';
import {AngularFireDatabase} from '@angular/fire/database';
import {AutentificationService} from './autentification.service';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GameLibraryService {
  games: Subject<Array<Thing>> = new Subject<Array<Thing>>();

  constructor(
    private afs: AngularFirestore,
    private auth: AutentificationService,
  ) {
  }

  getGames(): Observable<Array<Thing>> {
    if (this.auth.userData) {
      return this.afs.collection<string>(`${this.auth.userData.uid}`).doc(`gamesLibrary`).collection<Thing>('games').valueChanges();
    }
  }

  addGameToLibrary(game: Thing) {
    return new Promise<any>((resolve, reject) => {
      this.afs.collection<string>(`${this.auth.userData.uid}`).doc(`gamesLibrary`).collection<Thing>('games').add(game)
        .then(
          (res) => {
            resolve(res);
          },
          err => reject(err)
        );
    });
  }
}
