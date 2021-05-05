import {Pipe, PipeTransform} from '@angular/core';
import {Observable} from 'rxjs';
import {BGGService} from '../services/bgg.service';
import {map} from 'rxjs/operators';
import {Thing} from '../models/game';

@Pipe({
  name: 'boardGameThumbnail'
})
export class BoardGameThumbnailPipe implements PipeTransform {

  constructor(private bggService: BGGService) {
  }

  transform(gameId: string): Observable<string> {
    return this.bggService.gameDetails(gameId).pipe(
      map((gameDetails: Thing) => {
        return gameDetails.elements.find(el => el.name === 'thumbnail').elements[0].text;
      })
    );
  }

}
