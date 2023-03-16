/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./templates/common.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./templates/common.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/search_button.png */ \"./images/search_button.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box !important;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-size: 14px;\\r\\n  background-color: #222222;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\na {\\r\\n  color: inherit;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#app {\\r\\n  padding-bottom: 48px;\\r\\n}\\r\\n\\r\\n*:focus {\\r\\n  outline: none;\\r\\n}\\r\\n.item-view,\\r\\n.item-test {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.item-view {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  width: 1200px;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n.item-view h2 {\\r\\n  font-size: 2rem;\\r\\n  font-weight: bold;\\r\\n  user-select: none;\\r\\n}\\r\\n\\r\\n/* https://andrew.hedges.name/experiments/aspect_ratio/ */\\r\\n\\r\\n.item-list {\\r\\n  display: grid;\\r\\n  margin: 48px 0;\\r\\n  grid-template-columns: repeat(4, 180px);\\r\\n  grid-column-gap: 160px;\\r\\n  grid-row-gap: 48px;\\r\\n}\\r\\n\\r\\n.item-card {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.item-thumbnail {\\r\\n  border-radius: 8px;\\r\\n  width: 180px;\\r\\n  height: 270px;\\r\\n  background-size: contain;\\r\\n}\\r\\n\\r\\n.item-title {\\r\\n  margin-top: 16px;\\r\\n  font-size: 1.2rem;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.item-score {\\r\\n  margin-top: 16px;\\r\\n  font-size: 1.2rem;\\r\\n}\\r\\n\\r\\n.item-score::after {\\r\\n  margin-left: 8px;\\r\\n}\\r\\n\\r\\n.star {\\r\\n  margin-right: 4px;\\r\\n  transform: translateY(5px);\\r\\n}\\r\\n\\r\\n.item-title.skeleton::after,\\r\\n.item-score.skeleton::after {\\r\\n  font-size: 0;\\r\\n  content: \\\"loading\\\";\\r\\n}\\r\\n\\r\\n.full-width {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.last-item {\\r\\n  margin-top: 48px;\\r\\n}\\r\\n\\r\\nbutton.btn {\\r\\n  border: 0;\\r\\n  border-radius: 8px;\\r\\n  height: 45px;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\nbutton.primary {\\r\\n  background: #f33f3f;\\r\\n}\\r\\n\\r\\n.item-card .skeleton {\\r\\n  background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);\\r\\n  background-size: 400%;\\r\\n  animation: skeleton-animation 5s infinite ease-out;\\r\\n  border-radius: 8px;\\r\\n}\\r\\n\\r\\n@keyframes skeleton-animation {\\r\\n  0% {\\r\\n    background-position: 0% 50%;\\r\\n  }\\r\\n  50% {\\r\\n    background-position: 100% 50%;\\r\\n  }\\r\\n  100% {\\r\\n    background-position: 0% 50%;\\r\\n  }\\r\\n}\\r\\nheader {\\r\\n  width: 100%;\\r\\n  min-width: 1200px;\\r\\n  height: 72px;\\r\\n  background-color: #222;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 0 20px;\\r\\n  border-bottom: 1px solid white;\\r\\n  margin-bottom: 48px;\\r\\n}\\r\\n\\r\\nheader h1 {\\r\\n  cursor: pointer;\\r\\n  user-select: none;\\r\\n  font-size: 2rem;\\r\\n  font-weight: bold;\\r\\n  letter-spacing: -0.1rem;\\r\\n  color: #f33f3f;\\r\\n}\\r\\n\\r\\nheader > .search-box {\\r\\n  background: #fff;\\r\\n  padding: 8px;\\r\\n  border-radius: 4px;\\r\\n}\\r\\n\\r\\nheader .search-box input {\\r\\n  border: 0;\\r\\n}\\r\\n\\r\\nheader .search-box .search-button {\\r\\n  width: 14px;\\r\\n  border: 0;\\r\\n  text-indent: -1000rem;\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") transparent no-repeat 0 1px;\\r\\n  background-size: contain;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.error-image-container {\\r\\n  margin-top: 4rem;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.error-image {\\r\\n  width: 20rem;\\r\\n  height: 30rem;\\r\\n}\\r\\n\\r\\n.not-search {\\r\\n  margin-top: 10rem;\\r\\n  text-align: center;\\r\\n  font-size: 2rem;\\r\\n  font-weight: 800;\\r\\n}\\r\\n\\r\\nmovie-list:has(.not-search) {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-movie-review/./templates/common.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./templates/reset.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./templates/reset.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* http://meyerweb.com/eric/tools/css/reset/\\r\\n   v2.0 | 20110126\\r\\n   License: none (public domain)\\r\\n*/\\r\\n\\r\\nhtml,\\r\\nbody,\\r\\ndiv,\\r\\nspan,\\r\\napplet,\\r\\nobject,\\r\\niframe,\\r\\nh1,\\r\\nh2,\\r\\nh3,\\r\\nh4,\\r\\nh5,\\r\\nh6,\\r\\np,\\r\\nblockquote,\\r\\npre,\\r\\na,\\r\\nabbr,\\r\\nacronym,\\r\\naddress,\\r\\nbig,\\r\\ncite,\\r\\ncode,\\r\\ndel,\\r\\ndfn,\\r\\nem,\\r\\nimg,\\r\\nins,\\r\\nkbd,\\r\\nq,\\r\\ns,\\r\\nsamp,\\r\\nsmall,\\r\\nstrike,\\r\\nstrong,\\r\\nsub,\\r\\nsup,\\r\\ntt,\\r\\nvar,\\r\\nb,\\r\\nu,\\r\\ni,\\r\\ncenter,\\r\\ndl,\\r\\ndt,\\r\\ndd,\\r\\nol,\\r\\nul,\\r\\nli,\\r\\nfieldset,\\r\\nform,\\r\\nlabel,\\r\\nlegend,\\r\\ntable,\\r\\ncaption,\\r\\ntbody,\\r\\ntfoot,\\r\\nthead,\\r\\ntr,\\r\\nth,\\r\\ntd,\\r\\narticle,\\r\\naside,\\r\\ncanvas,\\r\\ndetails,\\r\\nembed,\\r\\nfigure,\\r\\nfigcaption,\\r\\nfooter,\\r\\nheader,\\r\\nhgroup,\\r\\nmenu,\\r\\nnav,\\r\\noutput,\\r\\nruby,\\r\\nsection,\\r\\nsummary,\\r\\ntime,\\r\\nmark,\\r\\naudio,\\r\\nvideo {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  border: 0;\\r\\n  font-size: 100%;\\r\\n  font: inherit;\\r\\n  vertical-align: baseline;\\r\\n}\\r\\n/* HTML5 display-role reset for older browsers */\\r\\narticle,\\r\\naside,\\r\\ndetails,\\r\\nfigcaption,\\r\\nfigure,\\r\\nfooter,\\r\\nheader,\\r\\nhgroup,\\r\\nmenu,\\r\\nnav,\\r\\nsection {\\r\\n  display: block;\\r\\n}\\r\\nbody {\\r\\n  line-height: 1;\\r\\n}\\r\\nol,\\r\\nul,\\r\\nli {\\r\\n  list-style: none;\\r\\n}\\r\\nblockquote,\\r\\nq {\\r\\n  quotes: none;\\r\\n}\\r\\nblockquote:before,\\r\\nblockquote:after,\\r\\nq:before,\\r\\nq:after {\\r\\n  content: \\\"\\\";\\r\\n  content: none;\\r\\n}\\r\\ntable {\\r\\n  border-collapse: collapse;\\r\\n  border-spacing: 0;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-movie-review/./templates/reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./templates/common.css":
/*!******************************!*\
  !*** ./templates/common.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./common.css */ \"./node_modules/css-loader/dist/cjs.js!./templates/common.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-movie-review/./templates/common.css?");

/***/ }),

/***/ "./templates/reset.css":
/*!*****************************!*\
  !*** ./templates/reset.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./templates/reset.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-movie-review/./templates/reset.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./images/index.ts":
/*!*************************!*\
  !*** ./images/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AddSkeleton\": () => (/* reexport default export from named module */ _add_skeleton_png__WEBPACK_IMPORTED_MODULE_4__),\n/* harmony export */   \"ErrorUnresponsive\": () => (/* reexport default export from named module */ _error_unresponsive_png__WEBPACK_IMPORTED_MODULE_5__),\n/* harmony export */   \"Logo\": () => (/* reexport default export from named module */ _logo_png__WEBPACK_IMPORTED_MODULE_0__),\n/* harmony export */   \"Search\": () => (/* reexport default export from named module */ _search_button_png__WEBPACK_IMPORTED_MODULE_1__),\n/* harmony export */   \"StarFilled\": () => (/* reexport default export from named module */ _star_filled_png__WEBPACK_IMPORTED_MODULE_3__),\n/* harmony export */   \"StartEmpty\": () => (/* reexport default export from named module */ _star_empty_png__WEBPACK_IMPORTED_MODULE_2__)\n/* harmony export */ });\n/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.png */ \"./images/logo.png\");\n/* harmony import */ var _search_button_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search_button.png */ \"./images/search_button.png\");\n/* harmony import */ var _star_empty_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./star_empty.png */ \"./images/star_empty.png\");\n/* harmony import */ var _star_filled_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./star_filled.png */ \"./images/star_filled.png\");\n/* harmony import */ var _add_skeleton_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add_skeleton.png */ \"./images/add_skeleton.png\");\n/* harmony import */ var _error_unresponsive_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error_unresponsive.png */ \"./images/error_unresponsive.png\");\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://javascript-movie-review/./images/index.ts?");

/***/ }),

/***/ "./src/components/MovieHeader.ts":
/*!***************************************!*\
  !*** ./src/components/MovieHeader.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images */ \"./images/index.ts\");\n\ncustomElements.define(\"movie-header\", class MovieHeader extends HTMLElement {\n    constructor() {\n        super();\n        this.innerHTML = `\n        <header>\n        <h1><img src=\"${_images__WEBPACK_IMPORTED_MODULE_0__.Logo}\" alt=\"MovieList\" /></h1>\n        <search-box class=\"search-box\"></search-box>\n      </header>`;\n    }\n});\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieHeader.ts?");

/***/ }),

/***/ "./src/components/MovieItem.ts":
/*!*************************************!*\
  !*** ./src/components/MovieItem.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images */ \"./images/index.ts\");\n\n\ncustomElements.define(\"movie-item\", class MovieItem extends HTMLElement {\n    constructor() {\n        super();\n        const posterPath = this.getAttribute(\"poster-path\");\n        const title = this.getAttribute(\"title\");\n        const voteAverage = this.getAttribute(\"vote_average\");\n        this.innerHTML = `\r\n        <a href=\"#\">\r\n          <div class=\"item-card\">\r\n            <img\r\n              class=\"item-thumbnail\"\r\n              src=\"${posterPath !== \"null\"\n            ? `https://image.tmdb.org/t/p/original/${posterPath}`\n            : `${_images__WEBPACK_IMPORTED_MODULE_0__.AddSkeleton}`}\"\r\n              loading=\"lazy\"\r\n              alt=\"${title}\"\r\n            />\r\n            <p class=\"item-title\">${title}</p>\r\n            <p class=\"item-score\"><img src=\"${_images__WEBPACK_IMPORTED_MODULE_0__.StarFilled}\" class=\"star\" alt=\"별점\" />${voteAverage}</p>\r\n          </div>\r\n        </a>\r\n  `;\n    }\n});\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieItem.ts?");

/***/ }),

/***/ "./src/components/MovieList.ts":
/*!*************************************!*\
  !*** ./src/components/MovieList.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass MovieList extends HTMLElement {\n    constructor() {\n        super();\n    }\n    render(movies) {\n        this.innerHTML = `\n          ${movies.length !== 0\n            ? movies\n                .map((movie) => `\n            <movie-item\n              poster-path=\"${movie.poster_path}\"\n              title=\"${movie.title}\"\n              vote_average=\"${movie.vote_average}\"\n            ></movie-item>`)\n                .join(\"\")\n            : '<p class=\"not-search\">해당 검색 결과가 없습니다</p>'}\n          `;\n    }\n    displaySkeletonUI() {\n        this.innerHTML = `\n        <li>\n          <a href=\"#\">\n            <div class=\"item-card\">\n              <div class=\"item-thumbnail skeleton\"></div>\n              <div class=\"item-title skeleton\"></div>\n              <div class=\"item-score skeleton\"></div>\n            </div>\n          </a>\n        </li>\n      `.repeat(20);\n    }\n}\ncustomElements.define(\"movie-list\", MovieList);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieList);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieList.ts?");

/***/ }),

/***/ "./src/components/MovieListContainer.ts":
/*!**********************************************!*\
  !*** ./src/components/MovieListContainer.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom */ \"./src/utils/dom.ts\");\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images */ \"./images/index.ts\");\n\n\n\nclass MovieListContainer extends HTMLElement {\n    constructor() {\n        super();\n    }\n    render(query) {\n        const type = this.getAttribute(\"type\");\n        this.innerHTML = `\n        <h2>${type === \"popular\" ? \"지금 인기 있는 영화\" : `\"${query}\" 검색 결과`}</h2>\n        <movie-list class=\"item-list\"></movie-list>\n        <button id=\"more-button\" class=\"btn primary full-width\">더 보기</button>\n      `;\n        this.addEvent();\n    }\n    addEvent() {\n        var _a;\n        (_a = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)(\"button\", this)) === null || _a === void 0 ? void 0 : _a.addEventListener(\"click\", () => {\n            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.dispatchCustomEvent)(this, {\n                eventType: \"fetchMovieData\",\n                data: this.getAttribute(\"type\"),\n            });\n        });\n    }\n    changeTitle(query) {\n        this.setAttribute(\"type\", \"search\");\n        this.render(query);\n    }\n    removeLoadMovieButton() {\n        var _a;\n        (_a = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)(\"button\", this)) === null || _a === void 0 ? void 0 : _a.classList.add(\"hidden\");\n    }\n    displayErrorUI() {\n        this.innerHTML = `\n    <div class=\"error-image-container\">\n     <img class=\"error-image\" src=${_images__WEBPACK_IMPORTED_MODULE_1__.ErrorUnresponsive} alt=\"서버 무응답\"/>\n    </div>\n    `;\n    }\n}\ncustomElements.define(\"movie-list-container\", MovieListContainer);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieListContainer);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieListContainer.ts?");

/***/ }),

/***/ "./src/components/SearchBox.ts":
/*!*************************************!*\
  !*** ./src/components/SearchBox.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom */ \"./src/utils/dom.ts\");\n\n\ncustomElements.define(\"search-box\", class SearchBox extends HTMLElement {\n    constructor() {\n        super();\n        this.innerHTML = `\n        <form id=\"search-form\">\n          <input id=\"search-input\" type=\"text\" placeholder=\"검색\" />\n          <button class=\"search-button\">검색</button>\n        </form>\n      `;\n        this.addEvent();\n    }\n    addEvent() {\n        var _a;\n        (_a = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)(\"form\", this)) === null || _a === void 0 ? void 0 : _a.addEventListener(\"submit\", (event) => {\n            this.onSubmitForm(event);\n        });\n    }\n    onSubmitForm(event) {\n        event.preventDefault();\n        const form = event.target;\n        const input = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)(\"input[type='text']\", form);\n        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.dispatchCustomEvent)(this, {\n            eventType: \"searchMovieData\",\n            data: input.value,\n        });\n        form.reset();\n    }\n});\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/SearchBox.ts?");

/***/ }),

/***/ "./src/domain/movieHandler.ts":
/*!************************************!*\
  !*** ./src/domain/movieHandler.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst movieHandler = {\n    movies: [],\n    currentPageNumber: 1,\n    addMovies(movies) {\n        this.movies = [...this.movies, ...movies];\n    },\n    sortByPopularity(movies) {\n        return movies.sort((a, b) => b.popularity - a.popularity);\n    },\n    initializeMovies() {\n        this.movies = [];\n    },\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (movieHandler);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/domain/movieHandler.ts?");

/***/ }),

/***/ "./src/fetch.ts":
/*!**********************!*\
  !*** ./src/fetch.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mostPopular\": () => (/* binding */ mostPopular),\n/* harmony export */   \"search\": () => (/* binding */ search)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nconst mostPopular = (pageNumber) => __awaiter(void 0, void 0, void 0, function* () {\n    const response = yield fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${\"c8cc9b6d06e09111f574761b9b27d8aa\"}&language=ko-KR&page=${pageNumber}`, {\n        method: \"GET\",\n    });\n    if (response.ok) {\n        const result = yield response.json();\n        return result;\n    }\n    return null;\n});\nconst search = (query, pageNumber) => __awaiter(void 0, void 0, void 0, function* () {\n    const response = yield fetch(`https://api.themoviedb.org/3/search/movieasd?api_key=${\"c8cc9b6d06e09111f574761b9b27d8aa\"}&language=ko-KR&query=${query}&page=${pageNumber}&include_adult=false`, {\n        method: \"GET\",\n    });\n    if (response.ok) {\n        const result = yield response.json();\n        return result;\n    }\n    return null;\n});\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/fetch.ts?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _templates_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/reset.css */ \"./templates/reset.css\");\n/* harmony import */ var _templates_common_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/common.css */ \"./templates/common.css\");\n/* harmony import */ var _src_components_MovieHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/MovieHeader */ \"./src/components/MovieHeader.ts\");\n/* harmony import */ var _src_components_SearchBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/SearchBox */ \"./src/components/SearchBox.ts\");\n/* harmony import */ var _src_components_MovieItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/MovieItem */ \"./src/components/MovieItem.ts\");\n/* harmony import */ var _src_components_MovieList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/MovieList */ \"./src/components/MovieList.ts\");\n/* harmony import */ var _src_components_MovieListContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/MovieListContainer */ \"./src/components/MovieListContainer.ts\");\n/* harmony import */ var _movieApp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./movieApp */ \"./src/movieApp.ts\");\n\n\n\n\n\n\n\n\n_movieApp__WEBPACK_IMPORTED_MODULE_7__[\"default\"].init();\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/index.js?");

/***/ }),

/***/ "./src/movieApp.ts":
/*!*************************!*\
  !*** ./src/movieApp.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _src_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/fetch */ \"./src/fetch.ts\");\n/* harmony import */ var _domain_movieHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domain/movieHandler */ \"./src/domain/movieHandler.ts\");\n/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/dom */ \"./src/utils/dom.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\nconst movieApp = {\n    currentPageNumber: 1,\n    query: \"\",\n    $container: (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.$)(\"movie-list-container\"),\n    init() {\n        this.$container.render();\n        this.addEvent();\n        this.getPopularMovieData();\n    },\n    addEvent() {\n        var _a, _b;\n        (_a = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.$)(\"movie-list-container\")) === null || _a === void 0 ? void 0 : _a.addEventListener(\"fetchMovieData\", ({ detail }) => detail === \"popular\"\n            ? this.getPopularMovieData()\n            : this.getSearchMovieData());\n        (_b = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.$)(\"search-box\")) === null || _b === void 0 ? void 0 : _b.addEventListener(\"searchMovieData\", ({ detail }) => this.searchMovieData(detail));\n    },\n    loadMovieData(movies) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const movieList = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.$)(\"movie-list\");\n            if (!movies)\n                return;\n            _domain_movieHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addMovies(movies.results);\n            if (movies.results.length < 20)\n                this.$container.removeLoadMovieButton();\n            movieList.render(_domain_movieHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].movies);\n        });\n    },\n    fetchMovieData(fetchFunction) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const movieList = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.$)(\"movie-list\");\n            movieList.displaySkeletonUI();\n            const movies = yield fetchFunction();\n            if (!movies)\n                this.$container.displayErrorUI();\n            return movies;\n        });\n    },\n    getPopularMovieData() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const movies = yield this.fetchMovieData(() => (0,_src_fetch__WEBPACK_IMPORTED_MODULE_0__.mostPopular)(this.currentPageNumber++));\n            if (this.currentPageNumber > 500)\n                this.$container.removeLoadMovieButton();\n            this.loadMovieData(movies);\n        });\n    },\n    searchMovieData(query) {\n        return __awaiter(this, void 0, void 0, function* () {\n            this.currentPageNumber = 1;\n            this.query = query;\n            this.$container.changeTitle(query);\n            _domain_movieHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].initializeMovies();\n            const movies = yield this.fetchMovieData(() => (0,_src_fetch__WEBPACK_IMPORTED_MODULE_0__.search)(query, this.currentPageNumber++));\n            this.loadMovieData(movies);\n        });\n    },\n    getSearchMovieData() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const movies = yield this.fetchMovieData(() => (0,_src_fetch__WEBPACK_IMPORTED_MODULE_0__.search)(this.query, this.currentPageNumber++));\n            this.loadMovieData(movies);\n        });\n    },\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (movieApp);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/movieApp.ts?");

/***/ }),

/***/ "./src/utils/dom.ts":
/*!**************************!*\
  !*** ./src/utils/dom.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"$\": () => (/* binding */ $),\n/* harmony export */   \"dispatchCustomEvent\": () => (/* binding */ dispatchCustomEvent)\n/* harmony export */ });\nconst $ = (selector, target = document) => target.querySelector(selector);\nconst dispatchCustomEvent = ($target, { eventType, data = null }) => {\n    const customEvent = new CustomEvent(eventType, { detail: data });\n    $target.dispatchEvent(customEvent);\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/utils/dom.ts?");

/***/ }),

/***/ "./images/add_skeleton.png":
/*!*********************************!*\
  !*** ./images/add_skeleton.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"da3e03a95b7922e70c82.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./images/add_skeleton.png?");

/***/ }),

/***/ "./images/error_unresponsive.png":
/*!***************************************!*\
  !*** ./images/error_unresponsive.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"271360de1c7dad0fd2ad.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./images/error_unresponsive.png?");

/***/ }),

/***/ "./images/logo.png":
/*!*************************!*\
  !*** ./images/logo.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2e162b4fefb34cd7ed8d.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./images/logo.png?");

/***/ }),

/***/ "./images/search_button.png":
/*!**********************************!*\
  !*** ./images/search_button.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f1bd4269f4446ceae306.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./images/search_button.png?");

/***/ }),

/***/ "./images/star_empty.png":
/*!*******************************!*\
  !*** ./images/star_empty.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6c9611deedf4b85849c9.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./images/star_empty.png?");

/***/ }),

/***/ "./images/star_filled.png":
/*!********************************!*\
  !*** ./images/star_filled.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6328741810b732410eec.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./images/star_filled.png?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;