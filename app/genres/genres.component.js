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
 * Created by andrey on 6.9.16.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var genres_service_1 = require('./genres.service');
var GenresComponent = (function () {
    function GenresComponent(genresService, route, router) {
        this.genresService = genresService;
        this.route = route;
        this.router = router;
        this.status = { isopen: false };
        this.genres = [];
    }
    GenresComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route
            .params
            .subscribe(function (params) {
            _this.selectedId = +params['id'];
            _this.getGenresList();
        });
    };
    GenresComponent.prototype.getGenresList = function () {
        var _this = this;
        this.genresService.getGenresList()
            .subscribe(function (genresList) {
            var tempArr = [];
            for (var key in genresList) {
                tempArr.push(genresList[key]);
            }
            _this.genres = tempArr[0];
            //console.log(this.genres);
        });
    };
    GenresComponent.prototype.isSelected = function (genre) {
        return genre.id === this.selectedId;
    };
    GenresComponent.prototype.onSelect = function (genre) {
        this.router.navigate(['/genre', genre.id]);
    };
    GenresComponent = __decorate([
        core_1.Component({
            selector: 'genres-list',
            templateUrl: 'app/genres/genres.component.html',
            providers: [genres_service_1.GenresService]
        }), 
        __metadata('design:paramtypes', [genres_service_1.GenresService, router_1.ActivatedRoute, router_1.Router])
    ], GenresComponent);
    return GenresComponent;
}());
exports.GenresComponent = GenresComponent;
//# sourceMappingURL=genres.component.js.map