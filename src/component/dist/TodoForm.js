"use strict";
exports.__esModule = true;
exports.TodoForm = void 0;
var react_1 = require("react");
exports.TodoForm = function (props) {
    var _a = react_1.useState(''), tag = _a[0], setTag = _a[1];
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
                .then(function (res) { return props.onAdd(res.data.image_original_url, res.tag); });
        }
    };
    return (react_1["default"].createElement("div", { className: "input-field" },
        react_1["default"].createElement("input", { onChange: changeHandler, value: tag, type: "text", id: "title" }),
        react_1["default"].createElement("button", { onClick: clickHandler }, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C")));
};
