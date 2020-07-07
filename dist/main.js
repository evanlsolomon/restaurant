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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/*! exports provided: ABOUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ABOUT\", function() { return ABOUT; });\n/* harmony import */ var _assets_fresh_ingredients_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/fresh-ingredients.jpg */ \"./src/assets/fresh-ingredients.jpg\");\n\n\nconst ABOUT = (() => {\n    const TEXT1 = \"Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Cras adipiscing enim eu turpis egestas pretium aenean pharetra, magna!\";\n    const TEXT2 = \"Etiam quis interdum augue. Mauris vel nisl in sapien malesuada condimentum. Curabitur porta eleifend elit, et varius elit blandit vitae. In sit amet consequat purus. In hac habitasse platea dictumst. Donec volutpat facilisis suscipit. In ac nisl nec orci pretium sagittis vitae sit amet orci. Aliquam cursus ipsum in commodo tempus. Nulla lobortis, quam eu scelerisque maximus, lacus dolor auctor ipsum, eget suscipit orci sem in tellus.\";\n\n    let aboutDivDOM;\n\n    const render = () => {\n        // body.clearMain();\n        aboutDivDOM = document.createElement(\"div\");\n        aboutDivDOM.id = \"about-div\";\n        aboutDivDOM.classList.add(\"content-div\");\n        let image = new Image();\n        image.src = _assets_fresh_ingredients_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        image.classList.add(\"cover\");\n        \n        let h2 = document.createElement(\"h2\");\n        h2.innerText = TEXT1;\n\n        let h3 = document.createElement(\"h3\");\n        h3.innerText = TEXT2;\n\n        aboutDivDOM.appendChild(image);\n        aboutDivDOM.appendChild(h2);\n        aboutDivDOM.appendChild(h3);\n        document.body.appendChild(aboutDivDOM);\n\n\n    }\n\n    return {render};\n\n})();\n\n\n\n//# sourceURL=webpack:///./src/about.js?");

/***/ }),

/***/ "./src/addContentComponent.js":
/*!************************************!*\
  !*** ./src/addContentComponent.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nfunction addComponent(htmlType, propertyObject, contentContainer) {\n    const element = document.createElement(htmlType);\n    const value = propertyObject[htmlType];\n    \n    if(htmlType === 'h1'){\n        element.textContent  = value;\n    } else if (htmlType === 'img'){\n        element.src = value[0];\n        element.style.height = \"400px\"\n    } else if (htmlType === ('p' || false || false) ) {\n        for (let i = 0; i< value.length-1; i++){\n            const extra = document.createElement(htmlType);\n            extra.textContent = value[i];\n            parent.appendChild(extra);\n        }\n        element.textContent = value[value.length - 1];\n    } else {\n        console.error('UNKNOWN PROP TYPE')\n    }\n    contentContainer.appendChild(element);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (addComponent);\n\n\n//# sourceURL=webpack:///./src/addContentComponent.js?");

/***/ }),

/***/ "./src/assets/fresh-ingredients.jpg":
/*!******************************************!*\
  !*** ./src/assets/fresh-ingredients.jpg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"dee6d4d56a070d7c0a8e7443d8eb53f8.jpg\");\n\n//# sourceURL=webpack:///./src/assets/fresh-ingredients.jpg?");

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

/***/ "./src/composePageContent.js":
/*!***********************************!*\
  !*** ./src/composePageContent.js ***!
  \***********************************/
/*! exports provided: composePageContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"composePageContent\", function() { return composePageContent; });\n/* harmony import */ var _createContentComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createContentComponent */ \"./src/createContentComponent.js\");\n\n\nlet contentDiv = document.createElement('div');\n\nconst composePageContent = (contentObject) => {\n    for(let contentElement in contentObject){\n        let newElement = Object(_createContentComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(contentElement,contentObject[contentElement]);\n        contentDiv.appendChild(newElement);\n    }\n    return contentDiv;\n}\n\n\n\n\n\n//# sourceURL=webpack:///./src/composePageContent.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _addContentComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addContentComponent */ \"./src/addContentComponent.js\");\n\n\nfunction contact() {\n    const pageContent = {\n        h1: 'Contact us',\n        address1: '735 Broad Way',\n        address2: 'Far far away, FR 49285',\n        phone: '0e9-9438',\n        email: 'nomail@notmail.neptune'\n    };\n    \n    const contentContainer = document.getElementById('content');\n    \n    for (const property in pageContent){\n        // const value = pageContent[property];\n        // if (property === 'h1') {\n        //     contentContainer.appendChild(make)\n        // }\n        Object(_addContentComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(property, pageContent, contentContainer)\n    }\n    \n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (contact);\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/createContentComponent.js":
/*!***************************************!*\
  !*** ./src/createContentComponent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst createComponent = (htmlType, value) => {\n    const element = document.createElement(htmlType);\n    \n    if(htmlType === 'h1'){\n        element.textContent  = value;\n    } else if (htmlType === 'img'){\n        element.src = value[0];\n        element.style.height = \"400px\"\n    } else if (htmlType === ('p' || false || false) ) {\n        for (let i = 0; i< value.length-1; i++){\n            const extra = document.createElement(htmlType);\n            extra.textContent = value[i];\n            parent.appendChild(extra);\n        }\n        element.textContent = value[value.length - 1];\n    } else {\n        console.error('UNKNOWN PROP TYPE')\n    }\n    return element;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (createComponent);\n\n\n//# sourceURL=webpack:///./src/createContentComponent.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/*! exports provided: HEADER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HEADER\", function() { return HEADER; });\n\nconst HEADER = (() => {\n\n    let headerDOM\n    let navbarDOM;\n    let buttonsDOM = [];\n\n    const getButtons = () => buttonsDOM;\n\n    const render = () => {\n        headerDOM = document.createElement(\"header\");\n        navbarDOM = document.createElement(\"nav\");\n\n        let aboutUsButton = createNavButton(\"Home\");\n        let menuButton = createNavButton(\"About\");\n        let contactButton = createNavButton(\"Contact Us\");\n        \n        buttonsDOM.push(aboutUsButton, menuButton, contactButton);\n        \n        for(let button of buttonsDOM){\n            button.setAttribute(\"class\", \"button\");\n            navbarDOM.appendChild(button);\n        }\n        document.body.getElementsByTagName(\"header\")[0].appendChild(navbarDOM);\n    }\n\n    return {render, getButtons};\n\n})();\n\n\n\n\n\n\nfunction createNavButton(pageName){\n    let navButton = document.createElement(\"button\");\n    navButton.innerText = pageName;\n    let lowerCaseHyphenPageName = pageName.toLowerCase().replace(\" \", \"-\");\n    navButton.id = `${lowerCaseHyphenPageName}-btn`\n    navButton.value = lowerCaseHyphenPageName;\n    return navButton;\n}\n\n\n//# sourceURL=webpack:///./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! exports provided: HOME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HOME\", function() { return HOME; });\n/* harmony import */ var _assets_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/pizza.jpg */ \"./src/assets/pizza.jpg\");\n/* harmony import */ var _composePageContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./composePageContent */ \"./src/composePageContent.js\");\n\n\n\nconst HOME = (() => {\n\n    const render = () => {\n        const pageContent = {\n            h1: 'Welcome to our pizza house',\n            img: [_assets_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"], 'homepage-img'],\n            p: ['the dough is crispy and thin'],\n        };\n        \n        const contentContainer = document.getElementById('content');\n        contentContainer.appendChild(Object(_composePageContent__WEBPACK_IMPORTED_MODULE_1__[\"composePageContent\"])(pageContent));\n\n    }\n    return {render};\n    \n})();\n\n\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\n\n\n\n\n\n_header__WEBPACK_IMPORTED_MODULE_2__[\"HEADER\"].render();\n_home__WEBPACK_IMPORTED_MODULE_0__[\"HOME\"].render();\n\n\nconsole.log(_header__WEBPACK_IMPORTED_MODULE_2__[\"HEADER\"].getButtons());\n_header__WEBPACK_IMPORTED_MODULE_2__[\"HEADER\"].getButtons().forEach( button =>\n    button.addEventListener( \"click\", switchTab ) )\n\nfunction switchTab(event) {\n    let selectedPage = event.target.value;\n    document.getElementById(\"content\").innerHTML = \"\";\n    if(selectedPage === \"home\"){\n        _home__WEBPACK_IMPORTED_MODULE_0__[\"HOME\"].render();\n    } else if ( selectedPage === \"about\"){\n        _about__WEBPACK_IMPORTED_MODULE_3__[\"ABOUT\"].render();\n    } else if (selectedPage === \"contact-us\") {\n        console.log(\"render the contact page\");\n    }\n};\n\n// tab.render();\n// contact();\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });