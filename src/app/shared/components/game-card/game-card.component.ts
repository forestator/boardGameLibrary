import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Thing} from '../../models/game';
import {take} from 'rxjs/operators';
import {BGGService} from '../../services/bgg.service';
import {GameLibraryService} from '../../services/game-library.service';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
})
export class GameCardComponent implements OnInit {

  @Input() game: Thing;
  @Input() addButton: boolean;

  @Output() addToLibraryEvent = new EventEmitter<Thing>();
  @Output() removeFromLibraryEvent = new EventEmitter<string>();

  gameDetails: Thing;

  constructor(private bggService: BGGService) {
  }

  ngOnInit() {
  }

  showGameDetails(gameId: string) {
    this.bggService.gameDetails(gameId).pipe(take(1)).subscribe(gameDetails => this.gameDetails = gameDetails);
  }

  addToLibrary(game: Thing) {
    this.addToLibraryEvent.next(game);
  }

  removeFromLibrary(game: Thing) {
    this.removeFromLibraryEvent.next(game.attributes.id);
  }
}
