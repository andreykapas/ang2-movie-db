/**
 * Created by andrey on 4.9.16.
 */
import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MoviesListComponent}  from './movies-list.component';
import {MovieDetailComponent} from '../movie/movie-detail.component';

const moviesRoutes: Routes = [
  {path: 'movies-list', component: MoviesListComponent},
  {path: 'genre/:id', component: MoviesListComponent},
  {path: 'movie/:id', component: MovieDetailComponent}
];

export const moviesRouting: ModuleWithProviders = RouterModule.forChild(moviesRoutes);
