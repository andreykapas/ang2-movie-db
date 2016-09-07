/**
 * Created by andrey on 6.9.16.
 */
import {Injectable}     from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

import {APIKEY}         from '../shared/api-key';

@Injectable()
export class GenresService {
  constructor(private http: Http) {}

  private genresListUrl = 'http://api.themoviedb.org/3/genre/movie/list?api_key=' + APIKEY;

  getGenresList(): Observable<JSON> {
    return this.http.get(this.genresListUrl)
      .map((response: Response) => response.json());
  }
}
