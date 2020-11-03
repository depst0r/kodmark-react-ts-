"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var input_1 = require("./Components/input/input");
var list_1 = require("./Components/list/list");
require("./App.css");
var App = function () {
    var _a = react_1.useState([]), todos = _a[0], setTodos = _a[1];
    var addHandler = function (title) {
        var newTodo = {
            title: title,
            completed: true
        };
        setTodos(__spreadArrays([newTodo], todos));
    };
    return (react_1["default"].createElement("div", { className: "wrapper" },
        react_1["default"].createElement(input_1.EntryFiled, { onAdd: addHandler }),
        react_1["default"].createElement(list_1.List, { todos: todos })));
};
exports["default"] = App;
