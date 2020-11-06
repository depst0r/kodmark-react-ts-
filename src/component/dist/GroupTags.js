"use strict";
exports.__esModule = true;
exports.GroupTags = void 0;
var react_1 = require("react");
exports.GroupTags = function (_a) {
    var todos = _a.todos;
    var groupTag = function (event) {
        console.log(todos);
    };
    return react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("button", { onClick: groupTag }, "Group"));
};
