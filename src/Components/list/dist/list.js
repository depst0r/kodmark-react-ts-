"use strict";
exports.__esModule = true;
exports.string = exports.List = void 0;
var react_1 = require("react");
exports.string = function (_a) {
    var todos = _a.todos;
    return ({
        todos: todos, : .map(function (todo) {
            return (react_1["default"].createElement("ul", null,
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement("img", { src: todo.data.url, alt: "" }))));
        })
    });
};
