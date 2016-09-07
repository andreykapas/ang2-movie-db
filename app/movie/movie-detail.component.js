"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by andrey on 3.9.16.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var movie_1 = require('./movie');
var movies_list_service_1 = require("../movies-list/movies-list.service");
var MovieDetailComponent = (function () {
    function MovieDetailComponent(moviesListService, route) {
        this.moviesListService = moviesListService;
        this.route = route;
        this.movie = new movie_1.Movie();
    }
    MovieDetailComponent.prototype.ngOnInit = function () {
        var id = parseInt(this.route.snapshot.params['id'], 10);
        this.getMovie(id);
    };
    MovieDetailComponent.prototype.getMovie = function (id) {
        var _this = this;
        this.moviesListService.getMovie(id)
            .subscribe(function (movie) {
            var tempArr = [];
            for (var key in movie) {
                tempArr.push(movie[key]);
            }
            _this.movie.budget = parseInt(tempArr[3], 10);
            _this.movie.title = tempArr[9];
            _this.movie.overview = tempArr[10];
            _this.movie.poster = tempArr[12];
            _this.movie.release_date = new Date(tempArr[15]);
            _this.movie.vote_average = tempArr[23];
        });
    };
    MovieDetailComponent = __decorate([
        core_1.Component({
            selector: 'movie-detail',
            templateUrl: 'app/movie/movie-detail.component.html',
            providers: [
                movies_list_service_1.MoviesListService
            ]
        }), 
        __metadata('design:paramtypes', [movies_list_service_1.MoviesListService, router_1.ActivatedRoute])
    ], MovieDetailComponent);
    return MovieDetailComponent;
}());
exports.MovieDetailComponent = MovieDetailComponent;
//# sourceMappingURL=movie-detail.component.js.map