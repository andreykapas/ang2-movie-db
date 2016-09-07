"use strict";
/**
 * Created by andrey on 3.9.16.
 */
var Movie = (function () {
    function Movie(id, title, poster, overview, budget, release_date, vote_average) {
        if (id === void 0) { id = 0; }
        if (title === void 0) { title = ''; }
        if (poster === void 0) { poster = ''; }
        if (overview === void 0) { overview = ''; }
        if (budget === void 0) { budget = 0; }
        if (release_date === void 0) { release_date = new Date(); }
        if (vote_average === void 0) { vote_average = ''; }
        this.id = id;
        this.title = title;
        this.poster = poster;
        this.overview = overview;
        this.budget = budget;
        this.release_date = release_date;
        this.vote_average = vote_average;
    }
    return Movie;
}());
exports.Movie = Movie;
//# sourceMappingURL=movie.js.map