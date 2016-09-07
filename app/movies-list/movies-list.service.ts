/**
 * Created by andrey on 4.9.16.
 */
import {Injectable}     from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

import {APIKEY}         from "../shared/api-key";

@Injectable()
export class MoviesListService {
  constructor(private http: Http) {}

  private movieListUrl = 'http://api.themoviedb.org/3/genre/18/movies?api_key=' + APIKEY;
  private movieByIdUrl = 'http://api.themoviedb.org/3/movie/';
  private movieListByGenre = 'http://api.themoviedb.org/3/genre/';

  getMoviesList(): Observable<JSON> {
    return this.http.get(this.movieListUrl)
      .map((response: Response) => response.json());
  }

  getMovie(id: number | string): Observable<JSON> {
    return this.http.get(this.movieByIdUrl + id + '?api_key=' + APIKEY)
      .map((response: Response) => response.json());
  }

  getMoviesListByGenre(id: number | string): Observable<JSON> {
    return this.http.get(this.movieListByGenre + id + '/movies?api_key=' + APIKEY)
      .map((response: Response) => response.json());
  }

  /*getTrailer(id: number| string): Observable<any> {
    //TODO
  }*/
}
