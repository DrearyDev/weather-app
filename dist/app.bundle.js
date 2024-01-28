/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

:root {
    --BG-COLOR: #081e33;
    --FG-COLOR: #8dc4e9;
    --HOVER-COLOR: #a5d9fc;
}

body {
    min-height: 100vh;
    padding: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    color: var(--FG-COLOR);
    background-color: var(--BG-COLOR);
}

.loading {
    font-size: 5rem;
    color: var(--FG-COLOR);

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.header {
    height: 90px;
    width: 100%;
    padding: 20px;
    margin-bottom: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: absolute;
    top: 0px;

    border-bottom: 5px solid var(--FG-COLOR);
    background-color: var(--BG-COLOR);
}
.header h1 {
    user-select: none;
    color: var(--FG-COLOR);
}
.header .buttons-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
}
.header .buttons-container .open-dialog {
    height: 40px;
    width: 40px;
    background-color: var(--FG-COLOR);
    border: none;
    border-radius: 10px;
}
.header .buttons-container .open-dialog:hover {
    filter: brightness(115%);
}
.header .buttons-container .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
}
.header .buttons-container .switch input {
    opacity: 0;
    width: 0;
    height: 0;
}
.header .buttons-container .switch .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--BG-COLOR);
    transition: 0.4s;
    box-shadow: 0 0 1px white;
    border-radius: 10px;
}
.header .buttons-container .switch .slider .label {
    position: absolute;
    font-size: .8rem;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    color: var(--BG-COLOR);
    background-color: white;
    transition: 0.4s;
    border-radius: 10px;
}
.header .buttons-container .switch input:checked + .slider {
    background-color: var(--FG-COLOR);
}
.header .buttons-container .switch input:checked + .slider .label {
    transform: translateX(26px);
}



.container {
    min-height: 100vh;
    width: 100%;

    margin-top: 90px;

    display: flex;
    flex-direction: column;
    gap: 20px;
}
.container img {
    height: auto;
    width: 64px;
}
.container .main-container {
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 50px;

    border-radius: 10px;
}
.container .main-container > .temp-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
}
.card-container {
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.card-container .card {
    height: auto;
    min-width: 230px;
    padding: 10px;

    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 25px;

    border: 1px solid var(--FG-COLOR);
    border-radius: 10px;
}
.card-container .card > div {
    padding: 20px;
}
.card-container .card div > h1,
.card-container .card div > p {
    white-space: nowrap;
    font-weight: bolder;
}
.card-container .card.today {
    border: 3px solid var(--FG-COLOR);
}
.card-container .card .main-data {
    height: 100%;
}
.card-container .card .temp-data {
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10px;
}


dialog {
    height: 500px;

    margin: auto;
    padding: 35px 20px 20px 20px;

    color: var(--FG-COLOR);
    background-color: var(--BG-COLOR);
    border-radius: 10px;
}
dialog .exit-btn {
    height: 20px;
    width: 20px;
    cursor: pointer;

    position: absolute;
    top: 10px;
    right: 10px;

    background-color: var(--FG-COLOR);
    border: none;
    border-radius: 5px;
}
dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
}
dialog h1 {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
form ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
}
form ul li {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
}
form label {
    white-space: nowrap;
}
form input,
form select {
    width: 100%;
    padding: 5px;
}
input:invalid {
    border: 2px solid lightcoral;
}
form .err {
    color: lightcoral;
}
form button {
    width: 100%;
    padding: 5px 10px;
}

@media only screen and (max-width: 710px) {
    .container .card-container {
        width: 100%;
        gap: 20px;
    }
    .container .card-container .card {
        height: auto;
        width: 100%;

        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }
    .container .card-container .card > div {
        width: 100%;
    }
}

@media only screen and (min-width: 1000px) {
    .container .card-container .card {
        width: 400px;
    };
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n:root {\n    --BG-COLOR: #081e33;\n    --FG-COLOR: #8dc4e9;\n    --HOVER-COLOR: #a5d9fc;\n}\n\nbody {\n    min-height: 100vh;\n    padding: 10px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n\n    color: var(--FG-COLOR);\n    background-color: var(--BG-COLOR);\n}\n\n.loading {\n    font-size: 5rem;\n    color: var(--FG-COLOR);\n\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.header {\n    height: 90px;\n    width: 100%;\n    padding: 20px;\n    margin-bottom: 20px;\n\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    position: absolute;\n    top: 0px;\n\n    border-bottom: 5px solid var(--FG-COLOR);\n    background-color: var(--BG-COLOR);\n}\n.header h1 {\n    user-select: none;\n    color: var(--FG-COLOR);\n}\n.header .buttons-container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n}\n.header .buttons-container .open-dialog {\n    height: 40px;\n    width: 40px;\n    background-color: var(--FG-COLOR);\n    border: none;\n    border-radius: 10px;\n}\n.header .buttons-container .open-dialog:hover {\n    filter: brightness(115%);\n}\n.header .buttons-container .switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n}\n.header .buttons-container .switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n.header .buttons-container .switch .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: var(--BG-COLOR);\n    transition: 0.4s;\n    box-shadow: 0 0 1px white;\n    border-radius: 10px;\n}\n.header .buttons-container .switch .slider .label {\n    position: absolute;\n    font-size: .8rem;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    color: var(--BG-COLOR);\n    background-color: white;\n    transition: 0.4s;\n    border-radius: 10px;\n}\n.header .buttons-container .switch input:checked + .slider {\n    background-color: var(--FG-COLOR);\n}\n.header .buttons-container .switch input:checked + .slider .label {\n    transform: translateX(26px);\n}\n\n\n\n.container {\n    min-height: 100vh;\n    width: 100%;\n\n    margin-top: 90px;\n\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n.container img {\n    height: auto;\n    width: 64px;\n}\n.container .main-container {\n    padding: 20px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    gap: 50px;\n\n    border-radius: 10px;\n}\n.container .main-container > .temp-data {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    gap: 10px;\n}\n.card-container {\n    flex-wrap: wrap;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n.card-container .card {\n    height: auto;\n    min-width: 230px;\n    padding: 10px;\n\n    flex-wrap: wrap;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    gap: 25px;\n\n    border: 1px solid var(--FG-COLOR);\n    border-radius: 10px;\n}\n.card-container .card > div {\n    padding: 20px;\n}\n.card-container .card div > h1,\n.card-container .card div > p {\n    white-space: nowrap;\n    font-weight: bolder;\n}\n.card-container .card.today {\n    border: 3px solid var(--FG-COLOR);\n}\n.card-container .card .main-data {\n    height: 100%;\n}\n.card-container .card .temp-data {\n    height: 100%;\n\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: space-between;\n    gap: 10px;\n}\n\n\ndialog {\n    height: 500px;\n\n    margin: auto;\n    padding: 35px 20px 20px 20px;\n\n    color: var(--FG-COLOR);\n    background-color: var(--BG-COLOR);\n    border-radius: 10px;\n}\ndialog .exit-btn {\n    height: 20px;\n    width: 20px;\n    cursor: pointer;\n\n    position: absolute;\n    top: 10px;\n    right: 10px;\n\n    background-color: var(--FG-COLOR);\n    border: none;\n    border-radius: 5px;\n}\ndialog::backdrop {\n    background-color: rgba(0, 0, 0, 0.5);\n}\ndialog h1 {\n    margin-bottom: 20px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\nform {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n}\nform ul {\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    gap: 10px;\n}\nform ul li {\n    width: 100%;\n\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 20px;\n}\nform label {\n    white-space: nowrap;\n}\nform input,\nform select {\n    width: 100%;\n    padding: 5px;\n}\ninput:invalid {\n    border: 2px solid lightcoral;\n}\nform .err {\n    color: lightcoral;\n}\nform button {\n    width: 100%;\n    padding: 5px 10px;\n}\n\n@media only screen and (max-width: 710px) {\n    .container .card-container {\n        width: 100%;\n        gap: 20px;\n    }\n    .container .card-container .card {\n        height: auto;\n        width: 100%;\n\n        flex-direction: column;\n        align-items: flex-start;\n        gap: 20px;\n    }\n    .container .card-container .card > div {\n        width: 100%;\n    }\n}\n\n@media only screen and (min-width: 1000px) {\n    .container .card-container .card {\n        width: 400px;\n    };\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fetchData.js":
/*!**************************!*\
  !*** ./src/fetchData.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchData: () => (/* binding */ fetchData)
/* harmony export */ });
/* harmony import */ var _handleDates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleDates */ "./src/handleDates.js");


async function fetchData(query) {
    let pdates = (0,_handleDates__WEBPACK_IMPORTED_MODULE_0__.pastDates)();
    let fdates = (0,_handleDates__WEBPACK_IMPORTED_MODULE_0__.futureDates)();
    let weatherData = [];

    const pushData = (object, location) => {
        let country = location.country;
        let city = location.name;

        let day = object.date;
        let icon = object.day.condition.icon;
        let condition = object.day.condition.text;
        let avgTempCelsius = object.day.avgtemp_c;
        let maxTempCelsius = object.day.maxtemp_c;
        let minTempCelsius = object.day.mintemp_c;
        let avgTempFarenheit = object.day.avgtemp_f;
        let maxTempFarenheit = object.day.maxtemp_f;
        let minTempFarenheit = object.day.mintemp_f;
        let chanceOfRain = object.day.daily_chance_of_rain;
        let chanceOfSnow = object.day.daily_chance_of_snow;

        weatherData.push({
            country,
            city,
            day,
            icon,
            condition,
            avgTempCelsius,
            maxTempCelsius,
            minTempCelsius,
            avgTempFarenheit,
            maxTempFarenheit,
            minTempFarenheit,
            chanceOfRain,
            chanceOfSnow
        });
    };

    let plinks = [];
    let clink = `https://api.weatherapi.com/v1/forecast.json?key=04751a96d37d46faac2201108242001&q=${query}`;
    let flinks = [];

    for (let i = 0; i < 2; i++) {
        plinks.push(`https://api.weatherapi.com/v1/history.json?key=04751a96d37d46faac2201108242001&q=${query}&dt=${pdates[i].year}-${pdates[i].month}-${pdates[i].day}`);
        flinks.push(`https://api.weatherapi.com/v1/forecast.json?key=04751a96d37d46faac2201108242001&q=${query}&dt=${fdates[i].year}-${fdates[i].month}-${fdates[i].day}`);
    };

    let promise1 = fetch(plinks[0], {mode:'cors'});
    let promise2 = fetch(plinks[1], {mode:'cors'});
    let promise3 = fetch(clink, {mode:'cors'});
    let promise4 = fetch(flinks[0], {mode:'cors'});
    let promise5 = fetch(flinks[1], {mode:'cors'});

    await Promise.all([promise1, promise2, promise3, promise4, promise5])
    .then(async (results) => {
        for (let i in results) {
            await Promise.resolve(results[i].json())
            .then((resolved) => {
                pushData(resolved.forecast.forecastday[0], resolved.location);
            });
        };
    })
    .catch((err) => console.log(err));

    return weatherData;
};



/***/ }),

/***/ "./src/handleDOM.js":
/*!**************************!*\
  !*** ./src/handleDOM.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeDegrees: () => (/* binding */ changeDegrees),
/* harmony export */   renderWeather: () => (/* binding */ renderWeather)
/* harmony export */ });
/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchData */ "./src/fetchData.js");
/* harmony import */ var _Loading_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loading.gif */ "./src/Loading.gif");



/*----------------------------------------------------------------------------------------------
default view will use the ip address as location and get the weather for the
two past days along with the current day and two future days.
----------------------------------------------------------------------------------------------*/

const container = document.querySelector('.container');
const mainContainer = document.querySelector('.container > .main-container');
const cardContainer = document.querySelector('.container > .card-container');

const loading = document.querySelector('.loading');

const degreeLabel = document.querySelector('.switch .slider > .label');
const degreeInput = document.querySelector('.switch > input');

let data;
let degrees;
let symbol;

degreeInput.checked = false;
degreeLabel.innerText = '℃';
degrees = 'Celsius';
symbol = '℃';

function changeDegrees() {
    degreeInput.checked === true ? degreeInput.checked = false : degreeInput.checked = true;

    if (degreeInput.checked) {
        degreeLabel.innerText = '℉';
        symbol = '℉';
        degrees = 'Farenheit';
    } else {
        degreeLabel.innerText = '℃';
        symbol = '℃';
        degrees = 'Celsius';
    };

    const updateTempData = (() => {
        let tempDivs = document.querySelectorAll('.temp-data');
        console.log(tempDivs);

        tempDivs.forEach(div => {

            let children = [...div.children];

            children.forEach(ele => {
                let index = ele.parentElement.dataAttribute;

                if (ele.classList.contains('average')) {
                    ele.innerHTML = `Average: <br> ${data[index]['avgTemp' + degrees]} ${symbol}`;
                } else if (ele.classList.contains('high')) {
                    ele.innerHTML = `High: <br> ${data[index]['maxTemp' + degrees]} ${symbol}`;
                } else if (ele.classList.contains('low')) {
                    ele.innerHTML = `Low: <br> ${data[index]['minTemp' + degrees]} ${symbol}`;
                };
            });
        });
    })();
};


function getMonth(num) {
    let number = Number(num) - 1;

    let months = [
        'Janurary',
        'Feburary',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    return months[number];
};


async function renderWeather(query) {
    mainContainer.innerHTML = '';
    mainContainer.style.border = 'none';
    cardContainer.innerHTML = '';

    loading.src = _Loading_gif__WEBPACK_IMPORTED_MODULE_1__;

    data = await (0,_fetchData__WEBPACK_IMPORTED_MODULE_0__.fetchData)(query);

    loading.src = '';

    for (let i in data) {
        if (Number(i) !== 2) {

            let div = document.createElement('div');
            div.classList.add('card');
    
            let mainData = document.createElement('div');
            mainData.classList.add('main-data');
    
            let day = document.createElement('p');
            day.classList.add('date');
            let datearr = data[i].day.split('-');
            day.innerText = `${getMonth(datearr[1])} ${datearr[2]} ${datearr[0]}`;
    
            let icon = document.createElement('img');
            icon.src = 'https:' + data[i].icon;
            icon.setAttribute('draggable', 'false');
    
            let condition = document.createElement('p');
            condition.innerText = data[i].condition;
    
            let tempData = document.createElement('div');
            tempData.dataAttribute = Number(i);
            tempData.classList.add('temp-data');
    
            let avgTemp = document.createElement('p');
            avgTemp.classList.add('average');
            avgTemp.innerHTML = `Average: <br> ${data[i]['avgTemp' + degrees]} ${symbol}`;
    
            let maxTemp = document.createElement('p');
            maxTemp.classList.add('high');
            maxTemp.innerHTML = `High: <br> ${data[i]['maxTemp' + degrees]} ${symbol}`;

            let minTemp = document.createElement('p');
            minTemp.classList.add('low');
            minTemp.innerHTML = `Low: <br> ${data[i]['minTemp' + degrees]} ${symbol}`;
    
            let rainChance = document.createElement('p');
            rainChance.classList.add('rain-chance');
            rainChance.innerText = `Chance of Rain: ${data[i].chanceOfRain}%`;
    
            let snowChance = document.createElement('p');
            snowChance.classList.add('snow-chance');
            snowChance.innerText = `Chance of Snow: ${data[i].chanceOfSnow}%`;
    
            tempData.appendChild(avgTemp);
            tempData.appendChild(maxTemp);
            tempData.appendChild(minTemp);
            tempData.appendChild(rainChance);
            tempData.appendChild(snowChance);
    
            mainData.appendChild(day);
            mainData.appendChild(icon);
            mainData.appendChild(condition);
    
            div.appendChild(mainData);
            div.appendChild(tempData);
            
            cardContainer.appendChild(div);
        } else {
            mainContainer.style.border = '1px solid var(--FG-COLOR)';

            let mainData = document.createElement('div');
            mainData.classList.add('main-data')

            let location = document.createElement('h1');
            location.classList.add('location');
            location.innerText = data[i].country + ', ' + data[i].city;
            
            let date = document.createElement('h2');
            date.classList.add('date');
            let datearr = data[i].day.split('-');
            date.innerText = `${getMonth(datearr[1])} ${datearr[2]} ${datearr[0]}`;

            let icon = document.createElement('img');
            icon.setAttribute('draggable', 'false');
            icon.src = 'https:' + data[i].icon;

            let condition = document.createElement('h3');
            condition.innerText = data[i].condition;

            let tempData = document.createElement('div');
            tempData.dataAttribute = Number(i);
            tempData.classList.add('temp-data');

            let averageTemp = document.createElement('h3');
            averageTemp.classList.add('average');
            averageTemp.innerHTML = `Average: <br> ${data[i]['avgTemp' + degrees]} ${symbol}`;

            let highTemp = document.createElement('h3');
            highTemp.classList.add('high');
            highTemp.innerHTML = `High: <br> ${data[i]['maxTemp' + degrees]} ${symbol}`;

            let lowTemp = document.createElement('h3');
            lowTemp.classList.add('low');
            lowTemp.innerHTML = `Low: <br> ${data[i]['minTemp' + degrees]} ${symbol}`;

            let rainChance = document.createElement('h4');
            rainChance.classList.add('rain-chance');
            rainChance.innerText = `Chance of Rain: ${data[i].chanceOfRain}%`;

            let snowChance = document.createElement('h4');
            snowChance.classList.add('snow-chance');
            snowChance.innerText = `Chance of Snow: ${data[i].chanceOfSnow}%`;

            tempData.appendChild(averageTemp);
            tempData.appendChild(highTemp);
            tempData.appendChild(lowTemp);
            tempData.appendChild(rainChance);
            tempData.appendChild(snowChance);

            mainData.appendChild(location);
            mainData.appendChild(date);
            mainData.appendChild(icon);
            mainData.appendChild(condition);

            mainContainer.appendChild(mainData);
            mainContainer.appendChild(tempData);
        };
    };
};



/***/ }),

/***/ "./src/handleDates.js":
/*!****************************!*\
  !*** ./src/handleDates.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currentDate: () => (/* binding */ currentDate),
/* harmony export */   futureDates: () => (/* binding */ futureDates),
/* harmony export */   pastDates: () => (/* binding */ pastDates)
/* harmony export */ });

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
};


const currentDate = function getCurrentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    
    return { year, month, day };
};


const pastDates = function getPastTwoDates() {
    let date = new Date();
    let previousMonthDays = daysInMonth(date.getMonth() -1, date.getFullYear());
    let cdate = currentDate();
    let pdates = [];

    for (let i = 0; i < 2; i++) {

        let year = cdate.year;
        let month = cdate.month;
        month++
        let day = cdate.day - (2 - i);

        // this means that we went back a month
        if (day === previousMonthDays) {
            month--;

            if (month < 0) {// this means we went back a year
                month = 11
                year--;
            };
        };

        if (month < 10) { month = '0' + month };
        if (day < 10) { day = '0' + day };

        pdates[i] = {year, month, day};
    };
    return pdates;
};


const futureDates = function getFutureTwoDates() {
    let date = new Date();
    let nextMonthDays = daysInMonth(date.getMonth() +1, date.getFullYear());
    let cdate = currentDate();
    let fdates = [];

    for (let i = 0; i < 2; i++) {
        let year = cdate.year;
        let month = cdate.month;
        month++;
        let day = cdate.day + (1 + i);

        
        // this means that we went forward one month
        if (day === 1) {
            month++;

            if (month === 13) {//this means it went to new year
                month = 1;
                year++;
            };
        };


        if (month < 10) { month = '0' + month };
        if (day < 10) { day = '0' + day };

        fdates[i] = {year, month, day};
    };
    return fdates;
};






/***/ }),

/***/ "./src/handleFORM.js":
/*!***************************!*\
  !*** ./src/handleFORM.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validate: () => (/* binding */ validate)
/* harmony export */ });
/* harmony import */ var _handleDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleDOM */ "./src/handleDOM.js");
//



const select = document.querySelector('form select');
const input = document.querySelector('form input');
const errMsg = document.querySelector('form span.err');
input.value = '';

function displayError() {
    input.setCustomValidity('Please Enter Valid Value');
    errMsg.innerText = input.validationMessage;
};

function removeError() {
    input.setCustomValidity('');
    errMsg.innerText = input.validationMessage;
};

function usZipValidation(value) {
    // make sure value is real us zip before sending api request
    let isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(value);
    return isValidZip;
};

function canadianPostalValidation(value) {
    // make sure value is real canadian postal code before sending api request
    let isValidCode = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i.test(value);
    return isValidCode;
};

function validate() {
    let valid = true;

    if (select.value === 'us-zip') {
        valid = usZipValidation(input.value);
    } else if (select.value === 'ca-postal') {
        valid = canadianPostalValidation(input.value);
    };

    if (valid) {
        removeError();
        (0,_handleDOM__WEBPACK_IMPORTED_MODULE_0__.renderWeather)(input.value);
    } else {
        displayError();
    };

    return valid;
};



/***/ }),

/***/ "./src/Loading.gif":
/*!*************************!*\
  !*** ./src/Loading.gif ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "98114d9737c66abf258a.gif";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _handleDates_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleDates.js */ "./src/handleDates.js");
/* harmony import */ var _handleDOM_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handleDOM.js */ "./src/handleDOM.js");
/* harmony import */ var _handleFORM_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handleFORM.js */ "./src/handleFORM.js");

// https://api.weatherapi.com/v1/current.json?key=04751a96d37d46faac2201108242001&q=Paris
// https://api.weatherapi.com/v1/forecast.json?key=04751a96d37d46faac2201108242001&q=Paris&days=3
// https://api.weatherapi.com/v1/current.json?key=04751a96d37d46faac2201108242001&q=auto:ip
// https://api.weatherapi.com/v1/history.json?key=04751a96d37d46faac2201108242001&q=auto:ip&dt=2023-08-10





// run view with users ip address as location by default
(0,_handleDOM_js__WEBPACK_IMPORTED_MODULE_2__.renderWeather)('auto:ip');

const toggleSwitch = document.querySelector('.switch');
toggleSwitch.addEventListener('click', (e) => {
    (0,_handleDOM_js__WEBPACK_IMPORTED_MODULE_2__.changeDegrees)();

    e.preventDefault();
    return false;
});


const dialog = document.querySelector('dialog');
const dialogBtn = document.querySelector('.open-dialog');
dialogBtn.addEventListener('click', (e) => {
    dialog.showModal();
});


const exitBtn = document.querySelector('.exit-btn');
exitBtn.addEventListener('click', (e) => {
    dialog.close();
});


const submitBtn = document.querySelector('form > button');
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if ((0,_handleFORM_js__WEBPACK_IMPORTED_MODULE_3__.validate)()) { dialog.close() };
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxZQUFZLFVBQVUsWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsYUFBYSxXQUFXLFlBQVksY0FBYyxhQUFhLFlBQVksWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksY0FBYyxXQUFXLFlBQVksY0FBYyxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksU0FBUyxLQUFLLFlBQVksWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxZQUFZLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFlBQVksVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFlBQVksWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxXQUFXLFVBQVUsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsWUFBWSxXQUFXLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLEtBQUss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Ozs7Ozs7Ozs7Ozs7OztBQ0FhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDcUI7QUFDa0Q7QUFDSTtBQUNoQzs7QUFFM0M7QUFDQSw0REFBYTs7QUFFYjtBQUNBO0FBQ0EsSUFBSSw0REFBYTs7QUFFakI7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBOztBQUVBLFFBQVEsd0RBQVEsTUFBTTtBQUN0QixDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kaWFsb2cvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2RpYWxvZy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZGlhbG9nLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZGlhbG9nLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2RpYWxvZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9kaWFsb2cvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2RpYWxvZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9kaWFsb2cvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZGlhbG9nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZGlhbG9nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZGlhbG9nLy4vc3JjL2ZldGNoRGF0YS5qcyIsIndlYnBhY2s6Ly9kaWFsb2cvLi9zcmMvaGFuZGxlRE9NLmpzIiwid2VicGFjazovL2RpYWxvZy8uL3NyYy9oYW5kbGVEYXRlcy5qcyIsIndlYnBhY2s6Ly9kaWFsb2cvLi9zcmMvaGFuZGxlRk9STS5qcyIsIndlYnBhY2s6Ly9kaWFsb2cvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGlhbG9nL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2RpYWxvZy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGlhbG9nL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZGlhbG9nL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGlhbG9nL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGlhbG9nL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2RpYWxvZy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZGlhbG9nLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbn1cblxuOnJvb3Qge1xuICAgIC0tQkctQ09MT1I6ICMwODFlMzM7XG4gICAgLS1GRy1DT0xPUjogIzhkYzRlOTtcbiAgICAtLUhPVkVSLUNPTE9SOiAjYTVkOWZjO1xufVxuXG5ib2R5IHtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gICAgY29sb3I6IHZhcigtLUZHLUNPTE9SKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CRy1DT0xPUik7XG59XG5cbi5sb2FkaW5nIHtcbiAgICBmb250LXNpemU6IDVyZW07XG4gICAgY29sb3I6IHZhcigtLUZHLUNPTE9SKTtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5oZWFkZXIge1xuICAgIGhlaWdodDogOTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHZhcigtLUZHLUNPTE9SKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CRy1DT0xPUik7XG59XG4uaGVhZGVyIGgxIHtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tRkctQ09MT1IpO1xufVxuLmhlYWRlciAuYnV0dG9ucy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG59XG4uaGVhZGVyIC5idXR0b25zLWNvbnRhaW5lciAub3Blbi1kaWFsb2cge1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uaGVhZGVyIC5idXR0b25zLWNvbnRhaW5lciAub3Blbi1kaWFsb2c6aG92ZXIge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMTUlKTtcbn1cbi5oZWFkZXIgLmJ1dHRvbnMtY29udGFpbmVyIC5zd2l0Y2gge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiAzNHB4O1xufVxuLmhlYWRlciAuYnV0dG9ucy1jb250YWluZXIgLnN3aXRjaCBpbnB1dCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG59XG4uaGVhZGVyIC5idXR0b25zLWNvbnRhaW5lciAuc3dpdGNoIC5zbGlkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJHLUNPTE9SKTtcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5oZWFkZXIgLmJ1dHRvbnMtY29udGFpbmVyIC5zd2l0Y2ggLnNsaWRlciAubGFiZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmb250LXNpemU6IC44cmVtO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgaGVpZ2h0OiAyNnB4O1xuICAgIHdpZHRoOiAyNnB4O1xuICAgIGxlZnQ6IDRweDtcbiAgICBib3R0b206IDRweDtcbiAgICBjb2xvcjogdmFyKC0tQkctQ09MT1IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHRyYW5zaXRpb246IDAuNHM7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5oZWFkZXIgLmJ1dHRvbnMtY29udGFpbmVyIC5zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUZHLUNPTE9SKTtcbn1cbi5oZWFkZXIgLmJ1dHRvbnMtY29udGFpbmVyIC5zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIgLmxhYmVsIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG59XG5cblxuXG4uY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIG1hcmdpbi10b3A6IDkwcHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyMHB4O1xufVxuLmNvbnRhaW5lciBpbWcge1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogNjRweDtcbn1cbi5jb250YWluZXIgLm1haW4tY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogNTBweDtcblxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uY29udGFpbmVyIC5tYWluLWNvbnRhaW5lciA+IC50ZW1wLWRhdGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG59XG4uY2FyZC1jb250YWluZXIge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmNhcmQtY29udGFpbmVyIC5jYXJkIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWluLXdpZHRoOiAyMzBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDI1cHg7XG5cbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1GRy1DT0xPUik7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5jYXJkLWNvbnRhaW5lciAuY2FyZCA+IGRpdiB7XG4gICAgcGFkZGluZzogMjBweDtcbn1cbi5jYXJkLWNvbnRhaW5lciAuY2FyZCBkaXYgPiBoMSxcbi5jYXJkLWNvbnRhaW5lciAuY2FyZCBkaXYgPiBwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG4uY2FyZC1jb250YWluZXIgLmNhcmQudG9kYXkge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLUZHLUNPTE9SKTtcbn1cbi5jYXJkLWNvbnRhaW5lciAuY2FyZCAubWFpbi1kYXRhIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4uY2FyZC1jb250YWluZXIgLmNhcmQgLnRlbXAtZGF0YSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDEwcHg7XG59XG5cblxuZGlhbG9nIHtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuXG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDM1cHggMjBweCAyMHB4IDIwcHg7XG5cbiAgICBjb2xvcjogdmFyKC0tRkctQ09MT1IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJHLUNPTE9SKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuZGlhbG9nIC5leGl0LWJ0biB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbmRpYWxvZzo6YmFja2Ryb3Age1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbmRpYWxvZyBoMSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG59XG5mb3JtIHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG59XG5mb3JtIHVsIGxpIHtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ2FwOiAyMHB4O1xufVxuZm9ybSBsYWJlbCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbmZvcm0gaW5wdXQsXG5mb3JtIHNlbGVjdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNXB4O1xufVxuaW5wdXQ6aW52YWxpZCB7XG4gICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRjb3JhbDtcbn1cbmZvcm0gLmVyciB7XG4gICAgY29sb3I6IGxpZ2h0Y29yYWw7XG59XG5mb3JtIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzEwcHgpIHtcbiAgICAuY29udGFpbmVyIC5jYXJkLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBnYXA6IDIwcHg7XG4gICAgfVxuICAgIC5jb250YWluZXIgLmNhcmQtY29udGFpbmVyIC5jYXJkIHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgZ2FwOiAyMHB4O1xuICAgIH1cbiAgICAuY29udGFpbmVyIC5jYXJkLWNvbnRhaW5lciAuY2FyZCA+IGRpdiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgICAuY29udGFpbmVyIC5jYXJkLWNvbnRhaW5lciAuY2FyZCB7XG4gICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICB9O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsbUpBQW1KO0FBQ3ZKOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTs7SUFFYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RC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bUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7QUFDQTtJQUNJLFdBQVc7O0lBRVgsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsU0FBUztBQUNiO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTs7SUFFSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtRQUNJLFdBQVc7UUFDWCxTQUFTO0lBQ2I7SUFDQTtRQUNJLFlBQVk7UUFDWixXQUFXOztRQUVYLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsU0FBUztJQUNiO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQixDQUFBO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tQkctQ09MT1I6ICMwODFlMzM7XFxuICAgIC0tRkctQ09MT1I6ICM4ZGM0ZTk7XFxuICAgIC0tSE9WRVItQ09MT1I6ICNhNWQ5ZmM7XFxufVxcblxcbmJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcblxcbiAgICBjb2xvcjogdmFyKC0tRkctQ09MT1IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CRy1DT0xPUik7XFxufVxcblxcbi5sb2FkaW5nIHtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tRkctQ09MT1IpO1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiA5MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMHB4O1xcblxcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdmFyKC0tRkctQ09MT1IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CRy1DT0xPUik7XFxufVxcbi5oZWFkZXIgaDEge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLUZHLUNPTE9SKTtcXG59XFxuLmhlYWRlciAuYnV0dG9ucy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG4uaGVhZGVyIC5idXR0b25zLWNvbnRhaW5lciAub3Blbi1kaWFsb2cge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLmhlYWRlciAuYnV0dG9ucy1jb250YWluZXIgLm9wZW4tZGlhbG9nOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDExNSUpO1xcbn1cXG4uaGVhZGVyIC5idXR0b25zLWNvbnRhaW5lciAuc3dpdGNoIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDM0cHg7XFxufVxcbi5oZWFkZXIgLmJ1dHRvbnMtY29udGFpbmVyIC5zd2l0Y2ggaW5wdXQge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbn1cXG4uaGVhZGVyIC5idXR0b25zLWNvbnRhaW5lciAuc3dpdGNoIC5zbGlkZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CRy1DT0xPUik7XFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5oZWFkZXIgLmJ1dHRvbnMtY29udGFpbmVyIC5zd2l0Y2ggLnNsaWRlciAubGFiZWwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGZvbnQtc2l6ZTogLjhyZW07XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICBoZWlnaHQ6IDI2cHg7XFxuICAgIHdpZHRoOiAyNnB4O1xcbiAgICBsZWZ0OiA0cHg7XFxuICAgIGJvdHRvbTogNHB4O1xcbiAgICBjb2xvcjogdmFyKC0tQkctQ09MT1IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogMC40cztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLmhlYWRlciAuYnV0dG9ucy1jb250YWluZXIgLnN3aXRjaCBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUZHLUNPTE9SKTtcXG59XFxuLmhlYWRlciAuYnV0dG9ucy1jb250YWluZXIgLnN3aXRjaCBpbnB1dDpjaGVja2VkICsgLnNsaWRlciAubGFiZWwge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxufVxcblxcblxcblxcbi5jb250YWluZXIge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIG1hcmdpbi10b3A6IDkwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG59XFxuLmNvbnRhaW5lciBpbWcge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiA2NHB4O1xcbn1cXG4uY29udGFpbmVyIC5tYWluLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA1MHB4O1xcblxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uY29udGFpbmVyIC5tYWluLWNvbnRhaW5lciA+IC50ZW1wLWRhdGEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuLmNhcmQtY29udGFpbmVyIHtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5jYXJkLWNvbnRhaW5lciAuY2FyZCB7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgbWluLXdpZHRoOiAyMzBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMjVweDtcXG5cXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tRkctQ09MT1IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uY2FyZC1jb250YWluZXIgLmNhcmQgPiBkaXYge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG4uY2FyZC1jb250YWluZXIgLmNhcmQgZGl2ID4gaDEsXFxuLmNhcmQtY29udGFpbmVyIC5jYXJkIGRpdiA+IHAge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG4uY2FyZC1jb250YWluZXIgLmNhcmQudG9kYXkge1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1GRy1DT0xPUik7XFxufVxcbi5jYXJkLWNvbnRhaW5lciAuY2FyZCAubWFpbi1kYXRhIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uY2FyZC1jb250YWluZXIgLmNhcmQgLnRlbXAtZGF0YSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5cXG5kaWFsb2cge1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcblxcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDM1cHggMjBweCAyMHB4IDIwcHg7XFxuXFxuICAgIGNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJHLUNPTE9SKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuZGlhbG9nIC5leGl0LWJ0biB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIHJpZ2h0OiAxMHB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5kaWFsb2c6OmJhY2tkcm9wIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5kaWFsb2cgaDEge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbmZvcm0gdWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuZm9ybSB1bCBsaSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMjBweDtcXG59XFxuZm9ybSBsYWJlbCB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbmZvcm0gaW5wdXQsXFxuZm9ybSBzZWxlY3Qge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5pbnB1dDppbnZhbGlkIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRjb3JhbDtcXG59XFxuZm9ybSAuZXJyIHtcXG4gICAgY29sb3I6IGxpZ2h0Y29yYWw7XFxufVxcbmZvcm0gYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcxMHB4KSB7XFxuICAgIC5jb250YWluZXIgLmNhcmQtY29udGFpbmVyIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZ2FwOiAyMHB4O1xcbiAgICB9XFxuICAgIC5jb250YWluZXIgLmNhcmQtY29udGFpbmVyIC5jYXJkIHtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgZ2FwOiAyMHB4O1xcbiAgICB9XFxuICAgIC5jb250YWluZXIgLmNhcmQtY29udGFpbmVyIC5jYXJkID4gZGl2IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxuICAgIC5jb250YWluZXIgLmNhcmQtY29udGFpbmVyIC5jYXJkIHtcXG4gICAgICAgIHdpZHRoOiA0MDBweDtcXG4gICAgfTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGN1cnJlbnREYXRlLCBwYXN0RGF0ZXMsIGZ1dHVyZURhdGVzIH0gZnJvbSBcIi4vaGFuZGxlRGF0ZXNcIjtcblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKHF1ZXJ5KSB7XG4gICAgbGV0IHBkYXRlcyA9IHBhc3REYXRlcygpO1xuICAgIGxldCBmZGF0ZXMgPSBmdXR1cmVEYXRlcygpO1xuICAgIGxldCB3ZWF0aGVyRGF0YSA9IFtdO1xuXG4gICAgY29uc3QgcHVzaERhdGEgPSAob2JqZWN0LCBsb2NhdGlvbikgPT4ge1xuICAgICAgICBsZXQgY291bnRyeSA9IGxvY2F0aW9uLmNvdW50cnk7XG4gICAgICAgIGxldCBjaXR5ID0gbG9jYXRpb24ubmFtZTtcblxuICAgICAgICBsZXQgZGF5ID0gb2JqZWN0LmRhdGU7XG4gICAgICAgIGxldCBpY29uID0gb2JqZWN0LmRheS5jb25kaXRpb24uaWNvbjtcbiAgICAgICAgbGV0IGNvbmRpdGlvbiA9IG9iamVjdC5kYXkuY29uZGl0aW9uLnRleHQ7XG4gICAgICAgIGxldCBhdmdUZW1wQ2Vsc2l1cyA9IG9iamVjdC5kYXkuYXZndGVtcF9jO1xuICAgICAgICBsZXQgbWF4VGVtcENlbHNpdXMgPSBvYmplY3QuZGF5Lm1heHRlbXBfYztcbiAgICAgICAgbGV0IG1pblRlbXBDZWxzaXVzID0gb2JqZWN0LmRheS5taW50ZW1wX2M7XG4gICAgICAgIGxldCBhdmdUZW1wRmFyZW5oZWl0ID0gb2JqZWN0LmRheS5hdmd0ZW1wX2Y7XG4gICAgICAgIGxldCBtYXhUZW1wRmFyZW5oZWl0ID0gb2JqZWN0LmRheS5tYXh0ZW1wX2Y7XG4gICAgICAgIGxldCBtaW5UZW1wRmFyZW5oZWl0ID0gb2JqZWN0LmRheS5taW50ZW1wX2Y7XG4gICAgICAgIGxldCBjaGFuY2VPZlJhaW4gPSBvYmplY3QuZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluO1xuICAgICAgICBsZXQgY2hhbmNlT2ZTbm93ID0gb2JqZWN0LmRheS5kYWlseV9jaGFuY2Vfb2Zfc25vdztcblxuICAgICAgICB3ZWF0aGVyRGF0YS5wdXNoKHtcbiAgICAgICAgICAgIGNvdW50cnksXG4gICAgICAgICAgICBjaXR5LFxuICAgICAgICAgICAgZGF5LFxuICAgICAgICAgICAgaWNvbixcbiAgICAgICAgICAgIGNvbmRpdGlvbixcbiAgICAgICAgICAgIGF2Z1RlbXBDZWxzaXVzLFxuICAgICAgICAgICAgbWF4VGVtcENlbHNpdXMsXG4gICAgICAgICAgICBtaW5UZW1wQ2Vsc2l1cyxcbiAgICAgICAgICAgIGF2Z1RlbXBGYXJlbmhlaXQsXG4gICAgICAgICAgICBtYXhUZW1wRmFyZW5oZWl0LFxuICAgICAgICAgICAgbWluVGVtcEZhcmVuaGVpdCxcbiAgICAgICAgICAgIGNoYW5jZU9mUmFpbixcbiAgICAgICAgICAgIGNoYW5jZU9mU25vd1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgbGV0IHBsaW5rcyA9IFtdO1xuICAgIGxldCBjbGluayA9IGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0wNDc1MWE5NmQzN2Q0NmZhYWMyMjAxMTA4MjQyMDAxJnE9JHtxdWVyeX1gO1xuICAgIGxldCBmbGlua3MgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgIHBsaW5rcy5wdXNoKGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9oaXN0b3J5Lmpzb24/a2V5PTA0NzUxYTk2ZDM3ZDQ2ZmFhYzIyMDExMDgyNDIwMDEmcT0ke3F1ZXJ5fSZkdD0ke3BkYXRlc1tpXS55ZWFyfS0ke3BkYXRlc1tpXS5tb250aH0tJHtwZGF0ZXNbaV0uZGF5fWApO1xuICAgICAgICBmbGlua3MucHVzaChgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9MDQ3NTFhOTZkMzdkNDZmYWFjMjIwMTEwODI0MjAwMSZxPSR7cXVlcnl9JmR0PSR7ZmRhdGVzW2ldLnllYXJ9LSR7ZmRhdGVzW2ldLm1vbnRofS0ke2ZkYXRlc1tpXS5kYXl9YCk7XG4gICAgfTtcblxuICAgIGxldCBwcm9taXNlMSA9IGZldGNoKHBsaW5rc1swXSwge21vZGU6J2NvcnMnfSk7XG4gICAgbGV0IHByb21pc2UyID0gZmV0Y2gocGxpbmtzWzFdLCB7bW9kZTonY29ycyd9KTtcbiAgICBsZXQgcHJvbWlzZTMgPSBmZXRjaChjbGluaywge21vZGU6J2NvcnMnfSk7XG4gICAgbGV0IHByb21pc2U0ID0gZmV0Y2goZmxpbmtzWzBdLCB7bW9kZTonY29ycyd9KTtcbiAgICBsZXQgcHJvbWlzZTUgPSBmZXRjaChmbGlua3NbMV0sIHttb2RlOidjb3JzJ30pO1xuXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW3Byb21pc2UxLCBwcm9taXNlMiwgcHJvbWlzZTMsIHByb21pc2U0LCBwcm9taXNlNV0pXG4gICAgLnRoZW4oYXN5bmMgKHJlc3VsdHMpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSBpbiByZXN1bHRzKSB7XG4gICAgICAgICAgICBhd2FpdCBQcm9taXNlLnJlc29sdmUocmVzdWx0c1tpXS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbigocmVzb2x2ZWQpID0+IHtcbiAgICAgICAgICAgICAgICBwdXNoRGF0YShyZXNvbHZlZC5mb3JlY2FzdC5mb3JlY2FzdGRheVswXSwgcmVzb2x2ZWQubG9jYXRpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cbiAgICByZXR1cm4gd2VhdGhlckRhdGE7XG59O1xuXG5leHBvcnQgeyBmZXRjaERhdGEgfTsiLCJpbXBvcnQgeyBmZXRjaERhdGEgfSBmcm9tIFwiLi9mZXRjaERhdGFcIjtcbmltcG9ydCBsb2FkaW5nR2lmIGZyb20gJy4vTG9hZGluZy5naWYnO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmRlZmF1bHQgdmlldyB3aWxsIHVzZSB0aGUgaXAgYWRkcmVzcyBhcyBsb2NhdGlvbiBhbmQgZ2V0IHRoZSB3ZWF0aGVyIGZvciB0aGVcbnR3byBwYXN0IGRheXMgYWxvbmcgd2l0aCB0aGUgY3VycmVudCBkYXkgYW5kIHR3byBmdXR1cmUgZGF5cy5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lciA+IC5tYWluLWNvbnRhaW5lcicpO1xuY29uc3QgY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXIgPiAuY2FyZC1jb250YWluZXInKTtcblxuY29uc3QgbG9hZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nJyk7XG5cbmNvbnN0IGRlZ3JlZUxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXRjaCAuc2xpZGVyID4gLmxhYmVsJyk7XG5jb25zdCBkZWdyZWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2ggPiBpbnB1dCcpO1xuXG5sZXQgZGF0YTtcbmxldCBkZWdyZWVzO1xubGV0IHN5bWJvbDtcblxuZGVncmVlSW5wdXQuY2hlY2tlZCA9IGZhbHNlO1xuZGVncmVlTGFiZWwuaW5uZXJUZXh0ID0gJ+KEgyc7XG5kZWdyZWVzID0gJ0NlbHNpdXMnO1xuc3ltYm9sID0gJ+KEgyc7XG5cbmZ1bmN0aW9uIGNoYW5nZURlZ3JlZXMoKSB7XG4gICAgZGVncmVlSW5wdXQuY2hlY2tlZCA9PT0gdHJ1ZSA/IGRlZ3JlZUlucHV0LmNoZWNrZWQgPSBmYWxzZSA6IGRlZ3JlZUlucHV0LmNoZWNrZWQgPSB0cnVlO1xuXG4gICAgaWYgKGRlZ3JlZUlucHV0LmNoZWNrZWQpIHtcbiAgICAgICAgZGVncmVlTGFiZWwuaW5uZXJUZXh0ID0gJ+KEiSc7XG4gICAgICAgIHN5bWJvbCA9ICfihIknO1xuICAgICAgICBkZWdyZWVzID0gJ0ZhcmVuaGVpdCc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGVncmVlTGFiZWwuaW5uZXJUZXh0ID0gJ+KEgyc7XG4gICAgICAgIHN5bWJvbCA9ICfihIMnO1xuICAgICAgICBkZWdyZWVzID0gJ0NlbHNpdXMnO1xuICAgIH07XG5cbiAgICBjb25zdCB1cGRhdGVUZW1wRGF0YSA9ICgoKSA9PiB7XG4gICAgICAgIGxldCB0ZW1wRGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZW1wLWRhdGEnKTtcbiAgICAgICAgY29uc29sZS5sb2codGVtcERpdnMpO1xuXG4gICAgICAgIHRlbXBEaXZzLmZvckVhY2goZGl2ID0+IHtcblxuICAgICAgICAgICAgbGV0IGNoaWxkcmVuID0gWy4uLmRpdi5jaGlsZHJlbl07XG5cbiAgICAgICAgICAgIGNoaWxkcmVuLmZvckVhY2goZWxlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBlbGUucGFyZW50RWxlbWVudC5kYXRhQXR0cmlidXRlO1xuXG4gICAgICAgICAgICAgICAgaWYgKGVsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2F2ZXJhZ2UnKSkge1xuICAgICAgICAgICAgICAgICAgICBlbGUuaW5uZXJIVE1MID0gYEF2ZXJhZ2U6IDxicj4gJHtkYXRhW2luZGV4XVsnYXZnVGVtcCcgKyBkZWdyZWVzXX0gJHtzeW1ib2x9YDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZ2gnKSkge1xuICAgICAgICAgICAgICAgICAgICBlbGUuaW5uZXJIVE1MID0gYEhpZ2g6IDxicj4gJHtkYXRhW2luZGV4XVsnbWF4VGVtcCcgKyBkZWdyZWVzXX0gJHtzeW1ib2x9YDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2xvdycpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZS5pbm5lckhUTUwgPSBgTG93OiA8YnI+ICR7ZGF0YVtpbmRleF1bJ21pblRlbXAnICsgZGVncmVlc119ICR7c3ltYm9sfWA7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KSgpO1xufTtcblxuXG5mdW5jdGlvbiBnZXRNb250aChudW0pIHtcbiAgICBsZXQgbnVtYmVyID0gTnVtYmVyKG51bSkgLSAxO1xuXG4gICAgbGV0IG1vbnRocyA9IFtcbiAgICAgICAgJ0phbnVyYXJ5JyxcbiAgICAgICAgJ0ZlYnVyYXJ5JyxcbiAgICAgICAgJ01hcmNoJyxcbiAgICAgICAgJ0FwcmlsJyxcbiAgICAgICAgJ01heScsXG4gICAgICAgICdKdW5lJyxcbiAgICAgICAgJ0p1bHknLFxuICAgICAgICAnQXVndXN0JyxcbiAgICAgICAgJ1NlcHRlbWJlcicsXG4gICAgICAgICdPY3RvYmVyJyxcbiAgICAgICAgJ05vdmVtYmVyJyxcbiAgICAgICAgJ0RlY2VtYmVyJ1xuICAgIF07XG5cbiAgICByZXR1cm4gbW9udGhzW251bWJlcl07XG59O1xuXG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlcldlYXRoZXIocXVlcnkpIHtcbiAgICBtYWluQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIG1haW5Db250YWluZXIuc3R5bGUuYm9yZGVyID0gJ25vbmUnO1xuICAgIGNhcmRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBsb2FkaW5nLnNyYyA9IGxvYWRpbmdHaWY7XG5cbiAgICBkYXRhID0gYXdhaXQgZmV0Y2hEYXRhKHF1ZXJ5KTtcblxuICAgIGxvYWRpbmcuc3JjID0gJyc7XG5cbiAgICBmb3IgKGxldCBpIGluIGRhdGEpIHtcbiAgICAgICAgaWYgKE51bWJlcihpKSAhPT0gMikge1xuXG4gICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICAgIFxuICAgICAgICAgICAgbGV0IG1haW5EYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBtYWluRGF0YS5jbGFzc0xpc3QuYWRkKCdtYWluLWRhdGEnKTtcbiAgICBcbiAgICAgICAgICAgIGxldCBkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZCgnZGF0ZScpO1xuICAgICAgICAgICAgbGV0IGRhdGVhcnIgPSBkYXRhW2ldLmRheS5zcGxpdCgnLScpO1xuICAgICAgICAgICAgZGF5LmlubmVyVGV4dCA9IGAke2dldE1vbnRoKGRhdGVhcnJbMV0pfSAke2RhdGVhcnJbMl19ICR7ZGF0ZWFyclswXX1gO1xuICAgIFxuICAgICAgICAgICAgbGV0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGljb24uc3JjID0gJ2h0dHBzOicgKyBkYXRhW2ldLmljb247XG4gICAgICAgICAgICBpY29uLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgJ2ZhbHNlJyk7XG4gICAgXG4gICAgICAgICAgICBsZXQgY29uZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgY29uZGl0aW9uLmlubmVyVGV4dCA9IGRhdGFbaV0uY29uZGl0aW9uO1xuICAgIFxuICAgICAgICAgICAgbGV0IHRlbXBEYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0ZW1wRGF0YS5kYXRhQXR0cmlidXRlID0gTnVtYmVyKGkpO1xuICAgICAgICAgICAgdGVtcERhdGEuY2xhc3NMaXN0LmFkZCgndGVtcC1kYXRhJyk7XG4gICAgXG4gICAgICAgICAgICBsZXQgYXZnVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGF2Z1RlbXAuY2xhc3NMaXN0LmFkZCgnYXZlcmFnZScpO1xuICAgICAgICAgICAgYXZnVGVtcC5pbm5lckhUTUwgPSBgQXZlcmFnZTogPGJyPiAke2RhdGFbaV1bJ2F2Z1RlbXAnICsgZGVncmVlc119ICR7c3ltYm9sfWA7XG4gICAgXG4gICAgICAgICAgICBsZXQgbWF4VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIG1heFRlbXAuY2xhc3NMaXN0LmFkZCgnaGlnaCcpO1xuICAgICAgICAgICAgbWF4VGVtcC5pbm5lckhUTUwgPSBgSGlnaDogPGJyPiAke2RhdGFbaV1bJ21heFRlbXAnICsgZGVncmVlc119ICR7c3ltYm9sfWA7XG5cbiAgICAgICAgICAgIGxldCBtaW5UZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgbWluVGVtcC5jbGFzc0xpc3QuYWRkKCdsb3cnKTtcbiAgICAgICAgICAgIG1pblRlbXAuaW5uZXJIVE1MID0gYExvdzogPGJyPiAke2RhdGFbaV1bJ21pblRlbXAnICsgZGVncmVlc119ICR7c3ltYm9sfWA7XG4gICAgXG4gICAgICAgICAgICBsZXQgcmFpbkNoYW5jZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHJhaW5DaGFuY2UuY2xhc3NMaXN0LmFkZCgncmFpbi1jaGFuY2UnKTtcbiAgICAgICAgICAgIHJhaW5DaGFuY2UuaW5uZXJUZXh0ID0gYENoYW5jZSBvZiBSYWluOiAke2RhdGFbaV0uY2hhbmNlT2ZSYWlufSVgO1xuICAgIFxuICAgICAgICAgICAgbGV0IHNub3dDaGFuY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBzbm93Q2hhbmNlLmNsYXNzTGlzdC5hZGQoJ3Nub3ctY2hhbmNlJyk7XG4gICAgICAgICAgICBzbm93Q2hhbmNlLmlubmVyVGV4dCA9IGBDaGFuY2Ugb2YgU25vdzogJHtkYXRhW2ldLmNoYW5jZU9mU25vd30lYDtcbiAgICBcbiAgICAgICAgICAgIHRlbXBEYXRhLmFwcGVuZENoaWxkKGF2Z1RlbXApO1xuICAgICAgICAgICAgdGVtcERhdGEuYXBwZW5kQ2hpbGQobWF4VGVtcCk7XG4gICAgICAgICAgICB0ZW1wRGF0YS5hcHBlbmRDaGlsZChtaW5UZW1wKTtcbiAgICAgICAgICAgIHRlbXBEYXRhLmFwcGVuZENoaWxkKHJhaW5DaGFuY2UpO1xuICAgICAgICAgICAgdGVtcERhdGEuYXBwZW5kQ2hpbGQoc25vd0NoYW5jZSk7XG4gICAgXG4gICAgICAgICAgICBtYWluRGF0YS5hcHBlbmRDaGlsZChkYXkpO1xuICAgICAgICAgICAgbWFpbkRhdGEuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgICAgICAgICBtYWluRGF0YS5hcHBlbmRDaGlsZChjb25kaXRpb24pO1xuICAgIFxuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKG1haW5EYXRhKTtcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0ZW1wRGF0YSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1haW5Db250YWluZXIuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCB2YXIoLS1GRy1DT0xPUiknO1xuXG4gICAgICAgICAgICBsZXQgbWFpbkRhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG1haW5EYXRhLmNsYXNzTGlzdC5hZGQoJ21haW4tZGF0YScpXG5cbiAgICAgICAgICAgIGxldCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgICAgICBsb2NhdGlvbi5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbicpO1xuICAgICAgICAgICAgbG9jYXRpb24uaW5uZXJUZXh0ID0gZGF0YVtpXS5jb3VudHJ5ICsgJywgJyArIGRhdGFbaV0uY2l0eTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICAgICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCdkYXRlJyk7XG4gICAgICAgICAgICBsZXQgZGF0ZWFyciA9IGRhdGFbaV0uZGF5LnNwbGl0KCctJyk7XG4gICAgICAgICAgICBkYXRlLmlubmVyVGV4dCA9IGAke2dldE1vbnRoKGRhdGVhcnJbMV0pfSAke2RhdGVhcnJbMl19ICR7ZGF0ZWFyclswXX1gO1xuXG4gICAgICAgICAgICBsZXQgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsICdmYWxzZScpO1xuICAgICAgICAgICAgaWNvbi5zcmMgPSAnaHR0cHM6JyArIGRhdGFbaV0uaWNvbjtcblxuICAgICAgICAgICAgbGV0IGNvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgICAgICBjb25kaXRpb24uaW5uZXJUZXh0ID0gZGF0YVtpXS5jb25kaXRpb247XG5cbiAgICAgICAgICAgIGxldCB0ZW1wRGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGVtcERhdGEuZGF0YUF0dHJpYnV0ZSA9IE51bWJlcihpKTtcbiAgICAgICAgICAgIHRlbXBEYXRhLmNsYXNzTGlzdC5hZGQoJ3RlbXAtZGF0YScpO1xuXG4gICAgICAgICAgICBsZXQgYXZlcmFnZVRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICAgICAgYXZlcmFnZVRlbXAuY2xhc3NMaXN0LmFkZCgnYXZlcmFnZScpO1xuICAgICAgICAgICAgYXZlcmFnZVRlbXAuaW5uZXJIVE1MID0gYEF2ZXJhZ2U6IDxicj4gJHtkYXRhW2ldWydhdmdUZW1wJyArIGRlZ3JlZXNdfSAke3N5bWJvbH1gO1xuXG4gICAgICAgICAgICBsZXQgaGlnaFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICAgICAgaGlnaFRlbXAuY2xhc3NMaXN0LmFkZCgnaGlnaCcpO1xuICAgICAgICAgICAgaGlnaFRlbXAuaW5uZXJIVE1MID0gYEhpZ2g6IDxicj4gJHtkYXRhW2ldWydtYXhUZW1wJyArIGRlZ3JlZXNdfSAke3N5bWJvbH1gO1xuXG4gICAgICAgICAgICBsZXQgbG93VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgICAgICBsb3dUZW1wLmNsYXNzTGlzdC5hZGQoJ2xvdycpO1xuICAgICAgICAgICAgbG93VGVtcC5pbm5lckhUTUwgPSBgTG93OiA8YnI+ICR7ZGF0YVtpXVsnbWluVGVtcCcgKyBkZWdyZWVzXX0gJHtzeW1ib2x9YDtcblxuICAgICAgICAgICAgbGV0IHJhaW5DaGFuY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgICAgICAgcmFpbkNoYW5jZS5jbGFzc0xpc3QuYWRkKCdyYWluLWNoYW5jZScpO1xuICAgICAgICAgICAgcmFpbkNoYW5jZS5pbm5lclRleHQgPSBgQ2hhbmNlIG9mIFJhaW46ICR7ZGF0YVtpXS5jaGFuY2VPZlJhaW59JWA7XG5cbiAgICAgICAgICAgIGxldCBzbm93Q2hhbmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgICAgIHNub3dDaGFuY2UuY2xhc3NMaXN0LmFkZCgnc25vdy1jaGFuY2UnKTtcbiAgICAgICAgICAgIHNub3dDaGFuY2UuaW5uZXJUZXh0ID0gYENoYW5jZSBvZiBTbm93OiAke2RhdGFbaV0uY2hhbmNlT2ZTbm93fSVgO1xuXG4gICAgICAgICAgICB0ZW1wRGF0YS5hcHBlbmRDaGlsZChhdmVyYWdlVGVtcCk7XG4gICAgICAgICAgICB0ZW1wRGF0YS5hcHBlbmRDaGlsZChoaWdoVGVtcCk7XG4gICAgICAgICAgICB0ZW1wRGF0YS5hcHBlbmRDaGlsZChsb3dUZW1wKTtcbiAgICAgICAgICAgIHRlbXBEYXRhLmFwcGVuZENoaWxkKHJhaW5DaGFuY2UpO1xuICAgICAgICAgICAgdGVtcERhdGEuYXBwZW5kQ2hpbGQoc25vd0NoYW5jZSk7XG5cbiAgICAgICAgICAgIG1haW5EYXRhLmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcbiAgICAgICAgICAgIG1haW5EYXRhLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgICAgICAgICAgbWFpbkRhdGEuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgICAgICAgICBtYWluRGF0YS5hcHBlbmRDaGlsZChjb25kaXRpb24pO1xuXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5EYXRhKTtcbiAgICAgICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQodGVtcERhdGEpO1xuICAgICAgICB9O1xuICAgIH07XG59O1xuXG5leHBvcnQgeyByZW5kZXJXZWF0aGVyLCBjaGFuZ2VEZWdyZWVzIH07IiwiXG5mdW5jdGlvbiBkYXlzSW5Nb250aChtb250aCwgeWVhcikge1xuICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMCkuZ2V0RGF0ZSgpO1xufTtcblxuXG5jb25zdCBjdXJyZW50RGF0ZSA9IGZ1bmN0aW9uIGdldEN1cnJlbnREYXRlKCkge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgXG4gICAgcmV0dXJuIHsgeWVhciwgbW9udGgsIGRheSB9O1xufTtcblxuXG5jb25zdCBwYXN0RGF0ZXMgPSBmdW5jdGlvbiBnZXRQYXN0VHdvRGF0ZXMoKSB7XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBwcmV2aW91c01vbnRoRGF5cyA9IGRheXNJbk1vbnRoKGRhdGUuZ2V0TW9udGgoKSAtMSwgZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgICBsZXQgY2RhdGUgPSBjdXJyZW50RGF0ZSgpO1xuICAgIGxldCBwZGF0ZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG5cbiAgICAgICAgbGV0IHllYXIgPSBjZGF0ZS55ZWFyO1xuICAgICAgICBsZXQgbW9udGggPSBjZGF0ZS5tb250aDtcbiAgICAgICAgbW9udGgrK1xuICAgICAgICBsZXQgZGF5ID0gY2RhdGUuZGF5IC0gKDIgLSBpKTtcblxuICAgICAgICAvLyB0aGlzIG1lYW5zIHRoYXQgd2Ugd2VudCBiYWNrIGEgbW9udGhcbiAgICAgICAgaWYgKGRheSA9PT0gcHJldmlvdXNNb250aERheXMpIHtcbiAgICAgICAgICAgIG1vbnRoLS07XG5cbiAgICAgICAgICAgIGlmIChtb250aCA8IDApIHsvLyB0aGlzIG1lYW5zIHdlIHdlbnQgYmFjayBhIHllYXJcbiAgICAgICAgICAgICAgICBtb250aCA9IDExXG4gICAgICAgICAgICAgICAgeWVhci0tO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAobW9udGggPCAxMCkgeyBtb250aCA9ICcwJyArIG1vbnRoIH07XG4gICAgICAgIGlmIChkYXkgPCAxMCkgeyBkYXkgPSAnMCcgKyBkYXkgfTtcblxuICAgICAgICBwZGF0ZXNbaV0gPSB7eWVhciwgbW9udGgsIGRheX07XG4gICAgfTtcbiAgICByZXR1cm4gcGRhdGVzO1xufTtcblxuXG5jb25zdCBmdXR1cmVEYXRlcyA9IGZ1bmN0aW9uIGdldEZ1dHVyZVR3b0RhdGVzKCkge1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBsZXQgbmV4dE1vbnRoRGF5cyA9IGRheXNJbk1vbnRoKGRhdGUuZ2V0TW9udGgoKSArMSwgZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgICBsZXQgY2RhdGUgPSBjdXJyZW50RGF0ZSgpO1xuICAgIGxldCBmZGF0ZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgIGxldCB5ZWFyID0gY2RhdGUueWVhcjtcbiAgICAgICAgbGV0IG1vbnRoID0gY2RhdGUubW9udGg7XG4gICAgICAgIG1vbnRoKys7XG4gICAgICAgIGxldCBkYXkgPSBjZGF0ZS5kYXkgKyAoMSArIGkpO1xuXG4gICAgICAgIFxuICAgICAgICAvLyB0aGlzIG1lYW5zIHRoYXQgd2Ugd2VudCBmb3J3YXJkIG9uZSBtb250aFxuICAgICAgICBpZiAoZGF5ID09PSAxKSB7XG4gICAgICAgICAgICBtb250aCsrO1xuXG4gICAgICAgICAgICBpZiAobW9udGggPT09IDEzKSB7Ly90aGlzIG1lYW5zIGl0IHdlbnQgdG8gbmV3IHllYXJcbiAgICAgICAgICAgICAgICBtb250aCA9IDE7XG4gICAgICAgICAgICAgICAgeWVhcisrO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuXG4gICAgICAgIGlmIChtb250aCA8IDEwKSB7IG1vbnRoID0gJzAnICsgbW9udGggfTtcbiAgICAgICAgaWYgKGRheSA8IDEwKSB7IGRheSA9ICcwJyArIGRheSB9O1xuXG4gICAgICAgIGZkYXRlc1tpXSA9IHt5ZWFyLCBtb250aCwgZGF5fTtcbiAgICB9O1xuICAgIHJldHVybiBmZGF0ZXM7XG59O1xuXG5cblxuXG5leHBvcnQgeyBjdXJyZW50RGF0ZSwgcGFzdERhdGVzLCBmdXR1cmVEYXRlcyB9OyIsIi8vXG5cbmltcG9ydCB7IHJlbmRlcldlYXRoZXIgfSBmcm9tIFwiLi9oYW5kbGVET01cIjtcblxuY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSBzZWxlY3QnKTtcbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSBpbnB1dCcpO1xuY29uc3QgZXJyTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSBzcGFuLmVycicpO1xuaW5wdXQudmFsdWUgPSAnJztcblxuZnVuY3Rpb24gZGlzcGxheUVycm9yKCkge1xuICAgIGlucHV0LnNldEN1c3RvbVZhbGlkaXR5KCdQbGVhc2UgRW50ZXIgVmFsaWQgVmFsdWUnKTtcbiAgICBlcnJNc2cuaW5uZXJUZXh0ID0gaW5wdXQudmFsaWRhdGlvbk1lc3NhZ2U7XG59O1xuXG5mdW5jdGlvbiByZW1vdmVFcnJvcigpIHtcbiAgICBpbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG4gICAgZXJyTXNnLmlubmVyVGV4dCA9IGlucHV0LnZhbGlkYXRpb25NZXNzYWdlO1xufTtcblxuZnVuY3Rpb24gdXNaaXBWYWxpZGF0aW9uKHZhbHVlKSB7XG4gICAgLy8gbWFrZSBzdXJlIHZhbHVlIGlzIHJlYWwgdXMgemlwIGJlZm9yZSBzZW5kaW5nIGFwaSByZXF1ZXN0XG4gICAgbGV0IGlzVmFsaWRaaXAgPSAvKF5cXGR7NX0kKXwoXlxcZHs1fS1cXGR7NH0kKS8udGVzdCh2YWx1ZSk7XG4gICAgcmV0dXJuIGlzVmFsaWRaaXA7XG59O1xuXG5mdW5jdGlvbiBjYW5hZGlhblBvc3RhbFZhbGlkYXRpb24odmFsdWUpIHtcbiAgICAvLyBtYWtlIHN1cmUgdmFsdWUgaXMgcmVhbCBjYW5hZGlhbiBwb3N0YWwgY29kZSBiZWZvcmUgc2VuZGluZyBhcGkgcmVxdWVzdFxuICAgIGxldCBpc1ZhbGlkQ29kZSA9IC9eW0FCQ0VHSEotTlBSU1RWWFldXFxkW0FCQ0VHSEotTlBSU1RWLVpdWyAtXT9cXGRbQUJDRUdISi1OUFJTVFYtWl1cXGQkL2kudGVzdCh2YWx1ZSk7XG4gICAgcmV0dXJuIGlzVmFsaWRDb2RlO1xufTtcblxuZnVuY3Rpb24gdmFsaWRhdGUoKSB7XG4gICAgbGV0IHZhbGlkID0gdHJ1ZTtcblxuICAgIGlmIChzZWxlY3QudmFsdWUgPT09ICd1cy16aXAnKSB7XG4gICAgICAgIHZhbGlkID0gdXNaaXBWYWxpZGF0aW9uKGlucHV0LnZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdC52YWx1ZSA9PT0gJ2NhLXBvc3RhbCcpIHtcbiAgICAgICAgdmFsaWQgPSBjYW5hZGlhblBvc3RhbFZhbGlkYXRpb24oaW5wdXQudmFsdWUpO1xuICAgIH07XG5cbiAgICBpZiAodmFsaWQpIHtcbiAgICAgICAgcmVtb3ZlRXJyb3IoKTtcbiAgICAgICAgcmVuZGVyV2VhdGhlcihpbnB1dC52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGlzcGxheUVycm9yKCk7XG4gICAgfTtcblxuICAgIHJldHVybiB2YWxpZDtcbn07XG5cbmV4cG9ydCB7IHZhbGlkYXRlIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTA0NzUxYTk2ZDM3ZDQ2ZmFhYzIyMDExMDgyNDIwMDEmcT1QYXJpc1xuLy8gaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9MDQ3NTFhOTZkMzdkNDZmYWFjMjIwMTEwODI0MjAwMSZxPVBhcmlzJmRheXM9M1xuLy8gaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0wNDc1MWE5NmQzN2Q0NmZhYWMyMjAxMTA4MjQyMDAxJnE9YXV0bzppcFxuLy8gaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvaGlzdG9yeS5qc29uP2tleT0wNDc1MWE5NmQzN2Q0NmZhYWMyMjAxMTA4MjQyMDAxJnE9YXV0bzppcCZkdD0yMDIzLTA4LTEwXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGN1cnJlbnREYXRlLCBwYXN0RGF0ZXMsIGZ1dHVyZURhdGVzIH0gZnJvbSAnLi9oYW5kbGVEYXRlcy5qcyc7XG5pbXBvcnQgeyBkZWZhdWx0VmlldywgY2hhbmdlRGVncmVlcywgcmVuZGVyV2VhdGhlciB9IGZyb20gJy4vaGFuZGxlRE9NLmpzJztcbmltcG9ydCB7IHZhbGlkYXRlIH0gZnJvbSAnLi9oYW5kbGVGT1JNLmpzJztcblxuLy8gcnVuIHZpZXcgd2l0aCB1c2VycyBpcCBhZGRyZXNzIGFzIGxvY2F0aW9uIGJ5IGRlZmF1bHRcbnJlbmRlcldlYXRoZXIoJ2F1dG86aXAnKTtcblxuY29uc3QgdG9nZ2xlU3dpdGNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXRjaCcpO1xudG9nZ2xlU3dpdGNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjaGFuZ2VEZWdyZWVzKCk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmV0dXJuIGZhbHNlO1xufSk7XG5cblxuY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nJyk7XG5jb25zdCBkaWFsb2dCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Blbi1kaWFsb2cnKTtcbmRpYWxvZ0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZGlhbG9nLnNob3dNb2RhbCgpO1xufSk7XG5cblxuY29uc3QgZXhpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leGl0LWJ0bicpO1xuZXhpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZGlhbG9nLmNsb3NlKCk7XG59KTtcblxuXG5jb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtID4gYnV0dG9uJyk7XG5zdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICh2YWxpZGF0ZSgpKSB7IGRpYWxvZy5jbG9zZSgpIH07XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=