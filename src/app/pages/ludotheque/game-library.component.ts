import {Component, OnInit} from '@angular/core';
import {GameLibraryService} from '../../shared/services/game-library.service';
import {Game} from '../../shared/models/game';
import {Observable} from 'rxjs';
import {BGGService} from '../../shared/services/bgg.service';

@Component({
  selector: 'app-game-library',
  templateUrl: './game-library.component.html',
  styleUrls: ['./game-library.component.scss'],
})
export class GameLibraryComponent implements OnInit {
  pageTitle = 'Ludothèque';

  games: Observable<Array<Game>>;

  constructor(private gameLibraryService: GameLibraryService, private bggService: BGGService) {
  }

  ngOnInit() {
    this.games = this.gameLibraryService.getGames();
    this.bggService.search('last+one+standing').subscribe(res => {
      console.log(res);
    });
  }

}
