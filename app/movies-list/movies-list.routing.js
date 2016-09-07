"use strict";
var router_1 = require('@angular/router');
var movies_list_component_1 = require('./movies-list.component');
var movie_detail_component_1 = require('../movie/movie-detail.component');
var moviesRoutes = [
    { path: 'movies-list', component: movies_list_component_1.MoviesListComponent },
    { path: 'genre/:id', component: movies_list_component_1.MoviesListComponent },
    { path: 'movie/:id', component: movie_detail_component_1.MovieDetailComponent }
];
exports.moviesRouting = router_1.RouterModule.forChild(moviesRoutes);
//# sourceMappingURL=movies-list.routing.js.map