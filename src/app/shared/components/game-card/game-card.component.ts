import {Component, Input, OnInit} from '@angular/core';
import {Thing} from "../../models/game";
import {take} from "rxjs/operators";
import {BGGService} from "../../services/bgg.service";
import {GameLibraryService} from "../../services/game-library.service";

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
})
export class GameCardComponent implements OnInit {

  @Input() game: Thing;

  @Input() addButton: boolean;

  gameDetails: Thing;

  constructor(private bggService: BGGService, private gameLibraryService: GameLibraryService) {
  }

  ngOnInit() {
  }

  showGameDetails(gameId: string) {
    this.bggService.gameDetails(gameId).pipe(take(1)).subscribe(gameDetails => this.gameDetails = gameDetails);
  }

  addToLibrary(game: Thing) {
    const gameAdded = this.gameLibraryService.games.find(thing => thing.attributes.id === game.attributes.id);
    if (!gameAdded) {
      this.gameLibraryService.games.push(game);
    }
  }

}
