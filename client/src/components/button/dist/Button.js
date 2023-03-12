"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
function Button(props) {
    return React.createElement("button", __assign({}, props, { className: "bg-turquoise-blue-500 h-11 border border-alto-500 rounded-full font-bold disabled:text-opacity-20 text-black px-4 text-sm w-64 max-w-full" + (props.className ? " " + props.className : "") }), props.children);
}
exports["default"] = Button;
