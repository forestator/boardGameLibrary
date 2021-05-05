import {Component, OnInit} from '@angular/core';
import {BGGService} from '../../shared/services/bgg.service';
import {Observable} from 'rxjs';
import {Thing} from '../../shared/models/game';
import {take} from "rxjs/operators";

@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.scss'],
})
export class GameSearchComponent implements OnInit {
  pageTitle = 'Ajouter un jeu à ma librairie';
  search: string = 'Takenoko';
  foundGames: Observable<Array<Thing>>;
  gameDetails: Thing;

  constructor(private bggService: BGGService) {
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

  showGameDetails(gameId: string) {
    this.bggService.gameDetails(gameId).pipe(take(1)).subscribe(gameDetails => this.gameDetails = gameDetails);
  }
}
