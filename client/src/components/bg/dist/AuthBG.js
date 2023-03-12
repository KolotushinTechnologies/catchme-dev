"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var logo_svg_1 = require("@/assets/logo.svg");
function AuthBG(_a) {
    var children = _a.children;
    return (React.createElement("div", { className: 'flex flex-col items-center p-5 mt-9 w-full max-w-3xl border border-alto-500 rounded-2xl' },
        React.createElement("div", { className: 'flex w-full mb-4' },
            React.createElement(image_1["default"], { src: logo_svg_1["default"], alt: "" })),
        children));
}
exports["default"] = AuthBG;
