"use strict";
exports.__esModule = true;
exports.getPictures = exports.getGrouped = exports.getAll = void 0;
exports.getAll = function (_a) {
    var todos = _a.todos;
    return todos;
};
exports.getGrouped = function (state) {
    var grouppedPictureList = state.reduce(function (array, arg) {
        array[arg.tag] = array[arg.tag] || [];
        array[arg.tag].push(arg);
        return array;
    }, {});
    return grouppedPictureList;
};
exports.getPictures = function (todos) { return function (isGroupped) {
    if (isGroupped) {
        return exports.getGrouped(todos);
    }
    else {
        return exports.getAll(todos);
    }
}; };
