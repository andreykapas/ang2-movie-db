"use strict";
/**
 * Created by andrey on 6.9.16.
 */
var Genre = (function () {
    function Genre(id, name) {
        if (id === void 0) { id = 0; }
        if (name === void 0) { name = ''; }
        this.id = id;
        this.name = name;
    }
    return Genre;
}());
exports.Genre = Genre;
//# sourceMappingURL=genre.js.map