"use strict";
exports.__esModule = true;
exports.GroupTags = void 0;
var react_1 = require("react");
exports.GroupTags = function (_a) {
    var todos = _a.todos, grouped = _a.grouped;
    var _b = react_1.useState('Группировать'), change = _b[0], setChange = _b[1];
    var _c = react_1.useState(false), checked = _c[0], setChecked = _c[1];
    var groupTag = function (event) {
        if (change === 'Группировать') {
            var arrayGroup = todos.reduce(function (array, arg) {
                array[arg.tag] = array[arg.tag] || [];
                array[arg.tag].push(arg);
                return array;
            }, {});
            if (grouped === undefined) {
                console.log('error');
            }
            else {
                // console.log(Object.values(grouped))
                console.log(grouped);
            }
            console.log(arrayGroup);
            setChange('Разгруппировать');
            setChecked(true);
            console.log(checked);
        }
        else {
            setChange('Группировать');
            setChecked(false);
            console.log(checked);
            console.log(todos);
            return todos;
        }
    };
    return react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("input", { type: "button", onClick: groupTag, value: change }));
};
