import {Component, OnInit} from '@angular/core';
import {BGGService} from '../../shared/services/bgg.service';
import {Observable} from 'rxjs';
import {Thing} from '../../shared/models/game';
import {take} from "rxjs/operators";
import {GameLibraryService} from "../../shared/services/game-library.service";

@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.scss'],
})
export class GameSearchComponent implements OnInit {
  pageTitle = 'Ajouter un jeu à ma librairie';
  search = 'Takenoko';
  foundGames: Observable<Array<Thing>>;

  constructor(private bggService: BGGService, private gameLibraryService: GameLibraryService) {
  }

  ngOnInit() {
    // todo remove
    this.doSearch();
  }

  doSearch() {
    if (this.search.length > 3) {
      this.foundGames = this.bggService.searchGame(this.search);
    }
  }

}
