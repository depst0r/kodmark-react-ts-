"use strict";
exports.__esModule = true;
exports.TodoForm = void 0;
var react_1 = require("react");
exports.TodoForm = function (_a) {
    var onAdd = _a.onAdd;
    var _b = react_1.useState(''), tag = _b[0], setTag = _b[1];
    var changeHandler = function (event) {
        setTag(event.target.value);
    };
    var clickHandler = function (event) {
        if (tag === '') {
            console.error('ERROR!!');
        }
        else {
            fetch("https://api.giphy.com/v1/gifs/random?api_key=gTJAO48YcpmrADUyo4opy4ES4g7iDBxx&tag=" + tag)
                .then(function (res) { return res.json(); })
                .then(function (res) { return onAdd(res.data.image_original_url, tag); });
        }
    };
    return (react_1["default"].createElement("div", { className: "input-field" },
        react_1["default"].createElement("input", { onChange: changeHandler, value: tag, type: "text", id: "title" }),
        react_1["default"].createElement("button", { onClick: clickHandler }, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C")));
};
