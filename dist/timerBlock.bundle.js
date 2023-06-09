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

/***/ "./src/components/sliderElement.html":
/*!*******************************************!*\
  !*** ./src/components/sliderElement.html ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<a class=\\\"slider-element__container\\\" href=\\\"\\\">\\n  <div class=\\\"slider-element__block-over\\\">\\n    <p class=\\\"slider-element__name\\\">Strip Red Light Green Light With Delilah Minx</p>\\n    <div class=\\\"slider-element__info\\\">\\n      <div class=\\\"slider-element__videos-number\\\"><p>51 videos</p></div>\\n    </div>\\n  </div>\\n</a>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./src/components/sliderElement.html?");

/***/ }),

/***/ "./src/components/timerBlock.js":
/*!**************************************!*\
  !*** ./src/components/timerBlock.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_temp_image_15_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/temp/image 15.png */ \"./assets/temp/image 15.png\");\n/* harmony import */ var _assets_temp_image_16_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/temp/image 16.png */ \"./assets/temp/image 16.png\");\n/* harmony import */ var _assets_temp_image_17_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/temp/image 17.png */ \"./assets/temp/image 17.png\");\n/* harmony import */ var _assets_temp_image_18_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/temp/image 18.png */ \"./assets/temp/image 18.png\");\n/* harmony import */ var _assets_temp_image_19_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/temp/image 19.png */ \"./assets/temp/image 19.png\");\n/* harmony import */ var _sliderElement_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sliderElement.html */ \"./src/components/sliderElement.html\");\n\n\n\n\n\n\n\nconst screenshots = [_assets_temp_image_16_png__WEBPACK_IMPORTED_MODULE_1__, _assets_temp_image_17_png__WEBPACK_IMPORTED_MODULE_2__, _assets_temp_image_18_png__WEBPACK_IMPORTED_MODULE_3__, _assets_temp_image_19_png__WEBPACK_IMPORTED_MODULE_4__];\n\nlet mainVideoContainer = document.querySelector('.timer-block .timer-block__main-video');\nlet screenshotsContainer = document.querySelector('.timer-block .timer-block__videos-container');\n\nlet mainVideoImage = document.createElement('img');\nmainVideoImage.src = _assets_temp_image_15_png__WEBPACK_IMPORTED_MODULE_0__;\n\nmainVideoContainer.insertAdjacentElement('afterbegin', mainVideoImage);\nfulfillScreenshots(screenshotsContainer, screenshots);\n\nfunction fulfillScreenshots (elem, screenshots) {\n  for (let screenshot of screenshots) {\n    let imageElement = document.createElement('img');\n    imageElement.src = screenshot;\n    elem.insertAdjacentElement('beforeend', imageElement);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/components/timerBlock.js?");

/***/ }),

/***/ "./assets/temp/image 15.png":
/*!**********************************!*\
  !*** ./assets/temp/image 15.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/image 15.png\";\n\n//# sourceURL=webpack:///./assets/temp/image_15.png?");

/***/ }),

/***/ "./assets/temp/image 16.png":
/*!**********************************!*\
  !*** ./assets/temp/image 16.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/image 16.png\";\n\n//# sourceURL=webpack:///./assets/temp/image_16.png?");

/***/ }),

/***/ "./assets/temp/image 17.png":
/*!**********************************!*\
  !*** ./assets/temp/image 17.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/image 17.png\";\n\n//# sourceURL=webpack:///./assets/temp/image_17.png?");

/***/ }),

/***/ "./assets/temp/image 18.png":
/*!**********************************!*\
  !*** ./assets/temp/image 18.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/image 18.png\";\n\n//# sourceURL=webpack:///./assets/temp/image_18.png?");

/***/ }),

/***/ "./assets/temp/image 19.png":
/*!**********************************!*\
  !*** ./assets/temp/image 19.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/image 19.png\";\n\n//# sourceURL=webpack:///./assets/temp/image_19.png?");

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
/******/ 			// no module.id needed
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
/******/ 		__webpack_require__.p = "./dist/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/components/timerBlock.js");
/******/ 	
/******/ })()
;