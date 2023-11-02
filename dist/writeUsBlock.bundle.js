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

/***/ "./src/components/benefitsBanner.html":
/*!********************************************!*\
  !*** ./src/components/benefitsBanner.html ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<div class=\\\"benefits-banner__container\\\">\\n  <p class=\\\"benefits-banner__header\\\">\\n<!--    RENDER HERE THE HEADER FOR BANNER OR REMOVE THIS ELEMENT-->\\n  </p>\\n  <ul class=\\\"benefits-banner__list\\\">\\n    <li>100% Exclusive Content</li>\\n    <li>Real amateur girls</li>\\n    <li>Members submit video ideas</li>\\n    <li>High Quality</li>\\n    <li>Regular Updates</li>\\n    <li>Access to bonus content</li>\\n  </ul>\\n  <p class=\\\"benefits-banner__text\\\">Not your typical pornstars that you see everywhere, but your average everyday next door girls!</p>\\n  <p class=\\\"benefits-banner__promo\\\">24/7 Support Day and Night</p>\\n</div>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./src/components/benefitsBanner.html?");

/***/ }),

/***/ "./src/components/writeUsBlock.js":
/*!****************************************!*\
  !*** ./src/components/writeUsBlock.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _benefitsBanner_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./benefitsBanner.html */ \"./src/components/benefitsBanner.html\");\n\n\nlet targetContainer = document.querySelector('.write-us-block__group .write-us-block__half:last-of-type');\n\ntargetContainer.innerHTML = _benefitsBanner_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\nlet benefitsBannerHeader = targetContainer.querySelector('.benefits-banner__header');\nbenefitsBannerHeader.innerHTML = 'Member benefits:';\n\n\n//# sourceURL=webpack:///./src/components/writeUsBlock.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/components/writeUsBlock.js");
/******/ 	
/******/ })()
;