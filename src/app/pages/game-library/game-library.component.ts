import {Component, OnInit} from '@angular/core';
import {GameLibraryService} from '../../shared/services/game-library.service';
import {Observable} from 'rxjs';
import {BGGService} from '../../shared/services/bgg.service';
import {Thing} from '../../shared/models/game';

@Component({
  selector: 'app-game-library',
  templateUrl: './game-library.component.html',
  styleUrls: ['./game-library.component.scss'],
})
export class GameLibraryComponent implements OnInit {
  pageTitle = 'Ludothèque';

  games: Observable<Array<Thing>>;

  constructor(private gameLibraryService: GameLibraryService) {
  }

  ngOnInit() {
    this.games = this.gameLibraryService.getGames();
  }

}
