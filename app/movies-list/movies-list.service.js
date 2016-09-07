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
var http_1 = require('@angular/http');
var api_key_1 = require("../shared/api-key");
var MoviesListService = (function () {
    function MoviesListService(http) {
        this.http = http;
        this.movieListUrl = 'http://api.themoviedb.org/3/genre/18/movies?api_key=' + api_key_1.APIKEY;
        this.movieByIdUrl = 'http://api.themoviedb.org/3/movie/';
        this.movieListByGenre = 'http://api.themoviedb.org/3/genre/';
    }
    MoviesListService.prototype.getMoviesList = function () {
        return this.http.get(this.movieListUrl)
            .map(function (response) { return response.json(); });
    };
    MoviesListService.prototype.getMovie = function (id) {
        return this.http.get(this.movieByIdUrl + id + '?api_key=' + api_key_1.APIKEY)
            .map(function (response) { return response.json(); });
    };
    MoviesListService.prototype.getMoviesListByGenre = function (id) {
        return this.http.get(this.movieListByGenre + id + '/movies?api_key=' + api_key_1.APIKEY)
            .map(function (response) { return response.json(); });
    };
    MoviesListService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MoviesListService);
    return MoviesListService;
}());
exports.MoviesListService = MoviesListService;
//# sourceMappingURL=movies-list.service.js.map