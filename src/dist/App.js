"use strict";
exports.__esModule = true;
var react_1 = require("react");
var input_1 = require("./Components/input/input");
var clear_1 = require("./Components/buttons/clear");
var group_1 = require("./Components/buttons/group");
var list_1 = require("./Components/list/list");
require("./App.css");
var App = function () {
    return react_1["default"].createElement("div", { className: "wrapper" },
        react_1["default"].createElement(input_1.EntryFiled, null),
        react_1["default"].createElement(clear_1.Clear, null),
        react_1["default"].createElement(group_1.Group, null),
        react_1["default"].createElement(list_1.List, null));
};
exports["default"] = App;
