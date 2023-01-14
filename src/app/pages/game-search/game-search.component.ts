import {Component, OnInit} from '@angular/core';
import {BGGService} from '../../shared/services/bgg.service';
import {Observable} from 'rxjs';
import {BoardGame, Thing} from '../../shared/models/game';
import {ThingToBoardgame} from '../../shared/models/ThingToBoardgame';

@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.scss'],
})
export class GameSearchComponent implements OnInit {
  pageTitle = 'Ajouter un jeu à ma librairie';
  search = 'Takenoko';
  foundGames: Observable<Array<Thing>>;

  constructor(private bggService: BGGService) {
  }

  ngOnInit() {
    this.doSearch();
  }

  doSearch() {
    if (this.search.length > 3) {
      this.foundGames = this.bggService.searchGame(this.search);
    }
  }

  convert(game: Thing): BoardGame {
    return ThingToBoardgame.convertGameDetailsThingToBoardGame(game);
  }
}
