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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n:root {\n    --BG-COLOR: #081e33;\n    --FG-COLOR: #8dc4e9;\n    --HOVER-COLOR: #a5d9fc;\n}\n\nbody {\n    min-height: 100vh;\n    padding: 10px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n\n    color: var(--FG-COLOR);\n    background-color: var(--BG-COLOR);\n}\n\n.header {\n    height: 90px;\n    width: 100%;\n    padding: 20px;\n    margin-bottom: 20px;\n\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    position: absolute;\n    top: 0px;\n\n    border-bottom: 5px solid var(--FG-COLOR);\n    background-color: var(--BG-COLOR);\n}\n.header h1 {\n    user-select: none;\n    color: var(--FG-COLOR);\n}\n.header .buttons-container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n}\n.header .buttons-container .open-dialog {\n    height: 40px;\n    width: 40px;\n    background-color: var(--FG-COLOR);\n    border: none;\n    border-radius: 10px;\n}\n.header .buttons-container .open-dialog:hover {\n    filter: brightness(115%);\n}\n.header .buttons-container .switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n}\n.header .buttons-container .switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n.header .buttons-container .switch .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: var(--BG-COLOR);\n    transition: 0.4s;\n    box-shadow: 0 0 1px white;\n    border-radius: 10px;\n}\n.header .buttons-container .switch .slider .label {\n    position: absolute;\n    font-size: .8rem;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    color: var(--BG-COLOR);\n    background-color: white;\n    transition: 0.4s;\n    border-radius: 10px;\n}\n.header .buttons-container .switch input:checked + .slider {\n    background-color: var(--FG-COLOR);\n}\n.header .buttons-container .switch input:checked + .slider .label {\n    transform: translateX(26px);\n}\n\n\n\n.container {\n    min-height: 100vh;\n    width: 100%;\n\n    margin-top: 90px;\n\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n.container img {\n    height: auto;\n    width: 64px;\n}\n.container .main-container {\n    padding: 20px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    gap: 50px;\n\n    border-radius: 10px;\n}\n.container .main-container > .temp-data {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    gap: 10px;\n}\n.card-container {\n    flex-wrap: wrap;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n.card-container .card {\n    height: auto;\n    min-width: 230px;\n    padding: 10px;\n\n    flex-wrap: wrap;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    gap: 25px;\n\n    border: 1px solid var(--FG-COLOR);\n    border-radius: 10px;\n}\n.card-container .card > div {\n    padding: 20px;\n}\n.card-container .card div > h1,\n.card-container .card div > p {\n    white-space: nowrap;\n    font-weight: bolder;\n}\n.card-container .card.today {\n    border: 3px solid var(--FG-COLOR);\n}\n.card-container .card .main-data {\n    height: 100%;\n}\n.card-container .card .temp-data {\n    height: 100%;\n\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: space-between;\n    gap: 10px;\n}\n\n\ndialog {\n    height: 500px;\n\n    margin: auto;\n    padding: 35px 20px 20px 20px;\n\n    color: var(--FG-COLOR);\n    background-color: var(--BG-COLOR);\n    border-radius: 10px;\n}\ndialog .exit-btn {\n    height: 20px;\n    width: 20px;\n    cursor: pointer;\n\n    position: absolute;\n    top: 10px;\n    right: 10px;\n\n    background-color: var(--FG-COLOR);\n    border: none;\n    border-radius: 5px;\n}\ndialog::backdrop {\n    background-color: rgba(0, 0, 0, 0.5);\n}\ndialog h1 {\n    margin-bottom: 20px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\nform {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n}\nform ul {\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    gap: 10px;\n}\nform ul li {\n    width: 100%;\n\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 20px;\n}\nform label {\n    white-space: nowrap;\n}\nform input,\nform select {\n    width: 100%;\n    padding: 5px;\n}\ninput:invalid {\n    border: 2px solid lightcoral;\n}\nform .err {\n    color: lightcoral;\n}\nform button {\n    width: 100%;\n    padding: 5px 10px;\n}\n\n@media only screen and (max-width: 710px) {\n    .container .card-container {\n        width: 100%;\n        gap: 20px;\n    }\n    .container .card-container .card {\n        height: auto;\n        width: 100%;\n\n        flex-direction: column;\n        align-items: flex-start;\n        gap: 20px;\n    }\n    .container .card-container .card > div {\n        width: 100%;\n    }\n}\n\n@media only screen and (min-width: 1000px) {\n    .container .card-container .card {\n        width: 400px;\n    };\n}\n"],"sourceRoot":""}]);
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


/*----------------------------------------------------------------------------------------------
default view will use the ip address as location and get the weather for the
two past days along with the current day and two future days.
----------------------------------------------------------------------------------------------*/

const container = document.querySelector('.container');
const mainContainer = document.querySelector('.container > .main-container');
const cardContainer = document.querySelector('.container > .card-container');

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
    cardContainer.innerHTML = '';

    data = await Promise.resolve((0,_fetchData__WEBPACK_IMPORTED_MODULE_0__.fetchData)(query));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxZQUFZLFVBQVUsWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxhQUFhLFdBQVcsWUFBWSxjQUFjLGFBQWEsWUFBWSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxjQUFjLFdBQVcsWUFBWSxjQUFjLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxTQUFTLEtBQUssWUFBWSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFlBQVksWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksWUFBWSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsWUFBWSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFdBQVcsVUFBVSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxZQUFZLFdBQVcsV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFVBQVUsV0FBVyw0QkFBNEIsaUJBQWlCLGdCQUFnQiw2QkFBNkIsMEpBQTBKLEdBQUcsV0FBVywwQkFBMEIsMEJBQTBCLDZCQUE2QixHQUFHLFVBQVUsd0JBQXdCLG9CQUFvQixzQkFBc0IsNkJBQTZCLDBCQUEwQixrQ0FBa0MsK0JBQStCLHdDQUF3QyxHQUFHLGFBQWEsbUJBQW1CLGtCQUFrQixvQkFBb0IsMEJBQTBCLHNCQUFzQiwwQkFBMEIscUNBQXFDLDJCQUEyQixlQUFlLGlEQUFpRCx3Q0FBd0MsR0FBRyxjQUFjLHdCQUF3Qiw2QkFBNkIsR0FBRyw4QkFBOEIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsZ0JBQWdCLEdBQUcsMkNBQTJDLG1CQUFtQixrQkFBa0Isd0NBQXdDLG1CQUFtQiwwQkFBMEIsR0FBRyxpREFBaUQsK0JBQStCLEdBQUcsc0NBQXNDLHlCQUF5Qiw0QkFBNEIsa0JBQWtCLG1CQUFtQixHQUFHLDRDQUE0QyxpQkFBaUIsZUFBZSxnQkFBZ0IsR0FBRyw4Q0FBOEMseUJBQXlCLHNCQUFzQixhQUFhLGNBQWMsZUFBZSxnQkFBZ0Isd0NBQXdDLHVCQUF1QixnQ0FBZ0MsMEJBQTBCLEdBQUcscURBQXFELHlCQUF5Qix1QkFBdUIsc0JBQXNCLDBCQUEwQiw4QkFBOEIscUJBQXFCLGtCQUFrQixnQkFBZ0Isa0JBQWtCLDZCQUE2Qiw4QkFBOEIsdUJBQXVCLDBCQUEwQixHQUFHLDhEQUE4RCx3Q0FBd0MsR0FBRyxxRUFBcUUsa0NBQWtDLEdBQUcsb0JBQW9CLHdCQUF3QixrQkFBa0IseUJBQXlCLHNCQUFzQiw2QkFBNkIsZ0JBQWdCLEdBQUcsa0JBQWtCLG1CQUFtQixrQkFBa0IsR0FBRyw4QkFBOEIsb0JBQW9CLHNCQUFzQiw2QkFBNkIsOEJBQThCLDhCQUE4QixnQkFBZ0IsNEJBQTRCLEdBQUcsMkNBQTJDLG9CQUFvQiw2QkFBNkIsOEJBQThCLDhCQUE4QixnQkFBZ0IsR0FBRyxtQkFBbUIsc0JBQXNCLG9CQUFvQiwwQkFBMEIscUNBQXFDLEdBQUcseUJBQXlCLG1CQUFtQix1QkFBdUIsb0JBQW9CLHdCQUF3QixvQkFBb0IsNkJBQTZCLDBCQUEwQixxQ0FBcUMsZ0JBQWdCLDBDQUEwQywwQkFBMEIsR0FBRywrQkFBK0Isb0JBQW9CLEdBQUcsa0VBQWtFLDBCQUEwQiwwQkFBMEIsR0FBRywrQkFBK0Isd0NBQXdDLEdBQUcsb0NBQW9DLG1CQUFtQixHQUFHLG9DQUFvQyxtQkFBbUIsc0JBQXNCLDZCQUE2Qiw4QkFBOEIscUNBQXFDLGdCQUFnQixHQUFHLGNBQWMsb0JBQW9CLHFCQUFxQixtQ0FBbUMsK0JBQStCLHdDQUF3QywwQkFBMEIsR0FBRyxvQkFBb0IsbUJBQW1CLGtCQUFrQixzQkFBc0IsMkJBQTJCLGdCQUFnQixrQkFBa0IsMENBQTBDLG1CQUFtQix5QkFBeUIsR0FBRyxvQkFBb0IsMkNBQTJDLEdBQUcsYUFBYSwwQkFBMEIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsR0FBRyxRQUFRLG9CQUFvQiw2QkFBNkIsMEJBQTBCLDhCQUE4QixnQkFBZ0IsR0FBRyxXQUFXLHVCQUF1QixvQkFBb0IsNkJBQTZCLDhCQUE4Qiw4QkFBOEIsZ0JBQWdCLEdBQUcsY0FBYyxrQkFBa0Isc0JBQXNCLDBCQUEwQixxQ0FBcUMsZ0JBQWdCLEdBQUcsY0FBYywwQkFBMEIsR0FBRyw0QkFBNEIsa0JBQWtCLG1CQUFtQixHQUFHLGlCQUFpQixtQ0FBbUMsR0FBRyxhQUFhLHdCQUF3QixHQUFHLGVBQWUsa0JBQWtCLHdCQUF3QixHQUFHLCtDQUErQyxrQ0FBa0Msc0JBQXNCLG9CQUFvQixPQUFPLHdDQUF3Qyx1QkFBdUIsc0JBQXNCLG1DQUFtQyxrQ0FBa0Msb0JBQW9CLE9BQU8sOENBQThDLHNCQUFzQixPQUFPLEdBQUcsZ0RBQWdELHdDQUF3Qyx1QkFBdUIsUUFBUSxHQUFHLHFCQUFxQjtBQUN4bFE7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNyUzFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNib0U7O0FBRXBFO0FBQ0EsaUJBQWlCLHVEQUFTO0FBQzFCLGlCQUFpQix5REFBVztBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EscUdBQXFHLE1BQU07QUFDM0c7O0FBRUEsb0JBQW9CLE9BQU87QUFDM0Isd0dBQXdHLE1BQU0sTUFBTSxlQUFlLEdBQUcsZ0JBQWdCLEdBQUcsY0FBYztBQUN2Syx5R0FBeUcsTUFBTSxNQUFNLGVBQWUsR0FBRyxnQkFBZ0IsR0FBRyxjQUFjO0FBQ3hLOztBQUVBLHFDQUFxQyxZQUFZO0FBQ2pELHFDQUFxQyxZQUFZO0FBQ2pELGlDQUFpQyxZQUFZO0FBQzdDLHFDQUFxQyxZQUFZO0FBQ2pELHFDQUFxQyxZQUFZOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkV3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQsa0NBQWtDLEVBQUUsT0FBTztBQUNoRyxrQkFBa0I7QUFDbEIsa0RBQWtELGtDQUFrQyxFQUFFLE9BQU87QUFDN0Ysa0JBQWtCO0FBQ2xCLGlEQUFpRCxrQ0FBa0MsRUFBRSxPQUFPO0FBQzVGO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLHFEQUFTOztBQUUxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixzQkFBc0IsRUFBRSxZQUFZLEVBQUUsV0FBVztBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELDhCQUE4QixFQUFFLE9BQU87QUFDeEY7QUFDQTtBQUNBO0FBQ0EsOENBQThDLDhCQUE4QixFQUFFLE9BQU87O0FBRXJGO0FBQ0E7QUFDQSw2Q0FBNkMsOEJBQThCLEVBQUUsT0FBTztBQUNwRjtBQUNBO0FBQ0E7QUFDQSxzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msc0JBQXNCLEVBQUUsWUFBWSxFQUFFLFdBQVc7O0FBRWpGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscURBQXFELDhCQUE4QixFQUFFLE9BQU87O0FBRTVGO0FBQ0E7QUFDQSwrQ0FBK0MsOEJBQThCLEVBQUUsT0FBTzs7QUFFdEY7QUFDQTtBQUNBLDZDQUE2Qyw4QkFBOEIsRUFBRSxPQUFPOztBQUVwRjtBQUNBO0FBQ0Esc0RBQXNELHFCQUFxQjs7QUFFM0U7QUFDQTtBQUNBLHNEQUFzRCxxQkFBcUI7O0FBRTNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9NQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsT0FBTzs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEI7QUFDMUIsd0JBQXdCOztBQUV4QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsMEJBQTBCO0FBQzFCLHdCQUF3Qjs7QUFFeEIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RUE7O0FBRTRDOztBQUU1QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtBQUM3QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEseURBQWE7QUFDckIsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7VUNoREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDcUI7QUFDa0Q7QUFDSTtBQUNoQzs7QUFFM0M7QUFDQSw0REFBYTs7QUFFYjtBQUNBO0FBQ0EsSUFBSSw0REFBYTs7QUFFakI7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBOztBQUVBLFFBQVEsd0RBQVEsTUFBTTtBQUN0QixDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kaWFsb2cvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2RpYWxvZy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZGlhbG9nLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZGlhbG9nLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2RpYWxvZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9kaWFsb2cvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2RpYWxvZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9kaWFsb2cvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZGlhbG9nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZGlhbG9nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZGlhbG9nLy4vc3JjL2ZldGNoRGF0YS5qcyIsIndlYnBhY2s6Ly9kaWFsb2cvLi9zcmMvaGFuZGxlRE9NLmpzIiwid2VicGFjazovL2RpYWxvZy8uL3NyYy9oYW5kbGVEYXRlcy5qcyIsIndlYnBhY2s6Ly9kaWFsb2cvLi9zcmMvaGFuZGxlRk9STS5qcyIsIndlYnBhY2s6Ly9kaWFsb2cvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGlhbG9nL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2RpYWxvZy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGlhbG9nL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGlhbG9nL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGlhbG9nL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9kaWFsb2cvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xufVxuXG46cm9vdCB7XG4gICAgLS1CRy1DT0xPUjogIzA4MWUzMztcbiAgICAtLUZHLUNPTE9SOiAjOGRjNGU5O1xuICAgIC0tSE9WRVItQ09MT1I6ICNhNWQ5ZmM7XG59XG5cbmJvZHkge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cbiAgICBjb2xvcjogdmFyKC0tRkctQ09MT1IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJHLUNPTE9SKTtcbn1cblxuLmhlYWRlciB7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG5cbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdmFyKC0tRkctQ09MT1IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJHLUNPTE9SKTtcbn1cbi5oZWFkZXIgaDEge1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XG59XG4uaGVhZGVyIC5idXR0b25zLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMjBweDtcbn1cbi5oZWFkZXIgLmJ1dHRvbnMtY29udGFpbmVyIC5vcGVuLWRpYWxvZyB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUZHLUNPTE9SKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5oZWFkZXIgLmJ1dHRvbnMtY29udGFpbmVyIC5vcGVuLWRpYWxvZzpob3ZlciB7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDExNSUpO1xufVxuLmhlYWRlciAuYnV0dG9ucy1jb250YWluZXIgLnN3aXRjaCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDM0cHg7XG59XG4uaGVhZGVyIC5idXR0b25zLWNvbnRhaW5lciAuc3dpdGNoIGlucHV0IHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbn1cbi5oZWFkZXIgLmJ1dHRvbnMtY29udGFpbmVyIC5zd2l0Y2ggLnNsaWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQkctQ09MT1IpO1xuICAgIHRyYW5zaXRpb246IDAuNHM7XG4gICAgYm94LXNoYWRvdzogMCAwIDFweCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmhlYWRlciAuYnV0dG9ucy1jb250YWluZXIgLnN3aXRjaCAuc2xpZGVyIC5sYWJlbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtc2l6ZTogLjhyZW07XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBoZWlnaHQ6IDI2cHg7XG4gICAgd2lkdGg6IDI2cHg7XG4gICAgbGVmdDogNHB4O1xuICAgIGJvdHRvbTogNHB4O1xuICAgIGNvbG9yOiB2YXIoLS1CRy1DT0xPUik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgdHJhbnNpdGlvbjogMC40cztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmhlYWRlciAuYnV0dG9ucy1jb250YWluZXIgLnN3aXRjaCBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tRkctQ09MT1IpO1xufVxuLmhlYWRlciAuYnV0dG9ucy1jb250YWluZXIgLnN3aXRjaCBpbnB1dDpjaGVja2VkICsgLnNsaWRlciAubGFiZWwge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbn1cblxuXG5cbi5jb250YWluZXIge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgbWFyZ2luLXRvcDogOTBweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDIwcHg7XG59XG4uY29udGFpbmVyIGltZyB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA2NHB4O1xufVxuLmNvbnRhaW5lciAubWFpbi1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiA1MHB4O1xuXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5jb250YWluZXIgLm1haW4tY29udGFpbmVyID4gLnRlbXAtZGF0YSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbn1cbi5jYXJkLWNvbnRhaW5lciB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uY2FyZC1jb250YWluZXIgLmNhcmQge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtaW4td2lkdGg6IDIzMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogMjVweDtcblxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLUZHLUNPTE9SKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmNhcmQtY29udGFpbmVyIC5jYXJkID4gZGl2IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuLmNhcmQtY29udGFpbmVyIC5jYXJkIGRpdiA+IGgxLFxuLmNhcmQtY29udGFpbmVyIC5jYXJkIGRpdiA+IHAge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cbi5jYXJkLWNvbnRhaW5lciAuY2FyZC50b2RheSB7XG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tRkctQ09MT1IpO1xufVxuLmNhcmQtY29udGFpbmVyIC5jYXJkIC5tYWluLWRhdGEge1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi5jYXJkLWNvbnRhaW5lciAuY2FyZCAudGVtcC1kYXRhIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogMTBweDtcbn1cblxuXG5kaWFsb2cge1xuICAgIGhlaWdodDogNTAwcHg7XG5cbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogMzVweCAyMHB4IDIwcHggMjBweDtcblxuICAgIGNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQkctQ09MT1IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5kaWFsb2cgLmV4aXQtYnRuIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICByaWdodDogMTBweDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUZHLUNPTE9SKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuZGlhbG9nOjpiYWNrZHJvcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuZGlhbG9nIGgxIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbn1cbmZvcm0gdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbn1cbmZvcm0gdWwgbGkge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDIwcHg7XG59XG5mb3JtIGxhYmVsIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuZm9ybSBpbnB1dCxcbmZvcm0gc2VsZWN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5pbnB1dDppbnZhbGlkIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGNvcmFsO1xufVxuZm9ybSAuZXJyIHtcbiAgICBjb2xvcjogbGlnaHRjb3JhbDtcbn1cbmZvcm0gYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MTBweCkge1xuICAgIC5jb250YWluZXIgLmNhcmQtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGdhcDogMjBweDtcbiAgICB9XG4gICAgLmNvbnRhaW5lciAuY2FyZC1jb250YWluZXIgLmNhcmQge1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICBnYXA6IDIwcHg7XG4gICAgfVxuICAgIC5jb250YWluZXIgLmNhcmQtY29udGFpbmVyIC5jYXJkID4gZGl2IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xuICAgIC5jb250YWluZXIgLmNhcmQtY29udGFpbmVyIC5jYXJkIHtcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgIH07XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjtJQUN0QixtSkFBbUo7QUFDdko7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhOztJQUViLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDJCQUEyQjs7SUFFM0Isc0JBQXNCO0lBQ3RCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjs7SUFFbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7O0lBRTlCLGtCQUFrQjtJQUNsQixRQUFROztJQUVSLHdDQUF3QztJQUN4QyxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsUUFBUTtJQUNSLFNBQVM7QUFDYjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCOztJQUVoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1Qjs7SUFFdkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0lBQ1QsV0FBVztJQUNYLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7Ozs7QUFJQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXOztJQUVYLGdCQUFnQjs7SUFFaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7O0lBRWIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLFNBQVM7O0lBRVQsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsU0FBUztBQUNiO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTs7SUFFYixlQUFlO0lBQ2YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFNBQVM7O0lBRVQsaUNBQWlDO0lBQ2pDLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBOztJQUVJLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTs7SUFFWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2Qiw4QkFBOEI7SUFDOUIsU0FBUztBQUNiOzs7QUFHQTtJQUNJLGFBQWE7O0lBRWIsWUFBWTtJQUNaLDRCQUE0Qjs7SUFFNUIsc0JBQXNCO0lBQ3RCLGlDQUFpQztJQUNqQyxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTs7SUFFZixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7O0lBRVgsaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsU0FBUztBQUNiO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksV0FBVzs7SUFFWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixTQUFTO0FBQ2I7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBOztJQUVJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztRQUNYLFNBQVM7SUFDYjtJQUNBO1FBQ0ksWUFBWTtRQUNaLFdBQVc7O1FBRVgsc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2QixTQUFTO0lBQ2I7SUFDQTtRQUNJLFdBQVc7SUFDZjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCLENBQUE7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1CRy1DT0xPUjogIzA4MWUzMztcXG4gICAgLS1GRy1DT0xPUjogIzhkYzRlOTtcXG4gICAgLS1IT1ZFUi1DT0xPUjogI2E1ZDlmYztcXG59XFxuXFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXFxuICAgIGNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJHLUNPTE9SKTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGhlaWdodDogOTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDBweDtcXG5cXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHZhcigtLUZHLUNPTE9SKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQkctQ09MT1IpO1xcbn1cXG4uaGVhZGVyIGgxIHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XFxufVxcbi5oZWFkZXIgLmJ1dHRvbnMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuLmhlYWRlciAuYnV0dG9ucy1jb250YWluZXIgLm9wZW4tZGlhbG9nIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tRkctQ09MT1IpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5oZWFkZXIgLmJ1dHRvbnMtY29udGFpbmVyIC5vcGVuLWRpYWxvZzpob3ZlciB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMTUlKTtcXG59XFxuLmhlYWRlciAuYnV0dG9ucy1jb250YWluZXIgLnN3aXRjaCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiAzNHB4O1xcbn1cXG4uaGVhZGVyIC5idXR0b25zLWNvbnRhaW5lciAuc3dpdGNoIGlucHV0IHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG59XFxuLmhlYWRlciAuYnV0dG9ucy1jb250YWluZXIgLnN3aXRjaCAuc2xpZGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQkctQ09MT1IpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uaGVhZGVyIC5idXR0b25zLWNvbnRhaW5lciAuc3dpdGNoIC5zbGlkZXIgLmxhYmVsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmb250LXNpemU6IC44cmVtO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgaGVpZ2h0OiAyNnB4O1xcbiAgICB3aWR0aDogMjZweDtcXG4gICAgbGVmdDogNHB4O1xcbiAgICBib3R0b206IDRweDtcXG4gICAgY29sb3I6IHZhcigtLUJHLUNPTE9SKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5oZWFkZXIgLmJ1dHRvbnMtY29udGFpbmVyIC5zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XFxufVxcbi5oZWFkZXIgLmJ1dHRvbnMtY29udGFpbmVyIC5zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIgLmxhYmVsIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbn1cXG5cXG5cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBtYXJnaW4tdG9wOiA5MHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcbi5jb250YWluZXIgaW1nIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogNjRweDtcXG59XFxuLmNvbnRhaW5lciAubWFpbi1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNTBweDtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLmNvbnRhaW5lciAubWFpbi1jb250YWluZXIgPiAudGVtcC1kYXRhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbi5jYXJkLWNvbnRhaW5lciB7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uY2FyZC1jb250YWluZXIgLmNhcmQge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1pbi13aWR0aDogMjMwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDI1cHg7XFxuXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLUZHLUNPTE9SKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLmNhcmQtY29udGFpbmVyIC5jYXJkID4gZGl2IHtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuLmNhcmQtY29udGFpbmVyIC5jYXJkIGRpdiA+IGgxLFxcbi5jYXJkLWNvbnRhaW5lciAuY2FyZCBkaXYgPiBwIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuLmNhcmQtY29udGFpbmVyIC5jYXJkLnRvZGF5IHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tRkctQ09MT1IpO1xcbn1cXG4uY2FyZC1jb250YWluZXIgLmNhcmQgLm1haW4tZGF0YSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuLmNhcmQtY29udGFpbmVyIC5jYXJkIC50ZW1wLWRhdGEge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuXFxuZGlhbG9nIHtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG5cXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBwYWRkaW5nOiAzNXB4IDIwcHggMjBweCAyMHB4O1xcblxcbiAgICBjb2xvcjogdmFyKC0tRkctQ09MT1IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CRy1DT0xPUik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbmRpYWxvZyAuZXhpdC1idG4ge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICByaWdodDogMTBweDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tRkctQ09MT1IpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuZGlhbG9nOjpiYWNrZHJvcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuZGlhbG9nIGgxIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5mb3JtIHVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbmZvcm0gdWwgbGkge1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcbmZvcm0gbGFiZWwge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5mb3JtIGlucHV0LFxcbmZvcm0gc2VsZWN0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuaW5wdXQ6aW52YWxpZCB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Y29yYWw7XFxufVxcbmZvcm0gLmVyciB7XFxuICAgIGNvbG9yOiBsaWdodGNvcmFsO1xcbn1cXG5mb3JtIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MTBweCkge1xcbiAgICAuY29udGFpbmVyIC5jYXJkLWNvbnRhaW5lciB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGdhcDogMjBweDtcXG4gICAgfVxcbiAgICAuY29udGFpbmVyIC5jYXJkLWNvbnRhaW5lciAuY2FyZCB7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgICAgIGdhcDogMjBweDtcXG4gICAgfVxcbiAgICAuY29udGFpbmVyIC5jYXJkLWNvbnRhaW5lciAuY2FyZCA+IGRpdiB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xcbiAgICAuY29udGFpbmVyIC5jYXJkLWNvbnRhaW5lciAuY2FyZCB7XFxuICAgICAgICB3aWR0aDogNDAwcHg7XFxuICAgIH07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjdXJyZW50RGF0ZSwgcGFzdERhdGVzLCBmdXR1cmVEYXRlcyB9IGZyb20gXCIuL2hhbmRsZURhdGVzXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YShxdWVyeSkge1xuICAgIGxldCBwZGF0ZXMgPSBwYXN0RGF0ZXMoKTtcbiAgICBsZXQgZmRhdGVzID0gZnV0dXJlRGF0ZXMoKTtcbiAgICBsZXQgd2VhdGhlckRhdGEgPSBbXTtcblxuICAgIGNvbnN0IHB1c2hEYXRhID0gKG9iamVjdCwgbG9jYXRpb24pID0+IHtcbiAgICAgICAgbGV0IGNvdW50cnkgPSBsb2NhdGlvbi5jb3VudHJ5O1xuICAgICAgICBsZXQgY2l0eSA9IGxvY2F0aW9uLm5hbWU7XG5cbiAgICAgICAgbGV0IGRheSA9IG9iamVjdC5kYXRlO1xuICAgICAgICBsZXQgaWNvbiA9IG9iamVjdC5kYXkuY29uZGl0aW9uLmljb247XG4gICAgICAgIGxldCBjb25kaXRpb24gPSBvYmplY3QuZGF5LmNvbmRpdGlvbi50ZXh0O1xuICAgICAgICBsZXQgYXZnVGVtcENlbHNpdXMgPSBvYmplY3QuZGF5LmF2Z3RlbXBfYztcbiAgICAgICAgbGV0IG1heFRlbXBDZWxzaXVzID0gb2JqZWN0LmRheS5tYXh0ZW1wX2M7XG4gICAgICAgIGxldCBtaW5UZW1wQ2Vsc2l1cyA9IG9iamVjdC5kYXkubWludGVtcF9jO1xuICAgICAgICBsZXQgYXZnVGVtcEZhcmVuaGVpdCA9IG9iamVjdC5kYXkuYXZndGVtcF9mO1xuICAgICAgICBsZXQgbWF4VGVtcEZhcmVuaGVpdCA9IG9iamVjdC5kYXkubWF4dGVtcF9mO1xuICAgICAgICBsZXQgbWluVGVtcEZhcmVuaGVpdCA9IG9iamVjdC5kYXkubWludGVtcF9mO1xuICAgICAgICBsZXQgY2hhbmNlT2ZSYWluID0gb2JqZWN0LmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbjtcbiAgICAgICAgbGV0IGNoYW5jZU9mU25vdyA9IG9iamVjdC5kYXkuZGFpbHlfY2hhbmNlX29mX3Nub3c7XG5cbiAgICAgICAgd2VhdGhlckRhdGEucHVzaCh7XG4gICAgICAgICAgICBjb3VudHJ5LFxuICAgICAgICAgICAgY2l0eSxcbiAgICAgICAgICAgIGRheSxcbiAgICAgICAgICAgIGljb24sXG4gICAgICAgICAgICBjb25kaXRpb24sXG4gICAgICAgICAgICBhdmdUZW1wQ2Vsc2l1cyxcbiAgICAgICAgICAgIG1heFRlbXBDZWxzaXVzLFxuICAgICAgICAgICAgbWluVGVtcENlbHNpdXMsXG4gICAgICAgICAgICBhdmdUZW1wRmFyZW5oZWl0LFxuICAgICAgICAgICAgbWF4VGVtcEZhcmVuaGVpdCxcbiAgICAgICAgICAgIG1pblRlbXBGYXJlbmhlaXQsXG4gICAgICAgICAgICBjaGFuY2VPZlJhaW4sXG4gICAgICAgICAgICBjaGFuY2VPZlNub3dcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGxldCBwbGlua3MgPSBbXTtcbiAgICBsZXQgY2xpbmsgPSBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9MDQ3NTFhOTZkMzdkNDZmYWFjMjIwMTEwODI0MjAwMSZxPSR7cXVlcnl9YDtcbiAgICBsZXQgZmxpbmtzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgICBwbGlua3MucHVzaChgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvaGlzdG9yeS5qc29uP2tleT0wNDc1MWE5NmQzN2Q0NmZhYWMyMjAxMTA4MjQyMDAxJnE9JHtxdWVyeX0mZHQ9JHtwZGF0ZXNbaV0ueWVhcn0tJHtwZGF0ZXNbaV0ubW9udGh9LSR7cGRhdGVzW2ldLmRheX1gKTtcbiAgICAgICAgZmxpbmtzLnB1c2goYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTA0NzUxYTk2ZDM3ZDQ2ZmFhYzIyMDExMDgyNDIwMDEmcT0ke3F1ZXJ5fSZkdD0ke2ZkYXRlc1tpXS55ZWFyfS0ke2ZkYXRlc1tpXS5tb250aH0tJHtmZGF0ZXNbaV0uZGF5fWApO1xuICAgIH07XG5cbiAgICBsZXQgcHJvbWlzZTEgPSBmZXRjaChwbGlua3NbMF0sIHttb2RlOidjb3JzJ30pO1xuICAgIGxldCBwcm9taXNlMiA9IGZldGNoKHBsaW5rc1sxXSwge21vZGU6J2NvcnMnfSk7XG4gICAgbGV0IHByb21pc2UzID0gZmV0Y2goY2xpbmssIHttb2RlOidjb3JzJ30pO1xuICAgIGxldCBwcm9taXNlNCA9IGZldGNoKGZsaW5rc1swXSwge21vZGU6J2NvcnMnfSk7XG4gICAgbGV0IHByb21pc2U1ID0gZmV0Y2goZmxpbmtzWzFdLCB7bW9kZTonY29ycyd9KTtcblxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtwcm9taXNlMSwgcHJvbWlzZTIsIHByb21pc2UzLCBwcm9taXNlNCwgcHJvbWlzZTVdKVxuICAgIC50aGVuKGFzeW5jIChyZXN1bHRzKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgaW4gcmVzdWx0cykge1xuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5yZXNvbHZlKHJlc3VsdHNbaV0uanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oKHJlc29sdmVkKSA9PiB7XG4gICAgICAgICAgICAgICAgcHVzaERhdGEocmVzb2x2ZWQuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0sIHJlc29sdmVkLmxvY2F0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuXG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xufTtcblxuZXhwb3J0IHsgZmV0Y2hEYXRhIH07IiwiaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSBcIi4vZmV0Y2hEYXRhXCI7XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZGVmYXVsdCB2aWV3IHdpbGwgdXNlIHRoZSBpcCBhZGRyZXNzIGFzIGxvY2F0aW9uIGFuZCBnZXQgdGhlIHdlYXRoZXIgZm9yIHRoZVxudHdvIHBhc3QgZGF5cyBhbG9uZyB3aXRoIHRoZSBjdXJyZW50IGRheSBhbmQgdHdvIGZ1dHVyZSBkYXlzLlxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbmNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyID4gLm1haW4tY29udGFpbmVyJyk7XG5jb25zdCBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lciA+IC5jYXJkLWNvbnRhaW5lcicpO1xuXG5jb25zdCBkZWdyZWVMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2ggLnNsaWRlciA+IC5sYWJlbCcpO1xuY29uc3QgZGVncmVlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoID4gaW5wdXQnKTtcblxubGV0IGRhdGE7XG5sZXQgZGVncmVlcztcbmxldCBzeW1ib2w7XG5cbmRlZ3JlZUlucHV0LmNoZWNrZWQgPSBmYWxzZTtcbmRlZ3JlZUxhYmVsLmlubmVyVGV4dCA9ICfihIMnO1xuZGVncmVlcyA9ICdDZWxzaXVzJztcbnN5bWJvbCA9ICfihIMnO1xuXG5mdW5jdGlvbiBjaGFuZ2VEZWdyZWVzKCkge1xuICAgIGRlZ3JlZUlucHV0LmNoZWNrZWQgPT09IHRydWUgPyBkZWdyZWVJbnB1dC5jaGVja2VkID0gZmFsc2UgOiBkZWdyZWVJbnB1dC5jaGVja2VkID0gdHJ1ZTtcblxuICAgIGlmIChkZWdyZWVJbnB1dC5jaGVja2VkKSB7XG4gICAgICAgIGRlZ3JlZUxhYmVsLmlubmVyVGV4dCA9ICfihIknO1xuICAgICAgICBzeW1ib2wgPSAn4oSJJztcbiAgICAgICAgZGVncmVlcyA9ICdGYXJlbmhlaXQnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRlZ3JlZUxhYmVsLmlubmVyVGV4dCA9ICfihIMnO1xuICAgICAgICBzeW1ib2wgPSAn4oSDJztcbiAgICAgICAgZGVncmVlcyA9ICdDZWxzaXVzJztcbiAgICB9O1xuXG4gICAgY29uc3QgdXBkYXRlVGVtcERhdGEgPSAoKCkgPT4ge1xuICAgICAgICBsZXQgdGVtcERpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGVtcC1kYXRhJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRlbXBEaXZzKTtcblxuICAgICAgICB0ZW1wRGl2cy5mb3JFYWNoKGRpdiA9PiB7XG5cbiAgICAgICAgICAgIGxldCBjaGlsZHJlbiA9IFsuLi5kaXYuY2hpbGRyZW5dO1xuXG4gICAgICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGVsZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZWxlLnBhcmVudEVsZW1lbnQuZGF0YUF0dHJpYnV0ZTtcblxuICAgICAgICAgICAgICAgIGlmIChlbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdhdmVyYWdlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlLmlubmVySFRNTCA9IGBBdmVyYWdlOiA8YnI+ICR7ZGF0YVtpbmRleF1bJ2F2Z1RlbXAnICsgZGVncmVlc119ICR7c3ltYm9sfWA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWdoJykpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlLmlubmVySFRNTCA9IGBIaWdoOiA8YnI+ICR7ZGF0YVtpbmRleF1bJ21heFRlbXAnICsgZGVncmVlc119ICR7c3ltYm9sfWA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdsb3cnKSkge1xuICAgICAgICAgICAgICAgICAgICBlbGUuaW5uZXJIVE1MID0gYExvdzogPGJyPiAke2RhdGFbaW5kZXhdWydtaW5UZW1wJyArIGRlZ3JlZXNdfSAke3N5bWJvbH1gO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSkoKTtcbn07XG5cblxuZnVuY3Rpb24gZ2V0TW9udGgobnVtKSB7XG4gICAgbGV0IG51bWJlciA9IE51bWJlcihudW0pIC0gMTtcblxuICAgIGxldCBtb250aHMgPSBbXG4gICAgICAgICdKYW51cmFyeScsXG4gICAgICAgICdGZWJ1cmFyeScsXG4gICAgICAgICdNYXJjaCcsXG4gICAgICAgICdBcHJpbCcsXG4gICAgICAgICdNYXknLFxuICAgICAgICAnSnVuZScsXG4gICAgICAgICdKdWx5JyxcbiAgICAgICAgJ0F1Z3VzdCcsXG4gICAgICAgICdTZXB0ZW1iZXInLFxuICAgICAgICAnT2N0b2JlcicsXG4gICAgICAgICdOb3ZlbWJlcicsXG4gICAgICAgICdEZWNlbWJlcidcbiAgICBdO1xuXG4gICAgcmV0dXJuIG1vbnRoc1tudW1iZXJdO1xufTtcblxuXG5hc3luYyBmdW5jdGlvbiByZW5kZXJXZWF0aGVyKHF1ZXJ5KSB7XG4gICAgbWFpbkNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBjYXJkQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgZGF0YSA9IGF3YWl0IFByb21pc2UucmVzb2x2ZShmZXRjaERhdGEocXVlcnkpKTtcblxuICAgIGZvciAobGV0IGkgaW4gZGF0YSkge1xuICAgICAgICBpZiAoTnVtYmVyKGkpICE9PSAyKSB7XG5cbiAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG4gICAgXG4gICAgICAgICAgICBsZXQgbWFpbkRhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG1haW5EYXRhLmNsYXNzTGlzdC5hZGQoJ21haW4tZGF0YScpO1xuICAgIFxuICAgICAgICAgICAgbGV0IGRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKCdkYXRlJyk7XG4gICAgICAgICAgICBsZXQgZGF0ZWFyciA9IGRhdGFbaV0uZGF5LnNwbGl0KCctJyk7XG4gICAgICAgICAgICBkYXkuaW5uZXJUZXh0ID0gYCR7Z2V0TW9udGgoZGF0ZWFyclsxXSl9ICR7ZGF0ZWFyclsyXX0gJHtkYXRlYXJyWzBdfWA7XG4gICAgXG4gICAgICAgICAgICBsZXQgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgaWNvbi5zcmMgPSAnaHR0cHM6JyArIGRhdGFbaV0uaWNvbjtcbiAgICAgICAgICAgIGljb24uc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCAnZmFsc2UnKTtcbiAgICBcbiAgICAgICAgICAgIGxldCBjb25kaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBjb25kaXRpb24uaW5uZXJUZXh0ID0gZGF0YVtpXS5jb25kaXRpb247XG4gICAgXG4gICAgICAgICAgICBsZXQgdGVtcERhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRlbXBEYXRhLmRhdGFBdHRyaWJ1dGUgPSBOdW1iZXIoaSk7XG4gICAgICAgICAgICB0ZW1wRGF0YS5jbGFzc0xpc3QuYWRkKCd0ZW1wLWRhdGEnKTtcbiAgICBcbiAgICAgICAgICAgIGxldCBhdmdUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgYXZnVGVtcC5jbGFzc0xpc3QuYWRkKCdhdmVyYWdlJyk7XG4gICAgICAgICAgICBhdmdUZW1wLmlubmVySFRNTCA9IGBBdmVyYWdlOiA8YnI+ICR7ZGF0YVtpXVsnYXZnVGVtcCcgKyBkZWdyZWVzXX0gJHtzeW1ib2x9YDtcbiAgICBcbiAgICAgICAgICAgIGxldCBtYXhUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgbWF4VGVtcC5jbGFzc0xpc3QuYWRkKCdoaWdoJyk7XG4gICAgICAgICAgICBtYXhUZW1wLmlubmVySFRNTCA9IGBIaWdoOiA8YnI+ICR7ZGF0YVtpXVsnbWF4VGVtcCcgKyBkZWdyZWVzXX0gJHtzeW1ib2x9YDtcblxuICAgICAgICAgICAgbGV0IG1pblRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBtaW5UZW1wLmNsYXNzTGlzdC5hZGQoJ2xvdycpO1xuICAgICAgICAgICAgbWluVGVtcC5pbm5lckhUTUwgPSBgTG93OiA8YnI+ICR7ZGF0YVtpXVsnbWluVGVtcCcgKyBkZWdyZWVzXX0gJHtzeW1ib2x9YDtcbiAgICBcbiAgICAgICAgICAgIGxldCByYWluQ2hhbmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgcmFpbkNoYW5jZS5jbGFzc0xpc3QuYWRkKCdyYWluLWNoYW5jZScpO1xuICAgICAgICAgICAgcmFpbkNoYW5jZS5pbm5lclRleHQgPSBgQ2hhbmNlIG9mIFJhaW46ICR7ZGF0YVtpXS5jaGFuY2VPZlJhaW59JWA7XG4gICAgXG4gICAgICAgICAgICBsZXQgc25vd0NoYW5jZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHNub3dDaGFuY2UuY2xhc3NMaXN0LmFkZCgnc25vdy1jaGFuY2UnKTtcbiAgICAgICAgICAgIHNub3dDaGFuY2UuaW5uZXJUZXh0ID0gYENoYW5jZSBvZiBTbm93OiAke2RhdGFbaV0uY2hhbmNlT2ZTbm93fSVgO1xuICAgIFxuICAgICAgICAgICAgdGVtcERhdGEuYXBwZW5kQ2hpbGQoYXZnVGVtcCk7XG4gICAgICAgICAgICB0ZW1wRGF0YS5hcHBlbmRDaGlsZChtYXhUZW1wKTtcbiAgICAgICAgICAgIHRlbXBEYXRhLmFwcGVuZENoaWxkKG1pblRlbXApO1xuICAgICAgICAgICAgdGVtcERhdGEuYXBwZW5kQ2hpbGQocmFpbkNoYW5jZSk7XG4gICAgICAgICAgICB0ZW1wRGF0YS5hcHBlbmRDaGlsZChzbm93Q2hhbmNlKTtcbiAgICBcbiAgICAgICAgICAgIG1haW5EYXRhLmFwcGVuZENoaWxkKGRheSk7XG4gICAgICAgICAgICBtYWluRGF0YS5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgICAgICAgIG1haW5EYXRhLmFwcGVuZENoaWxkKGNvbmRpdGlvbik7XG4gICAgXG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobWFpbkRhdGEpO1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRlbXBEYXRhKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkIHZhcigtLUZHLUNPTE9SKSc7XG5cbiAgICAgICAgICAgIGxldCBtYWluRGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbWFpbkRhdGEuY2xhc3NMaXN0LmFkZCgnbWFpbi1kYXRhJylcblxuICAgICAgICAgICAgbGV0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgICAgIGxvY2F0aW9uLmNsYXNzTGlzdC5hZGQoJ2xvY2F0aW9uJyk7XG4gICAgICAgICAgICBsb2NhdGlvbi5pbm5lclRleHQgPSBkYXRhW2ldLmNvdW50cnkgKyAnLCAnICsgZGF0YVtpXS5jaXR5O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgICAgICBkYXRlLmNsYXNzTGlzdC5hZGQoJ2RhdGUnKTtcbiAgICAgICAgICAgIGxldCBkYXRlYXJyID0gZGF0YVtpXS5kYXkuc3BsaXQoJy0nKTtcbiAgICAgICAgICAgIGRhdGUuaW5uZXJUZXh0ID0gYCR7Z2V0TW9udGgoZGF0ZWFyclsxXSl9ICR7ZGF0ZWFyclsyXX0gJHtkYXRlYXJyWzBdfWA7XG5cbiAgICAgICAgICAgIGxldCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBpY29uLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICBpY29uLnNyYyA9ICdodHRwczonICsgZGF0YVtpXS5pY29uO1xuXG4gICAgICAgICAgICBsZXQgY29uZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgICAgIGNvbmRpdGlvbi5pbm5lclRleHQgPSBkYXRhW2ldLmNvbmRpdGlvbjtcblxuICAgICAgICAgICAgbGV0IHRlbXBEYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0ZW1wRGF0YS5kYXRhQXR0cmlidXRlID0gTnVtYmVyKGkpO1xuICAgICAgICAgICAgdGVtcERhdGEuY2xhc3NMaXN0LmFkZCgndGVtcC1kYXRhJyk7XG5cbiAgICAgICAgICAgIGxldCBhdmVyYWdlVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgICAgICBhdmVyYWdlVGVtcC5jbGFzc0xpc3QuYWRkKCdhdmVyYWdlJyk7XG4gICAgICAgICAgICBhdmVyYWdlVGVtcC5pbm5lckhUTUwgPSBgQXZlcmFnZTogPGJyPiAke2RhdGFbaV1bJ2F2Z1RlbXAnICsgZGVncmVlc119ICR7c3ltYm9sfWA7XG5cbiAgICAgICAgICAgIGxldCBoaWdoVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgICAgICBoaWdoVGVtcC5jbGFzc0xpc3QuYWRkKCdoaWdoJyk7XG4gICAgICAgICAgICBoaWdoVGVtcC5pbm5lckhUTUwgPSBgSGlnaDogPGJyPiAke2RhdGFbaV1bJ21heFRlbXAnICsgZGVncmVlc119ICR7c3ltYm9sfWA7XG5cbiAgICAgICAgICAgIGxldCBsb3dUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgICAgIGxvd1RlbXAuY2xhc3NMaXN0LmFkZCgnbG93Jyk7XG4gICAgICAgICAgICBsb3dUZW1wLmlubmVySFRNTCA9IGBMb3c6IDxicj4gJHtkYXRhW2ldWydtaW5UZW1wJyArIGRlZ3JlZXNdfSAke3N5bWJvbH1gO1xuXG4gICAgICAgICAgICBsZXQgcmFpbkNoYW5jZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICAgICAgICByYWluQ2hhbmNlLmNsYXNzTGlzdC5hZGQoJ3JhaW4tY2hhbmNlJyk7XG4gICAgICAgICAgICByYWluQ2hhbmNlLmlubmVyVGV4dCA9IGBDaGFuY2Ugb2YgUmFpbjogJHtkYXRhW2ldLmNoYW5jZU9mUmFpbn0lYDtcblxuICAgICAgICAgICAgbGV0IHNub3dDaGFuY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgICAgICAgc25vd0NoYW5jZS5jbGFzc0xpc3QuYWRkKCdzbm93LWNoYW5jZScpO1xuICAgICAgICAgICAgc25vd0NoYW5jZS5pbm5lclRleHQgPSBgQ2hhbmNlIG9mIFNub3c6ICR7ZGF0YVtpXS5jaGFuY2VPZlNub3d9JWA7XG5cbiAgICAgICAgICAgIHRlbXBEYXRhLmFwcGVuZENoaWxkKGF2ZXJhZ2VUZW1wKTtcbiAgICAgICAgICAgIHRlbXBEYXRhLmFwcGVuZENoaWxkKGhpZ2hUZW1wKTtcbiAgICAgICAgICAgIHRlbXBEYXRhLmFwcGVuZENoaWxkKGxvd1RlbXApO1xuICAgICAgICAgICAgdGVtcERhdGEuYXBwZW5kQ2hpbGQocmFpbkNoYW5jZSk7XG4gICAgICAgICAgICB0ZW1wRGF0YS5hcHBlbmRDaGlsZChzbm93Q2hhbmNlKTtcblxuICAgICAgICAgICAgbWFpbkRhdGEuYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xuICAgICAgICAgICAgbWFpbkRhdGEuYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgICAgICAgICBtYWluRGF0YS5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgICAgICAgIG1haW5EYXRhLmFwcGVuZENoaWxkKGNvbmRpdGlvbik7XG5cbiAgICAgICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkRhdGEpO1xuICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wRGF0YSk7XG4gICAgICAgIH07XG4gICAgfTtcbn07XG5cbmV4cG9ydCB7IHJlbmRlcldlYXRoZXIsIGNoYW5nZURlZ3JlZXMgfTsiLCJcbmZ1bmN0aW9uIGRheXNJbk1vbnRoKG1vbnRoLCB5ZWFyKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoLCAwKS5nZXREYXRlKCk7XG59O1xuXG5cbmNvbnN0IGN1cnJlbnREYXRlID0gZnVuY3Rpb24gZ2V0Q3VycmVudERhdGUoKSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgICBcbiAgICByZXR1cm4geyB5ZWFyLCBtb250aCwgZGF5IH07XG59O1xuXG5cbmNvbnN0IHBhc3REYXRlcyA9IGZ1bmN0aW9uIGdldFBhc3RUd29EYXRlcygpIHtcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IHByZXZpb3VzTW9udGhEYXlzID0gZGF5c0luTW9udGgoZGF0ZS5nZXRNb250aCgpIC0xLCBkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICAgIGxldCBjZGF0ZSA9IGN1cnJlbnREYXRlKCk7XG4gICAgbGV0IHBkYXRlcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcblxuICAgICAgICBsZXQgeWVhciA9IGNkYXRlLnllYXI7XG4gICAgICAgIGxldCBtb250aCA9IGNkYXRlLm1vbnRoO1xuICAgICAgICBtb250aCsrXG4gICAgICAgIGxldCBkYXkgPSBjZGF0ZS5kYXkgLSAoMiAtIGkpO1xuXG4gICAgICAgIC8vIHRoaXMgbWVhbnMgdGhhdCB3ZSB3ZW50IGJhY2sgYSBtb250aFxuICAgICAgICBpZiAoZGF5ID09PSBwcmV2aW91c01vbnRoRGF5cykge1xuICAgICAgICAgICAgbW9udGgtLTtcblxuICAgICAgICAgICAgaWYgKG1vbnRoIDwgMCkgey8vIHRoaXMgbWVhbnMgd2Ugd2VudCBiYWNrIGEgeWVhclxuICAgICAgICAgICAgICAgIG1vbnRoID0gMTFcbiAgICAgICAgICAgICAgICB5ZWFyLS07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChtb250aCA8IDEwKSB7IG1vbnRoID0gJzAnICsgbW9udGggfTtcbiAgICAgICAgaWYgKGRheSA8IDEwKSB7IGRheSA9ICcwJyArIGRheSB9O1xuXG4gICAgICAgIHBkYXRlc1tpXSA9IHt5ZWFyLCBtb250aCwgZGF5fTtcbiAgICB9O1xuICAgIHJldHVybiBwZGF0ZXM7XG59O1xuXG5cbmNvbnN0IGZ1dHVyZURhdGVzID0gZnVuY3Rpb24gZ2V0RnV0dXJlVHdvRGF0ZXMoKSB7XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBuZXh0TW9udGhEYXlzID0gZGF5c0luTW9udGgoZGF0ZS5nZXRNb250aCgpICsxLCBkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICAgIGxldCBjZGF0ZSA9IGN1cnJlbnREYXRlKCk7XG4gICAgbGV0IGZkYXRlcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgbGV0IHllYXIgPSBjZGF0ZS55ZWFyO1xuICAgICAgICBsZXQgbW9udGggPSBjZGF0ZS5tb250aDtcbiAgICAgICAgbW9udGgrKztcbiAgICAgICAgbGV0IGRheSA9IGNkYXRlLmRheSArICgxICsgaSk7XG5cbiAgICAgICAgXG4gICAgICAgIC8vIHRoaXMgbWVhbnMgdGhhdCB3ZSB3ZW50IGZvcndhcmQgb25lIG1vbnRoXG4gICAgICAgIGlmIChkYXkgPT09IDEpIHtcbiAgICAgICAgICAgIG1vbnRoKys7XG5cbiAgICAgICAgICAgIGlmIChtb250aCA9PT0gMTMpIHsvL3RoaXMgbWVhbnMgaXQgd2VudCB0byBuZXcgeWVhclxuICAgICAgICAgICAgICAgIG1vbnRoID0gMTtcbiAgICAgICAgICAgICAgICB5ZWFyKys7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG5cbiAgICAgICAgaWYgKG1vbnRoIDwgMTApIHsgbW9udGggPSAnMCcgKyBtb250aCB9O1xuICAgICAgICBpZiAoZGF5IDwgMTApIHsgZGF5ID0gJzAnICsgZGF5IH07XG5cbiAgICAgICAgZmRhdGVzW2ldID0ge3llYXIsIG1vbnRoLCBkYXl9O1xuICAgIH07XG4gICAgcmV0dXJuIGZkYXRlcztcbn07XG5cblxuXG5cbmV4cG9ydCB7IGN1cnJlbnREYXRlLCBwYXN0RGF0ZXMsIGZ1dHVyZURhdGVzIH07IiwiLy9cblxuaW1wb3J0IHsgcmVuZGVyV2VhdGhlciB9IGZyb20gXCIuL2hhbmRsZURPTVwiO1xuXG5jb25zdCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtIHNlbGVjdCcpO1xuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtIGlucHV0Jyk7XG5jb25zdCBlcnJNc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtIHNwYW4uZXJyJyk7XG5pbnB1dC52YWx1ZSA9ICcnO1xuXG5mdW5jdGlvbiBkaXNwbGF5RXJyb3IoKSB7XG4gICAgaW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJ1BsZWFzZSBFbnRlciBWYWxpZCBWYWx1ZScpO1xuICAgIGVyck1zZy5pbm5lclRleHQgPSBpbnB1dC52YWxpZGF0aW9uTWVzc2FnZTtcbn07XG5cbmZ1bmN0aW9uIHJlbW92ZUVycm9yKCkge1xuICAgIGlucHV0LnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcbiAgICBlcnJNc2cuaW5uZXJUZXh0ID0gaW5wdXQudmFsaWRhdGlvbk1lc3NhZ2U7XG59O1xuXG5mdW5jdGlvbiB1c1ppcFZhbGlkYXRpb24odmFsdWUpIHtcbiAgICAvLyBtYWtlIHN1cmUgdmFsdWUgaXMgcmVhbCB1cyB6aXAgYmVmb3JlIHNlbmRpbmcgYXBpIHJlcXVlc3RcbiAgICBsZXQgaXNWYWxpZFppcCA9IC8oXlxcZHs1fSQpfCheXFxkezV9LVxcZHs0fSQpLy50ZXN0KHZhbHVlKTtcbiAgICByZXR1cm4gaXNWYWxpZFppcDtcbn07XG5cbmZ1bmN0aW9uIGNhbmFkaWFuUG9zdGFsVmFsaWRhdGlvbih2YWx1ZSkge1xuICAgIC8vIG1ha2Ugc3VyZSB2YWx1ZSBpcyByZWFsIGNhbmFkaWFuIHBvc3RhbCBjb2RlIGJlZm9yZSBzZW5kaW5nIGFwaSByZXF1ZXN0XG4gICAgbGV0IGlzVmFsaWRDb2RlID0gL15bQUJDRUdISi1OUFJTVFZYWV1cXGRbQUJDRUdISi1OUFJTVFYtWl1bIC1dP1xcZFtBQkNFR0hKLU5QUlNUVi1aXVxcZCQvaS50ZXN0KHZhbHVlKTtcbiAgICByZXR1cm4gaXNWYWxpZENvZGU7XG59O1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSgpIHtcbiAgICBsZXQgdmFsaWQgPSB0cnVlO1xuXG4gICAgaWYgKHNlbGVjdC52YWx1ZSA9PT0gJ3VzLXppcCcpIHtcbiAgICAgICAgdmFsaWQgPSB1c1ppcFZhbGlkYXRpb24oaW5wdXQudmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoc2VsZWN0LnZhbHVlID09PSAnY2EtcG9zdGFsJykge1xuICAgICAgICB2YWxpZCA9IGNhbmFkaWFuUG9zdGFsVmFsaWRhdGlvbihpbnB1dC52YWx1ZSk7XG4gICAgfTtcblxuICAgIGlmICh2YWxpZCkge1xuICAgICAgICByZW1vdmVFcnJvcigpO1xuICAgICAgICByZW5kZXJXZWF0aGVyKGlucHV0LnZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkaXNwbGF5RXJyb3IoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHZhbGlkO1xufTtcblxuZXhwb3J0IHsgdmFsaWRhdGUgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTA0NzUxYTk2ZDM3ZDQ2ZmFhYzIyMDExMDgyNDIwMDEmcT1QYXJpc1xuLy8gaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9MDQ3NTFhOTZkMzdkNDZmYWFjMjIwMTEwODI0MjAwMSZxPVBhcmlzJmRheXM9M1xuLy8gaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0wNDc1MWE5NmQzN2Q0NmZhYWMyMjAxMTA4MjQyMDAxJnE9YXV0bzppcFxuLy8gaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvaGlzdG9yeS5qc29uP2tleT0wNDc1MWE5NmQzN2Q0NmZhYWMyMjAxMTA4MjQyMDAxJnE9YXV0bzppcCZkdD0yMDIzLTA4LTEwXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGN1cnJlbnREYXRlLCBwYXN0RGF0ZXMsIGZ1dHVyZURhdGVzIH0gZnJvbSAnLi9oYW5kbGVEYXRlcy5qcyc7XG5pbXBvcnQgeyBkZWZhdWx0VmlldywgY2hhbmdlRGVncmVlcywgcmVuZGVyV2VhdGhlciB9IGZyb20gJy4vaGFuZGxlRE9NLmpzJztcbmltcG9ydCB7IHZhbGlkYXRlIH0gZnJvbSAnLi9oYW5kbGVGT1JNLmpzJztcblxuLy8gcnVuIHZpZXcgd2l0aCB1c2VycyBpcCBhZGRyZXNzIGFzIGxvY2F0aW9uIGJ5IGRlZmF1bHRcbnJlbmRlcldlYXRoZXIoJ2F1dG86aXAnKTtcblxuY29uc3QgdG9nZ2xlU3dpdGNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXRjaCcpO1xudG9nZ2xlU3dpdGNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjaGFuZ2VEZWdyZWVzKCk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmV0dXJuIGZhbHNlO1xufSk7XG5cblxuY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nJyk7XG5jb25zdCBkaWFsb2dCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Blbi1kaWFsb2cnKTtcbmRpYWxvZ0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZGlhbG9nLnNob3dNb2RhbCgpO1xufSk7XG5cblxuY29uc3QgZXhpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leGl0LWJ0bicpO1xuZXhpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZGlhbG9nLmNsb3NlKCk7XG59KTtcblxuXG5jb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtID4gYnV0dG9uJyk7XG5zdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICh2YWxpZGF0ZSgpKSB7IGRpYWxvZy5jbG9zZSgpIH07XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=