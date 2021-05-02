import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BGGService {
  private bggUrl = 'https://www.boardgamegeek.com/xmlapi2';

  constructor(private http: HttpClient) {
  }

  send(url: string): Observable<any> {
    return this.http.get(url,
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'text/xml')
          .append('Access-Control-Allow-Methods', 'GET')
          .append('Access-Control-Allow-Origin', '*')
          .append('Access-Control-Allow-Headers', 'Access-Contr ol-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method'),
        responseType: 'text'
      })
      .pipe(
        map(res => {
          console.log(res);
          return res;
        })
      );
  }

  search(search: string): Observable<any> {
    const url = `${this.bggUrl}/search?search=${search}`;
    return this.send(url);
  }
}
