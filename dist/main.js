/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/chocolateOliveOilCookies.jpg":
/*!*************************************************!*\
  !*** ./src/assets/chocolateOliveOilCookies.jpg ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"7eba4fb0bbd69840f436373831b67f2e.jpg\");\n\n//# sourceURL=webpack:///./src/assets/chocolateOliveOilCookies.jpg?");

/***/ }),

/***/ "./src/assets/oysters.jpg":
/*!********************************!*\
  !*** ./src/assets/oysters.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"2377d2f1e6bcb67668a356abfafc25a1.jpg\");\n\n//# sourceURL=webpack:///./src/assets/oysters.jpg?");

/***/ }),

/***/ "./src/assets/pizza.jpg":
/*!******************************!*\
  !*** ./src/assets/pizza.jpg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"592d28aca090ace262af20609d3f8dae.jpg\");\n\n//# sourceURL=webpack:///./src/assets/pizza.jpg?");

/***/ }),

/***/ "./src/assets/sausageEggplantFried.jpg":
/*!*********************************************!*\
  !*** ./src/assets/sausageEggplantFried.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"dfd6a977db9d7577f07f7470c9e59543.jpg\");\n\n//# sourceURL=webpack:///./src/assets/sausageEggplantFried.jpg?");

/***/ }),

/***/ "./src/assets/steaksalad.jpg":
/*!***********************************!*\
  !*** ./src/assets/steaksalad.jpg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"4f8d196928bdbc35b8653405c3ff3d57.jpg\");\n\n//# sourceURL=webpack:///./src/assets/steaksalad.jpg?");

/***/ }),

/***/ "./src/composePageContent.js":
/*!***********************************!*\
  !*** ./src/composePageContent.js ***!
  \***********************************/
/*! exports provided: composePageContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"composePageContent\", function() { return composePageContent; });\n/* harmony import */ var _createContentComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createContentComponent */ \"./src/createContentComponent.js\");\n/* harmony import */ var _createMenuCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createMenuCard */ \"./src/createMenuCard.js\");\n\n\n\nlet contentDiv = document.getElementById(\"content\");\n\nconst composePageContent = (contentObject, page) => {\n    if(page === \"menu\"){\n        for(let menuItem of contentObject){\n            let newMenuCard = Object(_createMenuCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(menuItem);\n            contentDiv.appendChild(newMenuCard);\n        }\n    }\n    else if(page === \"home\"){\n        for(let contentElement in contentObject){\n            let newElement = Object(_createContentComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(contentElement,contentObject[contentElement]);\n            contentDiv.appendChild(newElement);\n        }\n    }\n    return contentDiv;\n}\n\n\n\n\n\n//# sourceURL=webpack:///./src/composePageContent.js?");

/***/ }),

/***/ "./src/createContentComponent.js":
/*!***************************************!*\
  !*** ./src/createContentComponent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst createComponent = (htmlType, value) => {\n\n    const element = document.createElement(htmlType);\n    \n    if(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(htmlType)){\n        element.textContent  = value;\n    } else if (htmlType === 'img'){\n        element.src = value[0];\n        element.style.height = \"400px\"\n    } else if (['p', 'address1', 'address2'].includes(htmlType)) {\n\n        for (let i = 0; i< value.length-1; i++){\n            const extra = document.createElement(htmlType);\n            extra.textContent = value[i];\n            parent.appendChild(extra);\n        }\n        element.textContent = value[value.length - 1];\n    } else {\n        console.error('UNKNOWN PROP TYPE')\n    }\n    return element;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (createComponent);\n\n\n//# sourceURL=webpack:///./src/createContentComponent.js?");

/***/ }),

/***/ "./src/createMenuCard.js":
/*!*******************************!*\
  !*** ./src/createMenuCard.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createContentComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createContentComponent */ \"./src/createContentComponent.js\");\n\n\nfunction createMenuCard(menuItem) {\n\n    const card = document.createElement(\"div\");\n\n    for (let element in menuItem){\n        console.log(element);\n        let newElement = Object(_createContentComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element,menuItem[element]);\n        card.appendChild(newElement);\n    }\n\n    return card;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (createMenuCard);\n\n\n//# sourceURL=webpack:///./src/createMenuCard.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/*! exports provided: HEADER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HEADER\", function() { return HEADER; });\n\nconst HEADER = (() => {\n\n    let headerDOM\n    let navbarDOM;\n    let buttonsDOM = [];\n\n    const getButtons = () => buttonsDOM;\n\n    const render = () => {\n        headerDOM = document.createElement(\"header\");\n        navbarDOM = document.createElement(\"nav\");\n\n        let aboutUsButton = createNavButton(\"Home\");\n        let menuButton = createNavButton(\"Menu\");\n        let contactButton = createNavButton(\"Contact Us\");\n        \n        buttonsDOM.push(aboutUsButton, menuButton, contactButton);\n        \n        for(let button of buttonsDOM){\n            button.setAttribute(\"class\", \"button\");\n            navbarDOM.appendChild(button);\n        }\n        document.body.getElementsByTagName(\"header\")[0].appendChild(navbarDOM);\n    }\n\n    return {render, getButtons};\n\n})();\n\n\n\n\n\n\nfunction createNavButton(pageName){\n    let navButton = document.createElement(\"button\");\n    navButton.innerText = pageName;\n    let lowerCaseHyphenPageName = pageName.toLowerCase().replace(\" \", \"-\");\n    navButton.id = `${lowerCaseHyphenPageName}-btn`\n    navButton.value = lowerCaseHyphenPageName;\n    return navButton;\n}\n\n\n//# sourceURL=webpack:///./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! exports provided: HOME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HOME\", function() { return HOME; });\n/* harmony import */ var _assets_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/pizza.jpg */ \"./src/assets/pizza.jpg\");\n/* harmony import */ var _composePageContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./composePageContent */ \"./src/composePageContent.js\");\n\n\n\nconst HOME = (() => {\n    const page = \"home\"\n    const pageContent = {\n        h1: 'Welcome to our pizza house',\n        img: [_assets_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"], 'homepage-img'],\n        p: ['the dough is crispy and thin'],\n    };\n\n    const render = () => {Object(_composePageContent__WEBPACK_IMPORTED_MODULE_1__[\"composePageContent\"])(pageContent, page)};\n    return {render};    \n})();\n\n\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n// import contact from './contact'\n\n//landing page;\n_header__WEBPACK_IMPORTED_MODULE_0__[\"HEADER\"].render();\n_home__WEBPACK_IMPORTED_MODULE_1__[\"HOME\"].render();\n\n\n_header__WEBPACK_IMPORTED_MODULE_0__[\"HEADER\"].getButtons().forEach( button =>\n    button.addEventListener( \"click\", switchTab ) )\n    \n    \n//tab nav\nfunction switchTab(event) {\n    let selectedPage = event.target.value;\n    document.getElementById(\"content\").innerHTML = \"\";\n    if(selectedPage === \"home\"){\n        _home__WEBPACK_IMPORTED_MODULE_1__[\"HOME\"].render();\n    } else if ( selectedPage === \"menu\"){\n        _menu__WEBPACK_IMPORTED_MODULE_2__[\"MENU\"].render();\n    } else if (selectedPage === \"contact-us\") {\n        console.log(\"render the contact page\");\n    }\n};\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: MENU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MENU\", function() { return MENU; });\n/* harmony import */ var _assets_oysters_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/oysters.jpg */ \"./src/assets/oysters.jpg\");\n/* harmony import */ var _assets_steaksalad_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/steaksalad.jpg */ \"./src/assets/steaksalad.jpg\");\n/* harmony import */ var _assets_pizza_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/pizza.jpg */ \"./src/assets/pizza.jpg\");\n/* harmony import */ var _assets_sausageEggplantFried_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/sausageEggplantFried.jpg */ \"./src/assets/sausageEggplantFried.jpg\");\n/* harmony import */ var _assets_chocolateOliveOilCookies_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/chocolateOliveOilCookies.jpg */ \"./src/assets/chocolateOliveOilCookies.jpg\");\n/* harmony import */ var _composePageContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./composePageContent */ \"./src/composePageContent.js\");\n\n\n\n\n\n\n\nconst menuItems = [\n    {\n        h4: \"Oysters\",\n        p: ['8'],\n        img: [_assets_oysters_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"], \"oysters\"],\n    },\n    {   h4: \"Steak Salad\",\n        p: ['9'],\n        img: [_assets_steaksalad_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"], 'steak-salad']\n    },\n    {   h4: \"Pizza\",\n        p: ['11'],\n        img: [_assets_pizza_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"], 'homemade-pizza']\n    },\n    {   h4: \"Sausage Eggplant Stir-fry\",\n        p: ['7'],\n        img: [_assets_sausageEggplantFried_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"], 'sausage-and-veggie-stirfry']\n    },\n    {   h4: \"Cookies\",\n        p: ['12'],\n        img: [_assets_chocolateOliveOilCookies_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"], 'cookies']\n    }\n];\n\nconst MENU = (() => {\n        const page = \"menu\";\n        const pageContent = menuItems;\n\n    const render = () => {Object(_composePageContent__WEBPACK_IMPORTED_MODULE_5__[\"composePageContent\"])(pageContent, page)};\n    return {render};    \n})();\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ })

/******/ });