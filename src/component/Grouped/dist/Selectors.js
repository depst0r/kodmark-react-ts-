"use strict";
exports.__esModule = true;
exports.getPictures = exports.getGroupped = exports.getAll = void 0;
exports.getAll = function (state) {
    return state;
};
exports.getGroupped = function (state) {
    var grouppedPictureList = state.reduce(function (array, arg) {
        array[arg.tag] = array[arg.tag] || [];
        array[arg.tag].push(arg);
        return array;
    }, {});
    return grouppedPictureList;
};
exports.getPictures = function (state) { return function (isGroupped) {
    if (isGroupped)
        return exports.getGroupped(state);
    else
        return exports.getAll(state);
}; };
