import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BoardGame, Thing} from '../../models/game';
import {take} from 'rxjs/operators';
import {BGGService} from '../../services/bgg.service';

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

  gameDetails: BoardGame;
  showDetails = false;

  constructor(private bggService: BGGService) {
  }

  ngOnInit() {
    this.bggService.gameDetails(this.game.attributes.id).pipe(take(1)).subscribe(gameDetails => this.gameDetails = gameDetails);
  }
}
