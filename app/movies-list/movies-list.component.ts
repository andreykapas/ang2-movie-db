/**
 * Created by andrey on 4.9.16.
 */
import {Component, OnInit}      from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription}           from 'rxjs/Subscription';

import {Movie}                  from '../movie/movie';
import {MoviesListService}      from './movies-list.service';
import {GenresService}          from "../genres/genres.service";

@Component({
  selector: 'movies-list',
  templateUrl: 'app/movies-list/movies-list.component.html',
  providers: [
    MoviesListService,
    GenresService
  ]
})
export class MoviesListComponent implements OnInit {
  movies: Movie[] = [];
  genresList: any;

  private selectedId: number;
  private sub: Subscription;

  constructor(
    private moviesListService: MoviesListService,
    private genresService: GenresService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.sub = this.route
      .params
      .subscribe(params => {
        this.selectedId = +params['id'];
        this.getGenresList();
        this.getMoviesListByGenre(this.selectedId || 18);
      });
  }

  getMovies() {
    this.moviesListService.getMoviesList()
      .subscribe(moviesList => {
        let tempArr: any[] = [];
        for (let key in moviesList) {
          tempArr.push(moviesList[key]);
        }
        this.movies = tempArr[2];
      });
  }

  getMoviesListByGenre(id: number = 18) {
    this.moviesListService.getMoviesListByGenre(id)
      .subscribe(moviesList => {
        let tempArr: any[] = [];
        for (let key in moviesList) {
          tempArr.push(moviesList[key]);
        }
        this.movies = tempArr[2];
        //console.log(this.movies);
      });
  }

  getGenresList() {
    this.genresService.getGenresList()
      .subscribe(genresList => {
        let tempArr: any[] = [];
        for (let key in genresList) {
          tempArr.push(genresList[key]);
        }
        this.genresList = tempArr[0];
        //console.log(this.genresList);
      });
  }

  isSelected(movie: Movie) {
    return movie.id === this.selectedId;
  }

  onSelect(movie: Movie) {
    this.router.navigate(['/movie', movie.id]);
  }
}

