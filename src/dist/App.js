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
require("./App.css");
var TodoForm_1 = require("./component/TodoForm");
var TodoList_1 = require("./component/TodoList");
var GroupTags_1 = require("./component/GroupTags");
var Todo_1 = require("./component/Todo");
var App = function () {
    var _a = react_1.useState([]), todos = _a[0], setTodos = _a[1];
    var addHandler = function (url, tag) {
        var newTodo = {
            image_original_url: url,
            id: Date.now(),
            tag: tag
        };
        // setTodos([newTodo, ...todos])
        setTodos(function (prev) { return __spreadArrays([newTodo], prev); });
        console.log(todos);
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "wrapper" },
            react_1["default"].createElement(Todo_1.Todo, { grouped: todos }),
            react_1["default"].createElement(GroupTags_1.GroupTags, { todos: todos }),
            react_1["default"].createElement(TodoForm_1.TodoForm, { onAdd: addHandler, todos: todos }),
            react_1["default"].createElement(TodoList_1.TodoList, { todos: todos }))));
};
exports["default"] = App;
