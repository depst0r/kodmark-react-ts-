"use strict";
exports.__esModule = true;
exports.GroupTags = void 0;
var react_1 = require("react");
exports.GroupTags = function (_a) {
    var todos = _a.todos;
    var _b = react_1.useState('Группировать'), change = _b[0], setChange = _b[1];
    var _c = react_1.useState({}), grouped = _c[0], setGrouped = _c[1];
    var groupTag = function (event) {
        var arrayGroup = todos.reduce(function (array, arg) {
            array[arg.tag] = array[arg.tag] || [];
            array[arg.tag].push(arg);
            return array;
        }, {});
        setGrouped(arrayGroup);
        if (change === 'Группировать') {
            console.log(grouped);
            setChange('Разгруппировать');
        }
        else {
            setChange('Группировать');
            console.log(todos);
            return todos;
        }
    };
    return react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("input", { type: "button", onClick: groupTag, value: change }));
};
