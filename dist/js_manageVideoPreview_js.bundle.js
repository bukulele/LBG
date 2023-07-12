/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["js_manageVideoPreview_js"],{

/***/ "./js/manageVideoPreview.js":
/*!**********************************!*\
  !*** ./js/manageVideoPreview.js ***!
  \**********************************/
/***/ (() => {

eval("var videosPreviewContainers = document.querySelectorAll('#videosBlock .videos-block__container .video-title__container');\n\nconsole.log(videosPreviewContainers);\nfor (let previewContainer of videosPreviewContainers) {\n  console.log(previewContainer);\n  previewContainer.addEventListener('mouseover', showLoader);\n  previewContainer.addEventListener('mouseout', hideLoader);\n}\nfunction showLoader(event) {\n  console.log('showLoader');\n  // if (event.target.className.includes('video-title__container')) {\n  //   fetch('../assets/temp/097 - That\\'s My Mommy (1955)_New.mov')\n  //     .then(res => {\n        let videoElement = document.createElement('video');\n        videoElement.src = '../assets/temp/097 - That\\'s My Mommy (1955)_New.mov';\n        videoElement.autoplay = \"true\";\n        videoElement.muted = \"true\";\n        event.target.insertAdjacentElement('afterbegin', videoElement);\n        // console.log(res);\n      // });\n    // event.target.\n    event.target.classList.add('preview-loading');\n  // }\n}\n\nfunction hideLoader(event) {\n  // if (event.target.className.includes('video-title__container')) {\n    let videoElement = event.target.querySelector('video');\n    videoElement.remove();\n    event.target.classList.remove('preview-loading');\n  // }\n}\n\n// videosPreviewContainer.addEventListener('mouseover', showLoader);\n// videosPreviewContainer.addEventListener('mouseout', hideLoader);\n\n\n//# sourceURL=webpack:///./js/manageVideoPreview.js?");

/***/ })

}]);