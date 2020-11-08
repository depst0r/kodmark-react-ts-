"use strict";
exports.__esModule = true;
exports.GroupTags = void 0;
var react_1 = require("react");
exports.GroupTags = function (_a) {
    var todos = _a.todos;
    var _b = react_1.useState('Группировать'), change = _b[0], setChange = _b[1];
    var groupTag = function (event) {
        console.table(todos);
        if (change === 'Группировать') {
            setChange('Разгруппировать');
        }
        else {
            setChange('Группировать');
        }
    };
    return react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("input", { type: "button", onClick: groupTag, value: change }));
};
