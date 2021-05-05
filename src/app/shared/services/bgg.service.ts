import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, mergeMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import * as convert from 'xml-js';
import {Thing} from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class BGGService {
  private bggUrl = 'https://www.boardgamegeek.com/xmlapi2';

  constructor(private http: HttpClient) {
  }

  send(url: string): Observable<Array<Thing>> {
    return this.http.get(url, {responseType: 'text'}).pipe(
      map(response => {
        return convert.xml2json(response, {compact: false, spaces: 4});
      }),
      map(jsonrep => {
        const json = JSON.parse(jsonrep);
        console.log(json['elements'][0]['elements']);
        // tslint:disable-next-line:no-string-literal
        return json['elements'][0]['elements'];
      })
    );
  }

  searchGame(search: string): Observable<Array<Thing>> {
    const url = `${this.bggUrl}/search?query=${search}&type=boardgame`;
    return this.send(url);
  }

  gameDetails(gameId: string): Observable<Thing> {
    const url = `${this.bggUrl}/thing?id=${gameId}`;
    return this.send(url).pipe(map(rep => rep[0]));
  }
}
