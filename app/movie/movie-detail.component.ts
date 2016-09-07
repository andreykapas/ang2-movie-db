/**
 * Created by andrey on 3.9.16.
 */
import {Component, OnInit}    from '@angular/core';
import {ActivatedRoute}       from '@angular/router';

import {Movie}                from './movie';
import {MoviesListService}    from "../movies-list/movies-list.service";

@Component({
  selector: 'movie-detail',
  templateUrl: 'app/movie/movie-detail.component.html',
  providers: [
    MoviesListService
  ]
})
export class MovieDetailComponent implements OnInit {
  movie: Movie = new Movie();

  constructor(
    private moviesListService: MoviesListService,
    private route: ActivatedRoute) {}


  ngOnInit() {
    let id = parseInt(this.route.snapshot.params['id'], 10);
    this.getMovie(id);
  }

  getMovie(id: number) {
    this.moviesListService.getMovie(id)
      .subscribe(movie => {
        let tempArr: any[] = [];
        for (let key in movie) {
          tempArr.push(movie[key]);
        }
        this.movie.budget = parseInt(tempArr[3], 10);
        this.movie.title = tempArr[9];
        this.movie.overview = tempArr[10];
        this.movie.poster = tempArr[12];
        this.movie.release_date = new Date(tempArr[15]);
        this.movie.vote_average = tempArr[23];
      });
  }
}
