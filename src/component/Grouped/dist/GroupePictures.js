"use strict";
exports.__esModule = true;
exports.GroupePictures = void 0;
var react_1 = require("react");
exports.GroupePictures = function (_a) {
    var todos = _a.todos;
    var _b = react_1.useState(), grouped = _b[0], setGrouped = _b[1];
    var click = function () {
        var grouppedPictureList = todos.reduce(function (array, arg) {
            array[arg.tag] = array[arg.tag] || [];
            array[arg.tag].push(arg);
            return array;
        }, {});
        setGrouped(grouppedPictureList);
        console.log(grouped);
    };
    return react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("button", { onClick: click }, "Grouped")));
};
