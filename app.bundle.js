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
    width: 230px;
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
    padding: 20px;

    color: var(--FG-COLOR);
    background-color: var(--BG-COLOR);
    border-radius: 10px;
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

@media only screen and (max-width: 644px) {
    .container .card {
        height: auto;

        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }
    .container .card > div {
        width: 100%;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n:root {\n    --BG-COLOR: #081e33;\n    --FG-COLOR: #8dc4e9;\n    --HOVER-COLOR: #a5d9fc;\n}\n\nbody {\n    min-height: 100vh;\n    padding: 10px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n\n    color: var(--FG-COLOR);\n    background-color: var(--BG-COLOR);\n}\n\n.header {\n    height: 90px;\n    width: 100%;\n    padding: 20px;\n    margin-bottom: 20px;\n\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    position: absolute;\n    top: 0px;\n\n    border-bottom: 5px solid var(--FG-COLOR);\n    background-color: var(--BG-COLOR);\n}\n.header h1 {\n    user-select: none;\n    color: var(--FG-COLOR);\n}\n.header .buttons-container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n}\n.header .buttons-container .open-dialog {\n    height: 40px;\n    width: 40px;\n    background-color: var(--FG-COLOR);\n    border: none;\n    border-radius: 10px;\n}\n.header .buttons-container .open-dialog:hover {\n    filter: brightness(115%);\n}\n.header .buttons-container .switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n}\n.header .buttons-container .switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n.header .buttons-container .switch .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: var(--BG-COLOR);\n    transition: 0.4s;\n    box-shadow: 0 0 1px white;\n    border-radius: 10px;\n}\n.header .buttons-container .switch .slider .label {\n    position: absolute;\n    font-size: .8rem;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    color: var(--BG-COLOR);\n    background-color: white;\n    transition: 0.4s;\n    border-radius: 10px;\n}\n.header .buttons-container .switch input:checked + .slider {\n    background-color: var(--FG-COLOR);\n}\n.header .buttons-container .switch input:checked + .slider .label {\n    transform: translateX(26px);\n}\n\n\n\n.container {\n    min-height: 100vh;\n    width: 100%;\n\n    margin-top: 90px;\n\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n.container img {\n    height: auto;\n    width: 64px;\n}\n.container .main-container {\n    padding: 20px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    gap: 50px;\n\n    border-radius: 10px;\n}\n.container .main-container > .temp-data {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    gap: 10px;\n}\n.card-container {\n    flex-wrap: wrap;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n.card-container .card {\n    height: auto;\n    width: 230px;\n    padding: 10px;\n\n    flex-wrap: wrap;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    gap: 25px;\n\n    border: 1px solid var(--FG-COLOR);\n    border-radius: 10px;\n}\n.card-container .card > div {\n    padding: 20px;\n}\n.card-container .card div > h1,\n.card-container .card div > p {\n    white-space: nowrap;\n    font-weight: bolder;\n}\n.card-container .card.today {\n    border: 3px solid var(--FG-COLOR);\n}\n.card-container .card .main-data {\n    height: 100%;\n}\n.card-container .card .temp-data {\n    height: 100%;\n\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: space-between;\n    gap: 10px;\n}\n\n\ndialog {\n    height: 500px;\n\n    margin: auto;\n    padding: 20px;\n\n    color: var(--FG-COLOR);\n    background-color: var(--BG-COLOR);\n    border-radius: 10px;\n}\ndialog::backdrop {\n    background-color: rgba(0, 0, 0, 0.5);\n}\ndialog h1 {\n    margin-bottom: 20px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\nform ul {\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    gap: 10px;\n}\nform ul li {\n    width: 100%;\n\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 20px;\n}\nform label {\n    white-space: nowrap;\n}\nform input,\nform select {\n    width: 100%;\n    padding: 5px;\n}\n\n@media only screen and (max-width: 644px) {\n    .container .card {\n        height: auto;\n\n        flex-direction: column;\n        align-items: flex-start;\n        gap: 20px;\n    }\n    .container .card > div {\n        width: 100%;\n    }\n}"],"sourceRoot":""}]);
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
/* harmony export */   defaultView: () => (/* binding */ defaultView)
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

async function defaultView() {
    data = await Promise.resolve((0,_fetchData__WEBPACK_IMPORTED_MODULE_0__.fetchData)('auto:ip'))
    console.log(data);

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

// https://api.weatherapi.com/v1/current.json?key=04751a96d37d46faac2201108242001&q=Paris
// https://api.weatherapi.com/v1/forecast.json?key=04751a96d37d46faac2201108242001&q=Paris&days=3
// https://api.weatherapi.com/v1/current.json?key=04751a96d37d46faac2201108242001&q=auto:ip
// https://api.weatherapi.com/v1/history.json?key=04751a96d37d46faac2201108242001&q=auto:ip&dt=2023-08-10




(0,_handleDOM_js__WEBPACK_IMPORTED_MODULE_2__.defaultView)();

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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxZQUFZLFVBQVUsWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxhQUFhLFdBQVcsWUFBWSxjQUFjLGFBQWEsWUFBWSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxjQUFjLFdBQVcsWUFBWSxjQUFjLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxTQUFTLEtBQUssWUFBWSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFL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QUFFQSwwQkFBMEI7QUFDMUIsd0JBQXdCOztBQUV4QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsMEJBQTBCO0FBQzFCLHdCQUF3Qjs7QUFFeEIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7VUM5RUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNxQjtBQUNrRDtBQUNYOztBQUU1RCwwREFBVzs7QUFFWDtBQUNBO0FBQ0EsSUFBSSw0REFBYTs7QUFFakI7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGlhbG9nLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9kaWFsb2cvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2RpYWxvZy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2RpYWxvZy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9kaWFsb2cvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZGlhbG9nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9kaWFsb2cvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZGlhbG9nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2RpYWxvZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2RpYWxvZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2RpYWxvZy8uL3NyYy9mZXRjaERhdGEuanMiLCJ3ZWJwYWNrOi8vZGlhbG9nLy4vc3JjL2hhbmRsZURPTS5qcyIsIndlYnBhY2s6Ly9kaWFsb2cvLi9zcmMvaGFuZGxlRGF0ZXMuanMiLCJ3ZWJwYWNrOi8vZGlhbG9nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RpYWxvZy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9kaWFsb2cvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2RpYWxvZy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2RpYWxvZy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2RpYWxvZy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZGlhbG9nLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbn1cblxuOnJvb3Qge1xuICAgIC0tQkctQ09MT1I6ICMwODFlMzM7XG4gICAgLS1GRy1DT0xPUjogIzhkYzRlOTtcbiAgICAtLUhPVkVSLUNPTE9SOiAjYTVkOWZjO1xufVxuXG5ib2R5IHtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gICAgY29sb3I6IHZhcigtLUZHLUNPTE9SKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CRy1DT0xPUik7XG59XG5cbi5oZWFkZXIge1xuICAgIGhlaWdodDogOTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHZhcigtLUZHLUNPTE9SKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CRy1DT0xPUik7XG59XG4uaGVhZGVyIGgxIHtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tRkctQ09MT1IpO1xufVxuLmhlYWRlciAuYnV0dG9ucy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG59XG4uaGVhZGVyIC5idXR0b25zLWNvbnRhaW5lciAub3Blbi1kaWFsb2cge1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uaGVhZGVyIC5idXR0b25zLWNvbnRhaW5lciAub3Blbi1kaWFsb2c6aG92ZXIge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMTUlKTtcbn1cbi5oZWFkZXIgLmJ1dHRvbnMtY29udGFpbmVyIC5zd2l0Y2gge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiAzNHB4O1xufVxuLmhlYWRlciAuYnV0dG9ucy1jb250YWluZXIgLnN3aXRjaCBpbnB1dCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG59XG4uaGVhZGVyIC5idXR0b25zLWNvbnRhaW5lciAuc3dpdGNoIC5zbGlkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJHLUNPTE9SKTtcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5oZWFkZXIgLmJ1dHRvbnMtY29udGFpbmVyIC5zd2l0Y2ggLnNsaWRlciAubGFiZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmb250LXNpemU6IC44cmVtO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgaGVpZ2h0OiAyNnB4O1xuICAgIHdpZHRoOiAyNnB4O1xuICAgIGxlZnQ6IDRweDtcbiAgICBib3R0b206IDRweDtcbiAgICBjb2xvcjogdmFyKC0tQkctQ09MT1IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHRyYW5zaXRpb246IDAuNHM7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5oZWFkZXIgLmJ1dHRvbnMtY29udGFpbmVyIC5zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUZHLUNPTE9SKTtcbn1cbi5oZWFkZXIgLmJ1dHRvbnMtY29udGFpbmVyIC5zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIgLmxhYmVsIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG59XG5cblxuXG4uY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIG1hcmdpbi10b3A6IDkwcHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyMHB4O1xufVxuLmNvbnRhaW5lciBpbWcge1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogNjRweDtcbn1cbi5jb250YWluZXIgLm1haW4tY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogNTBweDtcblxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uY29udGFpbmVyIC5tYWluLWNvbnRhaW5lciA+IC50ZW1wLWRhdGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG59XG4uY2FyZC1jb250YWluZXIge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmNhcmQtY29udGFpbmVyIC5jYXJkIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDIzMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogMjVweDtcblxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLUZHLUNPTE9SKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmNhcmQtY29udGFpbmVyIC5jYXJkID4gZGl2IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuLmNhcmQtY29udGFpbmVyIC5jYXJkIGRpdiA+IGgxLFxuLmNhcmQtY29udGFpbmVyIC5jYXJkIGRpdiA+IHAge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cbi5jYXJkLWNvbnRhaW5lciAuY2FyZC50b2RheSB7XG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tRkctQ09MT1IpO1xufVxuLmNhcmQtY29udGFpbmVyIC5jYXJkIC5tYWluLWRhdGEge1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi5jYXJkLWNvbnRhaW5lciAuY2FyZCAudGVtcC1kYXRhIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogMTBweDtcbn1cblxuXG5kaWFsb2cge1xuICAgIGhlaWdodDogNTAwcHg7XG5cbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogMjBweDtcblxuICAgIGNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQkctQ09MT1IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5kaWFsb2c6OmJhY2tkcm9wIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5kaWFsb2cgaDEge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5mb3JtIHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG59XG5mb3JtIHVsIGxpIHtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ2FwOiAyMHB4O1xufVxuZm9ybSBsYWJlbCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbmZvcm0gaW5wdXQsXG5mb3JtIHNlbGVjdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0NHB4KSB7XG4gICAgLmNvbnRhaW5lciAuY2FyZCB7XG4gICAgICAgIGhlaWdodDogYXV0bztcblxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgZ2FwOiAyMHB4O1xuICAgIH1cbiAgICAuY29udGFpbmVyIC5jYXJkID4gZGl2IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLG1KQUFtSjtBQUN2Sjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7O0lBRWIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsMkJBQTJCOztJQUUzQixzQkFBc0I7SUFDdEIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1COztJQUVuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4Qjs7SUFFOUIsa0JBQWtCO0lBQ2xCLFFBQVE7O0lBRVIsd0NBQXdDO0lBQ3hDLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsU0FBUztBQUNiO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztBQUNiO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7O0lBRWhCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCOztJQUV2QixZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7SUFDVCxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjs7OztBQUlBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7O0lBRVgsZ0JBQWdCOztJQUVoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTs7SUFFYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsU0FBUzs7SUFFVCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7QUFDQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhOztJQUViLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsU0FBUzs7SUFFVCxpQ0FBaUM7SUFDakMsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7O0lBRUksbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZOztJQUVaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtJQUM5QixTQUFTO0FBQ2I7OztBQUdBO0lBQ0ksYUFBYTs7SUFFYixZQUFZO0lBQ1osYUFBYTs7SUFFYixzQkFBc0I7SUFDdEIsaUNBQWlDO0lBQ2pDLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksV0FBVzs7SUFFWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixTQUFTO0FBQ2I7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBOztJQUVJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7UUFDSSxZQUFZOztRQUVaLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsU0FBUztJQUNiO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1CRy1DT0xPUjogIzA4MWUzMztcXG4gICAgLS1GRy1DT0xPUjogIzhkYzRlOTtcXG4gICAgLS1IT1ZFUi1DT0xPUjogI2E1ZDlmYztcXG59XFxuXFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXFxuICAgIGNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJHLUNPTE9SKTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGhlaWdodDogOTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDBweDtcXG5cXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHZhcigtLUZHLUNPTE9SKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQkctQ09MT1IpO1xcbn1cXG4uaGVhZGVyIGgxIHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XFxufVxcbi5oZWFkZXIgLmJ1dHRvbnMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuLmhlYWRlciAuYnV0dG9ucy1jb250YWluZXIgLm9wZW4tZGlhbG9nIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tRkctQ09MT1IpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5oZWFkZXIgLmJ1dHRvbnMtY29udGFpbmVyIC5vcGVuLWRpYWxvZzpob3ZlciB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMTUlKTtcXG59XFxuLmhlYWRlciAuYnV0dG9ucy1jb250YWluZXIgLnN3aXRjaCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiAzNHB4O1xcbn1cXG4uaGVhZGVyIC5idXR0b25zLWNvbnRhaW5lciAuc3dpdGNoIGlucHV0IHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG59XFxuLmhlYWRlciAuYnV0dG9ucy1jb250YWluZXIgLnN3aXRjaCAuc2xpZGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQkctQ09MT1IpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uaGVhZGVyIC5idXR0b25zLWNvbnRhaW5lciAuc3dpdGNoIC5zbGlkZXIgLmxhYmVsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmb250LXNpemU6IC44cmVtO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgaGVpZ2h0OiAyNnB4O1xcbiAgICB3aWR0aDogMjZweDtcXG4gICAgbGVmdDogNHB4O1xcbiAgICBib3R0b206IDRweDtcXG4gICAgY29sb3I6IHZhcigtLUJHLUNPTE9SKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5oZWFkZXIgLmJ1dHRvbnMtY29udGFpbmVyIC5zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XFxufVxcbi5oZWFkZXIgLmJ1dHRvbnMtY29udGFpbmVyIC5zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIgLmxhYmVsIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbn1cXG5cXG5cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBtYXJnaW4tdG9wOiA5MHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcbi5jb250YWluZXIgaW1nIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogNjRweDtcXG59XFxuLmNvbnRhaW5lciAubWFpbi1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNTBweDtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLmNvbnRhaW5lciAubWFpbi1jb250YWluZXIgPiAudGVtcC1kYXRhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbi5jYXJkLWNvbnRhaW5lciB7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uY2FyZC1jb250YWluZXIgLmNhcmQge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAyMzBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMjVweDtcXG5cXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tRkctQ09MT1IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uY2FyZC1jb250YWluZXIgLmNhcmQgPiBkaXYge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG4uY2FyZC1jb250YWluZXIgLmNhcmQgZGl2ID4gaDEsXFxuLmNhcmQtY29udGFpbmVyIC5jYXJkIGRpdiA+IHAge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG4uY2FyZC1jb250YWluZXIgLmNhcmQudG9kYXkge1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1GRy1DT0xPUik7XFxufVxcbi5jYXJkLWNvbnRhaW5lciAuY2FyZCAubWFpbi1kYXRhIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uY2FyZC1jb250YWluZXIgLmNhcmQgLnRlbXAtZGF0YSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5cXG5kaWFsb2cge1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcblxcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuXFxuICAgIGNvbG9yOiB2YXIoLS1GRy1DT0xPUik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJHLUNPTE9SKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuZGlhbG9nOjpiYWNrZHJvcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuZGlhbG9nIGgxIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmZvcm0gdWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuZm9ybSB1bCBsaSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMjBweDtcXG59XFxuZm9ybSBsYWJlbCB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbmZvcm0gaW5wdXQsXFxuZm9ybSBzZWxlY3Qge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0NHB4KSB7XFxuICAgIC5jb250YWluZXIgLmNhcmQge1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcblxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgZ2FwOiAyMHB4O1xcbiAgICB9XFxuICAgIC5jb250YWluZXIgLmNhcmQgPiBkaXYge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGN1cnJlbnREYXRlLCBwYXN0RGF0ZXMsIGZ1dHVyZURhdGVzIH0gZnJvbSBcIi4vaGFuZGxlRGF0ZXNcIjtcblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKHF1ZXJ5KSB7XG4gICAgbGV0IHBkYXRlcyA9IHBhc3REYXRlcygpO1xuICAgIGxldCBmZGF0ZXMgPSBmdXR1cmVEYXRlcygpO1xuICAgIGxldCB3ZWF0aGVyRGF0YSA9IFtdO1xuXG4gICAgY29uc3QgcHVzaERhdGEgPSAob2JqZWN0LCBsb2NhdGlvbikgPT4ge1xuICAgICAgICBsZXQgY291bnRyeSA9IGxvY2F0aW9uLmNvdW50cnk7XG4gICAgICAgIGxldCBjaXR5ID0gbG9jYXRpb24ubmFtZTtcblxuICAgICAgICBsZXQgZGF5ID0gb2JqZWN0LmRhdGU7XG4gICAgICAgIGxldCBpY29uID0gb2JqZWN0LmRheS5jb25kaXRpb24uaWNvbjtcbiAgICAgICAgbGV0IGNvbmRpdGlvbiA9IG9iamVjdC5kYXkuY29uZGl0aW9uLnRleHQ7XG4gICAgICAgIGxldCBhdmdUZW1wQ2Vsc2l1cyA9IG9iamVjdC5kYXkuYXZndGVtcF9jO1xuICAgICAgICBsZXQgbWF4VGVtcENlbHNpdXMgPSBvYmplY3QuZGF5Lm1heHRlbXBfYztcbiAgICAgICAgbGV0IG1pblRlbXBDZWxzaXVzID0gb2JqZWN0LmRheS5taW50ZW1wX2M7XG4gICAgICAgIGxldCBhdmdUZW1wRmFyZW5oZWl0ID0gb2JqZWN0LmRheS5hdmd0ZW1wX2Y7XG4gICAgICAgIGxldCBtYXhUZW1wRmFyZW5oZWl0ID0gb2JqZWN0LmRheS5tYXh0ZW1wX2Y7XG4gICAgICAgIGxldCBtaW5UZW1wRmFyZW5oZWl0ID0gb2JqZWN0LmRheS5taW50ZW1wX2Y7XG4gICAgICAgIGxldCBjaGFuY2VPZlJhaW4gPSBvYmplY3QuZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluO1xuICAgICAgICBsZXQgY2hhbmNlT2ZTbm93ID0gb2JqZWN0LmRheS5kYWlseV9jaGFuY2Vfb2Zfc25vdztcblxuICAgICAgICB3ZWF0aGVyRGF0YS5wdXNoKHtcbiAgICAgICAgICAgIGNvdW50cnksXG4gICAgICAgICAgICBjaXR5LFxuICAgICAgICAgICAgZGF5LFxuICAgICAgICAgICAgaWNvbixcbiAgICAgICAgICAgIGNvbmRpdGlvbixcbiAgICAgICAgICAgIGF2Z1RlbXBDZWxzaXVzLFxuICAgICAgICAgICAgbWF4VGVtcENlbHNpdXMsXG4gICAgICAgICAgICBtaW5UZW1wQ2Vsc2l1cyxcbiAgICAgICAgICAgIGF2Z1RlbXBGYXJlbmhlaXQsXG4gICAgICAgICAgICBtYXhUZW1wRmFyZW5oZWl0LFxuICAgICAgICAgICAgbWluVGVtcEZhcmVuaGVpdCxcbiAgICAgICAgICAgIGNoYW5jZU9mUmFpbixcbiAgICAgICAgICAgIGNoYW5jZU9mU25vd1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgbGV0IHBsaW5rcyA9IFtdO1xuICAgIGxldCBjbGluayA9IGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0wNDc1MWE5NmQzN2Q0NmZhYWMyMjAxMTA4MjQyMDAxJnE9JHtxdWVyeX1gO1xuICAgIGxldCBmbGlua3MgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgIHBsaW5rcy5wdXNoKGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9oaXN0b3J5Lmpzb24/a2V5PTA0NzUxYTk2ZDM3ZDQ2ZmFhYzIyMDExMDgyNDIwMDEmcT0ke3F1ZXJ5fSZkdD0ke3BkYXRlc1tpXS55ZWFyfS0ke3BkYXRlc1tpXS5tb250aH0tJHtwZGF0ZXNbaV0uZGF5fWApO1xuICAgICAgICBmbGlua3MucHVzaChgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9MDQ3NTFhOTZkMzdkNDZmYWFjMjIwMTEwODI0MjAwMSZxPSR7cXVlcnl9JmR0PSR7ZmRhdGVzW2ldLnllYXJ9LSR7ZmRhdGVzW2ldLm1vbnRofS0ke2ZkYXRlc1tpXS5kYXl9YCk7XG4gICAgfTtcblxuICAgIGxldCBwcm9taXNlMSA9IGZldGNoKHBsaW5rc1swXSwge21vZGU6J2NvcnMnfSk7XG4gICAgbGV0IHByb21pc2UyID0gZmV0Y2gocGxpbmtzWzFdLCB7bW9kZTonY29ycyd9KTtcbiAgICBsZXQgcHJvbWlzZTMgPSBmZXRjaChjbGluaywge21vZGU6J2NvcnMnfSk7XG4gICAgbGV0IHByb21pc2U0ID0gZmV0Y2goZmxpbmtzWzBdLCB7bW9kZTonY29ycyd9KTtcbiAgICBsZXQgcHJvbWlzZTUgPSBmZXRjaChmbGlua3NbMV0sIHttb2RlOidjb3JzJ30pO1xuXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW3Byb21pc2UxLCBwcm9taXNlMiwgcHJvbWlzZTMsIHByb21pc2U0LCBwcm9taXNlNV0pXG4gICAgLnRoZW4oYXN5bmMgKHJlc3VsdHMpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSBpbiByZXN1bHRzKSB7XG4gICAgICAgICAgICBhd2FpdCBQcm9taXNlLnJlc29sdmUocmVzdWx0c1tpXS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbigocmVzb2x2ZWQpID0+IHtcbiAgICAgICAgICAgICAgICBwdXNoRGF0YShyZXNvbHZlZC5mb3JlY2FzdC5mb3JlY2FzdGRheVswXSwgcmVzb2x2ZWQubG9jYXRpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cbiAgICByZXR1cm4gd2VhdGhlckRhdGE7XG59O1xuXG5leHBvcnQgeyBmZXRjaERhdGEgfTsiLCJpbXBvcnQgeyBmZXRjaERhdGEgfSBmcm9tIFwiLi9mZXRjaERhdGFcIjtcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5kZWZhdWx0IHZpZXcgd2lsbCB1c2UgdGhlIGlwIGFkZHJlc3MgYXMgbG9jYXRpb24gYW5kIGdldCB0aGUgd2VhdGhlciBmb3IgdGhlXG50d28gcGFzdCBkYXlzIGFsb25nIHdpdGggdGhlIGN1cnJlbnQgZGF5IGFuZCB0d28gZnV0dXJlIGRheXMuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXIgPiAubWFpbi1jb250YWluZXInKTtcbmNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyID4gLmNhcmQtY29udGFpbmVyJyk7XG5cbmNvbnN0IGRlZ3JlZUxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXRjaCAuc2xpZGVyID4gLmxhYmVsJyk7XG5jb25zdCBkZWdyZWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2ggPiBpbnB1dCcpO1xuXG5sZXQgZGF0YTtcbmxldCBkZWdyZWVzO1xubGV0IHN5bWJvbDtcblxuZGVncmVlSW5wdXQuY2hlY2tlZCA9IGZhbHNlO1xuZGVncmVlTGFiZWwuaW5uZXJUZXh0ID0gJ+KEgyc7XG5kZWdyZWVzID0gJ0NlbHNpdXMnO1xuc3ltYm9sID0gJ+KEgyc7XG5cbmZ1bmN0aW9uIGNoYW5nZURlZ3JlZXMoKSB7XG4gICAgZGVncmVlSW5wdXQuY2hlY2tlZCA9PT0gdHJ1ZSA/IGRlZ3JlZUlucHV0LmNoZWNrZWQgPSBmYWxzZSA6IGRlZ3JlZUlucHV0LmNoZWNrZWQgPSB0cnVlO1xuXG4gICAgaWYgKGRlZ3JlZUlucHV0LmNoZWNrZWQpIHtcbiAgICAgICAgZGVncmVlTGFiZWwuaW5uZXJUZXh0ID0gJ+KEiSc7XG4gICAgICAgIHN5bWJvbCA9ICfihIknO1xuICAgICAgICBkZWdyZWVzID0gJ0ZhcmVuaGVpdCc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGVncmVlTGFiZWwuaW5uZXJUZXh0ID0gJ+KEgyc7XG4gICAgICAgIHN5bWJvbCA9ICfihIMnO1xuICAgICAgICBkZWdyZWVzID0gJ0NlbHNpdXMnO1xuICAgIH07XG5cbiAgICBjb25zdCB1cGRhdGVUZW1wRGF0YSA9ICgoKSA9PiB7XG4gICAgICAgIGxldCB0ZW1wRGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZW1wLWRhdGEnKTtcbiAgICAgICAgY29uc29sZS5sb2codGVtcERpdnMpO1xuXG4gICAgICAgIHRlbXBEaXZzLmZvckVhY2goZGl2ID0+IHtcblxuICAgICAgICAgICAgbGV0IGNoaWxkcmVuID0gWy4uLmRpdi5jaGlsZHJlbl07XG5cbiAgICAgICAgICAgIGNoaWxkcmVuLmZvckVhY2goZWxlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBlbGUucGFyZW50RWxlbWVudC5kYXRhQXR0cmlidXRlO1xuXG4gICAgICAgICAgICAgICAgaWYgKGVsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2F2ZXJhZ2UnKSkge1xuICAgICAgICAgICAgICAgICAgICBlbGUuaW5uZXJIVE1MID0gYEF2ZXJhZ2U6IDxicj4gJHtkYXRhW2luZGV4XVsnYXZnVGVtcCcgKyBkZWdyZWVzXX0gJHtzeW1ib2x9YDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZ2gnKSkge1xuICAgICAgICAgICAgICAgICAgICBlbGUuaW5uZXJIVE1MID0gYEhpZ2g6IDxicj4gJHtkYXRhW2luZGV4XVsnbWF4VGVtcCcgKyBkZWdyZWVzXX0gJHtzeW1ib2x9YDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2xvdycpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZS5pbm5lckhUTUwgPSBgTG93OiA8YnI+ICR7ZGF0YVtpbmRleF1bJ21pblRlbXAnICsgZGVncmVlc119ICR7c3ltYm9sfWA7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KSgpO1xufTtcblxuXG5mdW5jdGlvbiBnZXRNb250aChudW0pIHtcbiAgICBsZXQgbnVtYmVyID0gTnVtYmVyKG51bSkgLSAxO1xuXG4gICAgbGV0IG1vbnRocyA9IFtcbiAgICAgICAgJ0phbnVyYXJ5JyxcbiAgICAgICAgJ0ZlYnVyYXJ5JyxcbiAgICAgICAgJ01hcmNoJyxcbiAgICAgICAgJ0FwcmlsJyxcbiAgICAgICAgJ01heScsXG4gICAgICAgICdKdW5lJyxcbiAgICAgICAgJ0p1bHknLFxuICAgICAgICAnQXVndXN0JyxcbiAgICAgICAgJ1NlcHRlbWJlcicsXG4gICAgICAgICdPY3RvYmVyJyxcbiAgICAgICAgJ05vdmVtYmVyJyxcbiAgICAgICAgJ0RlY2VtYmVyJ1xuICAgIF07XG5cbiAgICByZXR1cm4gbW9udGhzW251bWJlcl07XG59O1xuXG5hc3luYyBmdW5jdGlvbiBkZWZhdWx0VmlldygpIHtcbiAgICBkYXRhID0gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGZldGNoRGF0YSgnYXV0bzppcCcpKVxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgZm9yIChsZXQgaSBpbiBkYXRhKSB7XG4gICAgICAgIGlmIChOdW1iZXIoaSkgIT09IDIpIHtcblxuICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgICBcbiAgICAgICAgICAgIGxldCBtYWluRGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbWFpbkRhdGEuY2xhc3NMaXN0LmFkZCgnbWFpbi1kYXRhJyk7XG4gICAgXG4gICAgICAgICAgICBsZXQgZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoJ2RhdGUnKTtcbiAgICAgICAgICAgIGxldCBkYXRlYXJyID0gZGF0YVtpXS5kYXkuc3BsaXQoJy0nKTtcbiAgICAgICAgICAgIGRheS5pbm5lclRleHQgPSBgJHtnZXRNb250aChkYXRlYXJyWzFdKX0gJHtkYXRlYXJyWzJdfSAke2RhdGVhcnJbMF19YDtcbiAgICBcbiAgICAgICAgICAgIGxldCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBpY29uLnNyYyA9ICdodHRwczonICsgZGF0YVtpXS5pY29uO1xuICAgICAgICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsICdmYWxzZScpO1xuICAgIFxuICAgICAgICAgICAgbGV0IGNvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGNvbmRpdGlvbi5pbm5lclRleHQgPSBkYXRhW2ldLmNvbmRpdGlvbjtcbiAgICBcbiAgICAgICAgICAgIGxldCB0ZW1wRGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGVtcERhdGEuZGF0YUF0dHJpYnV0ZSA9IE51bWJlcihpKTtcbiAgICAgICAgICAgIHRlbXBEYXRhLmNsYXNzTGlzdC5hZGQoJ3RlbXAtZGF0YScpO1xuICAgIFxuICAgICAgICAgICAgbGV0IGF2Z1RlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBhdmdUZW1wLmNsYXNzTGlzdC5hZGQoJ2F2ZXJhZ2UnKTtcbiAgICAgICAgICAgIGF2Z1RlbXAuaW5uZXJIVE1MID0gYEF2ZXJhZ2U6IDxicj4gJHtkYXRhW2ldWydhdmdUZW1wJyArIGRlZ3JlZXNdfSAke3N5bWJvbH1gO1xuICAgIFxuICAgICAgICAgICAgbGV0IG1heFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBtYXhUZW1wLmNsYXNzTGlzdC5hZGQoJ2hpZ2gnKTtcbiAgICAgICAgICAgIG1heFRlbXAuaW5uZXJIVE1MID0gYEhpZ2g6IDxicj4gJHtkYXRhW2ldWydtYXhUZW1wJyArIGRlZ3JlZXNdfSAke3N5bWJvbH1gO1xuXG4gICAgICAgICAgICBsZXQgbWluVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIG1pblRlbXAuY2xhc3NMaXN0LmFkZCgnbG93Jyk7XG4gICAgICAgICAgICBtaW5UZW1wLmlubmVySFRNTCA9IGBMb3c6IDxicj4gJHtkYXRhW2ldWydtaW5UZW1wJyArIGRlZ3JlZXNdfSAke3N5bWJvbH1gO1xuICAgIFxuICAgICAgICAgICAgbGV0IHJhaW5DaGFuY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICByYWluQ2hhbmNlLmNsYXNzTGlzdC5hZGQoJ3JhaW4tY2hhbmNlJyk7XG4gICAgICAgICAgICByYWluQ2hhbmNlLmlubmVyVGV4dCA9IGBDaGFuY2Ugb2YgUmFpbjogJHtkYXRhW2ldLmNoYW5jZU9mUmFpbn0lYDtcbiAgICBcbiAgICAgICAgICAgIGxldCBzbm93Q2hhbmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgc25vd0NoYW5jZS5jbGFzc0xpc3QuYWRkKCdzbm93LWNoYW5jZScpO1xuICAgICAgICAgICAgc25vd0NoYW5jZS5pbm5lclRleHQgPSBgQ2hhbmNlIG9mIFNub3c6ICR7ZGF0YVtpXS5jaGFuY2VPZlNub3d9JWA7XG4gICAgXG4gICAgICAgICAgICB0ZW1wRGF0YS5hcHBlbmRDaGlsZChhdmdUZW1wKTtcbiAgICAgICAgICAgIHRlbXBEYXRhLmFwcGVuZENoaWxkKG1heFRlbXApO1xuICAgICAgICAgICAgdGVtcERhdGEuYXBwZW5kQ2hpbGQobWluVGVtcCk7XG4gICAgICAgICAgICB0ZW1wRGF0YS5hcHBlbmRDaGlsZChyYWluQ2hhbmNlKTtcbiAgICAgICAgICAgIHRlbXBEYXRhLmFwcGVuZENoaWxkKHNub3dDaGFuY2UpO1xuICAgIFxuICAgICAgICAgICAgbWFpbkRhdGEuYXBwZW5kQ2hpbGQoZGF5KTtcbiAgICAgICAgICAgIG1haW5EYXRhLmFwcGVuZENoaWxkKGljb24pO1xuICAgICAgICAgICAgbWFpbkRhdGEuYXBwZW5kQ2hpbGQoY29uZGl0aW9uKTtcbiAgICBcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChtYWluRGF0YSk7XG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGVtcERhdGEpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgdmFyKC0tRkctQ09MT1IpJztcblxuICAgICAgICAgICAgbGV0IG1haW5EYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBtYWluRGF0YS5jbGFzc0xpc3QuYWRkKCdtYWluLWRhdGEnKVxuXG4gICAgICAgICAgICBsZXQgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICAgICAgbG9jYXRpb24uY2xhc3NMaXN0LmFkZCgnbG9jYXRpb24nKTtcbiAgICAgICAgICAgIGxvY2F0aW9uLmlubmVyVGV4dCA9IGRhdGFbaV0uY291bnRyeSArICcsICcgKyBkYXRhW2ldLmNpdHk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgICAgIGRhdGUuY2xhc3NMaXN0LmFkZCgnZGF0ZScpO1xuICAgICAgICAgICAgbGV0IGRhdGVhcnIgPSBkYXRhW2ldLmRheS5zcGxpdCgnLScpO1xuICAgICAgICAgICAgZGF0ZS5pbm5lclRleHQgPSBgJHtnZXRNb250aChkYXRlYXJyWzFdKX0gJHtkYXRlYXJyWzJdfSAke2RhdGVhcnJbMF19YDtcblxuICAgICAgICAgICAgbGV0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGljb24uc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgIGljb24uc3JjID0gJ2h0dHBzOicgKyBkYXRhW2ldLmljb247XG5cbiAgICAgICAgICAgIGxldCBjb25kaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICAgICAgY29uZGl0aW9uLmlubmVyVGV4dCA9IGRhdGFbaV0uY29uZGl0aW9uO1xuXG4gICAgICAgICAgICBsZXQgdGVtcERhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRlbXBEYXRhLmRhdGFBdHRyaWJ1dGUgPSBOdW1iZXIoaSk7XG4gICAgICAgICAgICB0ZW1wRGF0YS5jbGFzc0xpc3QuYWRkKCd0ZW1wLWRhdGEnKTtcblxuICAgICAgICAgICAgbGV0IGF2ZXJhZ2VUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgICAgIGF2ZXJhZ2VUZW1wLmNsYXNzTGlzdC5hZGQoJ2F2ZXJhZ2UnKTtcbiAgICAgICAgICAgIGF2ZXJhZ2VUZW1wLmlubmVySFRNTCA9IGBBdmVyYWdlOiA8YnI+ICR7ZGF0YVtpXVsnYXZnVGVtcCcgKyBkZWdyZWVzXX0gJHtzeW1ib2x9YDtcblxuICAgICAgICAgICAgbGV0IGhpZ2hUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgICAgIGhpZ2hUZW1wLmNsYXNzTGlzdC5hZGQoJ2hpZ2gnKTtcbiAgICAgICAgICAgIGhpZ2hUZW1wLmlubmVySFRNTCA9IGBIaWdoOiA8YnI+ICR7ZGF0YVtpXVsnbWF4VGVtcCcgKyBkZWdyZWVzXX0gJHtzeW1ib2x9YDtcblxuICAgICAgICAgICAgbGV0IGxvd1RlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICAgICAgbG93VGVtcC5jbGFzc0xpc3QuYWRkKCdsb3cnKTtcbiAgICAgICAgICAgIGxvd1RlbXAuaW5uZXJIVE1MID0gYExvdzogPGJyPiAke2RhdGFbaV1bJ21pblRlbXAnICsgZGVncmVlc119ICR7c3ltYm9sfWA7XG5cbiAgICAgICAgICAgIGxldCByYWluQ2hhbmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgICAgIHJhaW5DaGFuY2UuY2xhc3NMaXN0LmFkZCgncmFpbi1jaGFuY2UnKTtcbiAgICAgICAgICAgIHJhaW5DaGFuY2UuaW5uZXJUZXh0ID0gYENoYW5jZSBvZiBSYWluOiAke2RhdGFbaV0uY2hhbmNlT2ZSYWlufSVgO1xuXG4gICAgICAgICAgICBsZXQgc25vd0NoYW5jZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICAgICAgICBzbm93Q2hhbmNlLmNsYXNzTGlzdC5hZGQoJ3Nub3ctY2hhbmNlJyk7XG4gICAgICAgICAgICBzbm93Q2hhbmNlLmlubmVyVGV4dCA9IGBDaGFuY2Ugb2YgU25vdzogJHtkYXRhW2ldLmNoYW5jZU9mU25vd30lYDtcblxuICAgICAgICAgICAgdGVtcERhdGEuYXBwZW5kQ2hpbGQoYXZlcmFnZVRlbXApO1xuICAgICAgICAgICAgdGVtcERhdGEuYXBwZW5kQ2hpbGQoaGlnaFRlbXApO1xuICAgICAgICAgICAgdGVtcERhdGEuYXBwZW5kQ2hpbGQobG93VGVtcCk7XG4gICAgICAgICAgICB0ZW1wRGF0YS5hcHBlbmRDaGlsZChyYWluQ2hhbmNlKTtcbiAgICAgICAgICAgIHRlbXBEYXRhLmFwcGVuZENoaWxkKHNub3dDaGFuY2UpO1xuXG4gICAgICAgICAgICBtYWluRGF0YS5hcHBlbmRDaGlsZChsb2NhdGlvbik7XG4gICAgICAgICAgICBtYWluRGF0YS5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICAgICAgICAgIG1haW5EYXRhLmFwcGVuZENoaWxkKGljb24pO1xuICAgICAgICAgICAgbWFpbkRhdGEuYXBwZW5kQ2hpbGQoY29uZGl0aW9uKTtcblxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluRGF0YSk7XG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXBEYXRhKTtcbiAgICAgICAgfTtcbiAgICB9O1xufTtcblxuZXhwb3J0IHsgZGVmYXVsdFZpZXcsIGNoYW5nZURlZ3JlZXMgfTsiLCJcbmZ1bmN0aW9uIGRheXNJbk1vbnRoKG1vbnRoLCB5ZWFyKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoLCAwKS5nZXREYXRlKCk7XG59O1xuXG5cbmNvbnN0IGN1cnJlbnREYXRlID0gZnVuY3Rpb24gZ2V0Q3VycmVudERhdGUoKSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgICBcbiAgICByZXR1cm4geyB5ZWFyLCBtb250aCwgZGF5IH07XG59O1xuXG5cbmNvbnN0IHBhc3REYXRlcyA9IGZ1bmN0aW9uIGdldFBhc3RUd29EYXRlcygpIHtcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IHByZXZpb3VzTW9udGhEYXlzID0gZGF5c0luTW9udGgoZGF0ZS5nZXRNb250aCgpIC0xLCBkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICAgIGxldCBjZGF0ZSA9IGN1cnJlbnREYXRlKCk7XG4gICAgbGV0IHBkYXRlcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcblxuICAgICAgICBsZXQgeWVhciA9IGNkYXRlLnllYXI7XG4gICAgICAgIGxldCBtb250aCA9IGNkYXRlLm1vbnRoO1xuICAgICAgICBtb250aCsrXG4gICAgICAgIGxldCBkYXkgPSBjZGF0ZS5kYXkgLSAoMiAtIGkpO1xuXG4gICAgICAgIC8vIHRoaXMgbWVhbnMgdGhhdCB3ZSB3ZW50IGJhY2sgYSBtb250aFxuICAgICAgICBpZiAoZGF5ID09PSBwcmV2aW91c01vbnRoRGF5cykge1xuICAgICAgICAgICAgbW9udGgtLTtcblxuICAgICAgICAgICAgaWYgKG1vbnRoIDwgMCkgey8vIHRoaXMgbWVhbnMgd2Ugd2VudCBiYWNrIGEgeWVhclxuICAgICAgICAgICAgICAgIG1vbnRoID0gMTFcbiAgICAgICAgICAgICAgICB5ZWFyLS07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChtb250aCA8IDEwKSB7IG1vbnRoID0gJzAnICsgbW9udGggfTtcbiAgICAgICAgaWYgKGRheSA8IDEwKSB7IGRheSA9ICcwJyArIGRheSB9O1xuXG4gICAgICAgIHBkYXRlc1tpXSA9IHt5ZWFyLCBtb250aCwgZGF5fTtcbiAgICB9O1xuICAgIHJldHVybiBwZGF0ZXM7XG59O1xuXG5cbmNvbnN0IGZ1dHVyZURhdGVzID0gZnVuY3Rpb24gZ2V0RnV0dXJlVHdvRGF0ZXMoKSB7XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBuZXh0TW9udGhEYXlzID0gZGF5c0luTW9udGgoZGF0ZS5nZXRNb250aCgpICsxLCBkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICAgIGxldCBjZGF0ZSA9IGN1cnJlbnREYXRlKCk7XG4gICAgbGV0IGZkYXRlcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgbGV0IHllYXIgPSBjZGF0ZS55ZWFyO1xuICAgICAgICBsZXQgbW9udGggPSBjZGF0ZS5tb250aDtcbiAgICAgICAgbW9udGgrKztcbiAgICAgICAgbGV0IGRheSA9IGNkYXRlLmRheSArICgxICsgaSk7XG5cbiAgICAgICAgXG4gICAgICAgIC8vIHRoaXMgbWVhbnMgdGhhdCB3ZSB3ZW50IGZvcndhcmQgb25lIG1vbnRoXG4gICAgICAgIGlmIChkYXkgPT09IDEpIHtcbiAgICAgICAgICAgIG1vbnRoKys7XG5cbiAgICAgICAgICAgIGlmIChtb250aCA9PT0gMTMpIHsvL3RoaXMgbWVhbnMgaXQgd2VudCB0byBuZXcgeWVhclxuICAgICAgICAgICAgICAgIG1vbnRoID0gMTtcbiAgICAgICAgICAgICAgICB5ZWFyKys7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG5cbiAgICAgICAgaWYgKG1vbnRoIDwgMTApIHsgbW9udGggPSAnMCcgKyBtb250aCB9O1xuICAgICAgICBpZiAoZGF5IDwgMTApIHsgZGF5ID0gJzAnICsgZGF5IH07XG5cbiAgICAgICAgZmRhdGVzW2ldID0ge3llYXIsIG1vbnRoLCBkYXl9O1xuICAgIH07XG4gICAgcmV0dXJuIGZkYXRlcztcbn07XG5cblxuXG5cbmV4cG9ydCB7IGN1cnJlbnREYXRlLCBwYXN0RGF0ZXMsIGZ1dHVyZURhdGVzIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0wNDc1MWE5NmQzN2Q0NmZhYWMyMjAxMTA4MjQyMDAxJnE9UGFyaXNcbi8vIGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTA0NzUxYTk2ZDM3ZDQ2ZmFhYzIyMDExMDgyNDIwMDEmcT1QYXJpcyZkYXlzPTNcbi8vIGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9MDQ3NTFhOTZkMzdkNDZmYWFjMjIwMTEwODI0MjAwMSZxPWF1dG86aXBcbi8vIGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2hpc3RvcnkuanNvbj9rZXk9MDQ3NTFhOTZkMzdkNDZmYWFjMjIwMTEwODI0MjAwMSZxPWF1dG86aXAmZHQ9MjAyMy0wOC0xMFxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBjdXJyZW50RGF0ZSwgcGFzdERhdGVzLCBmdXR1cmVEYXRlcyB9IGZyb20gJy4vaGFuZGxlRGF0ZXMuanMnO1xuaW1wb3J0IHsgZGVmYXVsdFZpZXcsIGNoYW5nZURlZ3JlZXMgfSBmcm9tICcuL2hhbmRsZURPTS5qcyc7XG5cbmRlZmF1bHRWaWV3KCk7XG5cbmNvbnN0IHRvZ2dsZVN3aXRjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2gnKTtcbnRvZ2dsZVN3aXRjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY2hhbmdlRGVncmVlcygpO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJldHVybiBmYWxzZTtcbn0pO1xuXG5cbmNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpYWxvZycpO1xuY29uc3QgZGlhbG9nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW4tZGlhbG9nJyk7XG5kaWFsb2dCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGRpYWxvZy5zaG93TW9kYWwoKTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==