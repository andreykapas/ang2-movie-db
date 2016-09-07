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
 * Created by andrey on 4.9.16.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var movies_list_service_1 = require('./movies-list.service');
var genres_service_1 = require("../genres/genres.service");
var MoviesListComponent = (function () {
    function MoviesListComponent(moviesListService, genresService, route, router) {
        this.moviesListService = moviesListService;
        this.genresService = genresService;
        this.route = route;
        this.router = router;
        this.movies = [];
    }
    MoviesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route
            .params
            .subscribe(function (params) {
            _this.selectedId = +params['id'];
            _this.getGenresList();
            _this.getMoviesListByGenre(_this.selectedId || 18);
        });
    };
    MoviesListComponent.prototype.getMovies = function () {
        var _this = this;
        this.moviesListService.getMoviesList()
            .subscribe(function (moviesList) {
            var tempArr = [];
            for (var key in moviesList) {
                tempArr.push(moviesList[key]);
            }
            _this.movies = tempArr[2];
        });
    };
    MoviesListComponent.prototype.getMoviesListByGenre = function (id) {
        var _this = this;
        if (id === void 0) { id = 18; }
        this.moviesListService.getMoviesListByGenre(id)
            .subscribe(function (moviesList) {
            var tempArr = [];
            for (var key in moviesList) {
                tempArr.push(moviesList[key]);
            }
            _this.movies = tempArr[2];
            //console.log(this.movies);
        });
    };
    MoviesListComponent.prototype.getGenresList = function () {
        var _this = this;
        this.genresService.getGenresList()
            .subscribe(function (genresList) {
            var tempArr = [];
            for (var key in genresList) {
                tempArr.push(genresList[key]);
            }
            _this.genresList = tempArr[0];
            //console.log(this.genresList);
        });
    };
    MoviesListComponent.prototype.isSelected = function (movie) {
        return movie.id === this.selectedId;
    };
    MoviesListComponent.prototype.onSelect = function (movie) {
        this.router.navigate(['/movie', movie.id]);
    };
    MoviesListComponent = __decorate([
        core_1.Component({
            selector: 'movies-list',
            templateUrl: 'app/movies-list/movies-list.component.html',
            providers: [
                movies_list_service_1.MoviesListService,
                genres_service_1.GenresService
            ]
        }), 
        __metadata('design:paramtypes', [movies_list_service_1.MoviesListService, genres_service_1.GenresService, router_1.ActivatedRoute, router_1.Router])
    ], MoviesListComponent);
    return MoviesListComponent;
}());
exports.MoviesListComponent = MoviesListComponent;
//# sourceMappingURL=movies-list.component.js.map