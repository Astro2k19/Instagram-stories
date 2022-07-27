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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/styles/app.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/styles/app.scss ***!
  \**************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/blus.png */ \"./src/assets/blus.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Oswald&family=Poppins:wght@300;400;500&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@charset \\\"UTF-8\\\";\\nbody {\\n  background: #1a1a1a;\\n  margin: 0;\\n  padding-left: 0;\\n  font-family: Oswald;\\n}\\n\\n/* Указываем box sizing */\\n*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n}\\n\\n.player {\\n  max-width: 360px;\\n  margin: 0 auto;\\n}\\n.player__timeline {\\n  display: flex;\\n  margin: 5px 0;\\n}\\n.player__timeline-chunk {\\n  width: 100%;\\n  height: 3px;\\n  background: #625f5f;\\n  border-radius: 12px;\\n}\\n.player__timeline-chunk + .player__timeline-chunk {\\n  margin-left: 5px;\\n}\\n.player__timeline .player__timeline-chunk__inner {\\n  height: inherit;\\n  background: #f6f6f6;\\n  border-radius: inherit;\\n}\\n.player__content-wrapper {\\n  position: relative;\\n}\\n.player__content-chunk {\\n  position: relative;\\n  display: none;\\n  height: 650px;\\n  user-select: none;\\n  overflow: hidden;\\n}\\n.player__content-chunk img {\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover;\\n}\\n.player__content-switcher {\\n  position: absolute;\\n  top: 0;\\n  bottom: 0;\\n  z-index: 1;\\n  height: 100%;\\n  width: 30%;\\n}\\n.player__content-switcher--prev {\\n  left: 0;\\n}\\n.player__content-switcher--next {\\n  right: 0;\\n}\\n\\n.player__timeline-chunk_active .player__timeline-chunk__inner,\\n.player__timeline-chunk_active ~ .player__timeline-chunk > .player__timeline-chunk__inner {\\n  width: 0;\\n}\\n\\n.custom-chunk {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  pointer-events: none;\\n}\\n\\n.player__content-chunk.player__content-chunk_active {\\n  display: block;\\n}\\n\\n.watermark {\\n  min-height: 100px;\\n  min-width: 100px;\\n  background: center/contain url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat;\\n}\\n\\n.question-overlay {\\n  min-width: 160px;\\n  max-width: 400px;\\n  min-height: 100px;\\n}\\n\\n.question-overlay .answer {\\n  padding: 0.5rem 1rem;\\n  font-weight: 700;\\n  border: none;\\n}\\n\\n.question-overlay__inner {\\n  display: flex;\\n  justify-content: center;\\n  gap: 5%;\\n}\\n\\n.question-overlay__title {\\n  flex: 1 1 100%;\\n  font-size: 1rem;\\n  text-align: center;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://insta-stories/./src/styles/app.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B0%5D.use%5B2%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://insta-stories/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://insta-stories/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://insta-stories/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/app.scss":
/*!*****************************!*\
  !*** ./src/styles/app.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_app_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./app.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/styles/app.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_app_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_app_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_app_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_app_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://insta-stories/./src/styles/app.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://insta-stories/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://insta-stories/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://insta-stories/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://insta-stories/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://insta-stories/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://insta-stories/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _overlays_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overlays/index */ \"./src/overlays/index.js\");\n/* harmony import */ var _Switcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Switcher */ \"./src/Switcher.js\");\n\r\n\r\n\r\n/**\r\n *\r\n * @param {{\r\n *     target: string,\r\n *     slides: Array<{url: string, alt?: string}>>,\r\n *     delay: number\r\n * }} params - initialization arguments\r\n * 1. target - place for initialization player, css class\r\n * 2. slides - List of player's slides\r\n * 3. delay - Delay for automate switching slides\r\n *\r\n * @return {Element|null}\r\n */\r\n\r\nclass Player {\r\n    /**\r\n     *\r\n     * @type {number}\r\n     */\r\n    delayPerSlide = 2;\r\n\r\n    constructor(params) {\r\n        this.target = document.querySelector(params?.target);\r\n\r\n        if (this.target == null) {\r\n            throw new Error('Player target is not sprecified');\r\n        }\r\n        this.slides = params?.slides;\r\n\r\n        if (!Array.isArray(this.slides)) {\r\n            throw new Error('Player slides should be in array');\r\n        }\r\n\r\n        this.delayPerSlide = params?.delayPerSlide ?? this.delayPerSlide;\r\n        this.switcher = new _Switcher__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.target);\r\n\r\n        this.init();\r\n    }\r\n\r\n    /**\r\n     *\r\n     */\r\n    init() {\r\n        this.target.append(this.renderPlayerLayout());\r\n        this.target.querySelector('.player__content-switcher--prev').addEventListener('click', this.switcher.switchToPrevSlide.bind(this.switcher));\r\n        this.target.querySelector('.player__content-switcher--next').addEventListener('click', this.switcher.switchToNextSlide.bind(this.switcher));\r\n        // this.autoToggle = this.switcher.autoToggleSlide(this.delayPerSlide , 1);\r\n\r\n        this.target.addEventListener('mousedown', () => clearInterval(this.autoToggle));\r\n        this.target.addEventListener('mouseup', () => {\r\n            this.autoToggle = this.switcher.autoToggleSlide(this.delayPerSlide , 1);\r\n        });\r\n    }\r\n\r\n    generateTimelineChunk() {\r\n        const wrapper = document.createDocumentFragment();\r\n\r\n        for (const index of this.slides.keys()) {\r\n            const el = document.createElement('div');\r\n            el.innerHTML = `<div class=\"player__timeline-chunk ${index === 0 ? 'player__timeline-chunk_active' : ''}\">\r\n                                <div class=\"player__timeline-chunk__inner\"></div>\r\n                            </div>`;\r\n\r\n            wrapper.append(el.children[0]);\r\n        }\r\n\r\n        return wrapper;\r\n    }\r\n\r\n    generateContentChunk() {\r\n        const wrapper = document.createDocumentFragment();\r\n\r\n        for (const [index, slide] of this.slides.entries()) {\r\n            let filter = '';\r\n\r\n            if (slide.filters !== undefined) {\r\n                filter = `style=\"filter: ${slide.filters.join(' ')}\"`;\r\n            }\r\n\r\n            const el = document.createElement('div');\r\n            el.innerHTML = `<div class=\"player__content-chunk ${index === 0 ? 'player__content-chunk_active' : ''}\">\r\n                                <img src=\"${slide.url}\" alt=\"${slide.alt || ''}\" class=\"player__content-image\" ${filter}>\r\n                            </div>`;\r\n\r\n            const chunk = el.children[0];\r\n\r\n            chunk.append(this.renderOverlays(slide));\r\n\r\n            wrapper.append(chunk);\r\n        }\r\n\r\n        return wrapper;\r\n    }\r\n\r\n    /**\r\n     *\r\n     * @param slide\r\n     * @returns {DocumentFragment}\r\n     */\r\n\r\n    renderOverlays(slide) {\r\n\r\n        const wrapper = document.createDocumentFragment();\r\n\r\n        if (slide.overlays == null) {\r\n            return wrapper;\r\n        }\r\n\r\n        for (const params of slide.overlays) {\r\n            if(!(params.type in _overlays_index__WEBPACK_IMPORTED_MODULE_0__)) {\r\n                throw new Error(`The specified type of overlay ${params.type} is not defined`);\r\n            }\r\n\r\n            const overlay = new _overlays_index__WEBPACK_IMPORTED_MODULE_0__[params.type.charAt(0).toUpperCase() + params.type.slice(1)](params);\r\n\r\n            wrapper.append(overlay.render());\r\n        }\r\n\r\n        return wrapper;\r\n    }\r\n\r\n    /**\r\n     *\r\n     * @returns {Element}\r\n     */\r\n\r\n    renderPlayerLayout() {\r\n\r\n        const timeline = document.createElement('div');\r\n\r\n        timeline.setAttribute('class', 'player__timeline');\r\n        timeline.append(this.generateTimelineChunk());\r\n\r\n        const content = document.createElement('div');\r\n\r\n        content.setAttribute('class', 'player__content');\r\n        content.append(this.generateContentChunk());\r\n\r\n        const contentWrapper = document.createElement('div');\r\n\r\n        contentWrapper.setAttribute('class', 'player__content-wrapper');\r\n        contentWrapper.innerHTML = `\r\n                     <div class=\"player__content-switcher player__content-switcher--prev\"></div>\r\n                     <div class=\"player__content-switcher player__content-switcher--next\"></div>`;\r\n        contentWrapper.append(content);\r\n\r\n        const player = document.createElement('div');\r\n\r\n        player.setAttribute('class', 'player');\r\n        player.append(timeline);\r\n        player.append(contentWrapper);\r\n\r\n        return player;\r\n    }\r\n}\n\n//# sourceURL=webpack://insta-stories/./src/Player.js?");

/***/ }),

/***/ "./src/Switcher.js":
/*!*************************!*\
  !*** ./src/Switcher.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Switcher)\n/* harmony export */ });\nclass Switcher {\r\n    constructor(root) {\r\n        if (!(root instanceof Element)) {\r\n            throw new Error('The root element should be instance of Element');\r\n        }\r\n\r\n        this.root = root;\r\n    }\r\n\r\n    moveClass(activeClassName, method, pred) {\r\n        const active = this.root.querySelector(`.${activeClassName}`),\r\n            next = active[method];\r\n\r\n        if (pred && pred(active)) {\r\n            return null;\r\n        }\r\n\r\n        if (next) {\r\n            active.classList.remove(activeClassName);\r\n            next.classList.add(activeClassName);\r\n\r\n\r\n            return active;\r\n        }\r\n\r\n        return null;\r\n    }\r\n\r\n\r\n\r\n    switchToNextSlide() {\r\n        this.moveClass('player__content-chunk_active', 'nextElementSibling');\r\n        const elem = this.moveClass('player__timeline-chunk_active', 'nextElementSibling');\r\n\r\n        if (elem) {\r\n            elem.querySelector('.player__timeline-chunk__inner').style.width = '';\r\n        }\r\n    };\r\n\r\n    switchToPrevSlide() {\r\n        const prev = this.moveClass('player__timeline-chunk_active', 'previousElementSibling', (element) => {\r\n            const inner = element.querySelector('.player__timeline-chunk__inner');\r\n            const width = parseFloat(inner.style.width) || 0;\r\n            inner.style.width = '';\r\n\r\n            return width < 20;\r\n        });\r\n\r\n        if (prev) {\r\n            this.moveClass('player__content-chunk_active', 'previousElementSibling');\r\n        }\r\n    };\r\n\r\n    autoToggleSlide(time, step) {\r\n        return setInterval(() => {\r\n            const active = this.root.querySelector('.player__timeline-chunk_active')\r\n                .querySelector('.player__timeline-chunk__inner');\r\n\r\n            let width = parseFloat(active.style.width) || 0;\r\n\r\n            if (width === 100) {\r\n                this.switchToNextSlide()\r\n                return;\r\n            }\r\n\r\n            active.style.width = `${width + step}%`;\r\n\r\n        }, time * 1000 * step / 100);\r\n    };\r\n}\n\n//# sourceURL=webpack://insta-stories/./src/Switcher.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_slide1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/slide1.jpg */ \"./src/assets/slide1.jpg\");\n/* harmony import */ var _assets_slide2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/slide2.jpg */ \"./src/assets/slide2.jpg\");\n/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/app.scss */ \"./src/styles/app.scss\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Player */ \"./src/Player.js\");\n\r\n\r\n\r\n\r\n\r\nnew _Player__WEBPACK_IMPORTED_MODULE_3__.Player({\r\n    target: '.root',\r\n    delayPerSlide: 2,\r\n\r\n    slides: [\r\n        {\r\n            url: _assets_slide1_jpg__WEBPACK_IMPORTED_MODULE_0__,\r\n            alt:'first slide',\r\n            filters: ['blur(5px)' ],\r\n            overlays:[\r\n                {\r\n                    type: 'Text',\r\n                    text: 'Test text',\r\n                    classes: ['watermark'],\r\n\r\n                    styles: {\r\n                        color: 'black',\r\n                        'font-size': '50px',\r\n                        top: '50%',\r\n                        transform:'translate(-50%, -50%)',\r\n                        left: '50%',\r\n                        'text-decoration': 'underline',\r\n                        'text-shadow': '1px 1px #0000'\r\n                    }\r\n                },\r\n                {\r\n                    type: 'Question',\r\n                    question: 'How you doinf?',\r\n                    answers:[\r\n                        'Ok',\r\n                        'Not'\r\n                    ],\r\n\r\n                    styles: {\r\n                        color: 'black',\r\n                        'font-size': '50px',\r\n                        top: '20%',\r\n                        left: '15%',\r\n                        background:'burlywood',\r\n                        'text-shadow': '1px 1px #0000'\r\n                    }\r\n                },\r\n            ]\r\n        },\r\n        {\r\n            url: _assets_slide2_jpg__WEBPACK_IMPORTED_MODULE_1__,\r\n            alt:'second slide',\r\n            overlays: [\r\n                {\r\n                    type: 'Text',\r\n                    text: 'Test text2',\r\n\r\n                    styles: {\r\n                        color: 'red',\r\n                        'font-size': '50px',\r\n                        top: '50%',\r\n                        left: '15%',\r\n                        'font-weight':'bold',\r\n                        'text-shadow': '1px 1px #0000'\r\n                    }\r\n                },\r\n                {\r\n                    type: 'Image',\r\n                    src: _assets_slide1_jpg__WEBPACK_IMPORTED_MODULE_0__,\r\n\r\n                    styles: {\r\n                        width: '150px',\r\n                        height: '150px',\r\n                        'object-fit': 'cover',\r\n                        top: '15%',\r\n                        left: '15%'\r\n                    }\r\n                }\r\n\r\n            ]\r\n        },\r\n        {\r\n            url: _assets_slide1_jpg__WEBPACK_IMPORTED_MODULE_0__,\r\n            alt:'second slide',\r\n            overlays:[\r\n                {\r\n                    type: 'Question',\r\n                    question: 'How you doinf?',\r\n                    answers:[\r\n                        'Ok',\r\n                        'Not'\r\n                    ],\r\n\r\n                    styles: {\r\n                        color: 'black',\r\n                        'font-size': '50px',\r\n                        top: '20%',\r\n                        left: '15%',\r\n                        background:'burlywood',\r\n                        'text-shadow': '1px 1px #0000'\r\n                    }\r\n                },\r\n            ]\r\n        },\r\n        {\r\n            url: _assets_slide2_jpg__WEBPACK_IMPORTED_MODULE_1__,\r\n            alt:'first slide'\r\n        },\r\n        {\r\n            url: _assets_slide1_jpg__WEBPACK_IMPORTED_MODULE_0__,\r\n            alt:'second slide'\r\n        },\r\n    ],\r\n});\r\n\r\n\n\n//# sourceURL=webpack://insta-stories/./src/index.js?");

/***/ }),

/***/ "./src/overlays/Image.js":
/*!*******************************!*\
  !*** ./src/overlays/Image.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Image\": () => (/* binding */ Image)\n/* harmony export */ });\n/* harmony import */ var _Overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Overlay */ \"./src/overlays/Overlay.js\");\n\r\n\r\nclass Image extends _Overlay__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    /**\r\n     * src of image overlay\r\n     */\r\n\r\n    src;\r\n\r\n    /**\r\n     * Alternative text of image\r\n     * @type {string}\r\n     */\r\n    alt = '';\r\n\r\n    constructor(params) {\r\n        super(params);\r\n        this.src = params?.src;\r\n\r\n        if(typeof this.src != 'string') {\r\n            throw new TypeError('URL to the created image overlay is not specified');\r\n        }\r\n\r\n        this.alt = params?.src ?? this.alt;\r\n    }\r\n\r\n    render() {\r\n        const elem = super.render();\r\n\r\n        elem.innerHTML = `<img src=\"${this.src}\" alt=\"${this.alt}\">`;\r\n\r\n        return elem;\r\n    }\r\n}\n\n//# sourceURL=webpack://insta-stories/./src/overlays/Image.js?");

/***/ }),

/***/ "./src/overlays/Overlay.js":
/*!*********************************!*\
  !*** ./src/overlays/Overlay.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Overlay)\n/* harmony export */ });\n/**\r\n * Class representing basic overlay\r\n */\r\nclass Overlay {\r\n\r\n    /**\r\n     * A type of overlay\r\n     * @type {string}\r\n     */\r\n    type;\r\n\r\n    /**\r\n     * Additional classes for overlay\r\n     * @type {[] - string}\r\n     */\r\n    classes = [];\r\n\r\n    /**\r\n     * Additional css slyles for overlay\r\n     * @type {Object<string, string>>}\r\n     */\r\n    styles = {};\r\n\r\n    /**\r\n     * Create an instance of overlay\r\n     * @param {{\r\n     *     type: string,\r\n     *     classes?: string[],\r\n     *     styles?: {Object<string, string>>}\r\n     * }} [params] - overlay options\r\n     */\r\n\r\n    constructor(params) {\r\n        this.type = params?.type;\r\n\r\n        if (typeof this.type != 'string') {\r\n            throw new TypeError('Type of overlay shoud be sprecified');\r\n        }\r\n\r\n        this.classes = params?.classes ?? this.classes;\r\n\r\n        if (!Array.isArray(this.classes)) {\r\n            throw new TypeError('Additional classes should be defined only as array');\r\n        }\r\n\r\n        this.styles = params?.styles ?? this.styles;\r\n\r\n        if (typeof this.styles != 'object') {\r\n            throw new TypeError('Additional styles should be defined only as object');\r\n        }\r\n\r\n    }\r\n\r\n    render() {\r\n        const classes = this.classes.join('');\r\n\r\n        const styles = Object.entries(this.styles)\r\n            .map(el => el.join(':'))\r\n            .join(';');\r\n\r\n        const elem = document.createElement('div');\r\n        elem.innerHTML = `<div class=\"custom-chunk ${classes}\" style=\"${styles}\"></div>`;\r\n\r\n        return elem.children[0];\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://insta-stories/./src/overlays/Overlay.js?");

/***/ }),

/***/ "./src/overlays/Question.js":
/*!**********************************!*\
  !*** ./src/overlays/Question.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Question\": () => (/* binding */ Question)\n/* harmony export */ });\n/* harmony import */ var _Overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Overlay */ \"./src/overlays/Overlay.js\");\n\r\n\r\nclass Question extends _Overlay__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    /**\r\n     *\r\n     * @type {string}\r\n     */\r\n    question;\r\n\r\n    /**\r\n     * Varians of answers\r\n     * @type {string[]}\r\n     */\r\n    variants = ['Yes', 'No'];\r\n\r\n    constructor(params) {\r\n        super(params);\r\n\r\n        this.question = params?.question;\r\n\r\n        if(typeof this.question != 'string') {\r\n            throw new ReferenceError('A question text to the created overlay should be sprecidied');\r\n        }\r\n\r\n        this.variants = params?.variants ?? this.variants;\r\n\r\n        if(this.variants.length === 0) {\r\n            throw new Error('There is should be al least one variant of the answer');\r\n        }\r\n    }\r\n\r\n    /** @override*/\r\n    render() {\r\n        const elem = super.render();\r\n\r\n        elem.innerHTML = `<div class=\"question-overlay\">\r\n                            <p class=\"question-overlay__title\">${this.question}</p>\r\n                                <div class=\"question-overlay__inner\">\r\n                                    ${this.variants.map((label, index) => `<button value=\"${index}\" class=\"answer\">${label}</button>`).join('')}\r\n                                </div>\r\n                         </div>`;\r\n\r\n        return elem;\r\n    }\r\n}\n\n//# sourceURL=webpack://insta-stories/./src/overlays/Question.js?");

/***/ }),

/***/ "./src/overlays/Text.js":
/*!******************************!*\
  !*** ./src/overlays/Text.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Text\": () => (/* binding */ Text)\n/* harmony export */ });\n/* harmony import */ var _Overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Overlay */ \"./src/overlays/Overlay.js\");\n\r\n\r\nclass Text extends _Overlay__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n    /**\r\n     * A content of text overlay\r\n     * @type {string}\r\n     */\r\n    text;\r\n\r\n    constructor(params) {\r\n        super(params);\r\n        this.text = params?.text;\r\n\r\n        if(typeof this.text != 'string') {\r\n            throw new TypeError('A text to the created overlay is not specified');\r\n        }\r\n    }\r\n\r\n    render() {\r\n        const elem = super.render();\r\n\r\n        const textElem = document.createElement('span');\r\n        textElem.textContent = this.text;\r\n\r\n        elem.append(textElem);\r\n        return elem;\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://insta-stories/./src/overlays/Text.js?");

/***/ }),

/***/ "./src/overlays/index.js":
/*!*******************************!*\
  !*** ./src/overlays/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Image\": () => (/* reexport safe */ _Image__WEBPACK_IMPORTED_MODULE_2__.Image),\n/* harmony export */   \"Question\": () => (/* reexport safe */ _Question__WEBPACK_IMPORTED_MODULE_0__.Question),\n/* harmony export */   \"Text\": () => (/* reexport safe */ _Text__WEBPACK_IMPORTED_MODULE_1__.Text)\n/* harmony export */ });\n/* harmony import */ var _Question__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Question */ \"./src/overlays/Question.js\");\n/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Text */ \"./src/overlays/Text.js\");\n/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Image */ \"./src/overlays/Image.js\");\n\r\n\r\n\n\n//# sourceURL=webpack://insta-stories/./src/overlays/index.js?");

/***/ }),

/***/ "./src/assets/blus.png":
/*!*****************************!*\
  !*** ./src/assets/blus.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"blus.png\";\n\n//# sourceURL=webpack://insta-stories/./src/assets/blus.png?");

/***/ }),

/***/ "./src/assets/slide1.jpg":
/*!*******************************!*\
  !*** ./src/assets/slide1.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"slide1.jpg\";\n\n//# sourceURL=webpack://insta-stories/./src/assets/slide1.jpg?");

/***/ }),

/***/ "./src/assets/slide2.jpg":
/*!*******************************!*\
  !*** ./src/assets/slide2.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"slide2.jpg\";\n\n//# sourceURL=webpack://insta-stories/./src/assets/slide2.jpg?");

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