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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<a class=\\\"slider-element__container\\\" href=\\\"\\\">\\n<!--  RENDER IMAGE HERE-->\\n  <div class=\\\"slider-element__block-over\\\">\\n    <!--  REMOVE slider-element__block-over IF PHOTO SLIDER-->\\n    <p class=\\\"slider-element__name\\\">Strip Red Light Green Light With Delilah Minx</p>\\n    <div class=\\\"slider-element__info\\\">\\n      <div class=\\\"slider-element__videos-number\\\"><p>51 videos</p></div>\\n    </div>\\n  </div>\\n</a>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./src/components/sliderElement.html?");

/***/ }),

/***/ "./src/components/sliderBlockPhotos.js":
/*!*********************************************!*\
  !*** ./src/components/sliderBlockPhotos.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_temp_image_26_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/temp/image 26.png */ \"./assets/temp/image 26.png\");\n/* harmony import */ var _assets_temp_image_27_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/temp/image 27.png */ \"./assets/temp/image 27.png\");\n/* harmony import */ var _assets_temp_image_28_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/temp/image 28.png */ \"./assets/temp/image 28.png\");\n/* harmony import */ var _assets_temp_image_29_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/temp/image 29.png */ \"./assets/temp/image 29.png\");\n/* harmony import */ var _assets_temp_image_30_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/temp/image 30.png */ \"./assets/temp/image 30.png\");\n/* harmony import */ var _assets_temp_image_31_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/temp/image 31.png */ \"./assets/temp/image 31.png\");\n/* harmony import */ var _assets_temp_image_32_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/temp/image 32.png */ \"./assets/temp/image 32.png\");\n/* harmony import */ var _assets_temp_image_33_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/temp/image 33.png */ \"./assets/temp/image 33.png\");\n/* harmony import */ var _sliderElement_html__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sliderElement.html */ \"./src/components/sliderElement.html\");\n\n\n\n\n\n\n\n\n\n\nconst pictures = [_assets_temp_image_26_png__WEBPACK_IMPORTED_MODULE_0__, _assets_temp_image_27_png__WEBPACK_IMPORTED_MODULE_1__, _assets_temp_image_28_png__WEBPACK_IMPORTED_MODULE_2__, _assets_temp_image_29_png__WEBPACK_IMPORTED_MODULE_3__, _assets_temp_image_30_png__WEBPACK_IMPORTED_MODULE_4__, _assets_temp_image_31_png__WEBPACK_IMPORTED_MODULE_5__, _assets_temp_image_32_png__WEBPACK_IMPORTED_MODULE_6__, _assets_temp_image_33_png__WEBPACK_IMPORTED_MODULE_7__, _assets_temp_image_26_png__WEBPACK_IMPORTED_MODULE_0__, _assets_temp_image_27_png__WEBPACK_IMPORTED_MODULE_1__, _assets_temp_image_28_png__WEBPACK_IMPORTED_MODULE_2__];\n\nlet sliderBlockSlider_1 = document.querySelector('#sliderBlock_1 .slider-block__slider');\nsliderBlockSlider_1.setAttribute('data-gallery-images', JSON.stringify(pictures));\n\nfulfillSlider(sliderBlockSlider_1, pictures);\n\nfunction fulfillSlider (elem, slides) {\n  for (let slide of slides) {\n    elem.insertAdjacentHTML('beforeend', _sliderElement_html__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\n    let imageElement = document.createElement('img');\n    imageElement.src = slide;\n    imageElement.setAttribute('data-gallery-open-image', '');\n    elem.lastElementChild.insertAdjacentElement('afterbegin', imageElement);\n\n    if (elem.closest('.slider-photo')) {\n      let slideBlockOver = elem.querySelector('.slider-element__block-over');\n      slideBlockOver.remove();\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/components/sliderBlockPhotos.js?");

/***/ }),

/***/ "./assets/temp/image 26.png":
/*!**********************************!*\
  !*** ./assets/temp/image 26.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/image 26.png\";\n\n//# sourceURL=webpack:///./assets/temp/image_26.png?");

/***/ }),

/***/ "./assets/temp/image 27.png":
/*!**********************************!*\
  !*** ./assets/temp/image 27.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/image 27.png\";\n\n//# sourceURL=webpack:///./assets/temp/image_27.png?");

/***/ }),

/***/ "./assets/temp/image 28.png":
/*!**********************************!*\
  !*** ./assets/temp/image 28.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/image 28.png\";\n\n//# sourceURL=webpack:///./assets/temp/image_28.png?");

/***/ }),

/***/ "./assets/temp/image 29.png":
/*!**********************************!*\
  !*** ./assets/temp/image 29.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/image 29.png\";\n\n//# sourceURL=webpack:///./assets/temp/image_29.png?");

/***/ }),

/***/ "./assets/temp/image 30.png":
/*!**********************************!*\
  !*** ./assets/temp/image 30.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/image 30.png\";\n\n//# sourceURL=webpack:///./assets/temp/image_30.png?");

/***/ }),

/***/ "./assets/temp/image 31.png":
/*!**********************************!*\
  !*** ./assets/temp/image 31.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/image 31.png\";\n\n//# sourceURL=webpack:///./assets/temp/image_31.png?");

/***/ }),

/***/ "./assets/temp/image 32.png":
/*!**********************************!*\
  !*** ./assets/temp/image 32.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/image 32.png\";\n\n//# sourceURL=webpack:///./assets/temp/image_32.png?");

/***/ }),

/***/ "./assets/temp/image 33.png":
/*!**********************************!*\
  !*** ./assets/temp/image 33.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/image 33.png\";\n\n//# sourceURL=webpack:///./assets/temp/image_33.png?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/components/sliderBlockPhotos.js");
/******/ 	
/******/ })()
;