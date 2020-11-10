"use strict";
exports.__esModule = true;
exports.Todo = void 0;
var react_1 = require("react");
var RenderList_1 = require("./RenderList");
var Selectors_1 = require("./Selectors");
exports.Todo = function (_a) {
    var todos = _a.todos;
    var _b = react_1.useState(false), isGroupped = _b[0], setIsGroupped = _b[1];
    var clickTest = function (event) {
        console.log(todos);
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("input", { type: "button", value: "Click" }),
        isGroupped && todos.map(function (res) {
            Selectors_1.getGrouped(todos);
            return (react_1["default"].createElement("div", null,
                react_1["default"].createElement("h2", null, res.tag),
                react_1["default"].createElement(RenderList_1.RenderList, { todos: todos })));
        }),
        !isGroupped && react_1["default"].createElement(RenderList_1.RenderList, { todos: todos })));
};
