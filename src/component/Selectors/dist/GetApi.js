"use strict";
exports.__esModule = true;
exports.GetApi = void 0;
var react_1 = require("react");
var TodoList_1 = require("../TodoList");
var GetGroupped_1 = require("./GetGroupped");
exports.GetApi = function (_a) {
    var todos = _a.todos, grouped = _a.grouped;
    if (grouped) {
        return react_1["default"].createElement(GetGroupped_1.GetGroupped, { grouped: grouped });
    }
    else {
        return react_1["default"].createElement(TodoList_1.TodoList, { todos: todos });
    }
};
