"use strict";
exports.__esModule = true;
exports.RenderList = void 0;
var react_1 = require("react");
exports.RenderList = function (_a) {
    var todos = _a.todos;
    return (react_1["default"].createElement("div", null, todos.map(function (todo) {
        return (react_1["default"].createElement("section", { className: "todo", key: todo.id },
            react_1["default"].createElement("div", { className: "todoItemList" },
                react_1["default"].createElement("img", { src: todo.image_original_url, alt: todo.tag }))));
    })));
};
