import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import {HttpModule}           from '@angular/http';

import {Ng2BootstrapModule}   from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent }       from './app.component';
import {routing}              from './app.routing';
import {MovieDetailComponent} from './movie/movie-detail.component';
import {MoviesListComponent}  from "./movies-list/movies-list.component";
import {moviesRouting}        from './movies-list/movies-list.routing';
import {GenresComponent}      from './genres/genres.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    moviesRouting,
    Ng2BootstrapModule
  ],
  declarations: [
    AppComponent,
    MovieDetailComponent,
    MoviesListComponent,
    GenresComponent
  ],
  providers: [
    //MoviesListService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
