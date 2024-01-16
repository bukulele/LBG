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

/***/ "./src/components/dropdown.html":
/*!**************************************!*\
  !*** ./src/components/dropdown.html ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<div class=\\\"dropdown__container\\\">\\n    <ul class=\\\"dropdown__list\\\">\\n<!--render the list of links here-->\\n    </ul>\\n</div>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./src/components/dropdown.html?");

/***/ }),

/***/ "./src/components/fulfillFilters.js":
/*!******************************************!*\
  !*** ./src/components/fulfillFilters.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dropdown_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown.html */ \"./src/components/dropdown.html\");\n\n\nlet allFilterSelectors = document.querySelectorAll('div[data-selector]');\n\nfor (let filter of allFilterSelectors) {\n  let linksArray = JSON.parse(filter.dataset.selector);\n\n  filter.insertAdjacentHTML('beforeend', _dropdown_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  let dropdownContainerList = filter.querySelector('.dropdown__list');\n  // let listElement = document.createElement('ul');\n  let selectorChoice = filter.querySelector('.selector__choice p');\n  selectorChoice.innerHTML = linksArray[0];\n  for (let link of linksArray) {\n    dropdownContainerList.insertAdjacentHTML('beforeend', `\n      <li class=\"selector__option\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.9463 23.223L1.5943 19.67L1.4253 19.634C1.2233 19.549 1.0823 19.349 1.0823 19.115L1.0813 10.45C0.9703 10.18 1.0843 9.86498 1.3503 9.73198L8.9263 5.94398C9.0853 5.86498 9.2713 5.86498 9.4303 5.94496L16.7853 9.63796C16.9053 9.69895 16.9943 9.79696 17.0453 9.91096C17.1113 10.001 17.1513 10.113 17.1513 10.238V19.069C17.1513 19.284 17.0293 19.479 16.8373 19.574L9.4393 23.221C9.2843 23.298 9.1023 23.298 8.9463 23.223ZM9.7043 21.837L16.0263 18.72V11.146L9.7043 14.287V21.837ZM8.5783 21.797V14.291L2.2073 11.229L2.2063 18.717L8.5783 21.797ZM10.8553 19.377C10.6203 18.93 10.8403 18.275 11.3443 17.918C11.8473 17.56 12.4473 17.632 12.6813 18.079C12.9163 18.526 12.6963 19.181 12.1923 19.538C11.6893 19.896 11.0893 19.824 10.8553 19.377ZM4.9413 17.348C4.4373 16.991 4.2173 16.336 4.4513 15.889C4.6843 15.442 5.2843 15.37 5.7873 15.728C6.2913 16.085 6.5113 16.74 6.2773 17.187C6.0443 17.634 5.4443 17.706 4.9413 17.348ZM18.0953 17.048V15.923H18.8723L21.8203 9.85098H18.2293C18.0313 9.85098 17.8113 9.50998 17.6663 9.28798C17.5573 9.12098 17.1783 8.72798 17.4483 8.72798L21.8713 8.72596L18.8773 2.21796H11.2563L13.5403 6.82696C13.5523 6.85296 13.5603 6.87295 13.5633 6.88996L13.5593 6.88696L11.9013 6.05696L10.3523 2.92996L9.37033 4.75796L7.60033 5.63996L9.90333 1.38896C10.0013 1.20695 10.1913 1.09296 10.3993 1.09296H19.2383C19.4573 1.09296 19.6573 1.22095 19.7483 1.41995L23.2803 9.09598C23.3933 9.34298 23.3133 9.62998 23.1033 9.78398L19.7313 16.731C19.6363 16.925 19.4403 17.048 19.2253 17.048H18.0953ZM13.3683 15.53C13.1343 15.083 13.3543 14.428 13.8593 14.071C14.3633 13.713 14.9633 13.785 15.1963 14.232C15.4303 14.679 15.2103 15.334 14.7053 15.691C14.2013 16.049 13.6013 15.977 13.3683 15.53ZM9.1373 13.311L15.3993 10.202L9.1773 7.07698L2.7993 10.266L9.1373 13.311ZM8.1393 10.503C7.8943 10.081 8.1603 9.59098 8.7313 9.41098C9.3023 9.23098 9.9673 9.42698 10.2113 9.84898C10.4563 10.271 10.1903 10.761 9.6193 10.941C9.0483 11.121 8.3833 10.925 8.1393 10.503ZM11.2933 10.503C11.0483 10.081 11.3143 9.59098 11.8863 9.41098C12.4583 9.23098 13.1233 9.42698 13.3673 9.84898C13.6123 10.271 13.3463 10.761 12.7743 10.941C12.2023 11.121 11.5373 10.925 11.2933 10.503ZM4.9963 10.502C4.7513 10.08 5.0173 9.59 5.5883 9.41001C6.1593 9.23001 6.8243 9.426 7.0683 9.84801C7.3133 10.27 7.0473 10.76 6.4763 10.94C5.9053 11.12 5.2403 10.924 4.9963 10.502ZM17.8993 7.04901C17.5233 6.56001 17.5733 5.95801 18.0103 5.70801C18.4473 5.45901 19.1093 5.65401 19.4853 6.14301C19.8613 6.63201 19.8113 7.23401 19.3743 7.48401C18.9373 7.73301 18.2753 7.53801 17.8993 7.04901ZM13.9613 4.67901C13.5853 4.19001 13.6343 3.58801 14.0723 3.33801C14.5103 3.08901 15.1733 3.28401 15.5493 3.77301C15.9253 4.26201 15.8763 4.86401 15.4383 5.11401C15.0003 5.36301 14.3373 5.16801 13.9613 4.67901Z\" fill=\"currentColor\"/>\n        </svg>\n        <p>${link}</p>\n      </li>\n    `);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/components/fulfillFilters.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/components/fulfillFilters.js");
/******/ 	
/******/ })()
;