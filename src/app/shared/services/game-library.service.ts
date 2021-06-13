import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Thing} from '../models/game';
import {AutentificationService} from './autentification.service';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GameLibraryService {

  constructor(
    private afs: AngularFirestore,
    private auth: AutentificationService,
  ) {
  }

  getGames(): Observable<Array<Thing>> {
    return this.afs.collection<string>(`${this.auth.userData.uid}`).doc(`gamesLibrary`).collection<Thing>('games').valueChanges();
  }

  addGameToLibrary(game: Thing) {
    return new Promise<any>((resolve, reject) => {
      this.afs.collection<string>(`${this.auth.userData.uid}`)
        .doc(`gamesLibrary`)
        .collection<Thing>('games')
        .doc(`${game.attributes.id}`)
        .set(game)
        .then(
          (res) => {
            resolve(res);
          },
          err => reject(err)
        );
    });
  }

  removeFromLibrary(gameId: string) {
    return new Promise<any>((resolve, reject) => {
      this.afs.collection<string>(`${this.auth.userData.uid}`)
        .doc(`gamesLibrary`)
        .collection<Thing>('games')
        .doc(gameId)
        .delete()
        .then(
          (res) => {
            resolve(res);
          },
          err => reject(err)
        );
    });
  }
}
