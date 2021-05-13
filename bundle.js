/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_GitHub_Mark_32px_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/GitHub-Mark-32px.png */ "./src/images/GitHub-Mark-32px.png");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_GitHub_Mark_32px_png__WEBPACK_IMPORTED_MODULE_3__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* @font-face {\n  font-family: 'myfont';\n  src: url('./fonts/myfont.woff') format('woff'),\n    url('./fonts/myfont.eot') format('eot'),\n    url('./fonts/myfont.svg') format('svg');\n  font-style: normal;\n}*/\n/* COPYRIGHT */\nhtml {\n  height: 100%;\n  font-family: Calibri, 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;\n}\nbody {\n  min-height: 100%;\n  display: grid;\n  grid:\n    [row1-start] 'header header' 0.5fr [row1-end]\n    [row2-start] 'side-nav content' 10fr [row2-end]\n    / 1fr 3fr;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nheader {\n  grid-area: header;\n  background-color: #f4b942;\n  font-size: 1em;\n  padding-left: 2%;\n  border: solid 1px rgb(49, 49, 49);\n  display: flex;\n  align-items: center;\n}\n\nheader h1 {\n  display: inline-block;\n  margin-right: 0.5em;\n}\n\n.github-logo {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  display: inline-block;\n  height: 2em;\n  width: 2em;\n}\n\n.side-nav {\n  grid-area: side-nav;\n  background-color: #ebebeb;\n  border-right: solid 1px rgb(49, 49, 49);\n  border-left: solid 1px rgb(49, 49, 49);\n  border-bottom: solid 1px rgb(49, 49, 49);\n}\n\n#all-items {\n  border-bottom: solid 0.3px gray;\n}\n\n.side-nav a,\n.side-nav span {\n  display: block;\n  font-size: 2em;\n  text-decoration: none;\n  color: black;\n  padding: 1em 1em 1em 1em;\n  transition: 0.5s;\n}\n\n.side-nav a:hover {\n  background-color: #c3c3c3;\n}\n\n.side-nav a:last-child {\n  border-bottom: solid 0.3px gray;\n}\n\n.side-nav :nth-child(n + 3) {\n  border-top: solid 0.3px gray;\n  font-size: 1.5em;\n  text-align: center;\n}\n\n.tab--selected {\n  background-color: #c3c3c3;\n}\n\n.content {\n  grid-area: content;\n  background-color: #f5f5f5;\n  border-right: solid 1px rgb(49, 49, 49);\n  border-bottom: solid 1px rgb(49, 49, 49);\n}\n\n.tab-panel {\n  height: 12%;\n  background-color: white;\n  border-bottom: solid 1px rgb(49, 49, 49);\n  border-right: solid 1px rgb(49, 49, 49);\n  margin-bottom: 1em;\n  font-size: 2em;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  place-items: center ;\n}\n\n.add-new-item,\n.add-new-project {\n  background-color: #F8D48B;\n}\n\n.delete-project {\n  background-color: #e79988;\n}\n\n.add-new-item,\n.add-new-project,\n.delete-project {\n  font-size: 0.5em;\n  padding: 1em;\n}\n\n.item {\n  margin-left: 3em;\n  margin-bottom: 1.5em;\n  animation: appear 0.7s;\n  width: 90%;\n}\n\n.item-banner {\n  background-color: white;\n  font-size: 1.5em;\n  border: solid 1px black;\n  padding: 0.5em;\n  display: grid;\n  grid-template-columns: 0.5fr 4fr 1.7fr 0.5fr;\n  align-items: center;\n  gap: 2%;\n}\n\n.checkbox-container {\n  display: block;\n  cursor: pointer;\n  display:flex;\n}\n\n.checkbox-container input {\n  height: 0;\n  width: 0;\n}\n\n.custom-checkbox {\n  display: inline-block;\n  height: 1.5em;\n  width: 1.5em;\n  border: solid black 2px;\n  border-radius: 1.5em;\n  margin: auto 0;\n}\n\n.checkbox-container input:checked ~ .custom-checkbox {\n  background-color: #23ce6b;\n}\n\n.custom-checkbox:after {\n  content: \"\";\n  position: relative;\n  display: none;\n}\n\n.checkbox-container input:checked ~ .custom-checkbox:after {\n  display: block;\n  animation: fade-in 0.5s;\n}\n\n.checkbox-container .custom-checkbox:after {\n  left: 0.5em;\n  top: 0.2em;\n  width: 0.2em;\n  height: 0.7em;\n  border: solid white;\n  border-width: 0 0.2em 0.2em 0;\n  transform: rotate(45deg);\n}\n\n.show-info {\n  height: 3em;\n}\n\n.item-banner--editing,\n.item-info--editing {\n  transition: 0.5s;\n}\n\n.item-banner--editing input,\n.item-info--expanded input,\n.item-info--editing select {\n  font-size: 1em;\n}\n\n/*item-info--editing elements*/\n\ninput[type='radio'] {\n  display: none;\n}\n\n.priority-label {\n  border: solid 1px black;\n  display: inline-block;\n  width: 20%;\n  text-align: center;\n}\n\ninput[type='radio']:checked + label {\n  background-color: #e79988;\n}\n\n.item-info {\n  background-color: white;\n  display: none;\n  font-size: 1.5em;\n  border-bottom: solid 1px black;\n  border-left: solid 1px black;\n  border-right: solid 1px black;\n  padding: 1em 1em 0 1em;\n}\n\n.item-info--expanded {\n  display: grid;\n  grid: 1fr 1fr 1fr 3fr/ 1fr 4fr;\n  gap: 0.7em 0.5em;\n  animation: fade-in 0.8s;\n}\n\n.item-info button {\n  font-size: 1em;\n  margin: 0.5em 1em 1em 0;\n  padding: 0.5em 1em;\n}\n\n.hidden {\n  display: none;\n}\n\n@keyframes appear {\n  0% {\n    transform: scale(1, 0);\n  }\n}\n\n@keyframes fade-in {\n  0% {\n    opacity: 0%;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;;;EAME;AACF,cAAc;AACd;EACE,YAAY;EACZ,6EAA6E;AAC/E;AACA;EACE,gBAAgB;EAChB,aAAa;EACb;;;aAGW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,yBAAyB;EACzB,cAAc;EACd,gBAAgB;EAChB,iCAAiC;EACjC,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,yDAAoD;EACpD,4BAA4B;EAC5B,qBAAqB;EACrB,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;EACzB,uCAAuC;EACvC,sCAAsC;EACtC,wCAAwC;AAC1C;;AAEA;EACE,+BAA+B;AACjC;;AAEA;;EAEE,cAAc;EACd,cAAc;EACd,qBAAqB;EACrB,YAAY;EACZ,wBAAwB;EACxB,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,4BAA4B;EAC5B,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,uCAAuC;EACvC,wCAAwC;AAC1C;;AAEA;EACE,WAAW;EACX,uBAAuB;EACvB,wCAAwC;EACxC,uCAAuC;EACvC,kBAAkB;EAClB,cAAc;EACd,aAAa;EACb,sCAAsC;EACtC,oBAAoB;AACtB;;AAEA;;EAEE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;;;EAGE,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,oBAAoB;EACpB,sBAAsB;EACtB,UAAU;AACZ;;AAEA;EACE,uBAAuB;EACvB,gBAAgB;EAChB,uBAAuB;EACvB,cAAc;EACd,aAAa;EACb,4CAA4C;EAC5C,mBAAmB;EACnB,OAAO;AACT;;AAEA;EACE,cAAc;EACd,eAAe;EACf,YAAY;AACd;;AAEA;EACE,SAAS;EACT,QAAQ;AACV;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,YAAY;EACZ,uBAAuB;EACvB,oBAAoB;EACpB,cAAc;AAChB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,cAAc;EACd,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,UAAU;EACV,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,wBAAwB;AAC1B;;AAEA;EACE,WAAW;AACb;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;;;EAGE,cAAc;AAChB;;AAEA,8BAA8B;;AAE9B;EACE,aAAa;AACf;;AAEA;EACE,uBAAuB;EACvB,qBAAqB;EACrB,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,gBAAgB;EAChB,8BAA8B;EAC9B,4BAA4B;EAC5B,6BAA6B;EAC7B,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,cAAc;EACd,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE;IACE,sBAAsB;EACxB;AACF;;AAEA;EACE;IACE,WAAW;EACb;AACF","sourcesContent":["/* @font-face {\n  font-family: 'myfont';\n  src: url('./fonts/myfont.woff') format('woff'),\n    url('./fonts/myfont.eot') format('eot'),\n    url('./fonts/myfont.svg') format('svg');\n  font-style: normal;\n}*/\n/* COPYRIGHT */\nhtml {\n  height: 100%;\n  font-family: Calibri, 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;\n}\nbody {\n  min-height: 100%;\n  display: grid;\n  grid:\n    [row1-start] 'header header' 0.5fr [row1-end]\n    [row2-start] 'side-nav content' 10fr [row2-end]\n    / 1fr 3fr;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nheader {\n  grid-area: header;\n  background-color: #f4b942;\n  font-size: 1em;\n  padding-left: 2%;\n  border: solid 1px rgb(49, 49, 49);\n  display: flex;\n  align-items: center;\n}\n\nheader h1 {\n  display: inline-block;\n  margin-right: 0.5em;\n}\n\n.github-logo {\n  background-image: url(./images/GitHub-Mark-32px.png);\n  background-repeat: no-repeat;\n  display: inline-block;\n  height: 2em;\n  width: 2em;\n}\n\n.side-nav {\n  grid-area: side-nav;\n  background-color: #ebebeb;\n  border-right: solid 1px rgb(49, 49, 49);\n  border-left: solid 1px rgb(49, 49, 49);\n  border-bottom: solid 1px rgb(49, 49, 49);\n}\n\n#all-items {\n  border-bottom: solid 0.3px gray;\n}\n\n.side-nav a,\n.side-nav span {\n  display: block;\n  font-size: 2em;\n  text-decoration: none;\n  color: black;\n  padding: 1em 1em 1em 1em;\n  transition: 0.5s;\n}\n\n.side-nav a:hover {\n  background-color: #c3c3c3;\n}\n\n.side-nav a:last-child {\n  border-bottom: solid 0.3px gray;\n}\n\n.side-nav :nth-child(n + 3) {\n  border-top: solid 0.3px gray;\n  font-size: 1.5em;\n  text-align: center;\n}\n\n.tab--selected {\n  background-color: #c3c3c3;\n}\n\n.content {\n  grid-area: content;\n  background-color: #f5f5f5;\n  border-right: solid 1px rgb(49, 49, 49);\n  border-bottom: solid 1px rgb(49, 49, 49);\n}\n\n.tab-panel {\n  height: 12%;\n  background-color: white;\n  border-bottom: solid 1px rgb(49, 49, 49);\n  border-right: solid 1px rgb(49, 49, 49);\n  margin-bottom: 1em;\n  font-size: 2em;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  place-items: center ;\n}\n\n.add-new-item,\n.add-new-project {\n  background-color: #F8D48B;\n}\n\n.delete-project {\n  background-color: #e79988;\n}\n\n.add-new-item,\n.add-new-project,\n.delete-project {\n  font-size: 0.5em;\n  padding: 1em;\n}\n\n.item {\n  margin-left: 3em;\n  margin-bottom: 1.5em;\n  animation: appear 0.7s;\n  width: 90%;\n}\n\n.item-banner {\n  background-color: white;\n  font-size: 1.5em;\n  border: solid 1px black;\n  padding: 0.5em;\n  display: grid;\n  grid-template-columns: 0.5fr 4fr 1.7fr 0.5fr;\n  align-items: center;\n  gap: 2%;\n}\n\n.checkbox-container {\n  display: block;\n  cursor: pointer;\n  display:flex;\n}\n\n.checkbox-container input {\n  height: 0;\n  width: 0;\n}\n\n.custom-checkbox {\n  display: inline-block;\n  height: 1.5em;\n  width: 1.5em;\n  border: solid black 2px;\n  border-radius: 1.5em;\n  margin: auto 0;\n}\n\n.checkbox-container input:checked ~ .custom-checkbox {\n  background-color: #23ce6b;\n}\n\n.custom-checkbox:after {\n  content: \"\";\n  position: relative;\n  display: none;\n}\n\n.checkbox-container input:checked ~ .custom-checkbox:after {\n  display: block;\n  animation: fade-in 0.5s;\n}\n\n.checkbox-container .custom-checkbox:after {\n  left: 0.5em;\n  top: 0.2em;\n  width: 0.2em;\n  height: 0.7em;\n  border: solid white;\n  border-width: 0 0.2em 0.2em 0;\n  transform: rotate(45deg);\n}\n\n.show-info {\n  height: 3em;\n}\n\n.item-banner--editing,\n.item-info--editing {\n  transition: 0.5s;\n}\n\n.item-banner--editing input,\n.item-info--expanded input,\n.item-info--editing select {\n  font-size: 1em;\n}\n\n/*item-info--editing elements*/\n\ninput[type='radio'] {\n  display: none;\n}\n\n.priority-label {\n  border: solid 1px black;\n  display: inline-block;\n  width: 20%;\n  text-align: center;\n}\n\ninput[type='radio']:checked + label {\n  background-color: #e79988;\n}\n\n.item-info {\n  background-color: white;\n  display: none;\n  font-size: 1.5em;\n  border-bottom: solid 1px black;\n  border-left: solid 1px black;\n  border-right: solid 1px black;\n  padding: 1em 1em 0 1em;\n}\n\n.item-info--expanded {\n  display: grid;\n  grid: 1fr 1fr 1fr 3fr/ 1fr 4fr;\n  gap: 0.7em 0.5em;\n  animation: fade-in 0.8s;\n}\n\n.item-info button {\n  font-size: 1em;\n  margin: 0.5em 1em 1em 0;\n  padding: 0.5em 1em;\n}\n\n.hidden {\n  display: none;\n}\n\n@keyframes appear {\n  0% {\n    transform: scale(1, 0);\n  }\n}\n\n@keyframes fade-in {\n  0% {\n    opacity: 0%;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/sweetalert/dist/sweetalert.min.js":
/*!********************************************************!*\
  !*** ./node_modules/sweetalert/dist/sweetalert.min.js ***!
  \********************************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=8)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="swal-button";e.CLASS_NAMES={MODAL:"swal-modal",OVERLAY:"swal-overlay",SHOW_MODAL:"swal-overlay--show-modal",MODAL_TITLE:"swal-title",MODAL_TEXT:"swal-text",ICON:"swal-icon",ICON_CUSTOM:"swal-icon--custom",CONTENT:"swal-content",FOOTER:"swal-footer",BUTTON_CONTAINER:"swal-button-container",BUTTON:o,CONFIRM_BUTTON:o+"--confirm",CANCEL_BUTTON:o+"--cancel",DANGER_BUTTON:o+"--danger",BUTTON_LOADING:o+"--loading",BUTTON_LOADER:o+"__loader"},e.default=e.CLASS_NAMES},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getNode=function(t){var e="."+t;return document.querySelector(e)},e.stringToNode=function(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstChild},e.insertAfter=function(t,e){var n=e.nextSibling;e.parentNode.insertBefore(t,n)},e.removeNode=function(t){t.parentElement.removeChild(t)},e.throwErr=function(t){throw t=t.replace(/ +(?= )/g,""),"SweetAlert: "+(t=t.trim())},e.isPlainObject=function(t){if("[object Object]"!==Object.prototype.toString.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype},e.ordinalSuffixOf=function(t){var e=t%10,n=t%100;return 1===e&&11!==n?t+"st":2===e&&12!==n?t+"nd":3===e&&13!==n?t+"rd":t+"th"}},function(t,e,n){"use strict";function o(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),o(n(25));var r=n(26);e.overlayMarkup=r.default,o(n(27)),o(n(28)),o(n(29));var i=n(0),a=i.default.MODAL_TITLE,s=i.default.MODAL_TEXT,c=i.default.ICON,l=i.default.FOOTER;e.iconMarkup='\n  <div class="'+c+'"></div>',e.titleMarkup='\n  <div class="'+a+'"></div>\n',e.textMarkup='\n  <div class="'+s+'"></div>',e.footerMarkup='\n  <div class="'+l+'"></div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1);e.CONFIRM_KEY="confirm",e.CANCEL_KEY="cancel";var r={visible:!0,text:null,value:null,className:"",closeModal:!0},i=Object.assign({},r,{visible:!1,text:"Cancel",value:null}),a=Object.assign({},r,{text:"OK",value:!0});e.defaultButtonList={cancel:i,confirm:a};var s=function(t){switch(t){case e.CONFIRM_KEY:return a;case e.CANCEL_KEY:return i;default:var n=t.charAt(0).toUpperCase()+t.slice(1);return Object.assign({},r,{text:n,value:t})}},c=function(t,e){var n=s(t);return!0===e?Object.assign({},n,{visible:!0}):"string"==typeof e?Object.assign({},n,{visible:!0,text:e}):o.isPlainObject(e)?Object.assign({visible:!0},n,e):Object.assign({},n,{visible:!1})},l=function(t){for(var e={},n=0,o=Object.keys(t);n<o.length;n++){var r=o[n],a=t[r],s=c(r,a);e[r]=s}return e.cancel||(e.cancel=i),e},u=function(t){var n={};switch(t.length){case 1:n[e.CANCEL_KEY]=Object.assign({},i,{visible:!1});break;case 2:n[e.CANCEL_KEY]=c(e.CANCEL_KEY,t[0]),n[e.CONFIRM_KEY]=c(e.CONFIRM_KEY,t[1]);break;default:o.throwErr("Invalid number of 'buttons' in array ("+t.length+").\n      If you want more than 2 buttons, you need to use an object!")}return n};e.getButtonListOpts=function(t){var n=e.defaultButtonList;return"string"==typeof t?n[e.CONFIRM_KEY]=c(e.CONFIRM_KEY,t):Array.isArray(t)?n=u(t):o.isPlainObject(t)?n=l(t):!0===t?n=u([!0,!0]):!1===t?n=u([!1,!1]):void 0===t&&(n=e.defaultButtonList),n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),i=n(0),a=i.default.MODAL,s=i.default.OVERLAY,c=n(30),l=n(31),u=n(32),f=n(33);e.injectElIntoModal=function(t){var e=o.getNode(a),n=o.stringToNode(t);return e.appendChild(n),n};var d=function(t){t.className=a,t.textContent=""},p=function(t,e){d(t);var n=e.className;n&&t.classList.add(n)};e.initModalContent=function(t){var e=o.getNode(a);p(e,t),c.default(t.icon),l.initTitle(t.title),l.initText(t.text),f.default(t.content),u.default(t.buttons,t.dangerMode)};var m=function(){var t=o.getNode(s),e=o.stringToNode(r.modalMarkup);t.appendChild(e)};e.default=m},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r={isOpen:!1,promise:null,actions:{},timer:null},i=Object.assign({},r);e.resetState=function(){i=Object.assign({},r)},e.setActionValue=function(t){if("string"==typeof t)return a(o.CONFIRM_KEY,t);for(var e in t)a(e,t[e])};var a=function(t,e){i.actions[t]||(i.actions[t]={}),Object.assign(i.actions[t],{value:e})};e.setActionOptionsFor=function(t,e){var n=(void 0===e?{}:e).closeModal,o=void 0===n||n;Object.assign(i.actions[t],{closeModal:o})},e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),i=n(0),a=i.default.OVERLAY,s=i.default.SHOW_MODAL,c=i.default.BUTTON,l=i.default.BUTTON_LOADING,u=n(5);e.openModal=function(){o.getNode(a).classList.add(s),u.default.isOpen=!0};var f=function(){o.getNode(a).classList.remove(s),u.default.isOpen=!1};e.onAction=function(t){void 0===t&&(t=r.CANCEL_KEY);var e=u.default.actions[t],n=e.value;if(!1===e.closeModal){var i=c+"--"+t;o.getNode(i).classList.add(l)}else f();u.default.promise.resolve(n)},e.getState=function(){var t=Object.assign({},u.default);return delete t.promise,delete t.timer,t},e.stopLoading=function(){for(var t=document.querySelectorAll("."+c),e=0;e<t.length;e++){t[e].classList.remove(l)}}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){(function(e){t.exports=e.sweetAlert=n(9)}).call(e,n(7))},function(t,e,n){(function(e){t.exports=e.swal=n(10)}).call(e,n(7))},function(t,e,n){"undefined"!=typeof window&&n(11),n(16);var o=n(23).default;t.exports=o},function(t,e,n){var o=n(12);"string"==typeof o&&(o=[[t.i,o,""]]);var r={insertAt:"top"};r.transform=void 0;n(14)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){e=t.exports=n(13)(void 0),e.push([t.i,'.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button:not([disabled]):hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}',""])},function(t,e){function n(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=n(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function o(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=m[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(u(o.parts[i],e))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(u(o.parts[i],e));m[o.id]={id:o.id,refs:1,parts:a}}}}function r(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=e.base?i[0]+e.base:i[0],s=i[1],c=i[2],l=i[3],u={css:s,media:c,sourceMap:l};o[a]?o[a].parts.push(u):n.push(o[a]={id:a,parts:[u]})}return n}function i(t,e){var n=v(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=w[w.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),w.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=w.indexOf(t);e>=0&&w.splice(e,1)}function s(t){var e=document.createElement("style");return t.attrs.type="text/css",l(e,t.attrs),i(t,e),e}function c(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",l(e,t.attrs),i(t,e),e}function l(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function u(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var l=h++;n=g||(g=s(e)),o=f.bind(null,n,l,!1),r=f.bind(null,n,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(e),o=p.bind(null,n,e),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),o=d.bind(null,n),r=function(){a(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}function f(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=x(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function d(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function p(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=y(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var m={},b=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),v=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t.call(this,n)),e[n]}}(function(t){return document.querySelector(t)}),g=null,h=0,w=[],y=n(15);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=b()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=r(t,e);return o(n,e),function(t){for(var i=[],a=0;a<n.length;a++){var s=n[a],c=m[s.id];c.refs--,i.push(c)}if(t){o(r(t,e),e)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete m[c.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return t;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},function(t,e,n){var o=n(17);"undefined"==typeof window||window.Promise||(window.Promise=o),n(21),String.prototype.includes||(String.prototype.includes=function(t,e){"use strict";return"number"!=typeof e&&(e=0),!(e+t.length>this.length)&&-1!==this.indexOf(t,e)}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(t,e){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),o=n.length>>>0;if(0===o)return!1;for(var r=0|e,i=Math.max(r>=0?r:o-Math.abs(r),0);i<o;){if(function(t,e){return t===e||"number"==typeof t&&"number"==typeof e&&isNaN(t)&&isNaN(e)}(n[i],t))return!0;i++}return!1}}),"undefined"!=typeof window&&function(t){t.forEach(function(t){t.hasOwnProperty("remove")||Object.defineProperty(t,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})})}([Element.prototype,CharacterData.prototype,DocumentType.prototype])},function(t,e,n){(function(e){!function(n){function o(){}function r(t,e){return function(){t.apply(e,arguments)}}function i(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(t,this)}function a(t,e){for(;3===t._state;)t=t._value;if(0===t._state)return void t._deferreds.push(e);t._handled=!0,i._immediateFn(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._state?s:c)(e.promise,t._value);var o;try{o=n(t._value)}catch(t){return void c(e.promise,t)}s(e.promise,o)})}function s(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof i)return t._state=3,t._value=e,void l(t);if("function"==typeof n)return void f(r(n,e),t)}t._state=1,t._value=e,l(t)}catch(e){c(t,e)}}function c(t,e){t._state=2,t._value=e,l(t)}function l(t){2===t._state&&0===t._deferreds.length&&i._immediateFn(function(){t._handled||i._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)a(t,t._deferreds[e]);t._deferreds=null}function u(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function f(t,e){var n=!1;try{t(function(t){n||(n=!0,s(e,t))},function(t){n||(n=!0,c(e,t))})}catch(t){if(n)return;n=!0,c(e,t)}}var d=setTimeout;i.prototype.catch=function(t){return this.then(null,t)},i.prototype.then=function(t,e){var n=new this.constructor(o);return a(this,new u(t,e,n)),n},i.all=function(t){var e=Array.prototype.slice.call(t);return new i(function(t,n){function o(i,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(t){o(i,t)},n)}e[i]=a,0==--r&&t(e)}catch(t){n(t)}}if(0===e.length)return t([]);for(var r=e.length,i=0;i<e.length;i++)o(i,e[i])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(t){return new i(function(e,n){n(t)})},i.race=function(t){return new i(function(e,n){for(var o=0,r=t.length;o<r;o++)t[o].then(e,n)})},i._immediateFn="function"==typeof e&&function(t){e(t)}||function(t){d(t,0)},i._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},i._setImmediateFn=function(t){i._immediateFn=t},i._setUnhandledRejectionFn=function(t){i._unhandledRejectionFn=t},void 0!==t&&t.exports?t.exports=i:n.Promise||(n.Promise=i)}(this)}).call(e,n(18).setImmediate)},function(t,e,n){function o(t,e){this._id=t,this._clearFn=e}var r=Function.prototype.apply;e.setTimeout=function(){return new o(r.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new o(r.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n(19),e.setImmediate=setImmediate,e.clearImmediate=clearImmediate},function(t,e,n){(function(t,e){!function(t,n){"use strict";function o(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var o={callback:t,args:e};return l[c]=o,s(c),c++}function r(t){delete l[t]}function i(t){var e=t.callback,o=t.args;switch(o.length){case 0:e();break;case 1:e(o[0]);break;case 2:e(o[0],o[1]);break;case 3:e(o[0],o[1],o[2]);break;default:e.apply(n,o)}}function a(t){if(u)setTimeout(a,0,t);else{var e=l[t];if(e){u=!0;try{i(e)}finally{r(t),u=!1}}}}if(!t.setImmediate){var s,c=1,l={},u=!1,f=t.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(t);d=d&&d.setTimeout?d:t,"[object process]"==={}.toString.call(t.process)?function(){s=function(t){e.nextTick(function(){a(t)})}}():function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?function(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"==typeof n.data&&0===n.data.indexOf(e)&&a(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),s=function(n){t.postMessage(e+n,"*")}}():t.MessageChannel?function(){var t=new MessageChannel;t.port1.onmessage=function(t){a(t.data)},s=function(e){t.port2.postMessage(e)}}():f&&"onreadystatechange"in f.createElement("script")?function(){var t=f.documentElement;s=function(e){var n=f.createElement("script");n.onreadystatechange=function(){a(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}():function(){s=function(t){setTimeout(a,0,t)}}(),d.setImmediate=o,d.clearImmediate=r}}("undefined"==typeof self?void 0===t?this:t:self)}).call(e,n(7),n(20))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(t){if(u===setTimeout)return setTimeout(t,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(e){try{return u.call(null,t,0)}catch(e){return u.call(this,t,0)}}}function i(t){if(f===clearTimeout)return clearTimeout(t);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function a(){b&&p&&(b=!1,p.length?m=p.concat(m):v=-1,m.length&&s())}function s(){if(!b){var t=r(a);b=!0;for(var e=m.length;e;){for(p=m,m=[];++v<e;)p&&p[v].run();v=-1,e=m.length}p=null,b=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function l(){}var u,f,d=t.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(t){u=n}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(t){f=o}}();var p,m=[],b=!1,v=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];m.push(new c(t,e)),1!==m.length||b||r(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.prependListener=l,d.prependOnceListener=l,d.listeners=function(t){return[]},d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(t,e,n){"use strict";n(22).polyfill()},function(t,e,n){"use strict";function o(t,e){if(void 0===t||null===t)throw new TypeError("Cannot convert first argument to object");for(var n=Object(t),o=1;o<arguments.length;o++){var r=arguments[o];if(void 0!==r&&null!==r)for(var i=Object.keys(Object(r)),a=0,s=i.length;a<s;a++){var c=i[a],l=Object.getOwnPropertyDescriptor(r,c);void 0!==l&&l.enumerable&&(n[c]=r[c])}}return n}function r(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:o})}t.exports={assign:o,polyfill:r}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(24),r=n(6),i=n(5),a=n(36),s=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if("undefined"!=typeof window){var n=a.getOpts.apply(void 0,t);return new Promise(function(t,e){i.default.promise={resolve:t,reject:e},o.default(n),setTimeout(function(){r.openModal()})})}};s.close=r.onAction,s.getState=r.getState,s.setActionValue=i.setActionValue,s.stopLoading=r.stopLoading,s.setDefaults=a.setDefaults,e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(0),i=r.default.MODAL,a=n(4),s=n(34),c=n(35),l=n(1);e.init=function(t){o.getNode(i)||(document.body||l.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"),s.default(),a.default()),a.initModalContent(t),c.default(t)},e.default=e.init},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.MODAL;e.modalMarkup='\n  <div class="'+r+'" role="dialog" aria-modal="true"></div>',e.default=e.modalMarkup},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.OVERLAY,i='<div \n    class="'+r+'"\n    tabIndex="-1">\n  </div>';e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.ICON;e.errorIconMarkup=function(){var t=r+"--error",e=t+"__line";return'\n    <div class="'+t+'__x-mark">\n      <span class="'+e+" "+e+'--left"></span>\n      <span class="'+e+" "+e+'--right"></span>\n    </div>\n  '},e.warningIconMarkup=function(){var t=r+"--warning";return'\n    <span class="'+t+'__body">\n      <span class="'+t+'__dot"></span>\n    </span>\n  '},e.successIconMarkup=function(){var t=r+"--success";return'\n    <span class="'+t+"__line "+t+'__line--long"></span>\n    <span class="'+t+"__line "+t+'__line--tip"></span>\n\n    <div class="'+t+'__ring"></div>\n    <div class="'+t+'__hide-corners"></div>\n  '}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.CONTENT;e.contentMarkup='\n  <div class="'+r+'">\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.BUTTON_CONTAINER,i=o.default.BUTTON,a=o.default.BUTTON_LOADER;e.buttonMarkup='\n  <div class="'+r+'">\n\n    <button\n      class="'+i+'"\n    ></button>\n\n    <div class="'+a+'">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(4),r=n(2),i=n(0),a=i.default.ICON,s=i.default.ICON_CUSTOM,c=["error","warning","success","info"],l={error:r.errorIconMarkup(),warning:r.warningIconMarkup(),success:r.successIconMarkup()},u=function(t,e){var n=a+"--"+t;e.classList.add(n);var o=l[t];o&&(e.innerHTML=o)},f=function(t,e){e.classList.add(s);var n=document.createElement("img");n.src=t,e.appendChild(n)},d=function(t){if(t){var e=o.injectElIntoModal(r.iconMarkup);c.includes(t)?u(t,e):f(t,e)}};e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),r=n(4),i=function(t){navigator.userAgent.includes("AppleWebKit")&&(t.style.display="none",t.offsetHeight,t.style.display="")};e.initTitle=function(t){if(t){var e=r.injectElIntoModal(o.titleMarkup);e.textContent=t,i(e)}},e.initText=function(t){if(t){var e=document.createDocumentFragment();t.split("\n").forEach(function(t,n,o){e.appendChild(document.createTextNode(t)),n<o.length-1&&e.appendChild(document.createElement("br"))});var n=r.injectElIntoModal(o.textMarkup);n.appendChild(e),i(n)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(4),i=n(0),a=i.default.BUTTON,s=i.default.DANGER_BUTTON,c=n(3),l=n(2),u=n(6),f=n(5),d=function(t,e,n){var r=e.text,i=e.value,d=e.className,p=e.closeModal,m=o.stringToNode(l.buttonMarkup),b=m.querySelector("."+a),v=a+"--"+t;if(b.classList.add(v),d){(Array.isArray(d)?d:d.split(" ")).filter(function(t){return t.length>0}).forEach(function(t){b.classList.add(t)})}n&&t===c.CONFIRM_KEY&&b.classList.add(s),b.textContent=r;var g={};return g[t]=i,f.setActionValue(g),f.setActionOptionsFor(t,{closeModal:p}),b.addEventListener("click",function(){return u.onAction(t)}),m},p=function(t,e){var n=r.injectElIntoModal(l.footerMarkup);for(var o in t){var i=t[o],a=d(o,i,e);i.visible&&n.appendChild(a)}0===n.children.length&&n.remove()};e.default=p},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r=n(4),i=n(2),a=n(5),s=n(6),c=n(0),l=c.default.CONTENT,u=function(t){t.addEventListener("input",function(t){var e=t.target,n=e.value;a.setActionValue(n)}),t.addEventListener("keyup",function(t){if("Enter"===t.key)return s.onAction(o.CONFIRM_KEY)}),setTimeout(function(){t.focus(),a.setActionValue("")},0)},f=function(t,e,n){var o=document.createElement(e),r=l+"__"+e;o.classList.add(r);for(var i in n){var a=n[i];o[i]=a}"input"===e&&u(o),t.appendChild(o)},d=function(t){if(t){var e=r.injectElIntoModal(i.contentMarkup),n=t.element,o=t.attributes;"string"==typeof n?f(e,n,o):e.appendChild(n)}};e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),i=function(){var t=o.stringToNode(r.overlayMarkup);document.body.appendChild(t)};e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(5),r=n(6),i=n(1),a=n(3),s=n(0),c=s.default.MODAL,l=s.default.BUTTON,u=s.default.OVERLAY,f=function(t){t.preventDefault(),v()},d=function(t){t.preventDefault(),g()},p=function(t){if(o.default.isOpen)switch(t.key){case"Escape":return r.onAction(a.CANCEL_KEY)}},m=function(t){if(o.default.isOpen)switch(t.key){case"Tab":return f(t)}},b=function(t){if(o.default.isOpen)return"Tab"===t.key&&t.shiftKey?d(t):void 0},v=function(){var t=i.getNode(l);t&&(t.tabIndex=0,t.focus())},g=function(){var t=i.getNode(c),e=t.querySelectorAll("."+l),n=e.length-1,o=e[n];o&&o.focus()},h=function(t){t[t.length-1].addEventListener("keydown",m)},w=function(t){t[0].addEventListener("keydown",b)},y=function(){var t=i.getNode(c),e=t.querySelectorAll("."+l);e.length&&(h(e),w(e))},x=function(t){if(i.getNode(u)===t.target)return r.onAction(a.CANCEL_KEY)},_=function(t){var e=i.getNode(u);e.removeEventListener("click",x),t&&e.addEventListener("click",x)},k=function(t){o.default.timer&&clearTimeout(o.default.timer),t&&(o.default.timer=window.setTimeout(function(){return r.onAction(a.CANCEL_KEY)},t))},O=function(t){t.closeOnEsc?document.addEventListener("keyup",p):document.removeEventListener("keyup",p),t.dangerMode?v():g(),y(),_(t.closeOnClickOutside),k(t.timer)};e.default=O},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),i=n(37),a=n(38),s={title:null,text:null,icon:null,buttons:r.defaultButtonList,content:null,className:null,closeOnClickOutside:!0,closeOnEsc:!0,dangerMode:!1,timer:null},c=Object.assign({},s);e.setDefaults=function(t){c=Object.assign({},s,t)};var l=function(t){var e=t&&t.button,n=t&&t.buttons;return void 0!==e&&void 0!==n&&o.throwErr("Cannot set both 'button' and 'buttons' options!"),void 0!==e?{confirm:e}:n},u=function(t){return o.ordinalSuffixOf(t+1)},f=function(t,e){o.throwErr(u(e)+" argument ('"+t+"') is invalid")},d=function(t,e){var n=t+1,r=e[n];o.isPlainObject(r)||void 0===r||o.throwErr("Expected "+u(n)+" argument ('"+r+"') to be a plain object")},p=function(t,e){var n=t+1,r=e[n];void 0!==r&&o.throwErr("Unexpected "+u(n)+" argument ("+r+")")},m=function(t,e,n,r){var i=typeof e,a="string"===i,s=e instanceof Element;if(a){if(0===n)return{text:e};if(1===n)return{text:e,title:r[0]};if(2===n)return d(n,r),{icon:e};f(e,n)}else{if(s&&0===n)return d(n,r),{content:e};if(o.isPlainObject(e))return p(n,r),e;f(e,n)}};e.getOpts=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n={};t.forEach(function(e,o){var r=m(0,e,o,t);Object.assign(n,r)});var o=l(n);n.buttons=r.getButtonListOpts(o),delete n.button,n.content=i.getContentOpts(n.content);var u=Object.assign({},s,c,n);return Object.keys(u).forEach(function(t){a.DEPRECATED_OPTS[t]&&a.logDeprecation(t)}),u}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r={element:"input",attributes:{placeholder:""}};e.getContentOpts=function(t){var e={};return o.isPlainObject(t)?Object.assign(e,t):t instanceof Element?{element:t}:"input"===t?r:null}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.logDeprecation=function(t){var n=e.DEPRECATED_OPTS[t],o=n.onlyRename,r=n.replacement,i=n.subOption,a=n.link,s=o?"renamed":"deprecated",c='SweetAlert warning: "'+t+'" option has been '+s+".";if(r){c+=" Please use"+(i?' "'+i+'" in ':" ")+'"'+r+'" instead.'}var l="https://sweetalert.js.org";c+=a?" More details: "+l+a:" More details: "+l+"/guides/#upgrading-from-1x",console.warn(c)},e.DEPRECATED_OPTS={type:{replacement:"icon",link:"/docs/#icon"},imageUrl:{replacement:"icon",link:"/docs/#icon"},customClass:{replacement:"className",onlyRename:!0,link:"/docs/#classname"},imageSize:{},showCancelButton:{replacement:"buttons",link:"/docs/#buttons"},showConfirmButton:{replacement:"button",link:"/docs/#button"},confirmButtonText:{replacement:"button",link:"/docs/#button"},confirmButtonColor:{},cancelButtonText:{replacement:"buttons",link:"/docs/#buttons"},closeOnConfirm:{replacement:"button",subOption:"closeModal",link:"/docs/#button"},closeOnCancel:{replacement:"buttons",subOption:"closeModal",link:"/docs/#buttons"},showLoaderOnConfirm:{replacement:"buttons"},animation:{},inputType:{replacement:"content",link:"/docs/#content"},inputValue:{replacement:"content",link:"/docs/#content"},inputPlaceholder:{replacement:"content",link:"/docs/#content"},html:{replacement:"content",link:"/docs/#content"},allowEscapeKey:{replacement:"closeOnEsc",onlyRename:!0,link:"/docs/#closeonesc"},allowClickOutside:{replacement:"closeOnClickOutside",onlyRename:!0,link:"/docs/#closeonclickoutside"}}}])});

/***/ }),

/***/ "./src/images/GitHub-Mark-32px.png":
/*!*****************************************!*\
  !*** ./src/images/GitHub-Mark-32px.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0035c307a36c17babb8d.png";

/***/ }),

/***/ "./src/modules/coordinator.js":
/*!************************************!*\
  !*** ./src/modules/coordinator.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domController.js */ "./src/modules/domController.js");
/* harmony import */ var _eventsHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventsHandler.js */ "./src/modules/eventsHandler.js");
/* harmony import */ var _dataController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataController.js */ "./src/modules/dataController.js");
/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item.js */ "./src/modules/item.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);






const coordinator = (() => {
  const loadHomePage = () => {
    // if there is localStorage then load contentDiv All items innerHTML
    createExampleItems();
    const allItems = _dataController_js__WEBPACK_IMPORTED_MODULE_2__.default.getItemsFromTab('All items');
    _domController_js__WEBPACK_IMPORTED_MODULE_0__.default.renderExampleItems(allItems);
    _eventsHandler_js__WEBPACK_IMPORTED_MODULE_1__.default.addListenersInHomePage();
  };

  const createExampleItems = () => {
    const myItem = (0,_item_js__WEBPACK_IMPORTED_MODULE_3__.default)(
      'Learn Shortcuts',
      'James website',
      '01/06/2021',
      'Coding',
      '!!'
    );
    const myItem2 = (0,_item_js__WEBPACK_IMPORTED_MODULE_3__.default)(
      'Study React',
      'Do TOP projects',
      '07/06/2021',
      'Coding',
      '!!!'
    );
    const myItem3 = (0,_item_js__WEBPACK_IMPORTED_MODULE_3__.default)(
      'Do interview questions',
      'Leetcode',
      '10/06/2021',
      'Coding',
      '!'
    );
    const myItem4 = (0,_item_js__WEBPACK_IMPORTED_MODULE_3__.default)(
      'Do groceries shopping',
      'at Woolies',
      '02/06/2021',
      'Life',
      '!'
    );

    _dataController_js__WEBPACK_IMPORTED_MODULE_2__.default.addToAllItems(myItem);
    _dataController_js__WEBPACK_IMPORTED_MODULE_2__.default.addToAllItems(myItem2);
    _dataController_js__WEBPACK_IMPORTED_MODULE_2__.default.addToAllItems(myItem3);
    _dataController_js__WEBPACK_IMPORTED_MODULE_2__.default.addToAllItems(myItem4);
  };

  const promptNewProject = (e) => {
    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()('Please enter your new project name:', {
      content: 'input',
    }).then((value) => {
      if (value === null || value.trim() === '') return;
      _domController_js__WEBPACK_IMPORTED_MODULE_0__.default.renderNewProject(value);
      const newTab = document.querySelector('.side-nav').lastChild;
      _eventsHandler_js__WEBPACK_IMPORTED_MODULE_1__.default.addListenerTab(newTab);
    });
  };

  const promptDeleteProject = (e) => {
    const tabDiv = getTabDivFromEvent(e);
  };

  const promptNewItem = () => {
    if (document.querySelector('.item-banner--editing')) {
      _domController_js__WEBPACK_IMPORTED_MODULE_0__.default.remindNewItemPrompt();
      return;
    }
    _domController_js__WEBPACK_IMPORTED_MODULE_0__.default.renderNewItemPrompt();
    _eventsHandler_js__WEBPACK_IMPORTED_MODULE_1__.default.addListenersNewItemPrompt();
  };

  const showHideItemInfo = (e) => {
    const itemDiv = getItemDivFromEvent(e);
    _domController_js__WEBPACK_IMPORTED_MODULE_0__.default.showHideItemInfo(itemDiv);
    _eventsHandler_js__WEBPACK_IMPORTED_MODULE_1__.default.addListenersItemInfo(itemDiv);
  };

  const discardNewItemPrompt = (e) => {
    const itemDiv = getItemDivFromEvent(e);
    _domController_js__WEBPACK_IMPORTED_MODULE_0__.default.removeItemDiv(itemDiv);
  };

  const saveNewItem = (e) => {
    const itemDiv = getItemDivFromEvent(e);
    const item = _dataController_js__WEBPACK_IMPORTED_MODULE_2__.default.getItemFromInput(itemDiv);
    if (!isItemValid(item)) return;
    _dataController_js__WEBPACK_IMPORTED_MODULE_2__.default.addToAllItems(item);
    _domController_js__WEBPACK_IMPORTED_MODULE_0__.default.removeItemDiv(itemDiv);
    _domController_js__WEBPACK_IMPORTED_MODULE_0__.default.renderNewItem(item);
    const newItemDiv = document.querySelector('.item');
    _eventsHandler_js__WEBPACK_IMPORTED_MODULE_1__.default.addListenersShowHideItemInfo(newItemDiv);
    // eventsHandler add listener completion too
    // localStorageController update
  };

  const isItemValid = (item) => {
    return item ? true : (_domController_js__WEBPACK_IMPORTED_MODULE_0__.default.remindNewItemInput(), false);
  };

  const editItem = (e) => {
    const itemDiv = getItemDivFromEvent(e);
    const item = _dataController_js__WEBPACK_IMPORTED_MODULE_2__.default.getItemFromDiv(itemDiv);
    _domController_js__WEBPACK_IMPORTED_MODULE_0__.default.renderItemEditMode(itemDiv, item);
    _eventsHandler_js__WEBPACK_IMPORTED_MODULE_1__.default.addListenersItemEdit(itemDiv);
  };

  const discardItemEdit = (e) => {
    const itemDiv = getItemDivFromEvent(e);
    _domController_js__WEBPACK_IMPORTED_MODULE_0__.default.discardItemEditMode(itemDiv);
  };

  const saveEditedItem = (e) => {
    const itemDiv = getItemDivFromEvent(e);
    const updatedItem = _dataController_js__WEBPACK_IMPORTED_MODULE_2__.default.updateAndGetItemFromDiv(itemDiv);
    if (!updatedItem) _domController_js__WEBPACK_IMPORTED_MODULE_0__.default.remindNewItemInput();
    _domController_js__WEBPACK_IMPORTED_MODULE_0__.default.updateItemFromDiv(itemDiv, updatedItem);
  };

  const deleteItem = (e) => {
    const itemDiv = getItemDivFromEvent(e);
    _dataController_js__WEBPACK_IMPORTED_MODULE_2__.default.deleteItem(itemDiv);
    _domController_js__WEBPACK_IMPORTED_MODULE_0__.default.removeItemDiv(itemDiv);
  };

  const toggleItemCompletion = (e) => {
    const itemDiv = getItemDivFromEvent(e);
    _dataController_js__WEBPACK_IMPORTED_MODULE_2__.default.toggleItemCompletion(itemDiv);
    _domController_js__WEBPACK_IMPORTED_MODULE_0__.default.toggleItemCompletion(itemDiv);
  };

  const renderTab = (e) => {
    const tabName = e.target.innerHTML;
    const tabElement = e.path[0];
    _domController_js__WEBPACK_IMPORTED_MODULE_0__.default.showTabContent(tabName, tabElement);
  };

  /* private functions */

  const getItemDivFromEvent = (e) => {
    return e.path.find((element) => element.classList.contains('item'));
  };

  const getTabDivFromEvent = (e) => {
    return document.querySelector('.tab-panel');
  };

  return {
    deleteItem,
    discardItemEdit,
    discardNewItemPrompt,
    editItem,
    loadHomePage,
    promptDeleteProject,
    promptNewItem,
    promptNewProject,
    renderTab,
    saveEditedItem,
    saveNewItem,
    showHideItemInfo,
    toggleItemCompletion,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (coordinator);


/***/ }),

/***/ "./src/modules/dataController.js":
/*!***************************************!*\
  !*** ./src/modules/dataController.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.js */ "./src/modules/item.js");


const dataController = (() => {
  const allItems = [];
  const projects = [];

  const getItemsFromTab = (tabName) => {
    if (tabName === 'All items') return allItems;
    return allItems.filter(item => item.project === tabName);
  };

  const getItemFromInput = (itemDiv) => {
    const name = itemDiv.querySelector('.item-name--editing').value;
    const dueDate = itemDiv.querySelector('.item-due-date--editing').value;
    const description = itemDiv.querySelector('.item-description--editing')
      .value;
    const project = itemDiv.querySelector('.item-project--editing').value;
    const priority = itemDiv.querySelector('input[name=priority]:checked')
      .value;

    if (name.trim() === '' || dueDate === '') return undefined;

    const formattedDueDate = getFormattedDate(dueDate);
    return (0,_item_js__WEBPACK_IMPORTED_MODULE_0__.default)(name, description, formattedDueDate, project, priority);
  };

  const updateAndGetItemFromDiv = (itemDiv) => {
    const item = getItemFromDiv(itemDiv);
    const itemIndex = allItems.indexOf(item);
    const updatedItem = getItemFromInput(itemDiv);
    if (!updatedItem) return undefined;
    allItems[itemIndex] = updatedItem;
    return updatedItem;
  };

  const getFormattedDate = (dueDate) => {
    const arr = dueDate.split('-');
    arr.reverse();
    const newDate = arr.join('/');
    return newDate;
  };

  const addToAllItems = (item) => {
    allItems.push(item);
  };

  const deleteItem = (itemDiv) => {
    const itemIndex = allItems.indexOf(getItemFromDiv(itemDiv));
    allItems.splice(itemIndex, 1);
  };

  const toggleItemCompletion = (itemDiv) => {
    const item = getItemFromDiv(itemDiv);
    item.isDone === false ? item.isDone = true : item.isDone = false;
  };

  const getItemFromDiv = (itemDiv) => {
    const itemName = itemDiv.querySelector('.item-name').innerHTML;
    return allItems.find((item) => item.name === itemName);
  };

  return {
    allItems,
    getItemsFromTab,
    getItemFromInput,
    addToAllItems,
    deleteItem,
    getItemFromDiv,
    updateAndGetItemFromDiv,
    toggleItemCompletion
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataController);


/***/ }),

/***/ "./src/modules/domController.js":
/*!**************************************!*\
  !*** ./src/modules/domController.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const domController = (() => {
  const contentDiv = document.querySelector('.content');

  const renderExampleItems = (itemsArr) => {
    itemsArr.forEach((item) => renderNewItem(item));
  };

  const renderNewProject = (name) =>  {
    renderTabOnSideNav(name);
    addProjectToSelect(name);
  };

  const renderTabOnSideNav = (name) => {
    const sideNav = document.querySelector('.side-nav');
    const newTab = document.createElement('a');
    newTab.setAttribute('href', '#');
    newTab.setAttribute('class', 'tab');
    newTab.innerHTML = name;
    sideNav.appendChild(newTab);
  };

  const addProjectToSelect = (name) => {
    const template = document.querySelector('#new-item-prompt-template')
    const select = template.content.querySelector('.item-project--editing');
    const option = document.createElement('option');
    option.setAttribute('value', `${name}`);
    option.innerHTML = name;
    select.appendChild(option);
  };
  
  const showTabContent = (tabName, tabElement) => {
    highlightChosenTab(tabElement);
    changeTabName(tabName);
    hideNotTabItems(tabName);
  };

  const hideNotTabItems = (tabName) => {
    const allItemDivs = document.querySelectorAll('.item');
    if (tabName === 'All items') {
      allItemDivs.forEach((itemDiv) => showItemDiv(itemDiv));
      return;
    }
    const tabItemDivs = getItemDivsFromTabName(tabName);
    allItemDivs.forEach((itemDiv) => hideItemDiv(itemDiv));
    tabItemDivs.forEach((itemDiv) => showItemDiv(itemDiv));
  };

  const highlightChosenTab = (tabElement) => {
    const previousTab = document.querySelector('.tab--selected');
    previousTab.classList.remove('tab--selected');
    tabElement.classList.add('tab--selected');
  };

  const changeTabName = (tabName) => {
    const tabNameSpan = document.querySelector('.tab-name');
    tabNameSpan.innerHTML = tabName;
  };

  const showItemDiv = (itemDiv) => {
    if (itemDiv.classList.contains('hidden'))
      itemDiv.classList.remove('hidden');
  };

  const hideItemDiv = (itemDiv) => {
    if (!itemDiv.classList.contains('hidden')) itemDiv.classList.add('hidden');
  };

  const getItemDivsFromTabName = (tabName) => {
    const allItemDivs = document.querySelectorAll('.item');
    const chosenItemDivs = new Array();
    allItemDivs.forEach((itemDiv) => {
      const itemProject = itemDiv.querySelector('.item-project').innerHTML;
      if (itemProject === tabName) chosenItemDivs.push(itemDiv);
    });
    return chosenItemDivs;
  };

  const renderItemEditMode = (itemDiv, item) => {
    toggleItemContentDisplay(itemDiv);

    const formattedDate = getReversedFormattedDate(item.dueDate);
    itemDiv.appendChild(getItemTemplateElements('new-item-prompt-template'));
    itemDiv.querySelector('.item-name--editing').value = item.name;
    itemDiv.querySelector('.item-due-date--editing').value = formattedDate;
    itemDiv.querySelector('.item-description--editing').value =
      item.description;
    assignCurrentItemProjectValue(itemDiv, item.project);
    assignCurrentItemPriorityValue(itemDiv, item.priority);
  };

  const discardItemEditMode = (itemDiv) => {
    itemDiv.removeChild(itemDiv.querySelector('.item-banner--editing'));
    itemDiv.removeChild(itemDiv.querySelector('.item-info--editing'));
    toggleItemContentDisplay(itemDiv);
  };

  const updateItemFromDiv = (itemDiv, updatedItem) => {
    discardItemEditMode(itemDiv);
    updateItemDivWithItem(itemDiv, updatedItem);
  };

  const renderNewItem = (item) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item';
    itemDiv.appendChild(getItemTemplateElements('new-item-template'));
    updateItemDivWithItem(itemDiv, item);
    appendElementAfterTabPanel(itemDiv);
  };

  const updateItemDivWithItem = (itemDiv, item) => {
    itemDiv.querySelector('.item-name').innerHTML = item.name;
    itemDiv.querySelector('.item-due-date').innerHTML = item.dueDate;
    itemDiv.querySelector('.item-description').innerHTML = item.description;
    itemDiv.querySelector('.item-project').innerHTML = item.project;
    itemDiv.querySelector('.item-priority').innerHTML = item.priority;
  };

  const showHideItemInfo = (itemDiv) => {
    const info = itemDiv.querySelector('.item-info');
    info.classList.contains('item-info--expanded')
      ? info.classList.remove('item-info--expanded')
      : info.classList.add('item-info--expanded');
  };

  const remindNewItemPrompt = () => {
    const banner = document.querySelector('.item-banner--editing');
    const info = document.querySelector('.item-info--editing');
    banner.style.backgroundColor = '#F8D48B';
    info.style.backgroundColor = '#F8D48B';
    setTimeout(() => {
      banner.style.backgroundColor = 'white';
      info.style.backgroundColor = 'white';
    }, 200);
  };

  const remindNewItemInput = () => {
    const banner = document.querySelector('.item-banner--editing');
    banner.style.backgroundColor = '#E79988';
    setTimeout(() => (banner.style.backgroundColor = 'white'), 200);
  };

  const renderNewItemPrompt = () => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item';
    itemDiv.appendChild(getItemTemplateElements('new-item-prompt-template'));
    appendElementAfterTabPanel(itemDiv);
  };

  const appendElementAfterTabPanel = (element) => {
    const firstItem = document.querySelector('.item');
    firstItem
      ? contentDiv.insertBefore(element, firstItem)
      : contentDiv.appendChild(element);
  };

  const removeItemDiv = (itemDiv) => {
    itemDiv.remove();
  };

  const toggleItemCompletion = (itemDiv) => {
    toggleCompletedItemDOM(itemDiv);
    moveCompletedItem(itemDiv);
  };

  /* private functions */

  const toggleItemContentDisplay = (itemDiv) => {
    const itemBanner = itemDiv.querySelector('.item-banner');
    const itemInfo = itemDiv.querySelector('.item-info');
    itemBanner.classList.contains('hidden')
      ? itemBanner.classList.remove('hidden')
      : itemBanner.classList.add('hidden');
    itemInfo.classList.contains('hidden')
      ? itemInfo.classList.remove('hidden')
      : itemInfo.classList.add('hidden');
  };

  const getItemTemplateElements = (templateID) => {
    const itemPromptTemplate = document.querySelector('#' + templateID);
    let htmlElements = itemPromptTemplate.content.cloneNode(true);
    return htmlElements;
  };

  const getReversedFormattedDate = (dueDate) => {
    const arr = dueDate.split('/');
    arr.reverse();
    const newDate = arr.join('-');
    return newDate;
  };

  const assignCurrentItemProjectValue = (itemDiv, project) => {
    const options = itemDiv.querySelector('.item-project--editing').options;
    for (let i = 0; i < options.length; i++) {
      if (options[i].value === project)
        options[i].setAttribute('selected', 'selected');
    }
  };

  const assignCurrentItemPriorityValue = (itemDiv, priority) => {
    itemDiv.querySelector('#priority1').removeAttribute('checked');
    const options = itemDiv.querySelectorAll('[name="priority"]');
    for (let i = 0; i < options.length; i++) {
      if (options[i].value === priority)
        options[i].setAttribute('checked', 'selected');
    }
  };

  const toggleCompletedItemDOM = (itemDiv) => {
    const itemName = itemDiv.querySelector('.item-name');
    const dueDate = itemDiv.querySelector('.item-due-date');
    const checkbox = itemDiv.querySelector('.checkbox');
    checkbox.checked
      ? ((itemName.style.textDecoration = 'line-through'),
        (dueDate.style.textDecoration = 'line-through'),
        itemDiv.classList.add('item--completed'))
      : ((itemName.style.textDecoration = 'none'),
        (dueDate.style.textDecoration = 'none'),
        itemDiv.classList.remove('item--completed'));
  };

  const moveCompletedItem = (itemDiv) => {
    contentDiv.removeChild(itemDiv);
    const topCompletedItem = document.querySelector('.item--completed');

    topCompletedItem
      ? contentDiv.insertBefore(itemDiv, topCompletedItem)
      : contentDiv.appendChild(itemDiv);
  };

  return {
    discardItemEditMode,
    remindNewItemInput,
    remindNewItemPrompt,
    removeItemDiv,
    renderExampleItems,
    renderItemEditMode,
    renderNewItem,
    renderNewItemPrompt,
    renderNewProject,
    showHideItemInfo,
    showTabContent,
    toggleItemCompletion,
    updateItemFromDiv,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domController);


/***/ }),

/***/ "./src/modules/eventsHandler.js":
/*!**************************************!*\
  !*** ./src/modules/eventsHandler.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _coordinator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coordinator.js */ "./src/modules/coordinator.js");


const eventsHandler = (() => {
  const addListenersInHomePage = () => {
    addListenersTabPanel(document);
    addListenersShowHideItemInfo(document);
    addListenersCheckbox(document);
    addListenersTab(document);
  };

  const addListenersTabPanel = (element) => {
    const newItemButton = element.querySelector('.add-new-item');
    newItemButton.addEventListener('click', _coordinator_js__WEBPACK_IMPORTED_MODULE_0__.default.promptNewItem);

    const newProjectButton = element.querySelector('.add-new-project');
    newProjectButton.addEventListener('click', _coordinator_js__WEBPACK_IMPORTED_MODULE_0__.default.promptNewProject);

    const deleteProjectButton = element.querySelector('.delete-project');
    deleteProjectButton.addEventListener('click', _coordinator_js__WEBPACK_IMPORTED_MODULE_0__.default.promptDeleteProject)
  };

  const addListenersShowHideItemInfo = (element) => {
    const showInfoButtons = element.querySelectorAll('.show-info');
    showInfoButtons.forEach((button) =>
      button.addEventListener('click', _coordinator_js__WEBPACK_IMPORTED_MODULE_0__.default.showHideItemInfo)
    );
  };

  const addListenersNewItemPrompt = () => {
    const discardButton = document.querySelector('.discard');
    discardButton.addEventListener('click', _coordinator_js__WEBPACK_IMPORTED_MODULE_0__.default.discardNewItemPrompt);

    const saveButton = document.querySelector('.save');
    saveButton.addEventListener('click', _coordinator_js__WEBPACK_IMPORTED_MODULE_0__.default.saveNewItem);
  };

  const addListenersItemInfo = (element) => {
    const editButton = element.querySelector('.edit');
    editButton.addEventListener('click', _coordinator_js__WEBPACK_IMPORTED_MODULE_0__.default.editItem);

    const deleteButton = element.querySelector('.delete');
    deleteButton.addEventListener('click', _coordinator_js__WEBPACK_IMPORTED_MODULE_0__.default.deleteItem);
  };

  const addListenersItemEdit = (itemDiv) => {
    const discardButton = itemDiv.querySelector('.discard');
    discardButton.addEventListener('click', _coordinator_js__WEBPACK_IMPORTED_MODULE_0__.default.discardItemEdit);

    const saveButton = itemDiv.querySelector('.save');
    saveButton.addEventListener('click', _coordinator_js__WEBPACK_IMPORTED_MODULE_0__.default.saveEditedItem);
  };

  const addListenersCheckbox = (element) => {
    const checkboxes = element.querySelectorAll('.checkbox');
    checkboxes.forEach((checkbox) =>
      checkbox.addEventListener('click', _coordinator_js__WEBPACK_IMPORTED_MODULE_0__.default.toggleItemCompletion)
    );
  };

  const addListenersTab = (element) => {
    const tabs = element.querySelectorAll('.tab');
    tabs.forEach(tab => addListenerTab(tab));
  };

  const addListenerTab = (tab) => {
    tab.addEventListener('click', _coordinator_js__WEBPACK_IMPORTED_MODULE_0__.default.renderTab);
  }

  return {
    addListenersInHomePage,
    addListenersNewItemPrompt,
    addListenersShowHideItemInfo,
    addListenersItemInfo,
    addListenersItemEdit,
    addListenersCheckbox,
    addListenersTab,
    addListenerTab
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventsHandler);


/***/ }),

/***/ "./src/modules/item.js":
/*!*****************************!*\
  !*** ./src/modules/item.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const itemFactory = (name, description, dueDate, project, priority) => {
  let isDone = false;

  return {name, description, dueDate, project, priority, isDone};
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemFactory);

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_coordinator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/coordinator.js */ "./src/modules/coordinator.js");



_modules_coordinator_js__WEBPACK_IMPORTED_MODULE_1__.default.loadHomePage();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0X3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdF90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2plY3RfdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Byb2plY3RfdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Byb2plY3RfdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3RfdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQvZGlzdC9zd2VldGFsZXJ0Lm1pbi5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2Nvb3JkaW5hdG9yLmpzIiwid2VicGFjazovL3Byb2plY3RfdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZGF0YUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9kb21Db250cm9sbGVyLmpzIiwid2VicGFjazovL3Byb2plY3RfdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZXZlbnRzSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2l0ZW0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdF90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJvamVjdF90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3RfdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcHJvamVjdF90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0X3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3RfdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Byb2plY3RfdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ087QUFDdEI7QUFDMUUsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCLENBQUMseURBQTZCO0FBQ3RHO0FBQ0EseURBQXlELDBCQUEwQiwrSUFBK0ksdUJBQXVCLEdBQUcsMkJBQTJCLGlCQUFpQixrRkFBa0YsR0FBRyxRQUFRLHFCQUFxQixrQkFBa0IsaUlBQWlJLEdBQUcsWUFBWSxvQkFBb0IsR0FBRyxZQUFZLHNCQUFzQiw4QkFBOEIsbUJBQW1CLHFCQUFxQixzQ0FBc0Msa0JBQWtCLHdCQUF3QixHQUFHLGVBQWUsMEJBQTBCLHdCQUF3QixHQUFHLGtCQUFrQixzRUFBc0UsaUNBQWlDLDBCQUEwQixnQkFBZ0IsZUFBZSxHQUFHLGVBQWUsd0JBQXdCLDhCQUE4Qiw0Q0FBNEMsMkNBQTJDLDZDQUE2QyxHQUFHLGdCQUFnQixvQ0FBb0MsR0FBRyxrQ0FBa0MsbUJBQW1CLG1CQUFtQiwwQkFBMEIsaUJBQWlCLDZCQUE2QixxQkFBcUIsR0FBRyx1QkFBdUIsOEJBQThCLEdBQUcsNEJBQTRCLG9DQUFvQyxHQUFHLGlDQUFpQyxpQ0FBaUMscUJBQXFCLHVCQUF1QixHQUFHLG9CQUFvQiw4QkFBOEIsR0FBRyxjQUFjLHVCQUF1Qiw4QkFBOEIsNENBQTRDLDZDQUE2QyxHQUFHLGdCQUFnQixnQkFBZ0IsNEJBQTRCLDZDQUE2Qyw0Q0FBNEMsdUJBQXVCLG1CQUFtQixrQkFBa0IsMkNBQTJDLHlCQUF5QixHQUFHLHNDQUFzQyw4QkFBOEIsR0FBRyxxQkFBcUIsOEJBQThCLEdBQUcsd0RBQXdELHFCQUFxQixpQkFBaUIsR0FBRyxXQUFXLHFCQUFxQix5QkFBeUIsMkJBQTJCLGVBQWUsR0FBRyxrQkFBa0IsNEJBQTRCLHFCQUFxQiw0QkFBNEIsbUJBQW1CLGtCQUFrQixpREFBaUQsd0JBQXdCLFlBQVksR0FBRyx5QkFBeUIsbUJBQW1CLG9CQUFvQixpQkFBaUIsR0FBRywrQkFBK0IsY0FBYyxhQUFhLEdBQUcsc0JBQXNCLDBCQUEwQixrQkFBa0IsaUJBQWlCLDRCQUE0Qix5QkFBeUIsbUJBQW1CLEdBQUcsMERBQTBELDhCQUE4QixHQUFHLDRCQUE0QixrQkFBa0IsdUJBQXVCLGtCQUFrQixHQUFHLGdFQUFnRSxtQkFBbUIsNEJBQTRCLEdBQUcsZ0RBQWdELGdCQUFnQixlQUFlLGlCQUFpQixrQkFBa0Isd0JBQXdCLGtDQUFrQyw2QkFBNkIsR0FBRyxnQkFBZ0IsZ0JBQWdCLEdBQUcsaURBQWlELHFCQUFxQixHQUFHLDJGQUEyRixtQkFBbUIsR0FBRyw0REFBNEQsa0JBQWtCLEdBQUcscUJBQXFCLDRCQUE0QiwwQkFBMEIsZUFBZSx1QkFBdUIsR0FBRyx5Q0FBeUMsOEJBQThCLEdBQUcsZ0JBQWdCLDRCQUE0QixrQkFBa0IscUJBQXFCLG1DQUFtQyxpQ0FBaUMsa0NBQWtDLDJCQUEyQixHQUFHLDBCQUEwQixrQkFBa0IsbUNBQW1DLHFCQUFxQiw0QkFBNEIsR0FBRyx1QkFBdUIsbUJBQW1CLDRCQUE0Qix1QkFBdUIsR0FBRyxhQUFhLGtCQUFrQixHQUFHLHVCQUF1QixRQUFRLDZCQUE2QixLQUFLLEdBQUcsd0JBQXdCLFFBQVEsa0JBQWtCLEtBQUssR0FBRyxTQUFTLHFGQUFxRixLQUFLLFVBQVUsS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxPQUFPLE9BQU8sVUFBVSxPQUFPLGFBQWEsTUFBTSxVQUFVLE1B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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixvQkFBb0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0UGM7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEMsa0VBQXlCOztBQUVyRTtBQUNBLCtDQUErQyxxRUFBNEI7O0FBRTNFO0FBQ0Esa0RBQWtELHdFQUErQjtBQUNqRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMscUVBQTRCO0FBQ25FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qyx5RUFBZ0M7O0FBRTVFO0FBQ0EseUNBQXlDLGdFQUF1QjtBQUNoRTs7QUFFQTtBQUNBO0FBQ0EseUNBQXlDLDZEQUFvQjs7QUFFN0Q7QUFDQSwyQ0FBMkMsK0RBQXNCO0FBQ2pFOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEMsb0VBQTJCOztBQUV2RTtBQUNBLHlDQUF5QyxtRUFBMEI7QUFDbkU7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHlFQUFnQztBQUN6RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLDhEQUFxQjtBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEY3QjtBQUNBOztBQUVBLFVBQVU7QUFDVjs7QUFFQSxpRUFBZSxXQUFXLEU7Ozs7OztVQ04xQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtDOzs7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUM4Qjs7QUFFbkQseUVBQXdCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi9pbWFnZXMvR2l0SHViLU1hcmstMzJweC5wbmdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnbXlmb250JztcXG4gIHNyYzogdXJsKCcuL2ZvbnRzL215Zm9udC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXFxuICAgIHVybCgnLi9mb250cy9teWZvbnQuZW90JykgZm9ybWF0KCdlb3QnKSxcXG4gICAgdXJsKCcuL2ZvbnRzL215Zm9udC5zdmcnKSBmb3JtYXQoJ3N2ZycpO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn0qL1xcbi8qIENPUFlSSUdIVCAqL1xcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IENhbGlicmksICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxufVxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkOlxcbiAgICBbcm93MS1zdGFydF0gJ2hlYWRlciBoZWFkZXInIDAuNWZyIFtyb3cxLWVuZF1cXG4gICAgW3JvdzItc3RhcnRdICdzaWRlLW5hdiBjb250ZW50JyAxMGZyIFtyb3cyLWVuZF1cXG4gICAgLyAxZnIgM2ZyO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRiOTQyO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBwYWRkaW5nLWxlZnQ6IDIlO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmdiKDQ5LCA0OSwgNDkpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciBoMSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcbn1cXG5cXG4uZ2l0aHViLWxvZ28ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDJlbTtcXG4gIHdpZHRoOiAyZW07XFxufVxcblxcbi5zaWRlLW5hdiB7XFxuICBncmlkLWFyZWE6IHNpZGUtbmF2O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcXG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4IHJnYig0OSwgNDksIDQ5KTtcXG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggcmdiKDQ5LCA0OSwgNDkpO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYig0OSwgNDksIDQ5KTtcXG59XFxuXFxuI2FsbC1pdGVtcyB7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjNweCBncmF5O1xcbn1cXG5cXG4uc2lkZS1uYXYgYSxcXG4uc2lkZS1uYXYgc3BhbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogMWVtIDFlbSAxZW0gMWVtO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuLnNpZGUtbmF2IGE6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MzYzNjMztcXG59XFxuXFxuLnNpZGUtbmF2IGE6bGFzdC1jaGlsZCB7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjNweCBncmF5O1xcbn1cXG5cXG4uc2lkZS1uYXYgOm50aC1jaGlsZChuICsgMykge1xcbiAgYm9yZGVyLXRvcDogc29saWQgMC4zcHggZ3JheTtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50YWItLXNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjM2MzYzM7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGdyaWQtYXJlYTogY29udGVudDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2IoNDksIDQ5LCA0OSk7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiKDQ5LCA0OSwgNDkpO1xcbn1cXG5cXG4udGFiLXBhbmVsIHtcXG4gIGhlaWdodDogMTIlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiKDQ5LCA0OSwgNDkpO1xcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggcmdiKDQ5LCA0OSwgNDkpO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICBwbGFjZS1pdGVtczogY2VudGVyIDtcXG59XFxuXFxuLmFkZC1uZXctaXRlbSxcXG4uYWRkLW5ldy1wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGOEQ0OEI7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc5OTg4O1xcbn1cXG5cXG4uYWRkLW5ldy1pdGVtLFxcbi5hZGQtbmV3LXByb2plY3QsXFxuLmRlbGV0ZS1wcm9qZWN0IHtcXG4gIGZvbnQtc2l6ZTogMC41ZW07XFxuICBwYWRkaW5nOiAxZW07XFxufVxcblxcbi5pdGVtIHtcXG4gIG1hcmdpbi1sZWZ0OiAzZW07XFxuICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcXG4gIGFuaW1hdGlvbjogYXBwZWFyIDAuN3M7XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uaXRlbS1iYW5uZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDRmciAxLjdmciAwLjVmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIlO1xcbn1cXG5cXG4uY2hlY2tib3gtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTpmbGV4O1xcbn1cXG5cXG4uY2hlY2tib3gtY29udGFpbmVyIGlucHV0IHtcXG4gIGhlaWdodDogMDtcXG4gIHdpZHRoOiAwO1xcbn1cXG5cXG4uY3VzdG9tLWNoZWNrYm94IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogMS41ZW07XFxuICB3aWR0aDogMS41ZW07XFxuICBib3JkZXI6IHNvbGlkIGJsYWNrIDJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEuNWVtO1xcbiAgbWFyZ2luOiBhdXRvIDA7XFxufVxcblxcbi5jaGVja2JveC1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY2hlY2tib3gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzY2U2YjtcXG59XFxuXFxuLmN1c3RvbS1jaGVja2JveDphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jaGVja2JveC1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY2hlY2tib3g6YWZ0ZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBhbmltYXRpb246IGZhZGUtaW4gMC41cztcXG59XFxuXFxuLmNoZWNrYm94LWNvbnRhaW5lciAuY3VzdG9tLWNoZWNrYm94OmFmdGVyIHtcXG4gIGxlZnQ6IDAuNWVtO1xcbiAgdG9wOiAwLjJlbTtcXG4gIHdpZHRoOiAwLjJlbTtcXG4gIGhlaWdodDogMC43ZW07XFxuICBib3JkZXI6IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXdpZHRoOiAwIDAuMmVtIDAuMmVtIDA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbi5zaG93LWluZm8ge1xcbiAgaGVpZ2h0OiAzZW07XFxufVxcblxcbi5pdGVtLWJhbm5lci0tZWRpdGluZyxcXG4uaXRlbS1pbmZvLS1lZGl0aW5nIHtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbi5pdGVtLWJhbm5lci0tZWRpdGluZyBpbnB1dCxcXG4uaXRlbS1pbmZvLS1leHBhbmRlZCBpbnB1dCxcXG4uaXRlbS1pbmZvLS1lZGl0aW5nIHNlbGVjdCB7XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxuLyppdGVtLWluZm8tLWVkaXRpbmcgZWxlbWVudHMqL1xcblxcbmlucHV0W3R5cGU9J3JhZGlvJ10ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByaW9yaXR5LWxhYmVsIHtcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDIwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT0ncmFkaW8nXTpjaGVja2VkICsgbGFiZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3OTk4ODtcXG59XFxuXFxuLml0ZW0taW5mbyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGJsYWNrO1xcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCBibGFjaztcXG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4IGJsYWNrO1xcbiAgcGFkZGluZzogMWVtIDFlbSAwIDFlbTtcXG59XFxuXFxuLml0ZW0taW5mby0tZXhwYW5kZWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQ6IDFmciAxZnIgMWZyIDNmci8gMWZyIDRmcjtcXG4gIGdhcDogMC43ZW0gMC41ZW07XFxuICBhbmltYXRpb246IGZhZGUtaW4gMC44cztcXG59XFxuXFxuLml0ZW0taW5mbyBidXR0b24ge1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBtYXJnaW46IDAuNWVtIDFlbSAxZW0gMDtcXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFwcGVhciB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZS1pbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7RUFNRTtBQUNGLGNBQWM7QUFDZDtFQUNFLFlBQVk7RUFDWiw2RUFBNkU7QUFDL0U7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2I7OzthQUdXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlDQUFpQztFQUNqQyxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlEQUFvRDtFQUNwRCw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHVDQUF1QztFQUN2QyxzQ0FBc0M7RUFDdEMsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBOztFQUVFLGNBQWM7RUFDZCxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHVDQUF1QztFQUN2Qyx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHdDQUF3QztFQUN4Qyx1Q0FBdUM7RUFDdkMsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7OztFQUdFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsYUFBYTtFQUNiLDRDQUE0QztFQUM1QyxtQkFBbUI7RUFDbkIsT0FBTztBQUNUOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsUUFBUTtBQUNWOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0Isd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQTs7O0VBR0UsY0FBYztBQUNoQjs7QUFFQSw4QkFBOEI7O0FBRTlCO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtFQUN4QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnbXlmb250JztcXG4gIHNyYzogdXJsKCcuL2ZvbnRzL215Zm9udC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXFxuICAgIHVybCgnLi9mb250cy9teWZvbnQuZW90JykgZm9ybWF0KCdlb3QnKSxcXG4gICAgdXJsKCcuL2ZvbnRzL215Zm9udC5zdmcnKSBmb3JtYXQoJ3N2ZycpO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn0qL1xcbi8qIENPUFlSSUdIVCAqL1xcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IENhbGlicmksICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxufVxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkOlxcbiAgICBbcm93MS1zdGFydF0gJ2hlYWRlciBoZWFkZXInIDAuNWZyIFtyb3cxLWVuZF1cXG4gICAgW3JvdzItc3RhcnRdICdzaWRlLW5hdiBjb250ZW50JyAxMGZyIFtyb3cyLWVuZF1cXG4gICAgLyAxZnIgM2ZyO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRiOTQyO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBwYWRkaW5nLWxlZnQ6IDIlO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmdiKDQ5LCA0OSwgNDkpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciBoMSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcbn1cXG5cXG4uZ2l0aHViLWxvZ28ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL0dpdEh1Yi1NYXJrLTMycHgucG5nKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDJlbTtcXG4gIHdpZHRoOiAyZW07XFxufVxcblxcbi5zaWRlLW5hdiB7XFxuICBncmlkLWFyZWE6IHNpZGUtbmF2O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcXG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4IHJnYig0OSwgNDksIDQ5KTtcXG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggcmdiKDQ5LCA0OSwgNDkpO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYig0OSwgNDksIDQ5KTtcXG59XFxuXFxuI2FsbC1pdGVtcyB7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjNweCBncmF5O1xcbn1cXG5cXG4uc2lkZS1uYXYgYSxcXG4uc2lkZS1uYXYgc3BhbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogMWVtIDFlbSAxZW0gMWVtO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuLnNpZGUtbmF2IGE6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MzYzNjMztcXG59XFxuXFxuLnNpZGUtbmF2IGE6bGFzdC1jaGlsZCB7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjNweCBncmF5O1xcbn1cXG5cXG4uc2lkZS1uYXYgOm50aC1jaGlsZChuICsgMykge1xcbiAgYm9yZGVyLXRvcDogc29saWQgMC4zcHggZ3JheTtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50YWItLXNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjM2MzYzM7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGdyaWQtYXJlYTogY29udGVudDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2IoNDksIDQ5LCA0OSk7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiKDQ5LCA0OSwgNDkpO1xcbn1cXG5cXG4udGFiLXBhbmVsIHtcXG4gIGhlaWdodDogMTIlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiKDQ5LCA0OSwgNDkpO1xcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggcmdiKDQ5LCA0OSwgNDkpO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICBwbGFjZS1pdGVtczogY2VudGVyIDtcXG59XFxuXFxuLmFkZC1uZXctaXRlbSxcXG4uYWRkLW5ldy1wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGOEQ0OEI7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc5OTg4O1xcbn1cXG5cXG4uYWRkLW5ldy1pdGVtLFxcbi5hZGQtbmV3LXByb2plY3QsXFxuLmRlbGV0ZS1wcm9qZWN0IHtcXG4gIGZvbnQtc2l6ZTogMC41ZW07XFxuICBwYWRkaW5nOiAxZW07XFxufVxcblxcbi5pdGVtIHtcXG4gIG1hcmdpbi1sZWZ0OiAzZW07XFxuICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcXG4gIGFuaW1hdGlvbjogYXBwZWFyIDAuN3M7XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uaXRlbS1iYW5uZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDRmciAxLjdmciAwLjVmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIlO1xcbn1cXG5cXG4uY2hlY2tib3gtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTpmbGV4O1xcbn1cXG5cXG4uY2hlY2tib3gtY29udGFpbmVyIGlucHV0IHtcXG4gIGhlaWdodDogMDtcXG4gIHdpZHRoOiAwO1xcbn1cXG5cXG4uY3VzdG9tLWNoZWNrYm94IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogMS41ZW07XFxuICB3aWR0aDogMS41ZW07XFxuICBib3JkZXI6IHNvbGlkIGJsYWNrIDJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEuNWVtO1xcbiAgbWFyZ2luOiBhdXRvIDA7XFxufVxcblxcbi5jaGVja2JveC1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY2hlY2tib3gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzY2U2YjtcXG59XFxuXFxuLmN1c3RvbS1jaGVja2JveDphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jaGVja2JveC1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY2hlY2tib3g6YWZ0ZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBhbmltYXRpb246IGZhZGUtaW4gMC41cztcXG59XFxuXFxuLmNoZWNrYm94LWNvbnRhaW5lciAuY3VzdG9tLWNoZWNrYm94OmFmdGVyIHtcXG4gIGxlZnQ6IDAuNWVtO1xcbiAgdG9wOiAwLjJlbTtcXG4gIHdpZHRoOiAwLjJlbTtcXG4gIGhlaWdodDogMC43ZW07XFxuICBib3JkZXI6IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXdpZHRoOiAwIDAuMmVtIDAuMmVtIDA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbi5zaG93LWluZm8ge1xcbiAgaGVpZ2h0OiAzZW07XFxufVxcblxcbi5pdGVtLWJhbm5lci0tZWRpdGluZyxcXG4uaXRlbS1pbmZvLS1lZGl0aW5nIHtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbi5pdGVtLWJhbm5lci0tZWRpdGluZyBpbnB1dCxcXG4uaXRlbS1pbmZvLS1leHBhbmRlZCBpbnB1dCxcXG4uaXRlbS1pbmZvLS1lZGl0aW5nIHNlbGVjdCB7XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxuLyppdGVtLWluZm8tLWVkaXRpbmcgZWxlbWVudHMqL1xcblxcbmlucHV0W3R5cGU9J3JhZGlvJ10ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByaW9yaXR5LWxhYmVsIHtcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDIwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT0ncmFkaW8nXTpjaGVja2VkICsgbGFiZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3OTk4ODtcXG59XFxuXFxuLml0ZW0taW5mbyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGJsYWNrO1xcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCBibGFjaztcXG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4IGJsYWNrO1xcbiAgcGFkZGluZzogMWVtIDFlbSAwIDFlbTtcXG59XFxuXFxuLml0ZW0taW5mby0tZXhwYW5kZWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQ6IDFmciAxZnIgMWZyIDNmci8gMWZyIDRmcjtcXG4gIGdhcDogMC43ZW0gMC41ZW07XFxuICBhbmltYXRpb246IGZhZGUtaW4gMC44cztcXG59XFxuXFxuLml0ZW0taW5mbyBidXR0b24ge1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBtYXJnaW46IDAuNWVtIDFlbSAxZW0gMDtcXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFwcGVhciB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZS1pbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLnN3YWw9ZSgpOnQuc3dhbD1lKCl9KHRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShvKXtpZihuW29dKXJldHVybiBuW29dLmV4cG9ydHM7dmFyIHI9bltvXT17aTpvLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIHRbb10uY2FsbChyLmV4cG9ydHMscixyLmV4cG9ydHMsZSksci5sPSEwLHIuZXhwb3J0c312YXIgbj17fTtyZXR1cm4gZS5tPXQsZS5jPW4sZS5kPWZ1bmN0aW9uKHQsbixvKXtlLm8odCxuKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsbix7Y29uZmlndXJhYmxlOiExLGVudW1lcmFibGU6ITAsZ2V0Om99KX0sZS5uPWZ1bmN0aW9uKHQpe3ZhciBuPXQmJnQuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiB0LmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIHR9O3JldHVybiBlLmQobixcImFcIixuKSxufSxlLm89ZnVuY3Rpb24odCxlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSl9LGUucD1cIlwiLGUoZS5zPTgpfShbZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPVwic3dhbC1idXR0b25cIjtlLkNMQVNTX05BTUVTPXtNT0RBTDpcInN3YWwtbW9kYWxcIixPVkVSTEFZOlwic3dhbC1vdmVybGF5XCIsU0hPV19NT0RBTDpcInN3YWwtb3ZlcmxheS0tc2hvdy1tb2RhbFwiLE1PREFMX1RJVExFOlwic3dhbC10aXRsZVwiLE1PREFMX1RFWFQ6XCJzd2FsLXRleHRcIixJQ09OOlwic3dhbC1pY29uXCIsSUNPTl9DVVNUT006XCJzd2FsLWljb24tLWN1c3RvbVwiLENPTlRFTlQ6XCJzd2FsLWNvbnRlbnRcIixGT09URVI6XCJzd2FsLWZvb3RlclwiLEJVVFRPTl9DT05UQUlORVI6XCJzd2FsLWJ1dHRvbi1jb250YWluZXJcIixCVVRUT046byxDT05GSVJNX0JVVFRPTjpvK1wiLS1jb25maXJtXCIsQ0FOQ0VMX0JVVFRPTjpvK1wiLS1jYW5jZWxcIixEQU5HRVJfQlVUVE9OOm8rXCItLWRhbmdlclwiLEJVVFRPTl9MT0FESU5HOm8rXCItLWxvYWRpbmdcIixCVVRUT05fTE9BREVSOm8rXCJfX2xvYWRlclwifSxlLmRlZmF1bHQ9ZS5DTEFTU19OQU1FU30sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGUuZ2V0Tm9kZT1mdW5jdGlvbih0KXt2YXIgZT1cIi5cIit0O3JldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGUpfSxlLnN0cmluZ1RvTm9kZT1mdW5jdGlvbih0KXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiBlLmlubmVySFRNTD10LnRyaW0oKSxlLmZpcnN0Q2hpbGR9LGUuaW5zZXJ0QWZ0ZXI9ZnVuY3Rpb24odCxlKXt2YXIgbj1lLm5leHRTaWJsaW5nO2UucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxuKX0sZS5yZW1vdmVOb2RlPWZ1bmN0aW9uKHQpe3QucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0KX0sZS50aHJvd0Vycj1mdW5jdGlvbih0KXt0aHJvdyB0PXQucmVwbGFjZSgvICsoPz0gKS9nLFwiXCIpLFwiU3dlZXRBbGVydDogXCIrKHQ9dC50cmltKCkpfSxlLmlzUGxhaW5PYmplY3Q9ZnVuY3Rpb24odCl7aWYoXCJbb2JqZWN0IE9iamVjdF1cIiE9PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KSlyZXR1cm4hMTt2YXIgZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YodCk7cmV0dXJuIG51bGw9PT1lfHxlPT09T2JqZWN0LnByb3RvdHlwZX0sZS5vcmRpbmFsU3VmZml4T2Y9ZnVuY3Rpb24odCl7dmFyIGU9dCUxMCxuPXQlMTAwO3JldHVybiAxPT09ZSYmMTEhPT1uP3QrXCJzdFwiOjI9PT1lJiYxMiE9PW4/dCtcIm5kXCI6Mz09PWUmJjEzIT09bj90K1wicmRcIjp0K1widGhcIn19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBvKHQpe2Zvcih2YXIgbiBpbiB0KWUuaGFzT3duUHJvcGVydHkobil8fChlW25dPXRbbl0pfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8obigyNSkpO3ZhciByPW4oMjYpO2Uub3ZlcmxheU1hcmt1cD1yLmRlZmF1bHQsbyhuKDI3KSksbyhuKDI4KSksbyhuKDI5KSk7dmFyIGk9bigwKSxhPWkuZGVmYXVsdC5NT0RBTF9USVRMRSxzPWkuZGVmYXVsdC5NT0RBTF9URVhULGM9aS5kZWZhdWx0LklDT04sbD1pLmRlZmF1bHQuRk9PVEVSO2UuaWNvbk1hcmt1cD0nXFxuICA8ZGl2IGNsYXNzPVwiJytjKydcIj48L2Rpdj4nLGUudGl0bGVNYXJrdXA9J1xcbiAgPGRpdiBjbGFzcz1cIicrYSsnXCI+PC9kaXY+XFxuJyxlLnRleHRNYXJrdXA9J1xcbiAgPGRpdiBjbGFzcz1cIicrcysnXCI+PC9kaXY+JyxlLmZvb3Rlck1hcmt1cD0nXFxuICA8ZGl2IGNsYXNzPVwiJytsKydcIj48L2Rpdj5cXG4nfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigxKTtlLkNPTkZJUk1fS0VZPVwiY29uZmlybVwiLGUuQ0FOQ0VMX0tFWT1cImNhbmNlbFwiO3ZhciByPXt2aXNpYmxlOiEwLHRleHQ6bnVsbCx2YWx1ZTpudWxsLGNsYXNzTmFtZTpcIlwiLGNsb3NlTW9kYWw6ITB9LGk9T2JqZWN0LmFzc2lnbih7fSxyLHt2aXNpYmxlOiExLHRleHQ6XCJDYW5jZWxcIix2YWx1ZTpudWxsfSksYT1PYmplY3QuYXNzaWduKHt9LHIse3RleHQ6XCJPS1wiLHZhbHVlOiEwfSk7ZS5kZWZhdWx0QnV0dG9uTGlzdD17Y2FuY2VsOmksY29uZmlybTphfTt2YXIgcz1mdW5jdGlvbih0KXtzd2l0Y2godCl7Y2FzZSBlLkNPTkZJUk1fS0VZOnJldHVybiBhO2Nhc2UgZS5DQU5DRUxfS0VZOnJldHVybiBpO2RlZmF1bHQ6dmFyIG49dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSt0LnNsaWNlKDEpO3JldHVybiBPYmplY3QuYXNzaWduKHt9LHIse3RleHQ6bix2YWx1ZTp0fSl9fSxjPWZ1bmN0aW9uKHQsZSl7dmFyIG49cyh0KTtyZXR1cm4hMD09PWU/T2JqZWN0LmFzc2lnbih7fSxuLHt2aXNpYmxlOiEwfSk6XCJzdHJpbmdcIj09dHlwZW9mIGU/T2JqZWN0LmFzc2lnbih7fSxuLHt2aXNpYmxlOiEwLHRleHQ6ZX0pOm8uaXNQbGFpbk9iamVjdChlKT9PYmplY3QuYXNzaWduKHt2aXNpYmxlOiEwfSxuLGUpOk9iamVjdC5hc3NpZ24oe30sbix7dmlzaWJsZTohMX0pfSxsPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT17fSxuPTAsbz1PYmplY3Qua2V5cyh0KTtuPG8ubGVuZ3RoO24rKyl7dmFyIHI9b1tuXSxhPXRbcl0scz1jKHIsYSk7ZVtyXT1zfXJldHVybiBlLmNhbmNlbHx8KGUuY2FuY2VsPWkpLGV9LHU9ZnVuY3Rpb24odCl7dmFyIG49e307c3dpdGNoKHQubGVuZ3RoKXtjYXNlIDE6bltlLkNBTkNFTF9LRVldPU9iamVjdC5hc3NpZ24oe30saSx7dmlzaWJsZTohMX0pO2JyZWFrO2Nhc2UgMjpuW2UuQ0FOQ0VMX0tFWV09YyhlLkNBTkNFTF9LRVksdFswXSksbltlLkNPTkZJUk1fS0VZXT1jKGUuQ09ORklSTV9LRVksdFsxXSk7YnJlYWs7ZGVmYXVsdDpvLnRocm93RXJyKFwiSW52YWxpZCBudW1iZXIgb2YgJ2J1dHRvbnMnIGluIGFycmF5IChcIit0Lmxlbmd0aCtcIikuXFxuICAgICAgSWYgeW91IHdhbnQgbW9yZSB0aGFuIDIgYnV0dG9ucywgeW91IG5lZWQgdG8gdXNlIGFuIG9iamVjdCFcIil9cmV0dXJuIG59O2UuZ2V0QnV0dG9uTGlzdE9wdHM9ZnVuY3Rpb24odCl7dmFyIG49ZS5kZWZhdWx0QnV0dG9uTGlzdDtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdD9uW2UuQ09ORklSTV9LRVldPWMoZS5DT05GSVJNX0tFWSx0KTpBcnJheS5pc0FycmF5KHQpP249dSh0KTpvLmlzUGxhaW5PYmplY3QodCk/bj1sKHQpOiEwPT09dD9uPXUoWyEwLCEwXSk6ITE9PT10P249dShbITEsITFdKTp2b2lkIDA9PT10JiYobj1lLmRlZmF1bHRCdXR0b25MaXN0KSxufX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMSkscj1uKDIpLGk9bigwKSxhPWkuZGVmYXVsdC5NT0RBTCxzPWkuZGVmYXVsdC5PVkVSTEFZLGM9bigzMCksbD1uKDMxKSx1PW4oMzIpLGY9bigzMyk7ZS5pbmplY3RFbEludG9Nb2RhbD1mdW5jdGlvbih0KXt2YXIgZT1vLmdldE5vZGUoYSksbj1vLnN0cmluZ1RvTm9kZSh0KTtyZXR1cm4gZS5hcHBlbmRDaGlsZChuKSxufTt2YXIgZD1mdW5jdGlvbih0KXt0LmNsYXNzTmFtZT1hLHQudGV4dENvbnRlbnQ9XCJcIn0scD1mdW5jdGlvbih0LGUpe2QodCk7dmFyIG49ZS5jbGFzc05hbWU7biYmdC5jbGFzc0xpc3QuYWRkKG4pfTtlLmluaXRNb2RhbENvbnRlbnQ9ZnVuY3Rpb24odCl7dmFyIGU9by5nZXROb2RlKGEpO3AoZSx0KSxjLmRlZmF1bHQodC5pY29uKSxsLmluaXRUaXRsZSh0LnRpdGxlKSxsLmluaXRUZXh0KHQudGV4dCksZi5kZWZhdWx0KHQuY29udGVudCksdS5kZWZhdWx0KHQuYnV0dG9ucyx0LmRhbmdlck1vZGUpfTt2YXIgbT1mdW5jdGlvbigpe3ZhciB0PW8uZ2V0Tm9kZShzKSxlPW8uc3RyaW5nVG9Ob2RlKHIubW9kYWxNYXJrdXApO3QuYXBwZW5kQ2hpbGQoZSl9O2UuZGVmYXVsdD1tfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigzKSxyPXtpc09wZW46ITEscHJvbWlzZTpudWxsLGFjdGlvbnM6e30sdGltZXI6bnVsbH0saT1PYmplY3QuYXNzaWduKHt9LHIpO2UucmVzZXRTdGF0ZT1mdW5jdGlvbigpe2k9T2JqZWN0LmFzc2lnbih7fSxyKX0sZS5zZXRBY3Rpb25WYWx1ZT1mdW5jdGlvbih0KXtpZihcInN0cmluZ1wiPT10eXBlb2YgdClyZXR1cm4gYShvLkNPTkZJUk1fS0VZLHQpO2Zvcih2YXIgZSBpbiB0KWEoZSx0W2VdKX07dmFyIGE9ZnVuY3Rpb24odCxlKXtpLmFjdGlvbnNbdF18fChpLmFjdGlvbnNbdF09e30pLE9iamVjdC5hc3NpZ24oaS5hY3Rpb25zW3RdLHt2YWx1ZTplfSl9O2Uuc2V0QWN0aW9uT3B0aW9uc0Zvcj1mdW5jdGlvbih0LGUpe3ZhciBuPSh2b2lkIDA9PT1lP3t9OmUpLmNsb3NlTW9kYWwsbz12b2lkIDA9PT1ufHxuO09iamVjdC5hc3NpZ24oaS5hY3Rpb25zW3RdLHtjbG9zZU1vZGFsOm99KX0sZS5kZWZhdWx0PWl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDEpLHI9bigzKSxpPW4oMCksYT1pLmRlZmF1bHQuT1ZFUkxBWSxzPWkuZGVmYXVsdC5TSE9XX01PREFMLGM9aS5kZWZhdWx0LkJVVFRPTixsPWkuZGVmYXVsdC5CVVRUT05fTE9BRElORyx1PW4oNSk7ZS5vcGVuTW9kYWw9ZnVuY3Rpb24oKXtvLmdldE5vZGUoYSkuY2xhc3NMaXN0LmFkZChzKSx1LmRlZmF1bHQuaXNPcGVuPSEwfTt2YXIgZj1mdW5jdGlvbigpe28uZ2V0Tm9kZShhKS5jbGFzc0xpc3QucmVtb3ZlKHMpLHUuZGVmYXVsdC5pc09wZW49ITF9O2Uub25BY3Rpb249ZnVuY3Rpb24odCl7dm9pZCAwPT09dCYmKHQ9ci5DQU5DRUxfS0VZKTt2YXIgZT11LmRlZmF1bHQuYWN0aW9uc1t0XSxuPWUudmFsdWU7aWYoITE9PT1lLmNsb3NlTW9kYWwpe3ZhciBpPWMrXCItLVwiK3Q7by5nZXROb2RlKGkpLmNsYXNzTGlzdC5hZGQobCl9ZWxzZSBmKCk7dS5kZWZhdWx0LnByb21pc2UucmVzb2x2ZShuKX0sZS5nZXRTdGF0ZT1mdW5jdGlvbigpe3ZhciB0PU9iamVjdC5hc3NpZ24oe30sdS5kZWZhdWx0KTtyZXR1cm4gZGVsZXRlIHQucHJvbWlzZSxkZWxldGUgdC50aW1lcix0fSxlLnN0b3BMb2FkaW5nPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrYyksZT0wO2U8dC5sZW5ndGg7ZSsrKXt0W2VdLmNsYXNzTGlzdC5yZW1vdmUobCl9fX0sZnVuY3Rpb24odCxlKXt2YXIgbjtuPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KCk7dHJ5e249bnx8RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpfHwoMCxldmFsKShcInRoaXNcIil9Y2F0Y2godCl7XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmKG49d2luZG93KX10LmV4cG9ydHM9bn0sZnVuY3Rpb24odCxlLG4peyhmdW5jdGlvbihlKXt0LmV4cG9ydHM9ZS5zd2VldEFsZXJ0PW4oOSl9KS5jYWxsKGUsbig3KSl9LGZ1bmN0aW9uKHQsZSxuKXsoZnVuY3Rpb24oZSl7dC5leHBvcnRzPWUuc3dhbD1uKDEwKX0pLmNhbGwoZSxuKDcpKX0sZnVuY3Rpb24odCxlLG4pe1widW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJm4oMTEpLG4oMTYpO3ZhciBvPW4oMjMpLmRlZmF1bHQ7dC5leHBvcnRzPW99LGZ1bmN0aW9uKHQsZSxuKXt2YXIgbz1uKDEyKTtcInN0cmluZ1wiPT10eXBlb2YgbyYmKG89W1t0LmksbyxcIlwiXV0pO3ZhciByPXtpbnNlcnRBdDpcInRvcFwifTtyLnRyYW5zZm9ybT12b2lkIDA7bigxNCkobyxyKTtvLmxvY2FscyYmKHQuZXhwb3J0cz1vLmxvY2Fscyl9LGZ1bmN0aW9uKHQsZSxuKXtlPXQuZXhwb3J0cz1uKDEzKSh2b2lkIDApLGUucHVzaChbdC5pLCcuc3dhbC1pY29uLS1lcnJvcntib3JkZXItY29sb3I6I2YyNzQ3NDstd2Via2l0LWFuaW1hdGlvbjphbmltYXRlRXJyb3JJY29uIC41czthbmltYXRpb246YW5pbWF0ZUVycm9ySWNvbiAuNXN9LnN3YWwtaWNvbi0tZXJyb3JfX3gtbWFya3twb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrOy13ZWJraXQtYW5pbWF0aW9uOmFuaW1hdGVYTWFyayAuNXM7YW5pbWF0aW9uOmFuaW1hdGVYTWFyayAuNXN9LnN3YWwtaWNvbi0tZXJyb3JfX2xpbmV7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjVweDt3aWR0aDo0N3B4O2JhY2tncm91bmQtY29sb3I6I2YyNzQ3NDtkaXNwbGF5OmJsb2NrO3RvcDozN3B4O2JvcmRlci1yYWRpdXM6MnB4fS5zd2FsLWljb24tLWVycm9yX19saW5lLS1sZWZ0ey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7bGVmdDoxN3B4fS5zd2FsLWljb24tLWVycm9yX19saW5lLS1yaWdodHstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7cmlnaHQ6MTZweH1ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZUVycm9ySWNvbnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGVYKDEwMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZVgoMTAwZGVnKTtvcGFjaXR5OjB9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlWCgwZGVnKTt0cmFuc2Zvcm06cm90YXRlWCgwZGVnKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgYW5pbWF0ZUVycm9ySWNvbnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGVYKDEwMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZVgoMTAwZGVnKTtvcGFjaXR5OjB9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlWCgwZGVnKTt0cmFuc2Zvcm06cm90YXRlWCgwZGVnKTtvcGFjaXR5OjF9fUAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlWE1hcmt7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjQpO3RyYW5zZm9ybTpzY2FsZSguNCk7bWFyZ2luLXRvcDoyNnB4O29wYWNpdHk6MH01MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjQpO3RyYW5zZm9ybTpzY2FsZSguNCk7bWFyZ2luLXRvcDoyNnB4O29wYWNpdHk6MH04MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7dHJhbnNmb3JtOnNjYWxlKDEuMTUpO21hcmdpbi10b3A6LTZweH10b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7bWFyZ2luLXRvcDowO29wYWNpdHk6MX19QGtleWZyYW1lcyBhbmltYXRlWE1hcmt7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjQpO3RyYW5zZm9ybTpzY2FsZSguNCk7bWFyZ2luLXRvcDoyNnB4O29wYWNpdHk6MH01MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjQpO3RyYW5zZm9ybTpzY2FsZSguNCk7bWFyZ2luLXRvcDoyNnB4O29wYWNpdHk6MH04MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7dHJhbnNmb3JtOnNjYWxlKDEuMTUpO21hcmdpbi10b3A6LTZweH10b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7bWFyZ2luLXRvcDowO29wYWNpdHk6MX19LnN3YWwtaWNvbi0td2FybmluZ3tib3JkZXItY29sb3I6I2Y4YmI4Njstd2Via2l0LWFuaW1hdGlvbjpwdWxzZVdhcm5pbmcgLjc1cyBpbmZpbml0ZSBhbHRlcm5hdGU7YW5pbWF0aW9uOnB1bHNlV2FybmluZyAuNzVzIGluZmluaXRlIGFsdGVybmF0ZX0uc3dhbC1pY29uLS13YXJuaW5nX19ib2R5e3dpZHRoOjVweDtoZWlnaHQ6NDdweDt0b3A6MTBweDtib3JkZXItcmFkaXVzOjJweDttYXJnaW4tbGVmdDotMnB4fS5zd2FsLWljb24tLXdhcm5pbmdfX2JvZHksLnN3YWwtaWNvbi0td2FybmluZ19fZG90e3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6NTAlO2JhY2tncm91bmQtY29sb3I6I2Y4YmI4Nn0uc3dhbC1pY29uLS13YXJuaW5nX19kb3R7d2lkdGg6N3B4O2hlaWdodDo3cHg7Ym9yZGVyLXJhZGl1czo1MCU7bWFyZ2luLWxlZnQ6LTRweDtib3R0b206LTExcHh9QC13ZWJraXQta2V5ZnJhbWVzIHB1bHNlV2FybmluZ3swJXtib3JkZXItY29sb3I6I2Y4ZDQ4Nn10b3tib3JkZXItY29sb3I6I2Y4YmI4Nn19QGtleWZyYW1lcyBwdWxzZVdhcm5pbmd7MCV7Ym9yZGVyLWNvbG9yOiNmOGQ0ODZ9dG97Ym9yZGVyLWNvbG9yOiNmOGJiODZ9fS5zd2FsLWljb24tLXN1Y2Nlc3N7Ym9yZGVyLWNvbG9yOiNhNWRjODZ9LnN3YWwtaWNvbi0tc3VjY2VzczphZnRlciwuc3dhbC1pY29uLS1zdWNjZXNzOmJlZm9yZXtjb250ZW50OlwiXCI7Ym9yZGVyLXJhZGl1czo1MCU7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6NjBweDtoZWlnaHQ6MTIwcHg7YmFja2dyb3VuZDojZmZmOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9LnN3YWwtaWNvbi0tc3VjY2VzczpiZWZvcmV7Ym9yZGVyLXJhZGl1czoxMjBweCAwIDAgMTIwcHg7dG9wOi03cHg7bGVmdDotMzNweDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjYwcHggNjBweDt0cmFuc2Zvcm0tb3JpZ2luOjYwcHggNjBweH0uc3dhbC1pY29uLS1zdWNjZXNzOmFmdGVye2JvcmRlci1yYWRpdXM6MCAxMjBweCAxMjBweCAwO3RvcDotMTFweDtsZWZ0OjMwcHg7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjowIDYwcHg7dHJhbnNmb3JtLW9yaWdpbjowIDYwcHg7LXdlYmtpdC1hbmltYXRpb246cm90YXRlUGxhY2Vob2xkZXIgNC4yNXMgZWFzZS1pbjthbmltYXRpb246cm90YXRlUGxhY2Vob2xkZXIgNC4yNXMgZWFzZS1pbn0uc3dhbC1pY29uLS1zdWNjZXNzX19yaW5ne3dpZHRoOjgwcHg7aGVpZ2h0OjgwcHg7Ym9yZGVyOjRweCBzb2xpZCBoc2xhKDk4LDU1JSw2OSUsLjIpO2JvcmRlci1yYWRpdXM6NTAlO2JveC1zaXppbmc6Y29udGVudC1ib3g7cG9zaXRpb246YWJzb2x1dGU7bGVmdDotNHB4O3RvcDotNHB4O3otaW5kZXg6Mn0uc3dhbC1pY29uLS1zdWNjZXNzX19oaWRlLWNvcm5lcnN7d2lkdGg6NXB4O2hlaWdodDo5MHB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjtwYWRkaW5nOjFweDtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjI4cHg7dG9wOjhweDt6LWluZGV4OjE7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfS5zd2FsLWljb24tLXN1Y2Nlc3NfX2xpbmV7aGVpZ2h0OjVweDtiYWNrZ3JvdW5kLWNvbG9yOiNhNWRjODY7ZGlzcGxheTpibG9jaztib3JkZXItcmFkaXVzOjJweDtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjJ9LnN3YWwtaWNvbi0tc3VjY2Vzc19fbGluZS0tdGlwe3dpZHRoOjI1cHg7bGVmdDoxNHB4O3RvcDo0NnB4Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7LXdlYmtpdC1hbmltYXRpb246YW5pbWF0ZVN1Y2Nlc3NUaXAgLjc1czthbmltYXRpb246YW5pbWF0ZVN1Y2Nlc3NUaXAgLjc1c30uc3dhbC1pY29uLS1zdWNjZXNzX19saW5lLS1sb25ne3dpZHRoOjQ3cHg7cmlnaHQ6OHB4O3RvcDozOHB4Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTstd2Via2l0LWFuaW1hdGlvbjphbmltYXRlU3VjY2Vzc0xvbmcgLjc1czthbmltYXRpb246YW5pbWF0ZVN1Y2Nlc3NMb25nIC43NXN9QC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZVBsYWNlaG9sZGVyezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX01JXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9MTIley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpfX1Aa2V5ZnJhbWVzIHJvdGF0ZVBsYWNlaG9sZGVyezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX01JXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9MTIley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpfX1ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZVN1Y2Nlc3NUaXB7MCV7d2lkdGg6MDtsZWZ0OjFweDt0b3A6MTlweH01NCV7d2lkdGg6MDtsZWZ0OjFweDt0b3A6MTlweH03MCV7d2lkdGg6NTBweDtsZWZ0Oi04cHg7dG9wOjM3cHh9ODQle3dpZHRoOjE3cHg7bGVmdDoyMXB4O3RvcDo0OHB4fXRve3dpZHRoOjI1cHg7bGVmdDoxNHB4O3RvcDo0NXB4fX1Aa2V5ZnJhbWVzIGFuaW1hdGVTdWNjZXNzVGlwezAle3dpZHRoOjA7bGVmdDoxcHg7dG9wOjE5cHh9NTQle3dpZHRoOjA7bGVmdDoxcHg7dG9wOjE5cHh9NzAle3dpZHRoOjUwcHg7bGVmdDotOHB4O3RvcDozN3B4fTg0JXt3aWR0aDoxN3B4O2xlZnQ6MjFweDt0b3A6NDhweH10b3t3aWR0aDoyNXB4O2xlZnQ6MTRweDt0b3A6NDVweH19QC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGVTdWNjZXNzTG9uZ3swJXt3aWR0aDowO3JpZ2h0OjQ2cHg7dG9wOjU0cHh9NjUle3dpZHRoOjA7cmlnaHQ6NDZweDt0b3A6NTRweH04NCV7d2lkdGg6NTVweDtyaWdodDowO3RvcDozNXB4fXRve3dpZHRoOjQ3cHg7cmlnaHQ6OHB4O3RvcDozOHB4fX1Aa2V5ZnJhbWVzIGFuaW1hdGVTdWNjZXNzTG9uZ3swJXt3aWR0aDowO3JpZ2h0OjQ2cHg7dG9wOjU0cHh9NjUle3dpZHRoOjA7cmlnaHQ6NDZweDt0b3A6NTRweH04NCV7d2lkdGg6NTVweDtyaWdodDowO3RvcDozNXB4fXRve3dpZHRoOjQ3cHg7cmlnaHQ6OHB4O3RvcDozOHB4fX0uc3dhbC1pY29uLS1pbmZve2JvcmRlci1jb2xvcjojYzlkYWUxfS5zd2FsLWljb24tLWluZm86YmVmb3Jle3dpZHRoOjVweDtoZWlnaHQ6MjlweDtib3R0b206MTdweDtib3JkZXItcmFkaXVzOjJweDttYXJnaW4tbGVmdDotMnB4fS5zd2FsLWljb24tLWluZm86YWZ0ZXIsLnN3YWwtaWNvbi0taW5mbzpiZWZvcmV7Y29udGVudDpcIlwiO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6NTAlO2JhY2tncm91bmQtY29sb3I6I2M5ZGFlMX0uc3dhbC1pY29uLS1pbmZvOmFmdGVye3dpZHRoOjdweDtoZWlnaHQ6N3B4O2JvcmRlci1yYWRpdXM6NTAlO21hcmdpbi1sZWZ0Oi0zcHg7dG9wOjE5cHh9LnN3YWwtaWNvbnt3aWR0aDo4MHB4O2hlaWdodDo4MHB4O2JvcmRlci13aWR0aDo0cHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1yYWRpdXM6NTAlO3BhZGRpbmc6MDtwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmNvbnRlbnQtYm94O21hcmdpbjoyMHB4IGF1dG99LnN3YWwtaWNvbjpmaXJzdC1jaGlsZHttYXJnaW4tdG9wOjMycHh9LnN3YWwtaWNvbi0tY3VzdG9te3dpZHRoOmF1dG87aGVpZ2h0OmF1dG87bWF4LXdpZHRoOjEwMCU7Ym9yZGVyOm5vbmU7Ym9yZGVyLXJhZGl1czowfS5zd2FsLWljb24gaW1ne21heC13aWR0aDoxMDAlO21heC1oZWlnaHQ6MTAwJX0uc3dhbC10aXRsZXtjb2xvcjpyZ2JhKDAsMCwwLC42NSk7Zm9udC13ZWlnaHQ6NjAwO3RleHQtdHJhbnNmb3JtOm5vbmU7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jaztwYWRkaW5nOjEzcHggMTZweDtmb250LXNpemU6MjdweDtsaW5lLWhlaWdodDpub3JtYWw7dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luLWJvdHRvbTowfS5zd2FsLXRpdGxlOmZpcnN0LWNoaWxke21hcmdpbi10b3A6MjZweH0uc3dhbC10aXRsZTpub3QoOmZpcnN0LWNoaWxkKXtwYWRkaW5nLWJvdHRvbTowfS5zd2FsLXRpdGxlOm5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLWJvdHRvbToxM3B4fS5zd2FsLXRleHR7Zm9udC1zaXplOjE2cHg7cG9zaXRpb246cmVsYXRpdmU7ZmxvYXQ6bm9uZTtsaW5lLWhlaWdodDpub3JtYWw7dmVydGljYWwtYWxpZ246dG9wO3RleHQtYWxpZ246bGVmdDtkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW46MDtwYWRkaW5nOjAgMTBweDtmb250LXdlaWdodDo0MDA7Y29sb3I6cmdiYSgwLDAsMCwuNjQpO21heC13aWR0aDpjYWxjKDEwMCUgLSAyMHB4KTtvdmVyZmxvdy13cmFwOmJyZWFrLXdvcmQ7Ym94LXNpemluZzpib3JkZXItYm94fS5zd2FsLXRleHQ6Zmlyc3QtY2hpbGR7bWFyZ2luLXRvcDo0NXB4fS5zd2FsLXRleHQ6bGFzdC1jaGlsZHttYXJnaW4tYm90dG9tOjQ1cHh9LnN3YWwtZm9vdGVye3RleHQtYWxpZ246cmlnaHQ7cGFkZGluZy10b3A6MTNweDttYXJnaW4tdG9wOjEzcHg7cGFkZGluZzoxM3B4IDE2cHg7Ym9yZGVyLXJhZGl1czppbmhlcml0O2JvcmRlci10b3AtbGVmdC1yYWRpdXM6MDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czowfS5zd2FsLWJ1dHRvbi1jb250YWluZXJ7bWFyZ2luOjVweDtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZX0uc3dhbC1idXR0b257YmFja2dyb3VuZC1jb2xvcjojN2NkMWY5O2NvbG9yOiNmZmY7Ym9yZGVyOm5vbmU7Ym94LXNoYWRvdzpub25lO2JvcmRlci1yYWRpdXM6NXB4O2ZvbnQtd2VpZ2h0OjYwMDtmb250LXNpemU6MTRweDtwYWRkaW5nOjEwcHggMjRweDttYXJnaW46MDtjdXJzb3I6cG9pbnRlcn0uc3dhbC1idXR0b246bm90KFtkaXNhYmxlZF0pOmhvdmVye2JhY2tncm91bmQtY29sb3I6Izc4Y2JmMn0uc3dhbC1idXR0b246YWN0aXZle2JhY2tncm91bmQtY29sb3I6IzcwYmNlMH0uc3dhbC1idXR0b246Zm9jdXN7b3V0bGluZTpub25lO2JveC1zaGFkb3c6MCAwIDAgMXB4ICNmZmYsMCAwIDAgM3B4IHJnYmEoNDMsMTE0LDE2NSwuMjkpfS5zd2FsLWJ1dHRvbltkaXNhYmxlZF17b3BhY2l0eTouNTtjdXJzb3I6ZGVmYXVsdH0uc3dhbC1idXR0b246Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyOjB9LnN3YWwtYnV0dG9uLS1jYW5jZWx7Y29sb3I6IzU1NTtiYWNrZ3JvdW5kLWNvbG9yOiNlZmVmZWZ9LnN3YWwtYnV0dG9uLS1jYW5jZWw6bm90KFtkaXNhYmxlZF0pOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2U4ZThlOH0uc3dhbC1idXR0b24tLWNhbmNlbDphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojZDdkN2Q3fS5zd2FsLWJ1dHRvbi0tY2FuY2VsOmZvY3Vze2JveC1zaGFkb3c6MCAwIDAgMXB4ICNmZmYsMCAwIDAgM3B4IHJnYmEoMTE2LDEzNiwxNTAsLjI5KX0uc3dhbC1idXR0b24tLWRhbmdlcntiYWNrZ3JvdW5kLWNvbG9yOiNlNjQ5NDJ9LnN3YWwtYnV0dG9uLS1kYW5nZXI6bm90KFtkaXNhYmxlZF0pOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2RmNDc0MH0uc3dhbC1idXR0b24tLWRhbmdlcjphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojY2Y0MjNifS5zd2FsLWJ1dHRvbi0tZGFuZ2VyOmZvY3Vze2JveC1zaGFkb3c6MCAwIDAgMXB4ICNmZmYsMCAwIDAgM3B4IHJnYmEoMTY1LDQzLDQzLC4yOSl9LnN3YWwtY29udGVudHtwYWRkaW5nOjAgMjBweDttYXJnaW4tdG9wOjIwcHg7Zm9udC1zaXplOm1lZGl1bX0uc3dhbC1jb250ZW50Omxhc3QtY2hpbGR7bWFyZ2luLWJvdHRvbToyMHB4fS5zd2FsLWNvbnRlbnRfX2lucHV0LC5zd2FsLWNvbnRlbnRfX3RleHRhcmVhey13ZWJraXQtYXBwZWFyYW5jZTpub25lO2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXI6bm9uZTtmb250LXNpemU6MTRweDtkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveDt3aWR0aDoxMDAlO2JvcmRlcjoxcHggc29saWQgcmdiYSgwLDAsMCwuMTQpO3BhZGRpbmc6MTBweCAxM3B4O2JvcmRlci1yYWRpdXM6MnB4O3RyYW5zaXRpb246Ym9yZGVyLWNvbG9yIC4yc30uc3dhbC1jb250ZW50X19pbnB1dDpmb2N1cywuc3dhbC1jb250ZW50X190ZXh0YXJlYTpmb2N1c3tvdXRsaW5lOm5vbmU7Ym9yZGVyLWNvbG9yOiM2ZGI4ZmZ9LnN3YWwtY29udGVudF9fdGV4dGFyZWF7cmVzaXplOnZlcnRpY2FsfS5zd2FsLWJ1dHRvbi0tbG9hZGluZ3tjb2xvcjp0cmFuc3BhcmVudH0uc3dhbC1idXR0b24tLWxvYWRpbmd+LnN3YWwtYnV0dG9uX19sb2FkZXJ7b3BhY2l0eToxfS5zd2FsLWJ1dHRvbl9fbG9hZGVye3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDphdXRvO3dpZHRoOjQzcHg7ei1pbmRleDoyO2xlZnQ6NTAlO3RvcDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7dGV4dC1hbGlnbjpjZW50ZXI7cG9pbnRlci1ldmVudHM6bm9uZTtvcGFjaXR5OjB9LnN3YWwtYnV0dG9uX19sb2FkZXIgZGl2e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0Om5vbmU7dmVydGljYWwtYWxpZ246YmFzZWxpbmU7d2lkdGg6OXB4O2hlaWdodDo5cHg7cGFkZGluZzowO2JvcmRlcjpub25lO21hcmdpbjoycHg7b3BhY2l0eTouNDtib3JkZXItcmFkaXVzOjdweDtiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMCwwJSwxMDAlLC45KTt0cmFuc2l0aW9uOmJhY2tncm91bmQgLjJzOy13ZWJraXQtYW5pbWF0aW9uOnN3YWwtbG9hZGluZy1hbmltIDFzIGluZmluaXRlO2FuaW1hdGlvbjpzd2FsLWxvYWRpbmctYW5pbSAxcyBpbmZpbml0ZX0uc3dhbC1idXR0b25fX2xvYWRlciBkaXY6bnRoLWNoaWxkKDNuKzIpey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5Oi4xNXM7YW5pbWF0aW9uLWRlbGF5Oi4xNXN9LnN3YWwtYnV0dG9uX19sb2FkZXIgZGl2Om50aC1jaGlsZCgzbiszKXstd2Via2l0LWFuaW1hdGlvbi1kZWxheTouM3M7YW5pbWF0aW9uLWRlbGF5Oi4zc31ALXdlYmtpdC1rZXlmcmFtZXMgc3dhbC1sb2FkaW5nLWFuaW17MCV7b3BhY2l0eTouNH0yMCV7b3BhY2l0eTouNH01MCV7b3BhY2l0eToxfXRve29wYWNpdHk6LjR9fUBrZXlmcmFtZXMgc3dhbC1sb2FkaW5nLWFuaW17MCV7b3BhY2l0eTouNH0yMCV7b3BhY2l0eTouNH01MCV7b3BhY2l0eToxfXRve29wYWNpdHk6LjR9fS5zd2FsLW92ZXJsYXl7cG9zaXRpb246Zml4ZWQ7dG9wOjA7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC1zaXplOjA7b3ZlcmZsb3cteTphdXRvO2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNCk7ei1pbmRleDoxMDAwMDtwb2ludGVyLWV2ZW50czpub25lO29wYWNpdHk6MDt0cmFuc2l0aW9uOm9wYWNpdHkgLjNzfS5zd2FsLW92ZXJsYXk6YmVmb3Jle2NvbnRlbnQ6XCIgXCI7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246bWlkZGxlO2hlaWdodDoxMDAlfS5zd2FsLW92ZXJsYXktLXNob3ctbW9kYWx7b3BhY2l0eToxO3BvaW50ZXItZXZlbnRzOmF1dG99LnN3YWwtb3ZlcmxheS0tc2hvdy1tb2RhbCAuc3dhbC1tb2RhbHtvcGFjaXR5OjE7cG9pbnRlci1ldmVudHM6YXV0bztib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC1hbmltYXRpb246c2hvd1N3ZWV0QWxlcnQgLjNzO2FuaW1hdGlvbjpzaG93U3dlZXRBbGVydCAuM3M7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtfS5zd2FsLW1vZGFse3dpZHRoOjQ3OHB4O29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lO2JhY2tncm91bmQtY29sb3I6I2ZmZjt0ZXh0LWFsaWduOmNlbnRlcjtib3JkZXItcmFkaXVzOjVweDtwb3NpdGlvbjpzdGF0aWM7bWFyZ2luOjIwcHggYXV0bztkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjo1MCUgNTAlO3RyYW5zZm9ybS1vcmlnaW46NTAlIDUwJTt6LWluZGV4OjEwMDAxO3RyYW5zaXRpb246b3BhY2l0eSAuMnMsLXdlYmtpdC10cmFuc2Zvcm0gLjNzO3RyYW5zaXRpb246dHJhbnNmb3JtIC4zcyxvcGFjaXR5IC4yczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuM3Msb3BhY2l0eSAuMnMsLXdlYmtpdC10cmFuc2Zvcm0gLjNzfUBtZWRpYSAobWF4LXdpZHRoOjUwMHB4KXsuc3dhbC1tb2RhbHt3aWR0aDpjYWxjKDEwMCUgLSAyMHB4KX19QC13ZWJraXQta2V5ZnJhbWVzIHNob3dTd2VldEFsZXJ0ezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX0xJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNSk7dHJhbnNmb3JtOnNjYWxlKC41KX00NSV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4wNSk7dHJhbnNmb3JtOnNjYWxlKDEuMDUpfTgwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguOTUpO3RyYW5zZm9ybTpzY2FsZSguOTUpfXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19QGtleWZyYW1lcyBzaG93U3dlZXRBbGVydHswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9MSV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjUpO3RyYW5zZm9ybTpzY2FsZSguNSl9NDUley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMDUpO3RyYW5zZm9ybTpzY2FsZSgxLjA1KX04MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjk1KTt0cmFuc2Zvcm06c2NhbGUoLjk1KX10b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9fScsXCJcIl0pfSxmdW5jdGlvbih0LGUpe2Z1bmN0aW9uIG4odCxlKXt2YXIgbj10WzFdfHxcIlwiLHI9dFszXTtpZighcilyZXR1cm4gbjtpZihlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBidG9hKXt2YXIgaT1vKHIpO3JldHVybltuXS5jb25jYXQoci5zb3VyY2VzLm1hcChmdW5jdGlvbih0KXtyZXR1cm5cIi8qIyBzb3VyY2VVUkw9XCIrci5zb3VyY2VSb290K3QrXCIgKi9cIn0pKS5jb25jYXQoW2ldKS5qb2luKFwiXFxuXCIpfXJldHVybltuXS5qb2luKFwiXFxuXCIpfWZ1bmN0aW9uIG8odCl7cmV0dXJuXCIvKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIrYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkodCkpKSkrXCIgKi9cIn10LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9W107cmV0dXJuIGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oZSl7dmFyIG89bihlLHQpO3JldHVybiBlWzJdP1wiQG1lZGlhIFwiK2VbMl0rXCJ7XCIrbytcIn1cIjpvfSkuam9pbihcIlwiKX0sZS5pPWZ1bmN0aW9uKHQsbil7XCJzdHJpbmdcIj09dHlwZW9mIHQmJih0PVtbbnVsbCx0LFwiXCJdXSk7Zm9yKHZhciBvPXt9LHI9MDtyPHRoaXMubGVuZ3RoO3IrKyl7dmFyIGk9dGhpc1tyXVswXTtcIm51bWJlclwiPT10eXBlb2YgaSYmKG9baV09ITApfWZvcihyPTA7cjx0Lmxlbmd0aDtyKyspe3ZhciBhPXRbcl07XCJudW1iZXJcIj09dHlwZW9mIGFbMF0mJm9bYVswXV18fChuJiYhYVsyXT9hWzJdPW46biYmKGFbMl09XCIoXCIrYVsyXStcIikgYW5kIChcIituK1wiKVwiKSxlLnB1c2goYSkpfX0sZX19LGZ1bmN0aW9uKHQsZSxuKXtmdW5jdGlvbiBvKHQsZSl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciBvPXRbbl0scj1tW28uaWRdO2lmKHIpe3IucmVmcysrO2Zvcih2YXIgaT0wO2k8ci5wYXJ0cy5sZW5ndGg7aSsrKXIucGFydHNbaV0oby5wYXJ0c1tpXSk7Zm9yKDtpPG8ucGFydHMubGVuZ3RoO2krKylyLnBhcnRzLnB1c2godShvLnBhcnRzW2ldLGUpKX1lbHNle2Zvcih2YXIgYT1bXSxpPTA7aTxvLnBhcnRzLmxlbmd0aDtpKyspYS5wdXNoKHUoby5wYXJ0c1tpXSxlKSk7bVtvLmlkXT17aWQ6by5pZCxyZWZzOjEscGFydHM6YX19fX1mdW5jdGlvbiByKHQsZSl7Zm9yKHZhciBuPVtdLG89e30scj0wO3I8dC5sZW5ndGg7cisrKXt2YXIgaT10W3JdLGE9ZS5iYXNlP2lbMF0rZS5iYXNlOmlbMF0scz1pWzFdLGM9aVsyXSxsPWlbM10sdT17Y3NzOnMsbWVkaWE6Yyxzb3VyY2VNYXA6bH07b1thXT9vW2FdLnBhcnRzLnB1c2godSk6bi5wdXNoKG9bYV09e2lkOmEscGFydHM6W3VdfSl9cmV0dXJuIG59ZnVuY3Rpb24gaSh0LGUpe3ZhciBuPXYodC5pbnNlcnRJbnRvKTtpZighbil0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTt2YXIgbz13W3cubGVuZ3RoLTFdO2lmKFwidG9wXCI9PT10Lmluc2VydEF0KW8/by5uZXh0U2libGluZz9uLmluc2VydEJlZm9yZShlLG8ubmV4dFNpYmxpbmcpOm4uYXBwZW5kQ2hpbGQoZSk6bi5pbnNlcnRCZWZvcmUoZSxuLmZpcnN0Q2hpbGQpLHcucHVzaChlKTtlbHNle2lmKFwiYm90dG9tXCIhPT10Lmluc2VydEF0KXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtuLmFwcGVuZENoaWxkKGUpfX1mdW5jdGlvbiBhKHQpe2lmKG51bGw9PT10LnBhcmVudE5vZGUpcmV0dXJuITE7dC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQpO3ZhciBlPXcuaW5kZXhPZih0KTtlPj0wJiZ3LnNwbGljZShlLDEpfWZ1bmN0aW9uIHModCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO3JldHVybiB0LmF0dHJzLnR5cGU9XCJ0ZXh0L2Nzc1wiLGwoZSx0LmF0dHJzKSxpKHQsZSksZX1mdW5jdGlvbiBjKHQpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO3JldHVybiB0LmF0dHJzLnR5cGU9XCJ0ZXh0L2Nzc1wiLHQuYXR0cnMucmVsPVwic3R5bGVzaGVldFwiLGwoZSx0LmF0dHJzKSxpKHQsZSksZX1mdW5jdGlvbiBsKHQsZSl7T2JqZWN0LmtleXMoZSkuZm9yRWFjaChmdW5jdGlvbihuKXt0LnNldEF0dHJpYnV0ZShuLGVbbl0pfSl9ZnVuY3Rpb24gdSh0LGUpe3ZhciBuLG8scixpO2lmKGUudHJhbnNmb3JtJiZ0LmNzcyl7aWYoIShpPWUudHJhbnNmb3JtKHQuY3NzKSkpcmV0dXJuIGZ1bmN0aW9uKCl7fTt0LmNzcz1pfWlmKGUuc2luZ2xldG9uKXt2YXIgbD1oKys7bj1nfHwoZz1zKGUpKSxvPWYuYmluZChudWxsLG4sbCwhMSkscj1mLmJpbmQobnVsbCxuLGwsITApfWVsc2UgdC5zb3VyY2VNYXAmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFVSTCYmXCJmdW5jdGlvblwiPT10eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCYmXCJmdW5jdGlvblwiPT10eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCYmXCJmdW5jdGlvblwiPT10eXBlb2YgQmxvYiYmXCJmdW5jdGlvblwiPT10eXBlb2YgYnRvYT8obj1jKGUpLG89cC5iaW5kKG51bGwsbixlKSxyPWZ1bmN0aW9uKCl7YShuKSxuLmhyZWYmJlVSTC5yZXZva2VPYmplY3RVUkwobi5ocmVmKX0pOihuPXMoZSksbz1kLmJpbmQobnVsbCxuKSxyPWZ1bmN0aW9uKCl7YShuKX0pO3JldHVybiBvKHQpLGZ1bmN0aW9uKGUpe2lmKGUpe2lmKGUuY3NzPT09dC5jc3MmJmUubWVkaWE9PT10Lm1lZGlhJiZlLnNvdXJjZU1hcD09PXQuc291cmNlTWFwKXJldHVybjtvKHQ9ZSl9ZWxzZSByKCl9fWZ1bmN0aW9uIGYodCxlLG4sbyl7dmFyIHI9bj9cIlwiOm8uY3NzO2lmKHQuc3R5bGVTaGVldCl0LnN0eWxlU2hlZXQuY3NzVGV4dD14KGUscik7ZWxzZXt2YXIgaT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShyKSxhPXQuY2hpbGROb2RlczthW2VdJiZ0LnJlbW92ZUNoaWxkKGFbZV0pLGEubGVuZ3RoP3QuaW5zZXJ0QmVmb3JlKGksYVtlXSk6dC5hcHBlbmRDaGlsZChpKX19ZnVuY3Rpb24gZCh0LGUpe3ZhciBuPWUuY3NzLG89ZS5tZWRpYTtpZihvJiZ0LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsbyksdC5zdHlsZVNoZWV0KXQuc3R5bGVTaGVldC5jc3NUZXh0PW47ZWxzZXtmb3IoO3QuZmlyc3RDaGlsZDspdC5yZW1vdmVDaGlsZCh0LmZpcnN0Q2hpbGQpO3QuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobikpfX1mdW5jdGlvbiBwKHQsZSxuKXt2YXIgbz1uLmNzcyxyPW4uc291cmNlTWFwLGk9dm9pZCAwPT09ZS5jb252ZXJ0VG9BYnNvbHV0ZVVybHMmJnI7KGUuY29udmVydFRvQWJzb2x1dGVVcmxzfHxpKSYmKG89eShvKSksciYmKG8rPVwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIitidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShyKSkpKStcIiAqL1wiKTt2YXIgYT1uZXcgQmxvYihbb10se3R5cGU6XCJ0ZXh0L2Nzc1wifSkscz10LmhyZWY7dC5ocmVmPVVSTC5jcmVhdGVPYmplY3RVUkwoYSkscyYmVVJMLnJldm9rZU9iamVjdFVSTChzKX12YXIgbT17fSxiPWZ1bmN0aW9uKHQpe3ZhciBlO3JldHVybiBmdW5jdGlvbigpe3JldHVybiB2b2lkIDA9PT1lJiYoZT10LmFwcGx5KHRoaXMsYXJndW1lbnRzKSksZX19KGZ1bmN0aW9uKCl7cmV0dXJuIHdpbmRvdyYmZG9jdW1lbnQmJmRvY3VtZW50LmFsbCYmIXdpbmRvdy5hdG9ifSksdj1mdW5jdGlvbih0KXt2YXIgZT17fTtyZXR1cm4gZnVuY3Rpb24obil7cmV0dXJuIHZvaWQgMD09PWVbbl0mJihlW25dPXQuY2FsbCh0aGlzLG4pKSxlW25dfX0oZnVuY3Rpb24odCl7cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodCl9KSxnPW51bGwsaD0wLHc9W10seT1uKDE1KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgREVCVUcmJkRFQlVHJiZcIm9iamVjdFwiIT10eXBlb2YgZG9jdW1lbnQpdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO2U9ZXx8e30sZS5hdHRycz1cIm9iamVjdFwiPT10eXBlb2YgZS5hdHRycz9lLmF0dHJzOnt9LGUuc2luZ2xldG9ufHwoZS5zaW5nbGV0b249YigpKSxlLmluc2VydEludG98fChlLmluc2VydEludG89XCJoZWFkXCIpLGUuaW5zZXJ0QXR8fChlLmluc2VydEF0PVwiYm90dG9tXCIpO3ZhciBuPXIodCxlKTtyZXR1cm4gbyhuLGUpLGZ1bmN0aW9uKHQpe2Zvcih2YXIgaT1bXSxhPTA7YTxuLmxlbmd0aDthKyspe3ZhciBzPW5bYV0sYz1tW3MuaWRdO2MucmVmcy0tLGkucHVzaChjKX1pZih0KXtvKHIodCxlKSxlKX1mb3IodmFyIGE9MDthPGkubGVuZ3RoO2ErKyl7dmFyIGM9aVthXTtpZigwPT09Yy5yZWZzKXtmb3IodmFyIGw9MDtsPGMucGFydHMubGVuZ3RoO2wrKyljLnBhcnRzW2xdKCk7ZGVsZXRlIG1bYy5pZF19fX19O3ZhciB4PWZ1bmN0aW9uKCl7dmFyIHQ9W107cmV0dXJuIGZ1bmN0aW9uKGUsbil7cmV0dXJuIHRbZV09bix0LmZpbHRlcihCb29sZWFuKS5qb2luKFwiXFxuXCIpfX0oKX0sZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93LmxvY2F0aW9uO2lmKCFlKXRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO2lmKCF0fHxcInN0cmluZ1wiIT10eXBlb2YgdClyZXR1cm4gdDt2YXIgbj1lLnByb3RvY29sK1wiLy9cIitlLmhvc3Qsbz1uK2UucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLFwiL1wiKTtyZXR1cm4gdC5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSxmdW5jdGlvbih0LGUpe3ZhciByPWUudHJpbSgpLnJlcGxhY2UoL15cIiguKilcIiQvLGZ1bmN0aW9uKHQsZSl7cmV0dXJuIGV9KS5yZXBsYWNlKC9eJyguKiknJC8sZnVuY3Rpb24odCxlKXtyZXR1cm4gZX0pO2lmKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvKS9pLnRlc3QocikpcmV0dXJuIHQ7dmFyIGk7cmV0dXJuIGk9MD09PXIuaW5kZXhPZihcIi8vXCIpP3I6MD09PXIuaW5kZXhPZihcIi9cIik/bityOm8rci5yZXBsYWNlKC9eXFwuXFwvLyxcIlwiKSxcInVybChcIitKU09OLnN0cmluZ2lmeShpKStcIilcIn0pfX0sZnVuY3Rpb24odCxlLG4pe3ZhciBvPW4oMTcpO1widW5kZWZpbmVkXCI9PXR5cGVvZiB3aW5kb3d8fHdpbmRvdy5Qcm9taXNlfHwod2luZG93LlByb21pc2U9byksbigyMSksU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlc3x8KFN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXM9ZnVuY3Rpb24odCxlKXtcInVzZSBzdHJpY3RcIjtyZXR1cm5cIm51bWJlclwiIT10eXBlb2YgZSYmKGU9MCksIShlK3QubGVuZ3RoPnRoaXMubGVuZ3RoKSYmLTEhPT10aGlzLmluZGV4T2YodCxlKX0pLEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc3x8T2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSxcImluY2x1ZGVzXCIse3ZhbHVlOmZ1bmN0aW9uKHQsZSl7aWYobnVsbD09dGhpcyl0aHJvdyBuZXcgVHlwZUVycm9yKCdcInRoaXNcIiBpcyBudWxsIG9yIG5vdCBkZWZpbmVkJyk7dmFyIG49T2JqZWN0KHRoaXMpLG89bi5sZW5ndGg+Pj4wO2lmKDA9PT1vKXJldHVybiExO2Zvcih2YXIgcj0wfGUsaT1NYXRoLm1heChyPj0wP3I6by1NYXRoLmFicyhyKSwwKTtpPG87KXtpZihmdW5jdGlvbih0LGUpe3JldHVybiB0PT09ZXx8XCJudW1iZXJcIj09dHlwZW9mIHQmJlwibnVtYmVyXCI9PXR5cGVvZiBlJiZpc05hTih0KSYmaXNOYU4oZSl9KG5baV0sdCkpcmV0dXJuITA7aSsrfXJldHVybiExfX0pLFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJmZ1bmN0aW9uKHQpe3QuZm9yRWFjaChmdW5jdGlvbih0KXt0Lmhhc093blByb3BlcnR5KFwicmVtb3ZlXCIpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcInJlbW92ZVwiLHtjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpmdW5jdGlvbigpe3RoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzKX19KX0pfShbRWxlbWVudC5wcm90b3R5cGUsQ2hhcmFjdGVyRGF0YS5wcm90b3R5cGUsRG9jdW1lbnRUeXBlLnByb3RvdHlwZV0pfSxmdW5jdGlvbih0LGUsbil7KGZ1bmN0aW9uKGUpeyFmdW5jdGlvbihuKXtmdW5jdGlvbiBvKCl7fWZ1bmN0aW9uIHIodCxlKXtyZXR1cm4gZnVuY3Rpb24oKXt0LmFwcGx5KGUsYXJndW1lbnRzKX19ZnVuY3Rpb24gaSh0KXtpZihcIm9iamVjdFwiIT10eXBlb2YgdGhpcyl0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJvbWlzZXMgbXVzdCBiZSBjb25zdHJ1Y3RlZCB2aWEgbmV3XCIpO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIm5vdCBhIGZ1bmN0aW9uXCIpO3RoaXMuX3N0YXRlPTAsdGhpcy5faGFuZGxlZD0hMSx0aGlzLl92YWx1ZT12b2lkIDAsdGhpcy5fZGVmZXJyZWRzPVtdLGYodCx0aGlzKX1mdW5jdGlvbiBhKHQsZSl7Zm9yKDszPT09dC5fc3RhdGU7KXQ9dC5fdmFsdWU7aWYoMD09PXQuX3N0YXRlKXJldHVybiB2b2lkIHQuX2RlZmVycmVkcy5wdXNoKGUpO3QuX2hhbmRsZWQ9ITAsaS5faW1tZWRpYXRlRm4oZnVuY3Rpb24oKXt2YXIgbj0xPT09dC5fc3RhdGU/ZS5vbkZ1bGZpbGxlZDplLm9uUmVqZWN0ZWQ7aWYobnVsbD09PW4pcmV0dXJuIHZvaWQoMT09PXQuX3N0YXRlP3M6YykoZS5wcm9taXNlLHQuX3ZhbHVlKTt2YXIgbzt0cnl7bz1uKHQuX3ZhbHVlKX1jYXRjaCh0KXtyZXR1cm4gdm9pZCBjKGUucHJvbWlzZSx0KX1zKGUucHJvbWlzZSxvKX0pfWZ1bmN0aW9uIHModCxlKXt0cnl7aWYoZT09PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkEgcHJvbWlzZSBjYW5ub3QgYmUgcmVzb2x2ZWQgd2l0aCBpdHNlbGYuXCIpO2lmKGUmJihcIm9iamVjdFwiPT10eXBlb2YgZXx8XCJmdW5jdGlvblwiPT10eXBlb2YgZSkpe3ZhciBuPWUudGhlbjtpZihlIGluc3RhbmNlb2YgaSlyZXR1cm4gdC5fc3RhdGU9Myx0Ll92YWx1ZT1lLHZvaWQgbCh0KTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBuKXJldHVybiB2b2lkIGYocihuLGUpLHQpfXQuX3N0YXRlPTEsdC5fdmFsdWU9ZSxsKHQpfWNhdGNoKGUpe2ModCxlKX19ZnVuY3Rpb24gYyh0LGUpe3QuX3N0YXRlPTIsdC5fdmFsdWU9ZSxsKHQpfWZ1bmN0aW9uIGwodCl7Mj09PXQuX3N0YXRlJiYwPT09dC5fZGVmZXJyZWRzLmxlbmd0aCYmaS5faW1tZWRpYXRlRm4oZnVuY3Rpb24oKXt0Ll9oYW5kbGVkfHxpLl91bmhhbmRsZWRSZWplY3Rpb25Gbih0Ll92YWx1ZSl9KTtmb3IodmFyIGU9MCxuPXQuX2RlZmVycmVkcy5sZW5ndGg7ZTxuO2UrKylhKHQsdC5fZGVmZXJyZWRzW2VdKTt0Ll9kZWZlcnJlZHM9bnVsbH1mdW5jdGlvbiB1KHQsZSxuKXt0aGlzLm9uRnVsZmlsbGVkPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dDpudWxsLHRoaXMub25SZWplY3RlZD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2U6bnVsbCx0aGlzLnByb21pc2U9bn1mdW5jdGlvbiBmKHQsZSl7dmFyIG49ITE7dHJ5e3QoZnVuY3Rpb24odCl7bnx8KG49ITAscyhlLHQpKX0sZnVuY3Rpb24odCl7bnx8KG49ITAsYyhlLHQpKX0pfWNhdGNoKHQpe2lmKG4pcmV0dXJuO249ITAsYyhlLHQpfX12YXIgZD1zZXRUaW1lb3V0O2kucHJvdG90eXBlLmNhdGNoPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnRoZW4obnVsbCx0KX0saS5wcm90b3R5cGUudGhlbj1mdW5jdGlvbih0LGUpe3ZhciBuPW5ldyB0aGlzLmNvbnN0cnVjdG9yKG8pO3JldHVybiBhKHRoaXMsbmV3IHUodCxlLG4pKSxufSxpLmFsbD1mdW5jdGlvbih0KXt2YXIgZT1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0KTtyZXR1cm4gbmV3IGkoZnVuY3Rpb24odCxuKXtmdW5jdGlvbiBvKGksYSl7dHJ5e2lmKGEmJihcIm9iamVjdFwiPT10eXBlb2YgYXx8XCJmdW5jdGlvblwiPT10eXBlb2YgYSkpe3ZhciBzPWEudGhlbjtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBzKXJldHVybiB2b2lkIHMuY2FsbChhLGZ1bmN0aW9uKHQpe28oaSx0KX0sbil9ZVtpXT1hLDA9PS0tciYmdChlKX1jYXRjaCh0KXtuKHQpfX1pZigwPT09ZS5sZW5ndGgpcmV0dXJuIHQoW10pO2Zvcih2YXIgcj1lLmxlbmd0aCxpPTA7aTxlLmxlbmd0aDtpKyspbyhpLGVbaV0pfSl9LGkucmVzb2x2ZT1mdW5jdGlvbih0KXtyZXR1cm4gdCYmXCJvYmplY3RcIj09dHlwZW9mIHQmJnQuY29uc3RydWN0b3I9PT1pP3Q6bmV3IGkoZnVuY3Rpb24oZSl7ZSh0KX0pfSxpLnJlamVjdD1mdW5jdGlvbih0KXtyZXR1cm4gbmV3IGkoZnVuY3Rpb24oZSxuKXtuKHQpfSl9LGkucmFjZT1mdW5jdGlvbih0KXtyZXR1cm4gbmV3IGkoZnVuY3Rpb24oZSxuKXtmb3IodmFyIG89MCxyPXQubGVuZ3RoO288cjtvKyspdFtvXS50aGVuKGUsbil9KX0saS5faW1tZWRpYXRlRm49XCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZnVuY3Rpb24odCl7ZSh0KX18fGZ1bmN0aW9uKHQpe2QodCwwKX0saS5fdW5oYW5kbGVkUmVqZWN0aW9uRm49ZnVuY3Rpb24odCl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGNvbnNvbGUmJmNvbnNvbGUmJmNvbnNvbGUud2FybihcIlBvc3NpYmxlIFVuaGFuZGxlZCBQcm9taXNlIFJlamVjdGlvbjpcIix0KX0saS5fc2V0SW1tZWRpYXRlRm49ZnVuY3Rpb24odCl7aS5faW1tZWRpYXRlRm49dH0saS5fc2V0VW5oYW5kbGVkUmVqZWN0aW9uRm49ZnVuY3Rpb24odCl7aS5fdW5oYW5kbGVkUmVqZWN0aW9uRm49dH0sdm9pZCAwIT09dCYmdC5leHBvcnRzP3QuZXhwb3J0cz1pOm4uUHJvbWlzZXx8KG4uUHJvbWlzZT1pKX0odGhpcyl9KS5jYWxsKGUsbigxOCkuc2V0SW1tZWRpYXRlKX0sZnVuY3Rpb24odCxlLG4pe2Z1bmN0aW9uIG8odCxlKXt0aGlzLl9pZD10LHRoaXMuX2NsZWFyRm49ZX12YXIgcj1GdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7ZS5zZXRUaW1lb3V0PWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBvKHIuY2FsbChzZXRUaW1lb3V0LHdpbmRvdyxhcmd1bWVudHMpLGNsZWFyVGltZW91dCl9LGUuc2V0SW50ZXJ2YWw9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IG8oci5jYWxsKHNldEludGVydmFsLHdpbmRvdyxhcmd1bWVudHMpLGNsZWFySW50ZXJ2YWwpfSxlLmNsZWFyVGltZW91dD1lLmNsZWFySW50ZXJ2YWw9ZnVuY3Rpb24odCl7dCYmdC5jbG9zZSgpfSxvLnByb3RvdHlwZS51bnJlZj1vLnByb3RvdHlwZS5yZWY9ZnVuY3Rpb24oKXt9LG8ucHJvdG90eXBlLmNsb3NlPWZ1bmN0aW9uKCl7dGhpcy5fY2xlYXJGbi5jYWxsKHdpbmRvdyx0aGlzLl9pZCl9LGUuZW5yb2xsPWZ1bmN0aW9uKHQsZSl7Y2xlYXJUaW1lb3V0KHQuX2lkbGVUaW1lb3V0SWQpLHQuX2lkbGVUaW1lb3V0PWV9LGUudW5lbnJvbGw9ZnVuY3Rpb24odCl7Y2xlYXJUaW1lb3V0KHQuX2lkbGVUaW1lb3V0SWQpLHQuX2lkbGVUaW1lb3V0PS0xfSxlLl91bnJlZkFjdGl2ZT1lLmFjdGl2ZT1mdW5jdGlvbih0KXtjbGVhclRpbWVvdXQodC5faWRsZVRpbWVvdXRJZCk7dmFyIGU9dC5faWRsZVRpbWVvdXQ7ZT49MCYmKHQuX2lkbGVUaW1lb3V0SWQ9c2V0VGltZW91dChmdW5jdGlvbigpe3QuX29uVGltZW91dCYmdC5fb25UaW1lb3V0KCl9LGUpKX0sbigxOSksZS5zZXRJbW1lZGlhdGU9c2V0SW1tZWRpYXRlLGUuY2xlYXJJbW1lZGlhdGU9Y2xlYXJJbW1lZGlhdGV9LGZ1bmN0aW9uKHQsZSxuKXsoZnVuY3Rpb24odCxlKXshZnVuY3Rpb24odCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBvKHQpe1wiZnVuY3Rpb25cIiE9dHlwZW9mIHQmJih0PW5ldyBGdW5jdGlvbihcIlwiK3QpKTtmb3IodmFyIGU9bmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgtMSksbj0wO248ZS5sZW5ndGg7bisrKWVbbl09YXJndW1lbnRzW24rMV07dmFyIG89e2NhbGxiYWNrOnQsYXJnczplfTtyZXR1cm4gbFtjXT1vLHMoYyksYysrfWZ1bmN0aW9uIHIodCl7ZGVsZXRlIGxbdF19ZnVuY3Rpb24gaSh0KXt2YXIgZT10LmNhbGxiYWNrLG89dC5hcmdzO3N3aXRjaChvLmxlbmd0aCl7Y2FzZSAwOmUoKTticmVhaztjYXNlIDE6ZShvWzBdKTticmVhaztjYXNlIDI6ZShvWzBdLG9bMV0pO2JyZWFrO2Nhc2UgMzplKG9bMF0sb1sxXSxvWzJdKTticmVhaztkZWZhdWx0OmUuYXBwbHkobixvKX19ZnVuY3Rpb24gYSh0KXtpZih1KXNldFRpbWVvdXQoYSwwLHQpO2Vsc2V7dmFyIGU9bFt0XTtpZihlKXt1PSEwO3RyeXtpKGUpfWZpbmFsbHl7cih0KSx1PSExfX19fWlmKCF0LnNldEltbWVkaWF0ZSl7dmFyIHMsYz0xLGw9e30sdT0hMSxmPXQuZG9jdW1lbnQsZD1PYmplY3QuZ2V0UHJvdG90eXBlT2YmJk9iamVjdC5nZXRQcm90b3R5cGVPZih0KTtkPWQmJmQuc2V0VGltZW91dD9kOnQsXCJbb2JqZWN0IHByb2Nlc3NdXCI9PT17fS50b1N0cmluZy5jYWxsKHQucHJvY2Vzcyk/ZnVuY3Rpb24oKXtzPWZ1bmN0aW9uKHQpe2UubmV4dFRpY2soZnVuY3Rpb24oKXthKHQpfSl9fSgpOmZ1bmN0aW9uKCl7aWYodC5wb3N0TWVzc2FnZSYmIXQuaW1wb3J0U2NyaXB0cyl7dmFyIGU9ITAsbj10Lm9ubWVzc2FnZTtyZXR1cm4gdC5vbm1lc3NhZ2U9ZnVuY3Rpb24oKXtlPSExfSx0LnBvc3RNZXNzYWdlKFwiXCIsXCIqXCIpLHQub25tZXNzYWdlPW4sZX19KCk/ZnVuY3Rpb24oKXt2YXIgZT1cInNldEltbWVkaWF0ZSRcIitNYXRoLnJhbmRvbSgpK1wiJFwiLG49ZnVuY3Rpb24obil7bi5zb3VyY2U9PT10JiZcInN0cmluZ1wiPT10eXBlb2Ygbi5kYXRhJiYwPT09bi5kYXRhLmluZGV4T2YoZSkmJmEoK24uZGF0YS5zbGljZShlLmxlbmd0aCkpfTt0LmFkZEV2ZW50TGlzdGVuZXI/dC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLG4sITEpOnQuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIixuKSxzPWZ1bmN0aW9uKG4pe3QucG9zdE1lc3NhZ2UoZStuLFwiKlwiKX19KCk6dC5NZXNzYWdlQ2hhbm5lbD9mdW5jdGlvbigpe3ZhciB0PW5ldyBNZXNzYWdlQ2hhbm5lbDt0LnBvcnQxLm9ubWVzc2FnZT1mdW5jdGlvbih0KXthKHQuZGF0YSl9LHM9ZnVuY3Rpb24oZSl7dC5wb3J0Mi5wb3N0TWVzc2FnZShlKX19KCk6ZiYmXCJvbnJlYWR5c3RhdGVjaGFuZ2VcImluIGYuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKT9mdW5jdGlvbigpe3ZhciB0PWYuZG9jdW1lbnRFbGVtZW50O3M9ZnVuY3Rpb24oZSl7dmFyIG49Zi5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO24ub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7YShlKSxuLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLHQucmVtb3ZlQ2hpbGQobiksbj1udWxsfSx0LmFwcGVuZENoaWxkKG4pfX0oKTpmdW5jdGlvbigpe3M9ZnVuY3Rpb24odCl7c2V0VGltZW91dChhLDAsdCl9fSgpLGQuc2V0SW1tZWRpYXRlPW8sZC5jbGVhckltbWVkaWF0ZT1yfX0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHNlbGY/dm9pZCAwPT09dD90aGlzOnQ6c2VsZil9KS5jYWxsKGUsbig3KSxuKDIwKSl9LGZ1bmN0aW9uKHQsZSl7ZnVuY3Rpb24gbigpe3Rocm93IG5ldyBFcnJvcihcInNldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWRcIil9ZnVuY3Rpb24gbygpe3Rocm93IG5ldyBFcnJvcihcImNsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZFwiKX1mdW5jdGlvbiByKHQpe2lmKHU9PT1zZXRUaW1lb3V0KXJldHVybiBzZXRUaW1lb3V0KHQsMCk7aWYoKHU9PT1ufHwhdSkmJnNldFRpbWVvdXQpcmV0dXJuIHU9c2V0VGltZW91dCxzZXRUaW1lb3V0KHQsMCk7dHJ5e3JldHVybiB1KHQsMCl9Y2F0Y2goZSl7dHJ5e3JldHVybiB1LmNhbGwobnVsbCx0LDApfWNhdGNoKGUpe3JldHVybiB1LmNhbGwodGhpcyx0LDApfX19ZnVuY3Rpb24gaSh0KXtpZihmPT09Y2xlYXJUaW1lb3V0KXJldHVybiBjbGVhclRpbWVvdXQodCk7aWYoKGY9PT1vfHwhZikmJmNsZWFyVGltZW91dClyZXR1cm4gZj1jbGVhclRpbWVvdXQsY2xlYXJUaW1lb3V0KHQpO3RyeXtyZXR1cm4gZih0KX1jYXRjaChlKXt0cnl7cmV0dXJuIGYuY2FsbChudWxsLHQpfWNhdGNoKGUpe3JldHVybiBmLmNhbGwodGhpcyx0KX19fWZ1bmN0aW9uIGEoKXtiJiZwJiYoYj0hMSxwLmxlbmd0aD9tPXAuY29uY2F0KG0pOnY9LTEsbS5sZW5ndGgmJnMoKSl9ZnVuY3Rpb24gcygpe2lmKCFiKXt2YXIgdD1yKGEpO2I9ITA7Zm9yKHZhciBlPW0ubGVuZ3RoO2U7KXtmb3IocD1tLG09W107Kyt2PGU7KXAmJnBbdl0ucnVuKCk7dj0tMSxlPW0ubGVuZ3RofXA9bnVsbCxiPSExLGkodCl9fWZ1bmN0aW9uIGModCxlKXt0aGlzLmZ1bj10LHRoaXMuYXJyYXk9ZX1mdW5jdGlvbiBsKCl7fXZhciB1LGYsZD10LmV4cG9ydHM9e307IWZ1bmN0aW9uKCl7dHJ5e3U9XCJmdW5jdGlvblwiPT10eXBlb2Ygc2V0VGltZW91dD9zZXRUaW1lb3V0Om59Y2F0Y2godCl7dT1ufXRyeXtmPVwiZnVuY3Rpb25cIj09dHlwZW9mIGNsZWFyVGltZW91dD9jbGVhclRpbWVvdXQ6b31jYXRjaCh0KXtmPW99fSgpO3ZhciBwLG09W10sYj0hMSx2PS0xO2QubmV4dFRpY2s9ZnVuY3Rpb24odCl7dmFyIGU9bmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgtMSk7aWYoYXJndW1lbnRzLmxlbmd0aD4xKWZvcih2YXIgbj0xO248YXJndW1lbnRzLmxlbmd0aDtuKyspZVtuLTFdPWFyZ3VtZW50c1tuXTttLnB1c2gobmV3IGModCxlKSksMSE9PW0ubGVuZ3RofHxifHxyKHMpfSxjLnByb3RvdHlwZS5ydW49ZnVuY3Rpb24oKXt0aGlzLmZ1bi5hcHBseShudWxsLHRoaXMuYXJyYXkpfSxkLnRpdGxlPVwiYnJvd3NlclwiLGQuYnJvd3Nlcj0hMCxkLmVudj17fSxkLmFyZ3Y9W10sZC52ZXJzaW9uPVwiXCIsZC52ZXJzaW9ucz17fSxkLm9uPWwsZC5hZGRMaXN0ZW5lcj1sLGQub25jZT1sLGQub2ZmPWwsZC5yZW1vdmVMaXN0ZW5lcj1sLGQucmVtb3ZlQWxsTGlzdGVuZXJzPWwsZC5lbWl0PWwsZC5wcmVwZW5kTGlzdGVuZXI9bCxkLnByZXBlbmRPbmNlTGlzdGVuZXI9bCxkLmxpc3RlbmVycz1mdW5jdGlvbih0KXtyZXR1cm5bXX0sZC5iaW5kaW5nPWZ1bmN0aW9uKHQpe3Rocm93IG5ldyBFcnJvcihcInByb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkXCIpfSxkLmN3ZD1mdW5jdGlvbigpe3JldHVyblwiL1wifSxkLmNoZGlyPWZ1bmN0aW9uKHQpe3Rocm93IG5ldyBFcnJvcihcInByb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZFwiKX0sZC51bWFzaz1mdW5jdGlvbigpe3JldHVybiAwfX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO24oMjIpLnBvbHlmaWxsKCl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBvKHQsZSl7aWYodm9pZCAwPT09dHx8bnVsbD09PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjb252ZXJ0IGZpcnN0IGFyZ3VtZW50IHRvIG9iamVjdFwiKTtmb3IodmFyIG49T2JqZWN0KHQpLG89MTtvPGFyZ3VtZW50cy5sZW5ndGg7bysrKXt2YXIgcj1hcmd1bWVudHNbb107aWYodm9pZCAwIT09ciYmbnVsbCE9PXIpZm9yKHZhciBpPU9iamVjdC5rZXlzKE9iamVjdChyKSksYT0wLHM9aS5sZW5ndGg7YTxzO2ErKyl7dmFyIGM9aVthXSxsPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocixjKTt2b2lkIDAhPT1sJiZsLmVudW1lcmFibGUmJihuW2NdPXJbY10pfX1yZXR1cm4gbn1mdW5jdGlvbiByKCl7T2JqZWN0LmFzc2lnbnx8T2JqZWN0LmRlZmluZVByb3BlcnR5KE9iamVjdCxcImFzc2lnblwiLHtlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpvfSl9dC5leHBvcnRzPXthc3NpZ246byxwb2x5ZmlsbDpyfX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMjQpLHI9big2KSxpPW4oNSksYT1uKDM2KSxzPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PVtdLGU9MDtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKXRbZV09YXJndW1lbnRzW2VdO2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cpe3ZhciBuPWEuZ2V0T3B0cy5hcHBseSh2b2lkIDAsdCk7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHQsZSl7aS5kZWZhdWx0LnByb21pc2U9e3Jlc29sdmU6dCxyZWplY3Q6ZX0sby5kZWZhdWx0KG4pLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtyLm9wZW5Nb2RhbCgpfSl9KX19O3MuY2xvc2U9ci5vbkFjdGlvbixzLmdldFN0YXRlPXIuZ2V0U3RhdGUscy5zZXRBY3Rpb25WYWx1ZT1pLnNldEFjdGlvblZhbHVlLHMuc3RvcExvYWRpbmc9ci5zdG9wTG9hZGluZyxzLnNldERlZmF1bHRzPWEuc2V0RGVmYXVsdHMsZS5kZWZhdWx0PXN9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDEpLHI9bigwKSxpPXIuZGVmYXVsdC5NT0RBTCxhPW4oNCkscz1uKDM0KSxjPW4oMzUpLGw9bigxKTtlLmluaXQ9ZnVuY3Rpb24odCl7by5nZXROb2RlKGkpfHwoZG9jdW1lbnQuYm9keXx8bC50aHJvd0VycihcIllvdSBjYW4gb25seSB1c2UgU3dlZXRBbGVydCBBRlRFUiB0aGUgRE9NIGhhcyBsb2FkZWQhXCIpLHMuZGVmYXVsdCgpLGEuZGVmYXVsdCgpKSxhLmluaXRNb2RhbENvbnRlbnQodCksYy5kZWZhdWx0KHQpfSxlLmRlZmF1bHQ9ZS5pbml0fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigwKSxyPW8uZGVmYXVsdC5NT0RBTDtlLm1vZGFsTWFya3VwPSdcXG4gIDxkaXYgY2xhc3M9XCInK3IrJ1wiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLW1vZGFsPVwidHJ1ZVwiPjwvZGl2PicsZS5kZWZhdWx0PWUubW9kYWxNYXJrdXB9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDApLHI9by5kZWZhdWx0Lk9WRVJMQVksaT0nPGRpdiBcXG4gICAgY2xhc3M9XCInK3IrJ1wiXFxuICAgIHRhYkluZGV4PVwiLTFcIj5cXG4gIDwvZGl2Pic7ZS5kZWZhdWx0PWl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDApLHI9by5kZWZhdWx0LklDT047ZS5lcnJvckljb25NYXJrdXA9ZnVuY3Rpb24oKXt2YXIgdD1yK1wiLS1lcnJvclwiLGU9dCtcIl9fbGluZVwiO3JldHVybidcXG4gICAgPGRpdiBjbGFzcz1cIicrdCsnX194LW1hcmtcIj5cXG4gICAgICA8c3BhbiBjbGFzcz1cIicrZStcIiBcIitlKyctLWxlZnRcIj48L3NwYW4+XFxuICAgICAgPHNwYW4gY2xhc3M9XCInK2UrXCIgXCIrZSsnLS1yaWdodFwiPjwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICAnfSxlLndhcm5pbmdJY29uTWFya3VwPWZ1bmN0aW9uKCl7dmFyIHQ9citcIi0td2FybmluZ1wiO3JldHVybidcXG4gICAgPHNwYW4gY2xhc3M9XCInK3QrJ19fYm9keVwiPlxcbiAgICAgIDxzcGFuIGNsYXNzPVwiJyt0KydfX2RvdFwiPjwvc3Bhbj5cXG4gICAgPC9zcGFuPlxcbiAgJ30sZS5zdWNjZXNzSWNvbk1hcmt1cD1mdW5jdGlvbigpe3ZhciB0PXIrXCItLXN1Y2Nlc3NcIjtyZXR1cm4nXFxuICAgIDxzcGFuIGNsYXNzPVwiJyt0K1wiX19saW5lIFwiK3QrJ19fbGluZS0tbG9uZ1wiPjwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XCInK3QrXCJfX2xpbmUgXCIrdCsnX19saW5lLS10aXBcIj48L3NwYW4+XFxuXFxuICAgIDxkaXYgY2xhc3M9XCInK3QrJ19fcmluZ1wiPjwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVwiJyt0KydfX2hpZGUtY29ybmVyc1wiPjwvZGl2PlxcbiAgJ319LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDApLHI9by5kZWZhdWx0LkNPTlRFTlQ7ZS5jb250ZW50TWFya3VwPSdcXG4gIDxkaXYgY2xhc3M9XCInK3IrJ1wiPlxcblxcbiAgPC9kaXY+XFxuJ30sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMCkscj1vLmRlZmF1bHQuQlVUVE9OX0NPTlRBSU5FUixpPW8uZGVmYXVsdC5CVVRUT04sYT1vLmRlZmF1bHQuQlVUVE9OX0xPQURFUjtlLmJ1dHRvbk1hcmt1cD0nXFxuICA8ZGl2IGNsYXNzPVwiJytyKydcIj5cXG5cXG4gICAgPGJ1dHRvblxcbiAgICAgIGNsYXNzPVwiJytpKydcIlxcbiAgICA+PC9idXR0b24+XFxuXFxuICAgIDxkaXYgY2xhc3M9XCInK2ErJ1wiPlxcbiAgICAgIDxkaXY+PC9kaXY+XFxuICAgICAgPGRpdj48L2Rpdj5cXG4gICAgICA8ZGl2PjwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cXG4gIDwvZGl2Plxcbid9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDQpLHI9bigyKSxpPW4oMCksYT1pLmRlZmF1bHQuSUNPTixzPWkuZGVmYXVsdC5JQ09OX0NVU1RPTSxjPVtcImVycm9yXCIsXCJ3YXJuaW5nXCIsXCJzdWNjZXNzXCIsXCJpbmZvXCJdLGw9e2Vycm9yOnIuZXJyb3JJY29uTWFya3VwKCksd2FybmluZzpyLndhcm5pbmdJY29uTWFya3VwKCksc3VjY2VzczpyLnN1Y2Nlc3NJY29uTWFya3VwKCl9LHU9ZnVuY3Rpb24odCxlKXt2YXIgbj1hK1wiLS1cIit0O2UuY2xhc3NMaXN0LmFkZChuKTt2YXIgbz1sW3RdO28mJihlLmlubmVySFRNTD1vKX0sZj1mdW5jdGlvbih0LGUpe2UuY2xhc3NMaXN0LmFkZChzKTt2YXIgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO24uc3JjPXQsZS5hcHBlbmRDaGlsZChuKX0sZD1mdW5jdGlvbih0KXtpZih0KXt2YXIgZT1vLmluamVjdEVsSW50b01vZGFsKHIuaWNvbk1hcmt1cCk7Yy5pbmNsdWRlcyh0KT91KHQsZSk6Zih0LGUpfX07ZS5kZWZhdWx0PWR9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDIpLHI9big0KSxpPWZ1bmN0aW9uKHQpe25hdmlnYXRvci51c2VyQWdlbnQuaW5jbHVkZXMoXCJBcHBsZVdlYktpdFwiKSYmKHQuc3R5bGUuZGlzcGxheT1cIm5vbmVcIix0Lm9mZnNldEhlaWdodCx0LnN0eWxlLmRpc3BsYXk9XCJcIil9O2UuaW5pdFRpdGxlPWZ1bmN0aW9uKHQpe2lmKHQpe3ZhciBlPXIuaW5qZWN0RWxJbnRvTW9kYWwoby50aXRsZU1hcmt1cCk7ZS50ZXh0Q29udGVudD10LGkoZSl9fSxlLmluaXRUZXh0PWZ1bmN0aW9uKHQpe2lmKHQpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTt0LnNwbGl0KFwiXFxuXCIpLmZvckVhY2goZnVuY3Rpb24odCxuLG8pe2UuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodCkpLG48by5sZW5ndGgtMSYmZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpfSk7dmFyIG49ci5pbmplY3RFbEludG9Nb2RhbChvLnRleHRNYXJrdXApO24uYXBwZW5kQ2hpbGQoZSksaShuKX19fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigxKSxyPW4oNCksaT1uKDApLGE9aS5kZWZhdWx0LkJVVFRPTixzPWkuZGVmYXVsdC5EQU5HRVJfQlVUVE9OLGM9bigzKSxsPW4oMiksdT1uKDYpLGY9big1KSxkPWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1lLnRleHQsaT1lLnZhbHVlLGQ9ZS5jbGFzc05hbWUscD1lLmNsb3NlTW9kYWwsbT1vLnN0cmluZ1RvTm9kZShsLmJ1dHRvbk1hcmt1cCksYj1tLnF1ZXJ5U2VsZWN0b3IoXCIuXCIrYSksdj1hK1wiLS1cIit0O2lmKGIuY2xhc3NMaXN0LmFkZCh2KSxkKXsoQXJyYXkuaXNBcnJheShkKT9kOmQuc3BsaXQoXCIgXCIpKS5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIHQubGVuZ3RoPjB9KS5mb3JFYWNoKGZ1bmN0aW9uKHQpe2IuY2xhc3NMaXN0LmFkZCh0KX0pfW4mJnQ9PT1jLkNPTkZJUk1fS0VZJiZiLmNsYXNzTGlzdC5hZGQocyksYi50ZXh0Q29udGVudD1yO3ZhciBnPXt9O3JldHVybiBnW3RdPWksZi5zZXRBY3Rpb25WYWx1ZShnKSxmLnNldEFjdGlvbk9wdGlvbnNGb3IodCx7Y2xvc2VNb2RhbDpwfSksYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe3JldHVybiB1Lm9uQWN0aW9uKHQpfSksbX0scD1mdW5jdGlvbih0LGUpe3ZhciBuPXIuaW5qZWN0RWxJbnRvTW9kYWwobC5mb290ZXJNYXJrdXApO2Zvcih2YXIgbyBpbiB0KXt2YXIgaT10W29dLGE9ZChvLGksZSk7aS52aXNpYmxlJiZuLmFwcGVuZENoaWxkKGEpfTA9PT1uLmNoaWxkcmVuLmxlbmd0aCYmbi5yZW1vdmUoKX07ZS5kZWZhdWx0PXB9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDMpLHI9big0KSxpPW4oMiksYT1uKDUpLHM9big2KSxjPW4oMCksbD1jLmRlZmF1bHQuQ09OVEVOVCx1PWZ1bmN0aW9uKHQpe3QuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsZnVuY3Rpb24odCl7dmFyIGU9dC50YXJnZXQsbj1lLnZhbHVlO2Euc2V0QWN0aW9uVmFsdWUobil9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLGZ1bmN0aW9uKHQpe2lmKFwiRW50ZXJcIj09PXQua2V5KXJldHVybiBzLm9uQWN0aW9uKG8uQ09ORklSTV9LRVkpfSksc2V0VGltZW91dChmdW5jdGlvbigpe3QuZm9jdXMoKSxhLnNldEFjdGlvblZhbHVlKFwiXCIpfSwwKX0sZj1mdW5jdGlvbih0LGUsbil7dmFyIG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlKSxyPWwrXCJfX1wiK2U7by5jbGFzc0xpc3QuYWRkKHIpO2Zvcih2YXIgaSBpbiBuKXt2YXIgYT1uW2ldO29baV09YX1cImlucHV0XCI9PT1lJiZ1KG8pLHQuYXBwZW5kQ2hpbGQobyl9LGQ9ZnVuY3Rpb24odCl7aWYodCl7dmFyIGU9ci5pbmplY3RFbEludG9Nb2RhbChpLmNvbnRlbnRNYXJrdXApLG49dC5lbGVtZW50LG89dC5hdHRyaWJ1dGVzO1wic3RyaW5nXCI9PXR5cGVvZiBuP2YoZSxuLG8pOmUuYXBwZW5kQ2hpbGQobil9fTtlLmRlZmF1bHQ9ZH0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMSkscj1uKDIpLGk9ZnVuY3Rpb24oKXt2YXIgdD1vLnN0cmluZ1RvTm9kZShyLm92ZXJsYXlNYXJrdXApO2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodCl9O2UuZGVmYXVsdD1pfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89big1KSxyPW4oNiksaT1uKDEpLGE9bigzKSxzPW4oMCksYz1zLmRlZmF1bHQuTU9EQUwsbD1zLmRlZmF1bHQuQlVUVE9OLHU9cy5kZWZhdWx0Lk9WRVJMQVksZj1mdW5jdGlvbih0KXt0LnByZXZlbnREZWZhdWx0KCksdigpfSxkPWZ1bmN0aW9uKHQpe3QucHJldmVudERlZmF1bHQoKSxnKCl9LHA9ZnVuY3Rpb24odCl7aWYoby5kZWZhdWx0LmlzT3Blbilzd2l0Y2godC5rZXkpe2Nhc2VcIkVzY2FwZVwiOnJldHVybiByLm9uQWN0aW9uKGEuQ0FOQ0VMX0tFWSl9fSxtPWZ1bmN0aW9uKHQpe2lmKG8uZGVmYXVsdC5pc09wZW4pc3dpdGNoKHQua2V5KXtjYXNlXCJUYWJcIjpyZXR1cm4gZih0KX19LGI9ZnVuY3Rpb24odCl7aWYoby5kZWZhdWx0LmlzT3BlbilyZXR1cm5cIlRhYlwiPT09dC5rZXkmJnQuc2hpZnRLZXk/ZCh0KTp2b2lkIDB9LHY9ZnVuY3Rpb24oKXt2YXIgdD1pLmdldE5vZGUobCk7dCYmKHQudGFiSW5kZXg9MCx0LmZvY3VzKCkpfSxnPWZ1bmN0aW9uKCl7dmFyIHQ9aS5nZXROb2RlKGMpLGU9dC5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK2wpLG49ZS5sZW5ndGgtMSxvPWVbbl07byYmby5mb2N1cygpfSxoPWZ1bmN0aW9uKHQpe3RbdC5sZW5ndGgtMV0uYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIixtKX0sdz1mdW5jdGlvbih0KXt0WzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsYil9LHk9ZnVuY3Rpb24oKXt2YXIgdD1pLmdldE5vZGUoYyksZT10LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrbCk7ZS5sZW5ndGgmJihoKGUpLHcoZSkpfSx4PWZ1bmN0aW9uKHQpe2lmKGkuZ2V0Tm9kZSh1KT09PXQudGFyZ2V0KXJldHVybiByLm9uQWN0aW9uKGEuQ0FOQ0VMX0tFWSl9LF89ZnVuY3Rpb24odCl7dmFyIGU9aS5nZXROb2RlKHUpO2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIseCksdCYmZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIix4KX0saz1mdW5jdGlvbih0KXtvLmRlZmF1bHQudGltZXImJmNsZWFyVGltZW91dChvLmRlZmF1bHQudGltZXIpLHQmJihvLmRlZmF1bHQudGltZXI9d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gci5vbkFjdGlvbihhLkNBTkNFTF9LRVkpfSx0KSl9LE89ZnVuY3Rpb24odCl7dC5jbG9zZU9uRXNjP2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLHApOmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLHApLHQuZGFuZ2VyTW9kZT92KCk6ZygpLHkoKSxfKHQuY2xvc2VPbkNsaWNrT3V0c2lkZSksayh0LnRpbWVyKX07ZS5kZWZhdWx0PU99LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDEpLHI9bigzKSxpPW4oMzcpLGE9bigzOCkscz17dGl0bGU6bnVsbCx0ZXh0Om51bGwsaWNvbjpudWxsLGJ1dHRvbnM6ci5kZWZhdWx0QnV0dG9uTGlzdCxjb250ZW50Om51bGwsY2xhc3NOYW1lOm51bGwsY2xvc2VPbkNsaWNrT3V0c2lkZTohMCxjbG9zZU9uRXNjOiEwLGRhbmdlck1vZGU6ITEsdGltZXI6bnVsbH0sYz1PYmplY3QuYXNzaWduKHt9LHMpO2Uuc2V0RGVmYXVsdHM9ZnVuY3Rpb24odCl7Yz1PYmplY3QuYXNzaWduKHt9LHMsdCl9O3ZhciBsPWZ1bmN0aW9uKHQpe3ZhciBlPXQmJnQuYnV0dG9uLG49dCYmdC5idXR0b25zO3JldHVybiB2b2lkIDAhPT1lJiZ2b2lkIDAhPT1uJiZvLnRocm93RXJyKFwiQ2Fubm90IHNldCBib3RoICdidXR0b24nIGFuZCAnYnV0dG9ucycgb3B0aW9ucyFcIiksdm9pZCAwIT09ZT97Y29uZmlybTplfTpufSx1PWZ1bmN0aW9uKHQpe3JldHVybiBvLm9yZGluYWxTdWZmaXhPZih0KzEpfSxmPWZ1bmN0aW9uKHQsZSl7by50aHJvd0Vycih1KGUpK1wiIGFyZ3VtZW50ICgnXCIrdCtcIicpIGlzIGludmFsaWRcIil9LGQ9ZnVuY3Rpb24odCxlKXt2YXIgbj10KzEscj1lW25dO28uaXNQbGFpbk9iamVjdChyKXx8dm9pZCAwPT09cnx8by50aHJvd0VycihcIkV4cGVjdGVkIFwiK3UobikrXCIgYXJndW1lbnQgKCdcIityK1wiJykgdG8gYmUgYSBwbGFpbiBvYmplY3RcIil9LHA9ZnVuY3Rpb24odCxlKXt2YXIgbj10KzEscj1lW25dO3ZvaWQgMCE9PXImJm8udGhyb3dFcnIoXCJVbmV4cGVjdGVkIFwiK3UobikrXCIgYXJndW1lbnQgKFwiK3IrXCIpXCIpfSxtPWZ1bmN0aW9uKHQsZSxuLHIpe3ZhciBpPXR5cGVvZiBlLGE9XCJzdHJpbmdcIj09PWkscz1lIGluc3RhbmNlb2YgRWxlbWVudDtpZihhKXtpZigwPT09bilyZXR1cm57dGV4dDplfTtpZigxPT09bilyZXR1cm57dGV4dDplLHRpdGxlOnJbMF19O2lmKDI9PT1uKXJldHVybiBkKG4scikse2ljb246ZX07ZihlLG4pfWVsc2V7aWYocyYmMD09PW4pcmV0dXJuIGQobixyKSx7Y29udGVudDplfTtpZihvLmlzUGxhaW5PYmplY3QoZSkpcmV0dXJuIHAobixyKSxlO2YoZSxuKX19O2UuZ2V0T3B0cz1mdW5jdGlvbigpe2Zvcih2YXIgdD1bXSxlPTA7ZTxhcmd1bWVudHMubGVuZ3RoO2UrKyl0W2VdPWFyZ3VtZW50c1tlXTt2YXIgbj17fTt0LmZvckVhY2goZnVuY3Rpb24oZSxvKXt2YXIgcj1tKDAsZSxvLHQpO09iamVjdC5hc3NpZ24obixyKX0pO3ZhciBvPWwobik7bi5idXR0b25zPXIuZ2V0QnV0dG9uTGlzdE9wdHMobyksZGVsZXRlIG4uYnV0dG9uLG4uY29udGVudD1pLmdldENvbnRlbnRPcHRzKG4uY29udGVudCk7dmFyIHU9T2JqZWN0LmFzc2lnbih7fSxzLGMsbik7cmV0dXJuIE9iamVjdC5rZXlzKHUpLmZvckVhY2goZnVuY3Rpb24odCl7YS5ERVBSRUNBVEVEX09QVFNbdF0mJmEubG9nRGVwcmVjYXRpb24odCl9KSx1fX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMSkscj17ZWxlbWVudDpcImlucHV0XCIsYXR0cmlidXRlczp7cGxhY2Vob2xkZXI6XCJcIn19O2UuZ2V0Q29udGVudE9wdHM9ZnVuY3Rpb24odCl7dmFyIGU9e307cmV0dXJuIG8uaXNQbGFpbk9iamVjdCh0KT9PYmplY3QuYXNzaWduKGUsdCk6dCBpbnN0YW5jZW9mIEVsZW1lbnQ/e2VsZW1lbnQ6dH06XCJpbnB1dFwiPT09dD9yOm51bGx9fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZS5sb2dEZXByZWNhdGlvbj1mdW5jdGlvbih0KXt2YXIgbj1lLkRFUFJFQ0FURURfT1BUU1t0XSxvPW4ub25seVJlbmFtZSxyPW4ucmVwbGFjZW1lbnQsaT1uLnN1Yk9wdGlvbixhPW4ubGluayxzPW8/XCJyZW5hbWVkXCI6XCJkZXByZWNhdGVkXCIsYz0nU3dlZXRBbGVydCB3YXJuaW5nOiBcIicrdCsnXCIgb3B0aW9uIGhhcyBiZWVuICcrcytcIi5cIjtpZihyKXtjKz1cIiBQbGVhc2UgdXNlXCIrKGk/JyBcIicraSsnXCIgaW4gJzpcIiBcIikrJ1wiJytyKydcIiBpbnN0ZWFkLid9dmFyIGw9XCJodHRwczovL3N3ZWV0YWxlcnQuanMub3JnXCI7Yys9YT9cIiBNb3JlIGRldGFpbHM6IFwiK2wrYTpcIiBNb3JlIGRldGFpbHM6IFwiK2wrXCIvZ3VpZGVzLyN1cGdyYWRpbmctZnJvbS0xeFwiLGNvbnNvbGUud2FybihjKX0sZS5ERVBSRUNBVEVEX09QVFM9e3R5cGU6e3JlcGxhY2VtZW50OlwiaWNvblwiLGxpbms6XCIvZG9jcy8jaWNvblwifSxpbWFnZVVybDp7cmVwbGFjZW1lbnQ6XCJpY29uXCIsbGluazpcIi9kb2NzLyNpY29uXCJ9LGN1c3RvbUNsYXNzOntyZXBsYWNlbWVudDpcImNsYXNzTmFtZVwiLG9ubHlSZW5hbWU6ITAsbGluazpcIi9kb2NzLyNjbGFzc25hbWVcIn0saW1hZ2VTaXplOnt9LHNob3dDYW5jZWxCdXR0b246e3JlcGxhY2VtZW50OlwiYnV0dG9uc1wiLGxpbms6XCIvZG9jcy8jYnV0dG9uc1wifSxzaG93Q29uZmlybUJ1dHRvbjp7cmVwbGFjZW1lbnQ6XCJidXR0b25cIixsaW5rOlwiL2RvY3MvI2J1dHRvblwifSxjb25maXJtQnV0dG9uVGV4dDp7cmVwbGFjZW1lbnQ6XCJidXR0b25cIixsaW5rOlwiL2RvY3MvI2J1dHRvblwifSxjb25maXJtQnV0dG9uQ29sb3I6e30sY2FuY2VsQnV0dG9uVGV4dDp7cmVwbGFjZW1lbnQ6XCJidXR0b25zXCIsbGluazpcIi9kb2NzLyNidXR0b25zXCJ9LGNsb3NlT25Db25maXJtOntyZXBsYWNlbWVudDpcImJ1dHRvblwiLHN1Yk9wdGlvbjpcImNsb3NlTW9kYWxcIixsaW5rOlwiL2RvY3MvI2J1dHRvblwifSxjbG9zZU9uQ2FuY2VsOntyZXBsYWNlbWVudDpcImJ1dHRvbnNcIixzdWJPcHRpb246XCJjbG9zZU1vZGFsXCIsbGluazpcIi9kb2NzLyNidXR0b25zXCJ9LHNob3dMb2FkZXJPbkNvbmZpcm06e3JlcGxhY2VtZW50OlwiYnV0dG9uc1wifSxhbmltYXRpb246e30saW5wdXRUeXBlOntyZXBsYWNlbWVudDpcImNvbnRlbnRcIixsaW5rOlwiL2RvY3MvI2NvbnRlbnRcIn0saW5wdXRWYWx1ZTp7cmVwbGFjZW1lbnQ6XCJjb250ZW50XCIsbGluazpcIi9kb2NzLyNjb250ZW50XCJ9LGlucHV0UGxhY2Vob2xkZXI6e3JlcGxhY2VtZW50OlwiY29udGVudFwiLGxpbms6XCIvZG9jcy8jY29udGVudFwifSxodG1sOntyZXBsYWNlbWVudDpcImNvbnRlbnRcIixsaW5rOlwiL2RvY3MvI2NvbnRlbnRcIn0sYWxsb3dFc2NhcGVLZXk6e3JlcGxhY2VtZW50OlwiY2xvc2VPbkVzY1wiLG9ubHlSZW5hbWU6ITAsbGluazpcIi9kb2NzLyNjbG9zZW9uZXNjXCJ9LGFsbG93Q2xpY2tPdXRzaWRlOntyZXBsYWNlbWVudDpcImNsb3NlT25DbGlja091dHNpZGVcIixvbmx5UmVuYW1lOiEwLGxpbms6XCIvZG9jcy8jY2xvc2VvbmNsaWNrb3V0c2lkZVwifX19XSl9KTsiLCJpbXBvcnQgZG9tQ29udHJvbGxlciBmcm9tICcuL2RvbUNvbnRyb2xsZXIuanMnO1xuaW1wb3J0IGV2ZW50c0hhbmRsZXIgZnJvbSAnLi9ldmVudHNIYW5kbGVyLmpzJztcbmltcG9ydCBkYXRhQ29udHJvbGxlciBmcm9tICcuL2RhdGFDb250cm9sbGVyLmpzJztcbmltcG9ydCBpdGVtRmFjdG9yeSBmcm9tICcuL2l0ZW0uanMnO1xuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydCc7XG5cbmNvbnN0IGNvb3JkaW5hdG9yID0gKCgpID0+IHtcbiAgY29uc3QgbG9hZEhvbWVQYWdlID0gKCkgPT4ge1xuICAgIC8vIGlmIHRoZXJlIGlzIGxvY2FsU3RvcmFnZSB0aGVuIGxvYWQgY29udGVudERpdiBBbGwgaXRlbXMgaW5uZXJIVE1MXG4gICAgY3JlYXRlRXhhbXBsZUl0ZW1zKCk7XG4gICAgY29uc3QgYWxsSXRlbXMgPSBkYXRhQ29udHJvbGxlci5nZXRJdGVtc0Zyb21UYWIoJ0FsbCBpdGVtcycpO1xuICAgIGRvbUNvbnRyb2xsZXIucmVuZGVyRXhhbXBsZUl0ZW1zKGFsbEl0ZW1zKTtcbiAgICBldmVudHNIYW5kbGVyLmFkZExpc3RlbmVyc0luSG9tZVBhZ2UoKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVFeGFtcGxlSXRlbXMgPSAoKSA9PiB7XG4gICAgY29uc3QgbXlJdGVtID0gaXRlbUZhY3RvcnkoXG4gICAgICAnTGVhcm4gU2hvcnRjdXRzJyxcbiAgICAgICdKYW1lcyB3ZWJzaXRlJyxcbiAgICAgICcwMS8wNi8yMDIxJyxcbiAgICAgICdDb2RpbmcnLFxuICAgICAgJyEhJ1xuICAgICk7XG4gICAgY29uc3QgbXlJdGVtMiA9IGl0ZW1GYWN0b3J5KFxuICAgICAgJ1N0dWR5IFJlYWN0JyxcbiAgICAgICdEbyBUT1AgcHJvamVjdHMnLFxuICAgICAgJzA3LzA2LzIwMjEnLFxuICAgICAgJ0NvZGluZycsXG4gICAgICAnISEhJ1xuICAgICk7XG4gICAgY29uc3QgbXlJdGVtMyA9IGl0ZW1GYWN0b3J5KFxuICAgICAgJ0RvIGludGVydmlldyBxdWVzdGlvbnMnLFxuICAgICAgJ0xlZXRjb2RlJyxcbiAgICAgICcxMC8wNi8yMDIxJyxcbiAgICAgICdDb2RpbmcnLFxuICAgICAgJyEnXG4gICAgKTtcbiAgICBjb25zdCBteUl0ZW00ID0gaXRlbUZhY3RvcnkoXG4gICAgICAnRG8gZ3JvY2VyaWVzIHNob3BwaW5nJyxcbiAgICAgICdhdCBXb29saWVzJyxcbiAgICAgICcwMi8wNi8yMDIxJyxcbiAgICAgICdMaWZlJyxcbiAgICAgICchJ1xuICAgICk7XG5cbiAgICBkYXRhQ29udHJvbGxlci5hZGRUb0FsbEl0ZW1zKG15SXRlbSk7XG4gICAgZGF0YUNvbnRyb2xsZXIuYWRkVG9BbGxJdGVtcyhteUl0ZW0yKTtcbiAgICBkYXRhQ29udHJvbGxlci5hZGRUb0FsbEl0ZW1zKG15SXRlbTMpO1xuICAgIGRhdGFDb250cm9sbGVyLmFkZFRvQWxsSXRlbXMobXlJdGVtNCk7XG4gIH07XG5cbiAgY29uc3QgcHJvbXB0TmV3UHJvamVjdCA9IChlKSA9PiB7XG4gICAgc3dhbCgnUGxlYXNlIGVudGVyIHlvdXIgbmV3IHByb2plY3QgbmFtZTonLCB7XG4gICAgICBjb250ZW50OiAnaW5wdXQnLFxuICAgIH0pLnRoZW4oKHZhbHVlKSA9PiB7XG4gICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUudHJpbSgpID09PSAnJykgcmV0dXJuO1xuICAgICAgZG9tQ29udHJvbGxlci5yZW5kZXJOZXdQcm9qZWN0KHZhbHVlKTtcbiAgICAgIGNvbnN0IG5ld1RhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlLW5hdicpLmxhc3RDaGlsZDtcbiAgICAgIGV2ZW50c0hhbmRsZXIuYWRkTGlzdGVuZXJUYWIobmV3VGFiKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBwcm9tcHREZWxldGVQcm9qZWN0ID0gKGUpID0+IHtcbiAgICBjb25zdCB0YWJEaXYgPSBnZXRUYWJEaXZGcm9tRXZlbnQoZSk7XG4gIH07XG5cbiAgY29uc3QgcHJvbXB0TmV3SXRlbSA9ICgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW0tYmFubmVyLS1lZGl0aW5nJykpIHtcbiAgICAgIGRvbUNvbnRyb2xsZXIucmVtaW5kTmV3SXRlbVByb21wdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkb21Db250cm9sbGVyLnJlbmRlck5ld0l0ZW1Qcm9tcHQoKTtcbiAgICBldmVudHNIYW5kbGVyLmFkZExpc3RlbmVyc05ld0l0ZW1Qcm9tcHQoKTtcbiAgfTtcblxuICBjb25zdCBzaG93SGlkZUl0ZW1JbmZvID0gKGUpID0+IHtcbiAgICBjb25zdCBpdGVtRGl2ID0gZ2V0SXRlbURpdkZyb21FdmVudChlKTtcbiAgICBkb21Db250cm9sbGVyLnNob3dIaWRlSXRlbUluZm8oaXRlbURpdik7XG4gICAgZXZlbnRzSGFuZGxlci5hZGRMaXN0ZW5lcnNJdGVtSW5mbyhpdGVtRGl2KTtcbiAgfTtcblxuICBjb25zdCBkaXNjYXJkTmV3SXRlbVByb21wdCA9IChlKSA9PiB7XG4gICAgY29uc3QgaXRlbURpdiA9IGdldEl0ZW1EaXZGcm9tRXZlbnQoZSk7XG4gICAgZG9tQ29udHJvbGxlci5yZW1vdmVJdGVtRGl2KGl0ZW1EaXYpO1xuICB9O1xuXG4gIGNvbnN0IHNhdmVOZXdJdGVtID0gKGUpID0+IHtcbiAgICBjb25zdCBpdGVtRGl2ID0gZ2V0SXRlbURpdkZyb21FdmVudChlKTtcbiAgICBjb25zdCBpdGVtID0gZGF0YUNvbnRyb2xsZXIuZ2V0SXRlbUZyb21JbnB1dChpdGVtRGl2KTtcbiAgICBpZiAoIWlzSXRlbVZhbGlkKGl0ZW0pKSByZXR1cm47XG4gICAgZGF0YUNvbnRyb2xsZXIuYWRkVG9BbGxJdGVtcyhpdGVtKTtcbiAgICBkb21Db250cm9sbGVyLnJlbW92ZUl0ZW1EaXYoaXRlbURpdik7XG4gICAgZG9tQ29udHJvbGxlci5yZW5kZXJOZXdJdGVtKGl0ZW0pO1xuICAgIGNvbnN0IG5ld0l0ZW1EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbScpO1xuICAgIGV2ZW50c0hhbmRsZXIuYWRkTGlzdGVuZXJzU2hvd0hpZGVJdGVtSW5mbyhuZXdJdGVtRGl2KTtcbiAgICAvLyBldmVudHNIYW5kbGVyIGFkZCBsaXN0ZW5lciBjb21wbGV0aW9uIHRvb1xuICAgIC8vIGxvY2FsU3RvcmFnZUNvbnRyb2xsZXIgdXBkYXRlXG4gIH07XG5cbiAgY29uc3QgaXNJdGVtVmFsaWQgPSAoaXRlbSkgPT4ge1xuICAgIHJldHVybiBpdGVtID8gdHJ1ZSA6IChkb21Db250cm9sbGVyLnJlbWluZE5ld0l0ZW1JbnB1dCgpLCBmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgZWRpdEl0ZW0gPSAoZSkgPT4ge1xuICAgIGNvbnN0IGl0ZW1EaXYgPSBnZXRJdGVtRGl2RnJvbUV2ZW50KGUpO1xuICAgIGNvbnN0IGl0ZW0gPSBkYXRhQ29udHJvbGxlci5nZXRJdGVtRnJvbURpdihpdGVtRGl2KTtcbiAgICBkb21Db250cm9sbGVyLnJlbmRlckl0ZW1FZGl0TW9kZShpdGVtRGl2LCBpdGVtKTtcbiAgICBldmVudHNIYW5kbGVyLmFkZExpc3RlbmVyc0l0ZW1FZGl0KGl0ZW1EaXYpO1xuICB9O1xuXG4gIGNvbnN0IGRpc2NhcmRJdGVtRWRpdCA9IChlKSA9PiB7XG4gICAgY29uc3QgaXRlbURpdiA9IGdldEl0ZW1EaXZGcm9tRXZlbnQoZSk7XG4gICAgZG9tQ29udHJvbGxlci5kaXNjYXJkSXRlbUVkaXRNb2RlKGl0ZW1EaXYpO1xuICB9O1xuXG4gIGNvbnN0IHNhdmVFZGl0ZWRJdGVtID0gKGUpID0+IHtcbiAgICBjb25zdCBpdGVtRGl2ID0gZ2V0SXRlbURpdkZyb21FdmVudChlKTtcbiAgICBjb25zdCB1cGRhdGVkSXRlbSA9IGRhdGFDb250cm9sbGVyLnVwZGF0ZUFuZEdldEl0ZW1Gcm9tRGl2KGl0ZW1EaXYpO1xuICAgIGlmICghdXBkYXRlZEl0ZW0pIGRvbUNvbnRyb2xsZXIucmVtaW5kTmV3SXRlbUlucHV0KCk7XG4gICAgZG9tQ29udHJvbGxlci51cGRhdGVJdGVtRnJvbURpdihpdGVtRGl2LCB1cGRhdGVkSXRlbSk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlSXRlbSA9IChlKSA9PiB7XG4gICAgY29uc3QgaXRlbURpdiA9IGdldEl0ZW1EaXZGcm9tRXZlbnQoZSk7XG4gICAgZGF0YUNvbnRyb2xsZXIuZGVsZXRlSXRlbShpdGVtRGl2KTtcbiAgICBkb21Db250cm9sbGVyLnJlbW92ZUl0ZW1EaXYoaXRlbURpdik7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlSXRlbUNvbXBsZXRpb24gPSAoZSkgPT4ge1xuICAgIGNvbnN0IGl0ZW1EaXYgPSBnZXRJdGVtRGl2RnJvbUV2ZW50KGUpO1xuICAgIGRhdGFDb250cm9sbGVyLnRvZ2dsZUl0ZW1Db21wbGV0aW9uKGl0ZW1EaXYpO1xuICAgIGRvbUNvbnRyb2xsZXIudG9nZ2xlSXRlbUNvbXBsZXRpb24oaXRlbURpdik7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyVGFiID0gKGUpID0+IHtcbiAgICBjb25zdCB0YWJOYW1lID0gZS50YXJnZXQuaW5uZXJIVE1MO1xuICAgIGNvbnN0IHRhYkVsZW1lbnQgPSBlLnBhdGhbMF07XG4gICAgZG9tQ29udHJvbGxlci5zaG93VGFiQ29udGVudCh0YWJOYW1lLCB0YWJFbGVtZW50KTtcbiAgfTtcblxuICAvKiBwcml2YXRlIGZ1bmN0aW9ucyAqL1xuXG4gIGNvbnN0IGdldEl0ZW1EaXZGcm9tRXZlbnQgPSAoZSkgPT4ge1xuICAgIHJldHVybiBlLnBhdGguZmluZCgoZWxlbWVudCkgPT4gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2l0ZW0nKSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VGFiRGl2RnJvbUV2ZW50ID0gKGUpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYi1wYW5lbCcpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZGVsZXRlSXRlbSxcbiAgICBkaXNjYXJkSXRlbUVkaXQsXG4gICAgZGlzY2FyZE5ld0l0ZW1Qcm9tcHQsXG4gICAgZWRpdEl0ZW0sXG4gICAgbG9hZEhvbWVQYWdlLFxuICAgIHByb21wdERlbGV0ZVByb2plY3QsXG4gICAgcHJvbXB0TmV3SXRlbSxcbiAgICBwcm9tcHROZXdQcm9qZWN0LFxuICAgIHJlbmRlclRhYixcbiAgICBzYXZlRWRpdGVkSXRlbSxcbiAgICBzYXZlTmV3SXRlbSxcbiAgICBzaG93SGlkZUl0ZW1JbmZvLFxuICAgIHRvZ2dsZUl0ZW1Db21wbGV0aW9uLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgY29vcmRpbmF0b3I7XG4iLCJpbXBvcnQgaXRlbUZhY3RvcnkgZnJvbSAnLi9pdGVtLmpzJztcblxuY29uc3QgZGF0YUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICBjb25zdCBhbGxJdGVtcyA9IFtdO1xuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xuXG4gIGNvbnN0IGdldEl0ZW1zRnJvbVRhYiA9ICh0YWJOYW1lKSA9PiB7XG4gICAgaWYgKHRhYk5hbWUgPT09ICdBbGwgaXRlbXMnKSByZXR1cm4gYWxsSXRlbXM7XG4gICAgcmV0dXJuIGFsbEl0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0ucHJvamVjdCA9PT0gdGFiTmFtZSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0SXRlbUZyb21JbnB1dCA9IChpdGVtRGl2KSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IGl0ZW1EaXYucXVlcnlTZWxlY3RvcignLml0ZW0tbmFtZS0tZWRpdGluZycpLnZhbHVlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBpdGVtRGl2LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLWR1ZS1kYXRlLS1lZGl0aW5nJykudmFsdWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBpdGVtRGl2LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLWRlc2NyaXB0aW9uLS1lZGl0aW5nJylcbiAgICAgIC52YWx1ZTtcbiAgICBjb25zdCBwcm9qZWN0ID0gaXRlbURpdi5xdWVyeVNlbGVjdG9yKCcuaXRlbS1wcm9qZWN0LS1lZGl0aW5nJykudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBpdGVtRGl2LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9cHJpb3JpdHldOmNoZWNrZWQnKVxuICAgICAgLnZhbHVlO1xuXG4gICAgaWYgKG5hbWUudHJpbSgpID09PSAnJyB8fCBkdWVEYXRlID09PSAnJykgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgIGNvbnN0IGZvcm1hdHRlZER1ZURhdGUgPSBnZXRGb3JtYXR0ZWREYXRlKGR1ZURhdGUpO1xuICAgIHJldHVybiBpdGVtRmFjdG9yeShuYW1lLCBkZXNjcmlwdGlvbiwgZm9ybWF0dGVkRHVlRGF0ZSwgcHJvamVjdCwgcHJpb3JpdHkpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUFuZEdldEl0ZW1Gcm9tRGl2ID0gKGl0ZW1EaXYpID0+IHtcbiAgICBjb25zdCBpdGVtID0gZ2V0SXRlbUZyb21EaXYoaXRlbURpdik7XG4gICAgY29uc3QgaXRlbUluZGV4ID0gYWxsSXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgICBjb25zdCB1cGRhdGVkSXRlbSA9IGdldEl0ZW1Gcm9tSW5wdXQoaXRlbURpdik7XG4gICAgaWYgKCF1cGRhdGVkSXRlbSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBhbGxJdGVtc1tpdGVtSW5kZXhdID0gdXBkYXRlZEl0ZW07XG4gICAgcmV0dXJuIHVwZGF0ZWRJdGVtO1xuICB9O1xuXG4gIGNvbnN0IGdldEZvcm1hdHRlZERhdGUgPSAoZHVlRGF0ZSkgPT4ge1xuICAgIGNvbnN0IGFyciA9IGR1ZURhdGUuc3BsaXQoJy0nKTtcbiAgICBhcnIucmV2ZXJzZSgpO1xuICAgIGNvbnN0IG5ld0RhdGUgPSBhcnIuam9pbignLycpO1xuICAgIHJldHVybiBuZXdEYXRlO1xuICB9O1xuXG4gIGNvbnN0IGFkZFRvQWxsSXRlbXMgPSAoaXRlbSkgPT4ge1xuICAgIGFsbEl0ZW1zLnB1c2goaXRlbSk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlSXRlbSA9IChpdGVtRGl2KSA9PiB7XG4gICAgY29uc3QgaXRlbUluZGV4ID0gYWxsSXRlbXMuaW5kZXhPZihnZXRJdGVtRnJvbURpdihpdGVtRGl2KSk7XG4gICAgYWxsSXRlbXMuc3BsaWNlKGl0ZW1JbmRleCwgMSk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlSXRlbUNvbXBsZXRpb24gPSAoaXRlbURpdikgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSBnZXRJdGVtRnJvbURpdihpdGVtRGl2KTtcbiAgICBpdGVtLmlzRG9uZSA9PT0gZmFsc2UgPyBpdGVtLmlzRG9uZSA9IHRydWUgOiBpdGVtLmlzRG9uZSA9IGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGdldEl0ZW1Gcm9tRGl2ID0gKGl0ZW1EaXYpID0+IHtcbiAgICBjb25zdCBpdGVtTmFtZSA9IGl0ZW1EaXYucXVlcnlTZWxlY3RvcignLml0ZW0tbmFtZScpLmlubmVySFRNTDtcbiAgICByZXR1cm4gYWxsSXRlbXMuZmluZCgoaXRlbSkgPT4gaXRlbS5uYW1lID09PSBpdGVtTmFtZSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBhbGxJdGVtcyxcbiAgICBnZXRJdGVtc0Zyb21UYWIsXG4gICAgZ2V0SXRlbUZyb21JbnB1dCxcbiAgICBhZGRUb0FsbEl0ZW1zLFxuICAgIGRlbGV0ZUl0ZW0sXG4gICAgZ2V0SXRlbUZyb21EaXYsXG4gICAgdXBkYXRlQW5kR2V0SXRlbUZyb21EaXYsXG4gICAgdG9nZ2xlSXRlbUNvbXBsZXRpb25cbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGFDb250cm9sbGVyO1xuIiwiY29uc3QgZG9tQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuXG4gIGNvbnN0IHJlbmRlckV4YW1wbGVJdGVtcyA9IChpdGVtc0FycikgPT4ge1xuICAgIGl0ZW1zQXJyLmZvckVhY2goKGl0ZW0pID0+IHJlbmRlck5ld0l0ZW0oaXRlbSkpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlck5ld1Byb2plY3QgPSAobmFtZSkgPT4gIHtcbiAgICByZW5kZXJUYWJPblNpZGVOYXYobmFtZSk7XG4gICAgYWRkUHJvamVjdFRvU2VsZWN0KG5hbWUpO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlclRhYk9uU2lkZU5hdiA9IChuYW1lKSA9PiB7XG4gICAgY29uc3Qgc2lkZU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlLW5hdicpO1xuICAgIGNvbnN0IG5ld1RhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBuZXdUYWIuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnKTtcbiAgICBuZXdUYWIuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YWInKTtcbiAgICBuZXdUYWIuaW5uZXJIVE1MID0gbmFtZTtcbiAgICBzaWRlTmF2LmFwcGVuZENoaWxkKG5ld1RhYik7XG4gIH07XG5cbiAgY29uc3QgYWRkUHJvamVjdFRvU2VsZWN0ID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctaXRlbS1wcm9tcHQtdGVtcGxhdGUnKVxuICAgIGNvbnN0IHNlbGVjdCA9IHRlbXBsYXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvcignLml0ZW0tcHJvamVjdC0tZWRpdGluZycpO1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgYCR7bmFtZX1gKTtcbiAgICBvcHRpb24uaW5uZXJIVE1MID0gbmFtZTtcbiAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgfTtcbiAgXG4gIGNvbnN0IHNob3dUYWJDb250ZW50ID0gKHRhYk5hbWUsIHRhYkVsZW1lbnQpID0+IHtcbiAgICBoaWdobGlnaHRDaG9zZW5UYWIodGFiRWxlbWVudCk7XG4gICAgY2hhbmdlVGFiTmFtZSh0YWJOYW1lKTtcbiAgICBoaWRlTm90VGFiSXRlbXModGFiTmFtZSk7XG4gIH07XG5cbiAgY29uc3QgaGlkZU5vdFRhYkl0ZW1zID0gKHRhYk5hbWUpID0+IHtcbiAgICBjb25zdCBhbGxJdGVtRGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtJyk7XG4gICAgaWYgKHRhYk5hbWUgPT09ICdBbGwgaXRlbXMnKSB7XG4gICAgICBhbGxJdGVtRGl2cy5mb3JFYWNoKChpdGVtRGl2KSA9PiBzaG93SXRlbURpdihpdGVtRGl2KSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRhYkl0ZW1EaXZzID0gZ2V0SXRlbURpdnNGcm9tVGFiTmFtZSh0YWJOYW1lKTtcbiAgICBhbGxJdGVtRGl2cy5mb3JFYWNoKChpdGVtRGl2KSA9PiBoaWRlSXRlbURpdihpdGVtRGl2KSk7XG4gICAgdGFiSXRlbURpdnMuZm9yRWFjaCgoaXRlbURpdikgPT4gc2hvd0l0ZW1EaXYoaXRlbURpdikpO1xuICB9O1xuXG4gIGNvbnN0IGhpZ2hsaWdodENob3NlblRhYiA9ICh0YWJFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcHJldmlvdXNUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiLS1zZWxlY3RlZCcpO1xuICAgIHByZXZpb3VzVGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3RhYi0tc2VsZWN0ZWQnKTtcbiAgICB0YWJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RhYi0tc2VsZWN0ZWQnKTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VUYWJOYW1lID0gKHRhYk5hbWUpID0+IHtcbiAgICBjb25zdCB0YWJOYW1lU3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWItbmFtZScpO1xuICAgIHRhYk5hbWVTcGFuLmlubmVySFRNTCA9IHRhYk5hbWU7XG4gIH07XG5cbiAgY29uc3Qgc2hvd0l0ZW1EaXYgPSAoaXRlbURpdikgPT4ge1xuICAgIGlmIChpdGVtRGl2LmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpXG4gICAgICBpdGVtRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICB9O1xuXG4gIGNvbnN0IGhpZGVJdGVtRGl2ID0gKGl0ZW1EaXYpID0+IHtcbiAgICBpZiAoIWl0ZW1EaXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkgaXRlbURpdi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgfTtcblxuICBjb25zdCBnZXRJdGVtRGl2c0Zyb21UYWJOYW1lID0gKHRhYk5hbWUpID0+IHtcbiAgICBjb25zdCBhbGxJdGVtRGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtJyk7XG4gICAgY29uc3QgY2hvc2VuSXRlbURpdnMgPSBuZXcgQXJyYXkoKTtcbiAgICBhbGxJdGVtRGl2cy5mb3JFYWNoKChpdGVtRGl2KSA9PiB7XG4gICAgICBjb25zdCBpdGVtUHJvamVjdCA9IGl0ZW1EaXYucXVlcnlTZWxlY3RvcignLml0ZW0tcHJvamVjdCcpLmlubmVySFRNTDtcbiAgICAgIGlmIChpdGVtUHJvamVjdCA9PT0gdGFiTmFtZSkgY2hvc2VuSXRlbURpdnMucHVzaChpdGVtRGl2KTtcbiAgICB9KTtcbiAgICByZXR1cm4gY2hvc2VuSXRlbURpdnM7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVySXRlbUVkaXRNb2RlID0gKGl0ZW1EaXYsIGl0ZW0pID0+IHtcbiAgICB0b2dnbGVJdGVtQ29udGVudERpc3BsYXkoaXRlbURpdik7XG5cbiAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gZ2V0UmV2ZXJzZWRGb3JtYXR0ZWREYXRlKGl0ZW0uZHVlRGF0ZSk7XG4gICAgaXRlbURpdi5hcHBlbmRDaGlsZChnZXRJdGVtVGVtcGxhdGVFbGVtZW50cygnbmV3LWl0ZW0tcHJvbXB0LXRlbXBsYXRlJykpO1xuICAgIGl0ZW1EaXYucXVlcnlTZWxlY3RvcignLml0ZW0tbmFtZS0tZWRpdGluZycpLnZhbHVlID0gaXRlbS5uYW1lO1xuICAgIGl0ZW1EaXYucXVlcnlTZWxlY3RvcignLml0ZW0tZHVlLWRhdGUtLWVkaXRpbmcnKS52YWx1ZSA9IGZvcm1hdHRlZERhdGU7XG4gICAgaXRlbURpdi5xdWVyeVNlbGVjdG9yKCcuaXRlbS1kZXNjcmlwdGlvbi0tZWRpdGluZycpLnZhbHVlID1cbiAgICAgIGl0ZW0uZGVzY3JpcHRpb247XG4gICAgYXNzaWduQ3VycmVudEl0ZW1Qcm9qZWN0VmFsdWUoaXRlbURpdiwgaXRlbS5wcm9qZWN0KTtcbiAgICBhc3NpZ25DdXJyZW50SXRlbVByaW9yaXR5VmFsdWUoaXRlbURpdiwgaXRlbS5wcmlvcml0eSk7XG4gIH07XG5cbiAgY29uc3QgZGlzY2FyZEl0ZW1FZGl0TW9kZSA9IChpdGVtRGl2KSA9PiB7XG4gICAgaXRlbURpdi5yZW1vdmVDaGlsZChpdGVtRGl2LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLWJhbm5lci0tZWRpdGluZycpKTtcbiAgICBpdGVtRGl2LnJlbW92ZUNoaWxkKGl0ZW1EaXYucXVlcnlTZWxlY3RvcignLml0ZW0taW5mby0tZWRpdGluZycpKTtcbiAgICB0b2dnbGVJdGVtQ29udGVudERpc3BsYXkoaXRlbURpdik7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlSXRlbUZyb21EaXYgPSAoaXRlbURpdiwgdXBkYXRlZEl0ZW0pID0+IHtcbiAgICBkaXNjYXJkSXRlbUVkaXRNb2RlKGl0ZW1EaXYpO1xuICAgIHVwZGF0ZUl0ZW1EaXZXaXRoSXRlbShpdGVtRGl2LCB1cGRhdGVkSXRlbSk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyTmV3SXRlbSA9IChpdGVtKSA9PiB7XG4gICAgY29uc3QgaXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1EaXYuY2xhc3NOYW1lID0gJ2l0ZW0nO1xuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoZ2V0SXRlbVRlbXBsYXRlRWxlbWVudHMoJ25ldy1pdGVtLXRlbXBsYXRlJykpO1xuICAgIHVwZGF0ZUl0ZW1EaXZXaXRoSXRlbShpdGVtRGl2LCBpdGVtKTtcbiAgICBhcHBlbmRFbGVtZW50QWZ0ZXJUYWJQYW5lbChpdGVtRGl2KTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVJdGVtRGl2V2l0aEl0ZW0gPSAoaXRlbURpdiwgaXRlbSkgPT4ge1xuICAgIGl0ZW1EaXYucXVlcnlTZWxlY3RvcignLml0ZW0tbmFtZScpLmlubmVySFRNTCA9IGl0ZW0ubmFtZTtcbiAgICBpdGVtRGl2LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLWR1ZS1kYXRlJykuaW5uZXJIVE1MID0gaXRlbS5kdWVEYXRlO1xuICAgIGl0ZW1EaXYucXVlcnlTZWxlY3RvcignLml0ZW0tZGVzY3JpcHRpb24nKS5pbm5lckhUTUwgPSBpdGVtLmRlc2NyaXB0aW9uO1xuICAgIGl0ZW1EaXYucXVlcnlTZWxlY3RvcignLml0ZW0tcHJvamVjdCcpLmlubmVySFRNTCA9IGl0ZW0ucHJvamVjdDtcbiAgICBpdGVtRGl2LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLXByaW9yaXR5JykuaW5uZXJIVE1MID0gaXRlbS5wcmlvcml0eTtcbiAgfTtcblxuICBjb25zdCBzaG93SGlkZUl0ZW1JbmZvID0gKGl0ZW1EaXYpID0+IHtcbiAgICBjb25zdCBpbmZvID0gaXRlbURpdi5xdWVyeVNlbGVjdG9yKCcuaXRlbS1pbmZvJyk7XG4gICAgaW5mby5jbGFzc0xpc3QuY29udGFpbnMoJ2l0ZW0taW5mby0tZXhwYW5kZWQnKVxuICAgICAgPyBpbmZvLmNsYXNzTGlzdC5yZW1vdmUoJ2l0ZW0taW5mby0tZXhwYW5kZWQnKVxuICAgICAgOiBpbmZvLmNsYXNzTGlzdC5hZGQoJ2l0ZW0taW5mby0tZXhwYW5kZWQnKTtcbiAgfTtcblxuICBjb25zdCByZW1pbmROZXdJdGVtUHJvbXB0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGJhbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLWJhbm5lci0tZWRpdGluZycpO1xuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1pbmZvLS1lZGl0aW5nJyk7XG4gICAgYmFubmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjRjhENDhCJztcbiAgICBpbmZvLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjRjhENDhCJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGJhbm5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgaW5mby5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgIH0sIDIwMCk7XG4gIH07XG5cbiAgY29uc3QgcmVtaW5kTmV3SXRlbUlucHV0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGJhbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLWJhbm5lci0tZWRpdGluZycpO1xuICAgIGJhbm5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0U3OTk4OCc7XG4gICAgc2V0VGltZW91dCgoKSA9PiAoYmFubmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZScpLCAyMDApO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlck5ld0l0ZW1Qcm9tcHQgPSAoKSA9PiB7XG4gICAgY29uc3QgaXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1EaXYuY2xhc3NOYW1lID0gJ2l0ZW0nO1xuICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoZ2V0SXRlbVRlbXBsYXRlRWxlbWVudHMoJ25ldy1pdGVtLXByb21wdC10ZW1wbGF0ZScpKTtcbiAgICBhcHBlbmRFbGVtZW50QWZ0ZXJUYWJQYW5lbChpdGVtRGl2KTtcbiAgfTtcblxuICBjb25zdCBhcHBlbmRFbGVtZW50QWZ0ZXJUYWJQYW5lbCA9IChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZmlyc3RJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW0nKTtcbiAgICBmaXJzdEl0ZW1cbiAgICAgID8gY29udGVudERpdi5pbnNlcnRCZWZvcmUoZWxlbWVudCwgZmlyc3RJdGVtKVxuICAgICAgOiBjb250ZW50RGl2LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZUl0ZW1EaXYgPSAoaXRlbURpdikgPT4ge1xuICAgIGl0ZW1EaXYucmVtb3ZlKCk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlSXRlbUNvbXBsZXRpb24gPSAoaXRlbURpdikgPT4ge1xuICAgIHRvZ2dsZUNvbXBsZXRlZEl0ZW1ET00oaXRlbURpdik7XG4gICAgbW92ZUNvbXBsZXRlZEl0ZW0oaXRlbURpdik7XG4gIH07XG5cbiAgLyogcHJpdmF0ZSBmdW5jdGlvbnMgKi9cblxuICBjb25zdCB0b2dnbGVJdGVtQ29udGVudERpc3BsYXkgPSAoaXRlbURpdikgPT4ge1xuICAgIGNvbnN0IGl0ZW1CYW5uZXIgPSBpdGVtRGl2LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLWJhbm5lcicpO1xuICAgIGNvbnN0IGl0ZW1JbmZvID0gaXRlbURpdi5xdWVyeVNlbGVjdG9yKCcuaXRlbS1pbmZvJyk7XG4gICAgaXRlbUJhbm5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpXG4gICAgICA/IGl0ZW1CYW5uZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgIDogaXRlbUJhbm5lci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBpdGVtSW5mby5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpXG4gICAgICA/IGl0ZW1JbmZvLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgICA6IGl0ZW1JbmZvLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICB9O1xuXG4gIGNvbnN0IGdldEl0ZW1UZW1wbGF0ZUVsZW1lbnRzID0gKHRlbXBsYXRlSUQpID0+IHtcbiAgICBjb25zdCBpdGVtUHJvbXB0VGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHRlbXBsYXRlSUQpO1xuICAgIGxldCBodG1sRWxlbWVudHMgPSBpdGVtUHJvbXB0VGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgcmV0dXJuIGh0bWxFbGVtZW50cztcbiAgfTtcblxuICBjb25zdCBnZXRSZXZlcnNlZEZvcm1hdHRlZERhdGUgPSAoZHVlRGF0ZSkgPT4ge1xuICAgIGNvbnN0IGFyciA9IGR1ZURhdGUuc3BsaXQoJy8nKTtcbiAgICBhcnIucmV2ZXJzZSgpO1xuICAgIGNvbnN0IG5ld0RhdGUgPSBhcnIuam9pbignLScpO1xuICAgIHJldHVybiBuZXdEYXRlO1xuICB9O1xuXG4gIGNvbnN0IGFzc2lnbkN1cnJlbnRJdGVtUHJvamVjdFZhbHVlID0gKGl0ZW1EaXYsIHByb2plY3QpID0+IHtcbiAgICBjb25zdCBvcHRpb25zID0gaXRlbURpdi5xdWVyeVNlbGVjdG9yKCcuaXRlbS1wcm9qZWN0LS1lZGl0aW5nJykub3B0aW9ucztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChvcHRpb25zW2ldLnZhbHVlID09PSBwcm9qZWN0KVxuICAgICAgICBvcHRpb25zW2ldLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYXNzaWduQ3VycmVudEl0ZW1Qcmlvcml0eVZhbHVlID0gKGl0ZW1EaXYsIHByaW9yaXR5KSA9PiB7XG4gICAgaXRlbURpdi5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHkxJykucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGl0ZW1EaXYucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCJwcmlvcml0eVwiXScpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKG9wdGlvbnNbaV0udmFsdWUgPT09IHByaW9yaXR5KVxuICAgICAgICBvcHRpb25zW2ldLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdzZWxlY3RlZCcpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB0b2dnbGVDb21wbGV0ZWRJdGVtRE9NID0gKGl0ZW1EaXYpID0+IHtcbiAgICBjb25zdCBpdGVtTmFtZSA9IGl0ZW1EaXYucXVlcnlTZWxlY3RvcignLml0ZW0tbmFtZScpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBpdGVtRGl2LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLWR1ZS1kYXRlJyk7XG4gICAgY29uc3QgY2hlY2tib3ggPSBpdGVtRGl2LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveCcpO1xuICAgIGNoZWNrYm94LmNoZWNrZWRcbiAgICAgID8gKChpdGVtTmFtZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnKSxcbiAgICAgICAgKGR1ZURhdGUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJyksXG4gICAgICAgIGl0ZW1EaXYuY2xhc3NMaXN0LmFkZCgnaXRlbS0tY29tcGxldGVkJykpXG4gICAgICA6ICgoaXRlbU5hbWUuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZScpLFxuICAgICAgICAoZHVlRGF0ZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJyksXG4gICAgICAgIGl0ZW1EaXYuY2xhc3NMaXN0LnJlbW92ZSgnaXRlbS0tY29tcGxldGVkJykpO1xuICB9O1xuXG4gIGNvbnN0IG1vdmVDb21wbGV0ZWRJdGVtID0gKGl0ZW1EaXYpID0+IHtcbiAgICBjb250ZW50RGl2LnJlbW92ZUNoaWxkKGl0ZW1EaXYpO1xuICAgIGNvbnN0IHRvcENvbXBsZXRlZEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS0tY29tcGxldGVkJyk7XG5cbiAgICB0b3BDb21wbGV0ZWRJdGVtXG4gICAgICA/IGNvbnRlbnREaXYuaW5zZXJ0QmVmb3JlKGl0ZW1EaXYsIHRvcENvbXBsZXRlZEl0ZW0pXG4gICAgICA6IGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaXRlbURpdik7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBkaXNjYXJkSXRlbUVkaXRNb2RlLFxuICAgIHJlbWluZE5ld0l0ZW1JbnB1dCxcbiAgICByZW1pbmROZXdJdGVtUHJvbXB0LFxuICAgIHJlbW92ZUl0ZW1EaXYsXG4gICAgcmVuZGVyRXhhbXBsZUl0ZW1zLFxuICAgIHJlbmRlckl0ZW1FZGl0TW9kZSxcbiAgICByZW5kZXJOZXdJdGVtLFxuICAgIHJlbmRlck5ld0l0ZW1Qcm9tcHQsXG4gICAgcmVuZGVyTmV3UHJvamVjdCxcbiAgICBzaG93SGlkZUl0ZW1JbmZvLFxuICAgIHNob3dUYWJDb250ZW50LFxuICAgIHRvZ2dsZUl0ZW1Db21wbGV0aW9uLFxuICAgIHVwZGF0ZUl0ZW1Gcm9tRGl2LFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQ29udHJvbGxlcjtcbiIsImltcG9ydCBjb29yZGluYXRvciBmcm9tICcuL2Nvb3JkaW5hdG9yLmpzJztcblxuY29uc3QgZXZlbnRzSGFuZGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IGFkZExpc3RlbmVyc0luSG9tZVBhZ2UgPSAoKSA9PiB7XG4gICAgYWRkTGlzdGVuZXJzVGFiUGFuZWwoZG9jdW1lbnQpO1xuICAgIGFkZExpc3RlbmVyc1Nob3dIaWRlSXRlbUluZm8oZG9jdW1lbnQpO1xuICAgIGFkZExpc3RlbmVyc0NoZWNrYm94KGRvY3VtZW50KTtcbiAgICBhZGRMaXN0ZW5lcnNUYWIoZG9jdW1lbnQpO1xuICB9O1xuXG4gIGNvbnN0IGFkZExpc3RlbmVyc1RhYlBhbmVsID0gKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBuZXdJdGVtQnV0dG9uID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLW5ldy1pdGVtJyk7XG4gICAgbmV3SXRlbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvb3JkaW5hdG9yLnByb21wdE5ld0l0ZW0pO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1uZXctcHJvamVjdCcpO1xuICAgIG5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb29yZGluYXRvci5wcm9tcHROZXdQcm9qZWN0KTtcblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUtcHJvamVjdCcpO1xuICAgIGRlbGV0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb29yZGluYXRvci5wcm9tcHREZWxldGVQcm9qZWN0KVxuICB9O1xuXG4gIGNvbnN0IGFkZExpc3RlbmVyc1Nob3dIaWRlSXRlbUluZm8gPSAoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHNob3dJbmZvQnV0dG9ucyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNob3ctaW5mbycpO1xuICAgIHNob3dJbmZvQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb29yZGluYXRvci5zaG93SGlkZUl0ZW1JbmZvKVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgYWRkTGlzdGVuZXJzTmV3SXRlbVByb21wdCA9ICgpID0+IHtcbiAgICBjb25zdCBkaXNjYXJkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc2NhcmQnKTtcbiAgICBkaXNjYXJkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29vcmRpbmF0b3IuZGlzY2FyZE5ld0l0ZW1Qcm9tcHQpO1xuXG4gICAgY29uc3Qgc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYXZlJyk7XG4gICAgc2F2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvb3JkaW5hdG9yLnNhdmVOZXdJdGVtKTtcbiAgfTtcblxuICBjb25zdCBhZGRMaXN0ZW5lcnNJdGVtSW5mbyA9IChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQnKTtcbiAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29vcmRpbmF0b3IuZWRpdEl0ZW0pO1xuXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlJyk7XG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29vcmRpbmF0b3IuZGVsZXRlSXRlbSk7XG4gIH07XG5cbiAgY29uc3QgYWRkTGlzdGVuZXJzSXRlbUVkaXQgPSAoaXRlbURpdikgPT4ge1xuICAgIGNvbnN0IGRpc2NhcmRCdXR0b24gPSBpdGVtRGl2LnF1ZXJ5U2VsZWN0b3IoJy5kaXNjYXJkJyk7XG4gICAgZGlzY2FyZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvb3JkaW5hdG9yLmRpc2NhcmRJdGVtRWRpdCk7XG5cbiAgICBjb25zdCBzYXZlQnV0dG9uID0gaXRlbURpdi5xdWVyeVNlbGVjdG9yKCcuc2F2ZScpO1xuICAgIHNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb29yZGluYXRvci5zYXZlRWRpdGVkSXRlbSk7XG4gIH07XG5cbiAgY29uc3QgYWRkTGlzdGVuZXJzQ2hlY2tib3ggPSAoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveCcpO1xuICAgIGNoZWNrYm94ZXMuZm9yRWFjaCgoY2hlY2tib3gpID0+XG4gICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvb3JkaW5hdG9yLnRvZ2dsZUl0ZW1Db21wbGV0aW9uKVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgYWRkTGlzdGVuZXJzVGFiID0gKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB0YWJzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiJyk7XG4gICAgdGFicy5mb3JFYWNoKHRhYiA9PiBhZGRMaXN0ZW5lclRhYih0YWIpKTtcbiAgfTtcblxuICBjb25zdCBhZGRMaXN0ZW5lclRhYiA9ICh0YWIpID0+IHtcbiAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb29yZGluYXRvci5yZW5kZXJUYWIpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRMaXN0ZW5lcnNJbkhvbWVQYWdlLFxuICAgIGFkZExpc3RlbmVyc05ld0l0ZW1Qcm9tcHQsXG4gICAgYWRkTGlzdGVuZXJzU2hvd0hpZGVJdGVtSW5mbyxcbiAgICBhZGRMaXN0ZW5lcnNJdGVtSW5mbyxcbiAgICBhZGRMaXN0ZW5lcnNJdGVtRWRpdCxcbiAgICBhZGRMaXN0ZW5lcnNDaGVja2JveCxcbiAgICBhZGRMaXN0ZW5lcnNUYWIsXG4gICAgYWRkTGlzdGVuZXJUYWJcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50c0hhbmRsZXI7XG4iLCJjb25zdCBpdGVtRmFjdG9yeSA9IChuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJvamVjdCwgcHJpb3JpdHkpID0+IHtcbiAgbGV0IGlzRG9uZSA9IGZhbHNlO1xuXG4gIHJldHVybiB7bmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByb2plY3QsIHByaW9yaXR5LCBpc0RvbmV9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaXRlbUZhY3Rvcnk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGNvb3JkaW5hdG9yIGZyb20gJy4vbW9kdWxlcy9jb29yZGluYXRvci5qcyc7XG5cbmNvb3JkaW5hdG9yLmxvYWRIb21lUGFnZSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==