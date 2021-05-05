import {Component, Input, OnInit} from '@angular/core';
import {Thing} from '../../models/game';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss'],
})
export class GameDetailsComponent implements OnInit {

  @Input() game: Thing;

  gameDescription: string;

  constructor() {
  }

  ngOnInit() {
    this.gameDescription = this.game.elements.find(el => el.name === 'description').elements[0].text;
  }

}
