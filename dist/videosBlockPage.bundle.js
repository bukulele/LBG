/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/manageVideoPreview.js":
/*!**********************************!*\
  !*** ./js/manageVideoPreview.js ***!
  \**********************************/
/***/ (() => {

eval("var videosPreviewContainer = document.querySelector('#videosBlock .videos-block__container');\nlet videoTimerId;\nfunction showLoader(event) {\n  if (event.target.className.includes('video-title__container')) {\n    event.target.classList.add('preview-loading');\n    videoTimerId = setTimeout(() => {\n      let videoElement = document.createElement('video');\n      videoElement.src = './dist/videos/097 - That\\'s My Mommy (1955)_New.mov';\n      videoElement.autoplay = true;\n      videoElement.muted = true;\n      videoElement.playsinline = true;\n      videoElement.controls = false;\n      videoElement.disablepictureinpicture = true;\n      videoElement.preload = 'none';\n      videoElement.addEventListener('loadeddata', () => {\n        hideLoader(event.target);\n    });\n      event.target.querySelector('img').style.visibility = 'hidden';\n      event.target.querySelector('.video-title__block-over').style.visibility = 'hidden';\n      event.target.insertAdjacentElement('afterbegin', videoElement);\n      if (videoElement.pictureInPictureElement) {\n        videoElement.exitPictureInPicture();\n      }\n    }, 1000);\n  }\n}\n\nfunction hideLoader(target) {\n    target.classList.remove('preview-loading');\n}\n\nfunction removeVideo(event) {\n  if (event.target.className.includes('video-title__container')) {\n    let videoElement = event.target.querySelector('video');\n    if (videoTimerId) {\n      clearTimeout(videoTimerId);\n    }\n    if (videoElement) {\n      // videoElement.removeEventListener('loadeddata');\n      videoElement.remove();\n      event.target.querySelector('img').style.visibility = 'visible';\n      event.target.querySelector('.video-title__block-over').style.visibility = 'visible';\n    }\n    hideLoader(event.target);\n  }\n}\n\nvideosPreviewContainer.addEventListener('mouseover', showLoader);\nvideosPreviewContainer.addEventListener('mouseout', removeVideo);\n\n\n//# sourceURL=webpack:///./js/manageVideoPreview.js?");

/***/ }),

/***/ "./src/components/banner2.html":
/*!*************************************!*\
  !*** ./src/components/banner2.html ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<div class=\\\"banner-block__container\\\">\\n  <div class=\\\"banner-block__image-container banner-block__image-container--bg2\\\"></div>\\n  <div class=\\\"banner-block__content banner-block__content--padding-small\\\">\\n    <div class=\\\"banner-block__content--vertical-s\\\">\\n      <div class=\\\"banner-block__section\\\">\\n        <ul class=\\\"banner-block__list\\\">\\n          <li>100% Exclusive Content</li>\\n          <li>Real amateur girls</li>\\n        </ul>\\n        <p>Not your typical pornstars that you see everywhere, but your average everyday next door girls!</p>\\n      </div>\\n      <div class=\\\"banner-block__section\\\">\\n        <ul class=\\\"banner-block__list\\\">\\n          <li>High Quality</li>\\n          <li>Regular Updates</li>\\n          <li>Access to bonus content</li>\\n        </ul>\\n      </div>\\n      <a class=\\\"btn btn--banner\\\" href=\\\"\\\"><p><span>GET</span> FULL ACCESS</p>\\n        <div class=\\\"banner-block__chevrons\\\">\\n          <svg viewBox=\\\"0 0 14 8\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n            <path fill-rule=\\\"evenodd\\\" clip-rule=\\\"evenodd\\\" d=\\\"M0 1.12285L0.983755 0.150098L7.00918 5.93296L7.65184 5.31636L7.6483 5.31943L13.0014 0.181201L14 1.13994C12.5205 2.56009 8.38983 6.52485 7.00918 7.8501C5.98305 6.86582 6.98305 7.82569 0 1.12285Z\\\" fill=\\\"currentColor\\\"/>\\n          </svg>\\n          <svg viewBox=\\\"0 0 14 8\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n            <path fill-rule=\\\"evenodd\\\" clip-rule=\\\"evenodd\\\" d=\\\"M0 1.12285L0.983755 0.150098L7.00918 5.93296L7.65184 5.31636L7.6483 5.31943L13.0014 0.181201L14 1.13994C12.5205 2.56009 8.38983 6.52485 7.00918 7.8501C5.98305 6.86582 6.98305 7.82569 0 1.12285Z\\\" fill=\\\"currentColor\\\"/>\\n          </svg>\\n          <svg viewBox=\\\"0 0 14 8\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n            <path fill-rule=\\\"evenodd\\\" clip-rule=\\\"evenodd\\\" d=\\\"M0 1.12285L0.983755 0.150098L7.00918 5.93296L7.65184 5.31636L7.6483 5.31943L13.0014 0.181201L14 1.13994C12.5205 2.56009 8.38983 6.52485 7.00918 7.8501C5.98305 6.86582 6.98305 7.82569 0 1.12285Z\\\" fill=\\\"currentColor\\\"/>\\n          </svg>\\n        </div>\\n      </a>\\n    </div>\\n  </div>\\n</div>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./src/components/banner2.html?");

/***/ }),

/***/ "./src/components/messageBlock.html":
/*!******************************************!*\
  !*** ./src/components/messageBlock.html ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<div class=\\\"message-block__container message-block__container--background-red message-block__container--dimensions\\\">\\n    <p class=\\\"message-block__intro\\\">Привет, <span>cyveiliog2</span>, нам нужно ваше внимание на минуту:</p>\\n    <p class=\\\"message-block__text\\\">We have exciting news upcoming very soon, and we want to make sure you don't miss them!<br>\\n        Would this be the correct email to contact you at cyveiliog@gmail.com?<br>\\n        So cyveiliog2, let's be in touch? ( We promise we won't bug you + you can unsubscribe anytime ) ..</p>\\n    <div class=\\\"message-block__buttons\\\">\\n        <a href=\\\"\\\" class=\\\"btn btn--classic btn--pink\\\">COUNT ME IN</a>\\n        <a href=\\\"\\\" class=\\\"btn btn--classic btn--red\\\">NO</a>\\n    </div>\\n</div>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./src/components/messageBlock.html?");

/***/ }),

/***/ "./src/components/singleNewsBlock.html":
/*!*********************************************!*\
  !*** ./src/components/singleNewsBlock.html ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<div class=\\\"single-news-block__container single-news-block__container--background-gray single-news-block__container--dimensions\\\">\\n    <div class=\\\"single-news-block__upper-container\\\">\\n        <p class=\\\"single-news-block__intro\\\">From June there will be 5 new models! Check out their photos!</p>\\n<!--        RENDER HERE CLOSE BUTTON -->\\n    </div>\\n    <div class=\\\"single-news-block__text-container\\\">\\n        <p class=\\\"single-news-block__text single-news-block__text--opacity\\\">We have been looking for great models for a long time. They are all so different. And so we decided to select 5 finalists of the casting. We will be happy to show you their photos and videos of the casting with their participation!\\n            <br>But for the time being, we will not announce the names;) You can see the first videos with them in a week! Buy access at the best prices and enjoy watching!\\n            <br>Remember, these are the new girls from the streets!\\n            Hey! just look at these beauties:\\n<!--            RENDER HERE READ MORE BUTTON-->\\n        </p>\\n<!--        RENDER HERE SHADOW BLOCK-->\\n    </div>\\n<!--    RENDER HERE READ MORE BUTTON, VIEW COMMENTS BUTTON OR PHOTOS AND VIDEO-->\\n    <div class=\\\"single-news-block__buttons single-news-block__buttons--bordered\\\">\\n        <a href=\\\"\\\" class=\\\"btn btn--link\\\">\\n            <div class=\\\"single-news-block__icon-container\\\">\\n                <svg viewBox=\\\"0 0 19 17\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n                    <path d=\\\"M17.417 2.66668H13.8545V1.12293C13.8581 0.927343 13.7925 0.736761 13.6695 0.584717C13.5464 0.432672 13.3736 0.328908 13.1816 0.29168C13.0681 0.274458 12.9523 0.28211 12.842 0.314108C12.7318 0.346105 12.6299 0.401681 12.5433 0.476986C12.4567 0.55229 12.3875 0.645523 12.3405 0.750224C12.2935 0.854925 12.2699 0.968591 12.2712 1.08335V2.66668H6.72949V1.12293C6.73307 0.927343 6.66755 0.736761 6.54447 0.584717C6.42138 0.432672 6.24862 0.328908 6.05658 0.29168C5.94311 0.274458 5.82726 0.28211 5.71705 0.314108C5.60684 0.346105 5.5049 0.401681 5.4183 0.476986C5.3317 0.55229 5.26251 0.645523 5.21552 0.750224C5.16852 0.854925 5.14486 0.968591 5.14616 1.08335V2.66668H1.58366C1.3737 2.66668 1.17233 2.75009 1.02387 2.89855C0.8754 3.04702 0.791992 3.24838 0.791992 3.45835V16.125C0.791992 16.335 0.8754 16.5363 1.02387 16.6848C1.17233 16.8333 1.3737 16.9167 1.58366 16.9167H17.417C17.627 16.9167 17.8283 16.8333 17.9768 16.6848C18.1253 16.5363 18.2087 16.335 18.2087 16.125V3.45835C18.2087 3.24838 18.1253 3.04702 17.9768 2.89855C17.8283 2.75009 17.627 2.66668 17.417 2.66668ZM16.6253 15.3333H2.37533V7.41668H16.6253V15.3333ZM16.6253 5.83335H2.37533V4.25001H16.6253V5.83335Z\\\" fill=\\\"currentColor\\\"/>\\n                    <path d=\\\"M5.54199 9H3.95866C3.52143 9 3.16699 9.35444 3.16699 9.79167V11.375C3.16699 11.8122 3.52143 12.1667 3.95866 12.1667H5.54199C5.97922 12.1667 6.33366 11.8122 6.33366 11.375V9.79167C6.33366 9.35444 5.97922 9 5.54199 9Z\\\" fill=\\\"currentColor\\\"/>\\n                    <path d=\\\"M15.042 9H13.4587C13.0214 9 12.667 9.35444 12.667 9.79167V11.375C12.667 11.8122 13.0214 12.1667 13.4587 12.1667H15.042C15.4792 12.1667 15.8337 11.8122 15.8337 11.375V9.79167C15.8337 9.35444 15.4792 9 15.042 9Z\\\" fill=\\\"currentColor\\\"/>\\n                    <path d=\\\"M10.292 9H8.70866C8.27143 9 7.91699 9.35444 7.91699 9.79167V11.375C7.91699 11.8122 8.27143 12.1667 8.70866 12.1667H10.292C10.7292 12.1667 11.0837 11.8122 11.0837 11.375V9.79167C11.0837 9.35444 10.7292 9 10.292 9Z\\\" fill=\\\"currentColor\\\"/>\\n                </svg>\\n            </div>\\n            <p>March 24th, 2023</p></a>\\n        <a href=\\\"\\\" class=\\\"btn btn--link\\\">\\n            <div class=\\\"single-news-block__icon-container\\\">\\n                <svg viewBox=\\\"0 0 19 20\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n                    <g clip-path=\\\"url(#clip0_6_5496)\\\">\\n                        <path d=\\\"M19.0002 13.6814C19.0002 11.9002 17.2189 10.3564 15.2002 9.7627C13.6564 11.5439 10.5689 12.6127 7.6002 12.6127C7.48145 12.6127 7.24395 12.6127 7.1252 12.6127C7.1252 12.6127 7.1252 12.6127 7.00645 12.6127C6.8877 12.9689 6.8877 13.2064 6.8877 13.5627C6.8877 15.9377 9.5002 17.8377 12.8252 17.8377C13.0627 17.8377 13.3002 17.8377 13.5377 17.8377C14.0127 18.4314 15.5564 19.5002 17.5752 19.5002C17.5752 19.5002 16.6252 19.0252 16.6252 17.3627C16.6252 16.6502 19.0002 15.2252 19.0002 13.6814Z\\\" fill=\\\"currentColor\\\"/>\\n                        <path d=\\\"M4.0625 10.7125V10.4722L3.87485 10.3221C3.81411 10.2735 3.75087 10.2232 3.68554 10.1712C3.0993 9.7048 2.34417 9.10403 1.70591 8.40195C0.987718 7.61194 0.5 6.78072 0.5 5.9625C0.5 4.69118 1.26412 3.46156 2.60178 2.52799C3.93525 1.59734 5.79266 1 7.8375 1C9.8814 1 11.6755 1.5967 12.9463 2.52215C14.2183 3.44848 14.9375 4.67741 14.9375 5.9625C14.9375 7.30722 14.1884 8.56499 12.9038 9.49041C11.6199 10.4154 9.82975 10.9817 7.85178 10.9252L7.84464 10.925H7.8375H7.83541H7.83333H7.83124H7.82915H7.82706H7.82498H7.82289H7.8208H7.81871H7.81663H7.81454H7.81245H7.81037H7.80828H7.80619H7.80411H7.80202H7.79993H7.79785H7.79576H7.79367H7.79159H7.7895H7.78741H7.78533H7.78324H7.78116H7.77907H7.77699H7.7749H7.77282H7.77073H7.76865H7.76656H7.76448H7.76239H7.76031H7.75823H7.75614H7.75406H7.75198H7.74989H7.74781H7.74573H7.74365H7.74157H7.73948H7.7374H7.73532H7.73324H7.73116H7.72908H7.727H7.72492H7.72284H7.72076H7.71868H7.7166H7.71453H7.71245H7.71037H7.70829H7.70621H7.70414H7.70206H7.69999H7.69791H7.69584H7.69376H7.69169H7.68961H7.68754H7.68546H7.68339H7.68132H7.67925H7.67717H7.6751H7.67303H7.67096H7.66889H7.66682H7.66475H7.66268H7.66061H7.65855H7.65648H7.65441H7.65235H7.65028H7.64821H7.64615H7.64408H7.64202H7.63996H7.63789H7.63583H7.63377H7.63171H7.62964H7.62758H7.62552H7.62346H7.62141H7.61935H7.61729H7.61523H7.61318H7.61112H7.60906H7.60701H7.60495H7.6029H7.60085H7.59879H7.59674H7.59469H7.59264H7.59059H7.58854H7.58649H7.58444H7.5824H7.58035H7.5783H7.57626H7.57421H7.57217H7.57012H7.56808H7.56604H7.564H7.56196H7.55992H7.55788H7.55584H7.5538H7.55176H7.54973H7.54769H7.54566H7.54362H7.54159H7.53956H7.53752H7.53549H7.53346H7.53143H7.5294H7.52738H7.52535H7.52332H7.5213H7.51927H7.51725H7.51522H7.5132H7.51118H7.50916H7.50714H7.50512H7.5031H7.50109H7.49907H7.49705H7.49504H7.49302H7.49101H7.489H7.48699H7.48498H7.48297H7.48096H7.47895H7.47695H7.47494H7.47294H7.47093H7.46893H7.46693H7.46493H7.46293H7.46093H7.45893H7.45693H7.45494H7.45294H7.45095H7.44895H7.44696H7.44497H7.44298H7.44099H7.439H7.43702H7.43503H7.43305H7.43106H7.42908H7.4271H7.42512H7.42314H7.42116H7.41918H7.41721H7.41523H7.41326H7.41128H7.40931H7.40734H7.40537H7.4034H7.40143H7.39947H7.3975H7.39554H7.39357H7.39161H7.38965H7.38769H7.38573H7.38378H7.38182H7.37987H7.37791H7.37596H7.37401H7.37206H7.37011H7.36816H7.36622H7.36427H7.36233H7.36038H7.35844H7.3565H7.35456H7.35263H7.35069H7.34875H7.34682H7.34489H7.34296H7.34103H7.3391H7.33717H7.33524H7.33332H7.3314H7.32947H7.32755H7.32563H7.32372H7.3218H7.31988H7.31797H7.31606H7.31415H7.31223H7.31033H7.30842H7.30651H7.30461H7.30271H7.3008H7.2989H7.297H7.29511H7.29321H7.29132H7.28942H7.28753H7.28564H7.28375H7.28186H7.27998H7.27809H7.27621H7.27433H7.27245H7.27057H7.26869H7.26682H7.26494H7.26307H7.2612H7.25933H7.25746H7.2556H7.25373H7.25187H7.25001H7.24815H7.24629H7.24443H7.24257H7.24072H7.23887H7.23702H7.23517H7.23332H7.23147H7.22963H7.22779H7.22595H7.22411H7.22227H7.22043H7.2186H7.21676H7.21493H7.2131H7.21127H7.20945H7.20762H7.2058H7.20398H7.20216H7.20034H7.19852H7.19671H7.1949H7.19308H7.19127H7.18947H7.18766H7.18586H7.18405H7.18225H7.18045H7.17866H7.17686H7.17507H7.17327H7.17148H7.16969H7.16791H7.16612H7.16434H7.16256H7.16078H7.159H7.15722H7.15545H7.15368H7.15191H7.15014H7.14837H7.14661H7.14484H7.14308H7.14132H7.13956H7.13781H7.13606H7.1343H7.13255H7.13081H7.12906H7.12731H7.12557H7.12383H7.12209H7.12036H7.11862H7.11689H7.11516H7.11343H7.1117H7.10998H7.10825H7.10653H7.10481H7.1031H7.10138H7.09967H7.09796H7.09625H7.09454H7.09284H7.09113H7.08943H7.08773H7.08604H7.08434H7.08265H7.08096H7.07927H7.07758H7.0759H7.07421H7.07253H7.07085H7.06918H7.0675H7.06583H7.06416H7.06249H7.06083H7.05916H7.0575H7.05584H7.05419H7.05253H7.05088H7.04923H7.04758H7.04593H7.04429H7.04264H7.041H7.03937H7.03773H7.0361H7.03446H7.03284H7.03121H7.02958H7.02796H7.02634H7.02472H7.02311H7.02149H7.01988H7.01827H7.01667H7.01506H7.01346H7.01186H7.01026H7.00867H7.00707H7.00548H7.00389H7.00231H7.00072H6.99914H6.99756H6.99599H6.99441H6.99284H6.99127H6.9897H6.98813H6.98657H6.98501H6.98345H6.9819H6.98034H6.97879H6.97724H6.9757H6.97415H6.97261H6.97107H6.96954H6.968H6.96647H6.96494H6.96341H6.96189H6.96037H6.95885H6.95733H6.95582H6.9543H6.95279H6.95129H6.94978H6.94828H6.94678H6.94528H6.94379H6.9423H6.94081H6.93932H6.93783H6.93635H6.93487H6.93339H6.93192H6.93045H6.92898H6.92751H6.92605H6.92458H6.92313H6.92167H6.92022H6.91876H6.91732H6.91587H6.91443H6.91298H6.91155H6.91011H6.90868H6.90725H6.90582H6.90439H6.90297H6.90155H6.90013H6.89872H6.89731H6.8959H6.89449H6.89309H6.89169H6.89029H6.88889H6.8875H6.65753L6.50787 11.0996C6.00254 11.6892 5.02428 12.56 3.39859 12.9094C3.76481 12.391 4.0625 11.6713 4.0625 10.7125Z\\\" stroke=\\\"currentColor\\\"/>\\n                    </g>\\n                    <defs>\\n                        <clipPath id=\\\"clip0_6_5496\\\">\\n                            <rect width=\\\"19\\\" height=\\\"19\\\" fill=\\\"white\\\" transform=\\\"translate(0 0.5)\\\"/>\\n                        </clipPath>\\n                    </defs>\\n                </svg>\\n            </div>\\n            <p>Comments (3)</p>\\n        </a>\\n    </div>\\n</div>\\n\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./src/components/singleNewsBlock.html?");

/***/ }),

/***/ "./src/components/videoTitle.html":
/*!****************************************!*\
  !*** ./src/components/videoTitle.html ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<a href=\\\"video.html\\\" class=\\\"video-title__container\\\">\\n  <div class=\\\"video-title__block-over\\\">\\n    <p class=\\\"video-title__name\\\">Strip Red Light Green Light With Delilah Minx</p>\\n    <div class=\\\"video-title__info\\\">\\n      <div class=\\\"video-title__video-length\\\">\\n        <div class=\\\"video-length__icon-container\\\">\\n          <svg width=\\\"16\\\" height=\\\"16\\\" viewBox=\\\"0 0 17 17\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n            <g clip-path=\\\"url(#clip0_5_207)\\\">\\n              <path d=\\\"M8.58594 0.448242C7.00369 0.448242 5.45697 0.917434 4.14138 1.79649C2.82579 2.67554 1.80041 3.92497 1.1949 5.38678C0.589404 6.84858 0.430977 8.45712 0.739659 10.009C1.04834 11.5608 1.81027 12.9863 2.92909 14.1051C4.04791 15.2239 5.47337 15.9858 7.02522 16.2945C8.57707 16.6032 10.1856 16.4448 11.6474 15.8393C13.1092 15.2338 14.3586 14.2084 15.2377 12.8928C16.1167 11.5772 16.5859 10.0305 16.5859 8.44824C16.5836 6.32722 15.7401 4.29372 14.2403 2.79392C12.7405 1.29413 10.707 0.450536 8.58594 0.448242V0.448242ZM8.58594 15.1149C7.2674 15.1149 5.97847 14.7239 4.88214 13.9914C3.78581 13.2588 2.93133 12.2176 2.42674 10.9995C1.92216 9.78129 1.79014 8.44085 2.04737 7.14764C2.30461 5.85443 2.93955 4.66655 3.8719 3.7342C4.80425 2.80185 5.99213 2.16691 7.28534 1.90967C8.57855 1.65244 9.91899 1.78446 11.1372 2.28905C12.3553 2.79363 13.3965 3.64811 14.1291 4.74444C14.8616 5.84077 15.2526 7.1297 15.2526 8.44824C15.2507 10.2158 14.5477 11.9103 13.2978 13.1601C12.048 14.41 10.3535 15.113 8.58594 15.1149Z\\\" fill=\\\"currentColor\\\"/>\\n              <path d=\\\"M8.58558 4.44824C8.40876 4.44824 8.2392 4.51848 8.11417 4.6435C7.98915 4.76853 7.91891 4.9381 7.91891 5.11491V7.99824L5.67158 9.40623C5.52129 9.50012 5.41445 9.64986 5.37457 9.82252C5.33468 9.99518 5.36502 10.1766 5.45891 10.3269C5.5528 10.4772 5.70254 10.584 5.8752 10.6239C6.04786 10.6638 6.22929 10.6335 6.37958 10.5396L8.93958 8.93957C9.0363 8.87897 9.11584 8.79455 9.17059 8.69439C9.22534 8.59424 9.25345 8.4817 9.25224 8.36757V5.11491C9.25224 4.9381 9.182 4.76853 9.05698 4.6435C8.93196 4.51848 8.76239 4.44824 8.58558 4.44824Z\\\" fill=\\\"currentColor\\\"/>\\n            </g>\\n            <defs>\\n              <clipPath id=\\\"clip0_5_207\\\">\\n                <rect width=\\\"16\\\" height=\\\"16\\\" fill=\\\"white\\\" transform=\\\"translate(0.585938 0.448242)\\\"/>\\n              </clipPath>\\n            </defs>\\n          </svg>\\n        </div>\\n        <p>14:36</p>\\n      </div>\\n      <div class=\\\"video-title__date\\\"><p>March 24th, 2023</p></div>\\n      <div class=\\\"video-title__icons\\\">\\n        <div class=\\\"video-title__icon-container\\\">\\n          <svg viewBox=\\\"0 0 32 32\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n            <path fill-rule=\\\"evenodd\\\" clip-rule=\\\"evenodd\\\" d=\\\"M5.37136 27.4587C4.94603 27.2774 4.74603 26.784 4.9287 26.3587L5.7527 24.4174L3.43803 23.432C3.01136 23.252 2.81136 22.7587 2.9927 22.3334C3.17403 21.908 3.66736 21.708 4.09136 21.8894L6.4087 22.8747L8.37936 18.24C6.3087 17.3014 4.68203 15.4427 4.13403 13.0574C3.1967 8.99869 5.73003 4.94536 9.79003 4.00669C12.0394 3.48936 14.2887 4.03736 16.006 5.31869C17.722 4.03736 19.9714 3.48936 22.222 4.00669C26.282 4.94536 28.8154 8.99869 27.878 13.0574C27.3287 15.4427 25.702 17.3014 23.6314 18.24L25.602 22.8747L27.9207 21.8894C28.3447 21.708 28.838 21.908 29.0194 22.3334C29.2007 22.7587 29.0007 23.252 28.574 23.432L26.258 24.4174L27.0834 26.3587C27.266 26.784 27.066 27.2774 26.6407 27.4587C26.2154 27.64 25.722 27.44 25.5407 27.016L24.714 25.0734L22.4007 26.056C21.9754 26.2374 21.482 26.0374 21.302 25.612C21.1207 25.1867 21.3194 24.6934 21.746 24.5134L24.058 23.5307L22.03 18.7587C21.002 18.9694 19.9154 18.968 18.8274 18.716C17.7727 18.4734 16.8194 18.02 16.006 17.4107C15.19 18.02 14.238 18.4734 13.1847 18.716C12.0967 18.968 11.0087 18.9694 9.9807 18.7587L7.9527 23.5307L10.266 24.5134C10.6927 24.6934 10.8914 25.1867 10.71 25.612C10.53 26.0374 10.0367 26.2374 9.61136 26.056L7.2967 25.0734L6.47136 27.016C6.29003 27.44 5.7967 27.64 5.37136 27.4587ZM12.8074 17.0814C13.526 16.916 14.1834 16.6254 14.762 16.236C13.2807 14.4814 12.6154 12.0747 13.1714 9.66536C13.45 8.45469 14.0074 7.37869 14.758 6.49069C13.4567 5.61736 11.8127 5.26403 10.1674 5.64269C7.01003 6.37069 5.03937 9.52536 5.7687 12.6814C6.4967 15.8374 9.65003 17.8094 12.8074 17.0814ZM26.2434 12.6814C26.9727 9.52536 25.002 6.37069 21.8447 5.64269C20.198 5.26403 18.554 5.61736 17.2527 6.49069C18.0034 7.37869 18.5607 8.45469 18.8407 9.66536C19.3954 12.0747 18.7287 14.4814 17.2487 16.236C17.8274 16.6254 18.4847 16.916 19.2047 17.0814C22.362 17.8094 25.5154 15.8374 26.2434 12.6814ZM17.206 10.0427C16.9927 9.12003 16.5727 8.29869 16.006 7.61469C15.438 8.29869 15.018 9.12003 14.806 10.0427C14.3767 11.8947 14.8794 13.7467 16.006 15.1094C17.1314 13.7467 17.634 11.8947 17.206 10.0427Z\\\" fill=\\\"currentColor\\\"/>\\n          </svg>\\n        </div>\\n        <div class=\\\"video-title__icon-container\\\">\\n          <svg viewBox=\\\"0 0 32 32\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n            <path fill-rule=\\\"evenodd\\\" clip-rule=\\\"evenodd\\\" d=\\\"M8.84045 29.8573L2.29378 23.3107C2.01511 23.0333 2.01644 22.58 2.29911 22.3053L14.5804 10.28C15.5564 9.30134 17.5911 8.74801 19.0071 8.37601L19.4338 8.26267L24.0004 4.71201L24.0471 4.38001C24.2538 3.57734 24.7644 2.61601 25.5578 2.34267C25.8644 2.23467 26.2058 2.23734 26.5351 2.38667L26.6058 2.436L26.6605 2.44801C26.7458 2.48134 26.8258 2.53333 26.8951 2.60267L29.7005 5.408C29.8431 5.54934 29.9631 5.712 30.0458 5.896C30.1925 6.22534 30.1951 6.56534 30.0898 6.872C29.8138 7.67201 28.8565 8.18134 28.0525 8.38534L27.7031 8.43467L24.0125 12.856L23.9151 13.2267C23.5618 14.568 22.9671 16.7333 21.9991 17.7013L9.84045 29.8573C9.56578 30.1347 9.11645 30.1347 8.84045 29.8573ZM19.2804 29.8573L17.4111 27.9907C17.4084 27.988 17.4058 27.9853 17.4031 27.9827L17.3924 27.9707C17.3818 27.96 17.3724 27.9507 17.3324 27.9027C17.3124 27.8827 17.2724 27.8173 17.2431 27.7467C17.2364 27.7373 17.2324 27.7307 17.2324 27.7213C17.2004 27.64 17.1844 27.5507 17.1898 27.5533C17.1858 27.4627 17.1858 27.464 17.1858 27.4653C17.1858 27.3693 17.2031 27.2867 17.2351 27.2093C17.2351 27.2053 17.2364 27.2027 17.2391 27.2C17.2791 27.1053 17.3271 27.036 17.3924 26.9707L19.2804 25.0827C19.5551 24.8053 20.0044 24.8053 20.2804 25.0827C20.5578 25.3587 20.5578 25.808 20.2804 26.0827L19.6391 26.7253L20.1071 26.676C26.2471 25.8147 29.1404 18.7947 26.7178 14.6147C26.5218 14.276 26.6378 13.8427 26.9738 13.6467C27.3124 13.4507 27.7458 13.5653 27.9418 13.9027C30.9724 19.132 27.1858 27.6347 19.5764 28.1547L20.2804 28.8573C20.5578 29.1333 20.5578 29.5827 20.2804 29.8573C20.0044 30.1347 19.5551 30.1347 19.2804 29.8573ZM9.34178 28.3573L20.9964 16.7013C21.6164 16.0813 22.0671 14.6147 22.4511 13.2107L22.4484 13.2094L19.0657 9.82937C17.5657 10.2347 16.2191 10.6414 15.5764 11.2854L3.80044 22.816L9.34178 28.3573ZM3.13778 14.38C2.10444 8.42534 8.60178 1.76534 15.9218 3.91067L15.5058 3.00534C15.3418 2.65067 15.4965 2.22934 15.8511 2.06667C16.2058 1.90267 16.6271 2.05737 16.7898 2.41334L17.9071 4.83867C17.9071 4.83997 17.9071 4.84137 17.9138 4.868C17.9191 4.8653 17.9191 4.8653 17.9525 4.97467C17.9832 5.02134 17.9885 5.188 17.9645 5.24267C17.9458 5.32934 17.9472 5.31867 17.9325 5.352C17.9445 5.336 17.9485 5.31867 17.9045 5.43867C17.9298 5.396 17.8885 5.48668 17.8085 5.58001C17.8005 5.59734 17.7885 5.61201 17.7712 5.62401C17.7178 5.68668 17.6458 5.73867 17.5618 5.77734L15.1378 6.89334C14.7832 7.05734 14.3618 6.90264 14.1992 6.54801C14.0352 6.19201 14.1912 5.77068 14.5458 5.60934L15.3698 5.22934L14.9112 5.11334C8.85248 3.79467 3.70582 9.37734 4.53382 14.1373C4.60049 14.5227 4.34182 14.8893 3.95782 14.956C3.57248 15.0227 3.20445 14.7653 3.13778 14.38ZM23.0458 11.8067L26.4284 7.75467L24.6644 5.98934L20.4818 9.24267L23.0458 11.8067ZM28.5751 6.60401L28.7058 6.41734L26.0058 3.71867L25.8324 3.85334C25.6764 4.05734 25.4978 4.40267 25.4111 4.73734C25.4244 4.74801 25.4351 4.76001 25.4484 4.77067L27.6938 7.01867L27.6951 7.01997C28.0271 6.93597 28.3724 6.76001 28.5751 6.60401Z\\\" fill=\\\"currentColor\\\"/>\\n          </svg>\\n        </div>\\n        <div class=\\\"video-title__icon-container\\\">\\n          <svg viewBox=\\\"0 0 32 32\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n            <path fill-rule=\\\"evenodd\\\" clip-rule=\\\"evenodd\\\" d=\\\"M15.462 22.6346C15.3434 22.7013 15.2207 22.7479 15.0954 22.7773C14.2634 22.9773 13.2887 22.4359 12.8354 21.6573C10.902 22.4186 8.77936 22.3839 6.88736 22.1253C6.45536 22.0653 6.11802 21.8359 5.88602 21.5519C5.66069 21.2773 5.53002 20.9479 5.46469 20.6373C5.34202 20.0546 5.40736 19.2813 5.85269 18.7653C6.12736 18.4479 6.53669 18.2493 7.01936 18.2946C7.67936 18.3573 8.43802 18.4506 9.16336 18.4666C9.42602 18.4733 9.67536 18.4679 9.91002 18.4506C9.62736 18.1533 9.41269 17.7986 9.34736 17.4159C9.29002 17.0826 9.34469 16.7186 9.57536 16.3933L9.65002 16.3026L9.67136 16.2813C4.96469 15.1466 1.34602 12.0213 1.26469 7.85326C1.20069 4.60659 4.16202 0.95726 8.11002 1.02259C12.2994 1.09192 15.422 4.66126 16.5367 9.25726L16.5327 9.26126L16.5407 9.25456C17.3314 8.60123 18.3327 8.83989 18.926 9.30789C19.2487 9.56389 19.518 9.93856 19.6314 10.3706C20.0714 10.4639 20.4634 10.6799 20.7714 10.9946C21.0714 11.3039 21.274 11.6906 21.3687 12.1146C22.0114 12.2492 22.5407 12.7652 22.8167 13.2572C23.1034 13.7719 23.2567 14.5626 22.7954 15.1932L22.594 15.4146L22.5767 15.4319L22.582 15.4279C27.0967 16.5546 30.5567 19.5452 30.7193 23.5786C30.8487 26.8252 27.9607 30.5346 24.0113 30.5479C19.866 30.5612 16.6967 27.1333 15.462 22.6346ZM29.2194 23.6386C29.0874 20.3333 25.99 17.5506 21.3447 16.6933L20.7714 17.2799L20.7727 17.2786C23.4033 18.1333 25.606 19.4266 26.8087 20.9466C28.29 22.82 28.1993 25.008 25.89 26.748C24.0153 28.1586 22.0927 27.5613 20.6327 25.9666C19.4327 24.66 18.454 22.6386 17.7833 20.3426L16.7047 21.4466L16.7114 21.4399C16.7154 21.4559 16.7207 21.4733 16.7247 21.4906C17.7074 26.0426 20.622 29.0586 24.0074 29.0479C27.0247 29.0373 29.3194 26.1066 29.2194 23.6386ZM24.9874 25.5493C26.614 24.3239 26.5927 23.0906 25.6327 21.8773C24.59 20.5613 22.4127 19.2866 19.5927 18.4879L19.0034 19.0919L18.9994 19.0959C19.6327 21.6293 20.6234 23.7386 21.738 24.9533C22.8314 26.1453 23.878 26.3853 24.9874 25.5493ZM14.73 21.3186L21.5567 14.3359C21.5927 14.3026 21.6474 14.2386 21.5074 13.9893C21.386 13.7733 21.222 13.6533 21.1234 13.6066L21.0834 13.5919L14.266 20.5706C14.2287 20.6079 14.19 20.6413 14.1394 20.6746L14.086 20.7706C14.1007 20.8493 14.1527 20.9759 14.322 21.1226C14.49 21.2693 14.6327 21.3093 14.73 21.3186ZM11.8314 20.4213C11.7927 20.3906 11.7567 20.3586 11.7207 20.3253C11.5354 20.1573 11.37 19.9559 11.2434 19.7266C10.5607 19.9386 9.81402 19.9826 9.13002 19.9666C8.53936 19.9546 7.96469 19.8973 7.41669 19.8426L6.95936 19.7973L6.94069 19.8519L6.92336 19.9333C6.90202 20.0533 6.90469 20.1946 6.93269 20.3293C6.96069 20.4653 7.00869 20.5559 7.04735 20.6039L7.09135 20.6386C8.71269 20.8613 10.3594 20.8826 11.8314 20.4213ZM13.2367 19.4759L19.9287 12.6293C19.918 12.3706 19.822 12.1719 19.6967 12.0413C19.61 11.9533 19.494 11.8813 19.346 11.8439C19.3433 11.8479 19.3393 11.8519 19.3367 11.8546L12.5101 18.8453L12.4967 18.8586C12.5301 18.9853 12.6074 19.1066 12.7301 19.2159C12.8381 19.3146 12.9674 19.3906 13.0981 19.4386L13.2367 19.4759ZM11.4714 17.7599L18.1647 10.9066L18.1834 10.8519C18.2034 10.7319 18.1527 10.6106 17.998 10.4866C17.8234 10.3506 17.6714 10.3413 17.574 10.3706L17.5087 10.4039L10.8514 17.2213L10.8927 17.2906C10.938 17.3559 11.0114 17.4413 11.122 17.5346C11.2287 17.6266 11.3314 17.6906 11.414 17.7333L11.4714 17.7599ZM10.8794 15.0439L11.4354 14.4746C8.66469 13.5679 6.34202 12.1773 5.11802 10.5626C3.67669 8.65993 3.81136 6.47459 6.15402 4.78259C8.05802 3.41059 9.96869 4.04659 11.3967 5.66926C12.6167 7.05726 13.5847 9.21059 14.2047 11.6386L15.322 10.4946C15.27 10.4159 15.2327 10.3253 15.214 10.2266C14.322 5.65193 11.47 2.57859 8.08469 2.52259C5.06869 2.47326 2.71669 5.35593 2.76469 7.82259C2.83002 11.1799 5.95802 14.0559 10.698 14.9679C10.766 14.9813 10.83 15.0039 10.89 15.0333L10.8794 15.0439ZM12.6114 13.2693L12.9687 12.9053C12.958 12.8759 12.95 12.8466 12.9434 12.8146C12.3674 10.1613 11.3954 7.93726 10.2714 6.66126C9.20203 5.44792 8.15936 5.18659 7.03269 5.99992C5.38203 7.19059 5.37936 8.42259 6.31403 9.65592C7.36069 11.0386 9.62203 12.3986 12.5607 13.2506C12.5767 13.2559 12.594 13.2626 12.6114 13.2693Z\\\" fill=\\\"currentColor\\\"/>\\n          </svg>\\n        </div>\\n      </div>\\n    </div>\\n  </div>\\n</a>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./src/components/videoTitle.html?");

/***/ }),

/***/ "./src/components/videosFilters.html":
/*!*******************************************!*\
  !*** ./src/components/videosFilters.html ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<div class=\\\"videos-block__filters filters-block\\\">\\n  <div class=\\\"videos-block__selector\\\">\\n    <label for=\\\"type\\\">Sort videos by: </label>\\n    <select id=\\\"type\\\" name=\\\"type\\\">\\n      <option>Latest</option>\\n      <option>Most popular</option>\\n      <option>Newest</option>\\n    </select>\\n  </div>\\n\\n  <div class=\\\"videos-block__selector\\\">\\n    <label for=\\\"members\\\">Members: </label>\\n    <select id=\\\"members\\\" name=\\\"members\\\">\\n      <option>All</option>\\n      <option>None</option>\\n      <option>Some</option>\\n    </select>\\n  </div>\\n\\n  <div class=\\\"videos-block__selector\\\">\\n    <label for=\\\"game\\\">Game type: </label>\\n    <select id=\\\"game\\\" name=\\\"game\\\">\\n      <option>Cards</option>\\n      <option>Dice</option>\\n      <option>Sport</option>\\n    </select>\\n  </div>\\n\\n  <div class=\\\"videos-block__selector\\\">\\n    <label for=\\\"punishment\\\">Type of punishment: </label>\\n    <select id=\\\"punishment\\\" name=\\\"punishment\\\">\\n      <option>Spanking</option>\\n      <option>Fingering</option>\\n      <option>Slapping</option>\\n    </select>\\n  </div>\\n</div>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./src/components/videosFilters.html?");

/***/ }),

/***/ "./src/components/videosBlockPage.js":
/*!*******************************************!*\
  !*** ./src/components/videosBlockPage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_temp_image_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/temp/image 1.png */ \"./assets/temp/image 1.png\");\n/* harmony import */ var _assets_temp_image_2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/temp/image 2.png */ \"./assets/temp/image 2.png\");\n/* harmony import */ var _assets_temp_image_3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/temp/image 3.png */ \"./assets/temp/image 3.png\");\n/* harmony import */ var _assets_temp_image_4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/temp/image 4.png */ \"./assets/temp/image 4.png\");\n/* harmony import */ var _assets_temp_image_5_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/temp/image 5.png */ \"./assets/temp/image 5.png\");\n/* harmony import */ var _assets_temp_image_6_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/temp/image 6.png */ \"./assets/temp/image 6.png\");\n/* harmony import */ var _videoTitle_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./videoTitle.html */ \"./src/components/videoTitle.html\");\n/* harmony import */ var _banner2_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./banner2.html */ \"./src/components/banner2.html\");\n/* harmony import */ var _messageBlock_html__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./messageBlock.html */ \"./src/components/messageBlock.html\");\n/* harmony import */ var _videosFilters_html__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./videosFilters.html */ \"./src/components/videosFilters.html\");\n/* harmony import */ var _singleNewsBlock_html__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./singleNewsBlock.html */ \"./src/components/singleNewsBlock.html\");\n/* harmony import */ var _assets_temp_097_That_s_My_Mommy_1955_New_mov__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/temp/097 - That's My Mommy (1955)_New.mov */ \"./assets/temp/097 - That's My Mommy (1955)_New.mov\");\n/* harmony import */ var _js_manageVideoPreview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../js/manageVideoPreview */ \"./js/manageVideoPreview.js\");\n/* harmony import */ var _js_manageVideoPreview__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_js_manageVideoPreview__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst videos = [_assets_temp_image_1_png__WEBPACK_IMPORTED_MODULE_0__, _assets_temp_image_2_png__WEBPACK_IMPORTED_MODULE_1__, _assets_temp_image_3_png__WEBPACK_IMPORTED_MODULE_2__, _assets_temp_image_4_png__WEBPACK_IMPORTED_MODULE_3__, _assets_temp_image_5_png__WEBPACK_IMPORTED_MODULE_4__, _assets_temp_image_6_png__WEBPACK_IMPORTED_MODULE_5__];\n\nlet videosBlockTitles = document.getElementById('videosBlockTitles');\n\nlet newsItemContainer = '<div id=\"newsItemBlock\" class=\"news-item-block\"></div>';\nvideosBlockTitles.insertAdjacentHTML('beforebegin', newsItemContainer);\n\nlet newsItemBlock = document.getElementById('newsItemBlock');\nnewsItemBlock.insertAdjacentHTML('afterbegin', _singleNewsBlock_html__WEBPACK_IMPORTED_MODULE_10__[\"default\"]);\nnewsItemBlock.querySelector('.single-news-block__text').insertAdjacentHTML('beforeend', '<a href=\"onenews.html\" class=\"single-news-block__read-more\">Read more</a>');\nnewsItemBlock.querySelector('.single-news-block__upper-container').insertAdjacentHTML('beforeend', `\n      <div class=\"single-news-block__close\">\n          <svg viewBox=\"0 0 22 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path d=\"M4.1936 4.1936C4.45145 3.93582 4.80112 3.79102 5.16572 3.79102C5.53032 3.79102 5.88 3.93582 6.13785 4.1936L10.9998 9.0556L15.8618 4.1936C16.1212 3.94313 16.4685 3.80454 16.829 3.80767C17.1895 3.8108 17.5344 3.95541 17.7893 4.21035C18.0443 4.46528 18.1889 4.81015 18.192 5.17067C18.1952 5.53119 18.0566 5.87852 17.8061 6.13785L12.9441 10.9998L17.8061 15.8618C18.0566 16.1212 18.1952 16.4685 18.192 16.829C18.1889 17.1895 18.0443 17.5344 17.7893 17.7893C17.5344 18.0443 17.1895 18.1889 16.829 18.192C16.4685 18.1952 16.1212 18.0566 15.8618 17.8061L10.9998 12.9441L6.13785 17.8061C5.87852 18.0566 5.53119 18.1952 5.17067 18.192C4.81015 18.1889 4.46528 18.0443 4.21035 17.7893C3.95541 17.5344 3.8108 17.1895 3.80767 16.829C3.80454 16.4685 3.94313 16.1212 4.1936 15.8618L9.0556 10.9998L4.1936 6.13785C3.93582 5.88 3.79102 5.53032 3.79102 5.16572C3.79102 4.80112 3.93582 4.45145 4.1936 4.1936Z\" fill=\"currentColor\"/>\n          </svg>\n      </div>\n`);\n\nnewsItemBlock.insertAdjacentHTML('beforebegin', _videosFilters_html__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\n\nfor (let video of videos) {\n  videosBlockTitles.insertAdjacentHTML('beforeend', _videoTitle_html__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n  let imageElement = document.createElement('img');\n  imageElement.src = video;\n  videosBlockTitles.lastElementChild.insertAdjacentElement('afterbegin', imageElement);\n}\n\nlet message = '<div id=\"message\" class=\"message-block\"></div>';\nvideosBlockTitles.insertAdjacentHTML('beforeend', message);\ndocument.getElementById('message').innerHTML = _messageBlock_html__WEBPACK_IMPORTED_MODULE_8__[\"default\"];\n\nfor (let video of videos) {\n  videosBlockTitles.insertAdjacentHTML('beforeend', _videoTitle_html__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n  let imageElement = document.createElement('img');\n  imageElement.src = video;\n  videosBlockTitles.lastElementChild.insertAdjacentElement('afterbegin', imageElement);\n}\nlet banner2Container = '<div id=\"banner_2\" class=\"banner-block\"></div>';\n\nvideosBlockTitles.insertAdjacentHTML('beforeend', banner2Container);\ndocument.getElementById('banner_2').innerHTML = _banner2_html__WEBPACK_IMPORTED_MODULE_7__[\"default\"];\n\nfor (let video of videos) {\n  videosBlockTitles.insertAdjacentHTML('beforeend', _videoTitle_html__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n  let imageElement = document.createElement('img');\n  imageElement.src = video;\n  videosBlockTitles.lastElementChild.insertAdjacentElement('afterbegin', imageElement);\n}\nfor (let video of videos) {\n  videosBlockTitles.insertAdjacentHTML('beforeend', _videoTitle_html__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n  let imageElement = document.createElement('img');\n  imageElement.src = video;\n  videosBlockTitles.lastElementChild.insertAdjacentElement('afterbegin', imageElement);\n}\n\n\n//# sourceURL=webpack:///./src/components/videosBlockPage.js?");

/***/ }),

/***/ "./assets/temp/097 - That's My Mommy (1955)_New.mov":
/*!**********************************************************!*\
  !*** ./assets/temp/097 - That's My Mommy (1955)_New.mov ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"videos/097 - That's My Mommy (1955)_New.mov\";\n\n//# sourceURL=webpack:///./assets/temp/097_-_That's_My_Mommy_(1955)_New.mov?");

/***/ }),

/***/ "./assets/temp/image 1.png":
/*!*********************************!*\
  !*** ./assets/temp/image 1.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/image 1.png\";\n\n//# sourceURL=webpack:///./assets/temp/image_1.png?");

/***/ }),

/***/ "./assets/temp/image 2.png":
/*!*********************************!*\
  !*** ./assets/temp/image 2.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/image 2.png\";\n\n//# sourceURL=webpack:///./assets/temp/image_2.png?");

/***/ }),

/***/ "./assets/temp/image 3.png":
/*!*********************************!*\
  !*** ./assets/temp/image 3.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/image 3.png\";\n\n//# sourceURL=webpack:///./assets/temp/image_3.png?");

/***/ }),

/***/ "./assets/temp/image 4.png":
/*!*********************************!*\
  !*** ./assets/temp/image 4.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/image 4.png\";\n\n//# sourceURL=webpack:///./assets/temp/image_4.png?");

/***/ }),

/***/ "./assets/temp/image 5.png":
/*!*********************************!*\
  !*** ./assets/temp/image 5.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/image 5.png\";\n\n//# sourceURL=webpack:///./assets/temp/image_5.png?");

/***/ }),

/***/ "./assets/temp/image 6.png":
/*!*********************************!*\
  !*** ./assets/temp/image 6.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/image 6.png\";\n\n//# sourceURL=webpack:///./assets/temp/image_6.png?");

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
/******/ 		__webpack_require__.p = "./dist/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/components/videosBlockPage.js");
/******/ 	
/******/ })()
;