import {Component, OnInit} from '@angular/core';
import {GameLibraryService} from '../../shared/services/game-library.service';
import {Observable} from 'rxjs';
import {BoardGame, Thing} from '../../shared/models/game';
import {AutentificationService} from '../../shared/services/autentification.service';
import {ThingToBoardgame} from '../../shared/models/ThingToBoardgame';

@Component({
  selector: 'app-game-library',
  templateUrl: './game-library.component.html',
  styleUrls: ['./game-library.component.scss'],
})
export class GameLibraryComponent implements OnInit {
  pageTitle = 'Ludothèque';

  games: Observable<Array<Thing>>;

  constructor(private gameLibraryService: GameLibraryService, private auth: AutentificationService) {
  }

  ngOnInit() {
    if (this.auth.userData) {
      this.games = this.gameLibraryService.getGames();
    } else {
      // todo remove this
      setTimeout(() => {
        this.games = this.gameLibraryService.getGames();
      }, 1000);
    }
  }

  removeFromLibrary(gameId: string) {
    console.log(gameId);
    this.gameLibraryService.removeFromLibrary(gameId).then(res => {
      console.log(res);
      // todo toaster
    }, err => {
      console.error(err);
    });
  }

  convert(game: Thing): BoardGame {
    return ThingToBoardgame.convertGameDetailsThingToBoardGame(game);
  }
}
