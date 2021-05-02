import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import * as convert from 'xml-js';
import {Game} from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class BGGService {
  private bggUrl = 'https://www.boardgamegeek.com/xmlapi2';

  constructor(private http: HttpClient) {
  }

  send(url: string): Observable<Array<Game>> {
    return this.http.get(url, {responseType: 'text'}).pipe(
      map(response => {
        return convert.xml2json(response, {compact: false, spaces: 4});
      }),
      map(jsonrep => {
        const json = JSON.parse(jsonrep);
        // tslint:disable-next-line:no-string-literal
        return json['elements'];
      })
    );
  }

  search(search: string): Observable<Array<Game>> {
    const url = `${this.bggUrl}/search?query=${search}&exact=1&type=boardgame`;
    return this.send(url);
  }
}
