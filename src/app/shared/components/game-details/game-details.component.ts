import {Component, Input, OnInit} from '@angular/core';
import {BoardGame} from '../../models/game';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss'],
})
export class GameDetailsComponent implements OnInit {

  @Input() game: BoardGame;

  constructor() {
  }

  ngOnInit() {
  }

}
