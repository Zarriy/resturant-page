/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n}\na {\n  text-decoration: none;\n  color: rgb(45, 96, 137);\n}\n.nav-bar {\n  background-color: #000;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 20px 70px;\n  align-items: center;\n}\n\n.nav-items ul {\n  display: flex;\n  list-style: none;\n  gap: 80px;\n  color: #fff;\n  font-family: \"Maven Pro\", sans-serif;\n  font-weight: 400;\n  font-size: 20px;\n}\n.nav-items ul a {\n  text-decoration: none;\n  color: #fff;\n}\n.hero-section {\n  background-color: #000;\n  color: #fff;\n  display: flex;\n  position: relative;\n}\n.hero-text {\n  margin: 110px 0px;\n  margin-left: 80px;\n}\n.hero-text h1 {\n  font-family: \"Cinzel Decorative\";\n  font-weight: 700;\n  font-size: 48px;\n}\n.hero-text p {\n  font-family: \"Maven Pro\", sans-serif;\n  font-size: 18px;\n  margin-top: 40px;\n  line-height: 150%;\n  color: #dad5d5;\n  font-weight: 400;\n}\n.hero-text button {\n  border: none;\n  margin-top: 60px;\n  padding: 14px 28px;\n  font-size: 18px;\n\n  background-color: #ffc300;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.hero-text button:hover {\n  background-color: #e3b51b;\n}\n.hero-img img {\n  margin-top: 60px;\n}\nfooter {\n  background-color: #ffd60a;\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 60px;\n  font-family: \"Maven Pro\", sans-serif;\n  font-weight: 500;\n}\nfooter p {\n  font-size: 12px;\n}\n\n/*********\n** Menu page **\n***********/\n\n.menu {\n  padding: 80px 0;\n  background-color: #000;\n  color: #fff;\n  text-align: center;\n}\n.menu h1 {\n  font-family: \"Cinzel Decorative\", sans-serif;\n  font-size: 38px;\n  margin-bottom: 48px;\n}\n.menus {\n  display: grid;\n  grid-template-columns: 340px 340px;\n  gap: 40px;\n  justify-content: center;\n}\n.menu-item {\n  background-color: #ffc300;\n  width: 340px;\n  height: 260px;\n  border-radius: 4px;\n  box-shadow: 0px 4px 18px 2px rgba(255, 255, 255, 0.407);\n  transition: transform 200ms ease-in;\n  position: relative;\n}\n.menu-item:hover {\n  transform: scale(1.1);\n}\n.item-1 {\n  background-image: url(https://images.food52.com/7f0yncraWeYUJG_lLbH2ie1xd6g=/2016x1344/d815e816-4664-472e-990b-d880be41499f--chicken-biryani-recipe.jpg);\n  background-size: cover;\n}\n.item-2 {\n  background-image: url(https://fatimacooks.net/wp-content/uploads/2020/02/IMG_1872-scaled.jpg);\n  background-size: cover;\n  background-position: 20%;\n}\n.item-3 {\n  background-image: url(https://static.toiimg.com/thumb/58624208.cms?width=1200&height=900);\n  background-size: cover;\n}\n.item-4 {\n  background-image: url(https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80);\n  background-size: cover;\n  background-position: 50%;\n}\n.menu-item h2 {\n  position: absolute;\n  right: 20px;\n  bottom: 20px;\n  color: #37cd26;\n  font-family: \"Maven Pro\", sans-serif;\n  font-weight: 500;\n}\n\n/* Contact Section*/\n\n.contact-section {\n  background-color: #000;\n  padding: 120px 0;\n  text-align: center;\n  color: #fff;\n  height: 50vh;\n}\n.contact-section h1 {\n  font-family: \"Cinzel Decorative\", sans-serif;\n  font-size: 40px;\n}\n.contact-data {\n  margin: 60px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.contact-data address {\n  font-family: \"Maven Pro\", sans-serif;\n  font-size: 20px;\n  position: relative;\n}\n.contact-data address ion-icon {\n  font-size: 44px;\n  position: absolute;\n  top: -50%;\n  left: 25%;\n  color: #ffc300;\n}\n.contact-data a {\n  text-decoration: none;\n  color: #fff;\n  font-family: \"Maven Pro\";\n  font-size: 22px;\n}\n.contact-data a ion-icon {\n  color: #ffc300;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;EACE,UAAU;EACV,SAAS;AACX;AACA;EACE,qBAAqB;EACrB,uBAAuB;AACzB;AACA;EACE,sBAAsB;EACtB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,SAAS;EACT,WAAW;EACX,oCAAoC;EACpC,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,qBAAqB;EACrB,WAAW;AACb;AACA;EACE,sBAAsB;EACtB,WAAW;EACX,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;AACA;EACE,gCAAgC;EAChC,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,oCAAoC;EACpC,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,cAAc;EACd,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;;EAEf,yBAAyB;EACzB,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,gBAAgB;AAClB;AACA;EACE,yBAAyB;EACzB,aAAa;EACb,8BAA8B;EAC9B,iBAAiB;EACjB,oCAAoC;EACpC,gBAAgB;AAClB;AACA;EACE,eAAe;AACjB;;AAEA;;WAEW;;AAEX;EACE,eAAe;EACf,sBAAsB;EACtB,WAAW;EACX,kBAAkB;AACpB;AACA;EACE,4CAA4C;EAC5C,eAAe;EACf,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,kCAAkC;EAClC,SAAS;EACT,uBAAuB;AACzB;AACA;EACE,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,uDAAuD;EACvD,mCAAmC;EACnC,kBAAkB;AACpB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,wJAAwJ;EACxJ,sBAAsB;AACxB;AACA;EACE,6FAA6F;EAC7F,sBAAsB;EACtB,wBAAwB;AAC1B;AACA;EACE,yFAAyF;EACzF,sBAAsB;AACxB;AACA;EACE,oLAAoL;EACpL,sBAAsB;EACtB,wBAAwB;AAC1B;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,cAAc;EACd,oCAAoC;EACpC,gBAAgB;AAClB;;AAEA,mBAAmB;;AAEnB;EACE,sBAAsB;EACtB,gBAAgB;EAChB,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;AACA;EACE,4CAA4C;EAC5C,eAAe;AACjB;AACA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;AACA;EACE,oCAAoC;EACpC,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,kBAAkB;EAClB,SAAS;EACT,SAAS;EACT,cAAc;AAChB;AACA;EACE,qBAAqB;EACrB,WAAW;EACX,wBAAwB;EACxB,eAAe;AACjB;AACA;EACE,cAAc;AAChB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&display=swap\");\n\n* {\n  padding: 0;\n  margin: 0;\n}\na {\n  text-decoration: none;\n  color: rgb(45, 96, 137);\n}\n.nav-bar {\n  background-color: #000;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 20px 70px;\n  align-items: center;\n}\n\n.nav-items ul {\n  display: flex;\n  list-style: none;\n  gap: 80px;\n  color: #fff;\n  font-family: \"Maven Pro\", sans-serif;\n  font-weight: 400;\n  font-size: 20px;\n}\n.nav-items ul a {\n  text-decoration: none;\n  color: #fff;\n}\n.hero-section {\n  background-color: #000;\n  color: #fff;\n  display: flex;\n  position: relative;\n}\n.hero-text {\n  margin: 110px 0px;\n  margin-left: 80px;\n}\n.hero-text h1 {\n  font-family: \"Cinzel Decorative\";\n  font-weight: 700;\n  font-size: 48px;\n}\n.hero-text p {\n  font-family: \"Maven Pro\", sans-serif;\n  font-size: 18px;\n  margin-top: 40px;\n  line-height: 150%;\n  color: #dad5d5;\n  font-weight: 400;\n}\n.hero-text button {\n  border: none;\n  margin-top: 60px;\n  padding: 14px 28px;\n  font-size: 18px;\n\n  background-color: #ffc300;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.hero-text button:hover {\n  background-color: #e3b51b;\n}\n.hero-img img {\n  margin-top: 60px;\n}\nfooter {\n  background-color: #ffd60a;\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 60px;\n  font-family: \"Maven Pro\", sans-serif;\n  font-weight: 500;\n}\nfooter p {\n  font-size: 12px;\n}\n\n/*********\n** Menu page **\n***********/\n\n.menu {\n  padding: 80px 0;\n  background-color: #000;\n  color: #fff;\n  text-align: center;\n}\n.menu h1 {\n  font-family: \"Cinzel Decorative\", sans-serif;\n  font-size: 38px;\n  margin-bottom: 48px;\n}\n.menus {\n  display: grid;\n  grid-template-columns: 340px 340px;\n  gap: 40px;\n  justify-content: center;\n}\n.menu-item {\n  background-color: #ffc300;\n  width: 340px;\n  height: 260px;\n  border-radius: 4px;\n  box-shadow: 0px 4px 18px 2px rgba(255, 255, 255, 0.407);\n  transition: transform 200ms ease-in;\n  position: relative;\n}\n.menu-item:hover {\n  transform: scale(1.1);\n}\n.item-1 {\n  background-image: url(https://images.food52.com/7f0yncraWeYUJG_lLbH2ie1xd6g=/2016x1344/d815e816-4664-472e-990b-d880be41499f--chicken-biryani-recipe.jpg);\n  background-size: cover;\n}\n.item-2 {\n  background-image: url(https://fatimacooks.net/wp-content/uploads/2020/02/IMG_1872-scaled.jpg);\n  background-size: cover;\n  background-position: 20%;\n}\n.item-3 {\n  background-image: url(https://static.toiimg.com/thumb/58624208.cms?width=1200&height=900);\n  background-size: cover;\n}\n.item-4 {\n  background-image: url(https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80);\n  background-size: cover;\n  background-position: 50%;\n}\n.menu-item h2 {\n  position: absolute;\n  right: 20px;\n  bottom: 20px;\n  color: #37cd26;\n  font-family: \"Maven Pro\", sans-serif;\n  font-weight: 500;\n}\n\n/* Contact Section*/\n\n.contact-section {\n  background-color: #000;\n  padding: 120px 0;\n  text-align: center;\n  color: #fff;\n  height: 50vh;\n}\n.contact-section h1 {\n  font-family: \"Cinzel Decorative\", sans-serif;\n  font-size: 40px;\n}\n.contact-data {\n  margin: 60px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.contact-data address {\n  font-family: \"Maven Pro\", sans-serif;\n  font-size: 20px;\n  position: relative;\n}\n.contact-data address ion-icon {\n  font-size: 44px;\n  position: absolute;\n  top: -50%;\n  left: 25%;\n  color: #ffc300;\n}\n.contact-data a {\n  text-decoration: none;\n  color: #fff;\n  font-family: \"Maven Pro\";\n  font-size: 22px;\n}\n.contact-data a ion-icon {\n  color: #ffc300;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContactPage)
/* harmony export */ });
const SkeltonDiv = document.querySelector(".content");

function ContactPage() {
  const contactSection = document.createElement("section");
  contactSection.classList.add("contact-section");

  // creating h1
  const h1 = document.createElement("h1");
  h1.textContent = "Contact US";

  // creating div for contact data
  const contactData = document.createElement("div");
  contactData.classList.add("contact-data");

  // creating address
  const adress = document.createElement("address");
  adress.innerHTML = `<ion-icon name="navigate-circle-outline"></ion-icon>House No. 1/4, Street 42 ,Lahore, Pakistan, 40500.`;

  // creating a tel link
  const tel = document.createElement("a");
  tel.href = "tel:+34602072005";
  tel.target = "_blank";
  tel.innerHTML = `<ion-icon name="logo-whatsapp"></ion-icon> +34602072005`;

  // creating Email Link
  const emailAddress = document.createElement("a");
  emailAddress.href = "email:zarriy@outlook.com";
  emailAddress.target = "_blank";
  emailAddress.innerHTML = `<ion-icon name="mail-outline"></ion-icon> Zarriy@outlook.com`;
  // let's append these things to the DOM
  SkeltonDiv.appendChild(contactSection);
  contactSection.appendChild(h1);
  contactSection.appendChild(contactData);
  contactData.appendChild(adress);
  contactData.appendChild(tel);
  contactData.appendChild(emailAddress);
}


/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ footer)
/* harmony export */ });
function footer() {
  const SkeltonDiv = document.querySelector(".content");
  const footer = document.createElement("footer");

  // creating p's
  footer.innerHTML =
    " <p>Designed by <a href='https://zarriy.com/' target='blank'>Zarriy</a></p> <p>All Rights Reserved| &copy; 2022</p>";
  SkeltonDiv.appendChild(footer);
}


/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ headerCreator)
/* harmony export */ });
const SkeltonDiv = document.querySelector(".content");

function headerCreator() {
  //creating header.
  const header = document.createElement("header");
  header.classList.add("nav-bar");

  //creating divs
  const div1 = document.createElement("div");
  div1.classList.add("logo-div");
  div1.innerHTML =
    '<img src="/src/r-logo@2x.png" alt="Logo for Spoon feed" width="120px"  height="auto" />;';

  //creating nav bar
  const div2 = document.createElement("div");
  div2.classList.add("nav-items");

  // creating ul item
  const menubar = document.createElement("ul");
  menubar.innerHTML =
    "<li data-link='1' ><a href='#' class='main-link'>Home</a></li> <li data-link='2' ><a href='#' class='main-link'>Menu</a></li> <li data-link='3'><a href='#' class='main-link'>Contact</a></li>";

  SkeltonDiv.appendChild(header);
  header.appendChild(div1);
  header.appendChild(div2);
  div2.appendChild(menubar);
}


/***/ }),

/***/ "./src/mainPage.js":
/*!*************************!*\
  !*** ./src/mainPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ heroArea)
/* harmony export */ });
const SkeltonDiv = document.querySelector(".content");

function heroArea() {
  const heroA = document.createElement("section");
  heroA.classList.add("hero-section");

  // creating textDiv
  const textDiv = document.createElement("div");
  textDiv.classList.add("hero-text");

  // creating content for textDiv
  const h1 = document.createElement("h1");
  h1.textContent = "Eat Healthy, Stay Healthy";

  const para = document.createElement("p");
  para.textContent =
    "SpoonFeed is serving its loyal customers in staying healthy and fit. SpoonFeed sources all its ingredients directly from organic farms. Your trust is our Brand. Start your healthy meals today.";

  // creating button
  const btn = document.createElement("button");
  btn.textContent = "Get your meal";

  // now creating img box.
  const imgDiv = document.createElement("div");
  imgDiv.classList.add("hero-img");
  imgDiv.innerHTML =
    '<img src="/src/hero-img.png" alt="Healthy Food for healthy people" width="460px" height="auto" />';

  SkeltonDiv.appendChild(heroA);
  heroA.appendChild(textDiv);
  heroA.appendChild(imgDiv);
  textDiv.appendChild(h1);
  textDiv.appendChild(para);
  textDiv.appendChild(btn);
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuAdd)
/* harmony export */ });
const SkeltonDiv = document.querySelector(".content");

function menuAdd() {
  const menuSection = document.createElement("section");
  menuSection.classList.add("menu");

  // now creating h1 in menu div.
  const h1 = document.createElement("h1");
  h1.textContent = "Menu Items";

  // creating menu div.
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menus");

  // appending the above code to the content div
  SkeltonDiv.appendChild(menuSection);
  menuSection.appendChild(h1);
  menuSection.appendChild(menuDiv);
  // creating a loop for creating multiple divs and giving name.
  const divs = ["item-1", "item-2", "item-3", "item-4"];
  divs.forEach((content) => {
    const menuItems = document.createElement("div");
    menuItems.classList.add("menu-item");
    menuItems.classList.add(content);
    menuDiv.appendChild(menuItems);
  });
}


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mainPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainPage */ "./src/mainPage.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");







// creating the complete page in index.js
// running
const SkeltonDiv = document.querySelector(".content");
// link selection
(0,_header__WEBPACK_IMPORTED_MODULE_3__["default"])();

const home = function () {
  SkeltonDiv.innerHTML = "";
  (0,_header__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_mainPage__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_footer__WEBPACK_IMPORTED_MODULE_4__["default"])();
};

// menu
const menu = function () {
  SkeltonDiv.innerHTML = "";
  (0,_header__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_footer__WEBPACK_IMPORTED_MODULE_4__["default"])();
};

// contact page

const contact = function () {
  SkeltonDiv.innerHTML = "";
  (0,_header__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_footer__WEBPACK_IMPORTED_MODULE_4__["default"])();
};

// display Home
home();

document.addEventListener("click", function (e) {
  const target = e.target.innerText;
  if (target === "Home") {
    home();
  }
  if (target === "Menu") {
    menu();
  }
  if (target === "Contact") {
    contact();
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2ZBOztBQUVlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNwQ2U7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnSEFBZ0g7QUFDaEg7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RkFBNkY7O0FBRTdGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7O0FBRWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7O0FBRWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7OztVQzFCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBa0M7QUFDTDtBQUNPO0FBQ0M7QUFDUDtBQUNUOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFhOztBQUViO0FBQ0E7QUFDQSxFQUFFLG1EQUFhO0FBQ2YsRUFBRSxxREFBUTtBQUNWLEVBQUUsbURBQU07QUFDUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG1EQUFhO0FBQ2YsRUFBRSxpREFBTztBQUNULEVBQUUsbURBQU07QUFDUjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSxtREFBYTtBQUNmLEVBQUUsb0RBQVc7QUFDYixFQUFFLG1EQUFNO0FBQ1I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL3NyYy9tYWluUGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWF2ZW4rUHJvOndnaHRANDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2luemVsK0RlY29yYXRpdmU6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogcmdiKDQ1LCA5NiwgMTM3KTtcXG59XFxuLm5hdi1iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMjBweCA3MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5hdi1pdGVtcyB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGdhcDogODBweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNYXZlbiBQcm9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLm5hdi1pdGVtcyB1bCBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uaGVyby1zZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5oZXJvLXRleHQge1xcbiAgbWFyZ2luOiAxMTBweCAwcHg7XFxuICBtYXJnaW4tbGVmdDogODBweDtcXG59XFxuLmhlcm8tdGV4dCBoMSB7XFxuICBmb250LWZhbWlseTogXFxcIkNpbnplbCBEZWNvcmF0aXZlXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDQ4cHg7XFxufVxcbi5oZXJvLXRleHQgcCB7XFxuICBmb250LWZhbWlseTogXFxcIk1hdmVuIFByb1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XFxuICBjb2xvcjogI2RhZDVkNTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5oZXJvLXRleHQgYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbi10b3A6IDYwcHg7XFxuICBwYWRkaW5nOiAxNHB4IDI4cHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMzAwO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uaGVyby10ZXh0IGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNiNTFiO1xcbn1cXG4uaGVyby1pbWcgaW1nIHtcXG4gIG1hcmdpbi10b3A6IDYwcHg7XFxufVxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkNjBhO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDhweCA2MHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNYXZlbiBQcm9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuZm9vdGVyIHAge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4vKioqKioqKioqXFxuKiogTWVudSBwYWdlICoqXFxuKioqKioqKioqKiovXFxuXFxuLm1lbnUge1xcbiAgcGFkZGluZzogODBweCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubWVudSBoMSB7XFxuICBmb250LWZhbWlseTogXFxcIkNpbnplbCBEZWNvcmF0aXZlXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMzhweDtcXG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XFxufVxcbi5tZW51cyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNDBweCAzNDBweDtcXG4gIGdhcDogNDBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ubWVudS1pdGVtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMzMDA7XFxuICB3aWR0aDogMzQwcHg7XFxuICBoZWlnaHQ6IDI2MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxOHB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDA3KTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLWluO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubWVudS1pdGVtOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuLml0ZW0tMSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZXMuZm9vZDUyLmNvbS83ZjB5bmNyYVdlWVVKR19sTGJIMmllMXhkNmc9LzIwMTZ4MTM0NC9kODE1ZTgxNi00NjY0LTQ3MmUtOTkwYi1kODgwYmU0MTQ5OWYtLWNoaWNrZW4tYmlyeWFuaS1yZWNpcGUuanBnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcbi5pdGVtLTIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vZmF0aW1hY29va3MubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzAyL0lNR18xODcyLXNjYWxlZC5qcGcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDIwJTtcXG59XFxuLml0ZW0tMyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zdGF0aWMudG9paW1nLmNvbS90aHVtYi81ODYyNDIwOC5jbXM/d2lkdGg9MTIwMCZoZWlnaHQ9OTAwKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcbi5pdGVtLTQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTQwMTg5NTQ5MzM2LWU2ZTk5YzM2NzlmZT9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9Mzg3JnE9ODApO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcXG59XFxuLm1lbnUtaXRlbSBoMiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMjBweDtcXG4gIGJvdHRvbTogMjBweDtcXG4gIGNvbG9yOiAjMzdjZDI2O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNYXZlbiBQcm9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLyogQ29udGFjdCBTZWN0aW9uKi9cXG5cXG4uY29udGFjdC1zZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICBwYWRkaW5nOiAxMjBweCAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNmZmY7XFxuICBoZWlnaHQ6IDUwdmg7XFxufVxcbi5jb250YWN0LXNlY3Rpb24gaDEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDaW56ZWwgRGVjb3JhdGl2ZVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDQwcHg7XFxufVxcbi5jb250YWN0LWRhdGEge1xcbiAgbWFyZ2luOiA2MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxufVxcbi5jb250YWN0LWRhdGEgYWRkcmVzcyB7XFxuICBmb250LWZhbWlseTogXFxcIk1hdmVuIFByb1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5jb250YWN0LWRhdGEgYWRkcmVzcyBpb24taWNvbiB7XFxuICBmb250LXNpemU6IDQ0cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC01MCU7XFxuICBsZWZ0OiAyNSU7XFxuICBjb2xvcjogI2ZmYzMwMDtcXG59XFxuLmNvbnRhY3QtZGF0YSBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNYXZlbiBQcm9cXFwiO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG4uY29udGFjdC1kYXRhIGEgaW9uLWljb24ge1xcbiAgY29sb3I6ICNmZmMzMDA7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFdBQVc7RUFDWCxvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTs7RUFFZix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTs7V0FFVzs7QUFFWDtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsNENBQTRDO0VBQzVDLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsU0FBUztFQUNULHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHVEQUF1RDtFQUN2RCxtQ0FBbUM7RUFDbkMsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLHdKQUF3SjtFQUN4SixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLDZGQUE2RjtFQUM3RixzQkFBc0I7RUFDdEIsd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSx5RkFBeUY7RUFDekYsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxvTEFBb0w7RUFDcEwsc0JBQXNCO0VBQ3RCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLG9DQUFvQztFQUNwQyxnQkFBZ0I7QUFDbEI7O0FBRUEsbUJBQW1COztBQUVuQjtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLDRDQUE0QztFQUM1QyxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0VBQ1QsY0FBYztBQUNoQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NYXZlbitQcm86d2dodEA0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DaW56ZWwrRGVjb3JhdGl2ZTp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiByZ2IoNDUsIDk2LCAxMzcpO1xcbn1cXG4ubmF2LWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAyMHB4IDcwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmF2LWl0ZW1zIHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZ2FwOiA4MHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LWZhbWlseTogXFxcIk1hdmVuIFByb1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4ubmF2LWl0ZW1zIHVsIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5oZXJvLXNlY3Rpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmhlcm8tdGV4dCB7XFxuICBtYXJnaW46IDExMHB4IDBweDtcXG4gIG1hcmdpbi1sZWZ0OiA4MHB4O1xcbn1cXG4uaGVyby10ZXh0IGgxIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ2luemVsIERlY29yYXRpdmVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG59XFxuLmhlcm8tdGV4dCBwIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWF2ZW4gUHJvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxuICBsaW5lLWhlaWdodDogMTUwJTtcXG4gIGNvbG9yOiAjZGFkNWQ1O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuLmhlcm8tdGV4dCBidXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luLXRvcDogNjBweDtcXG4gIHBhZGRpbmc6IDE0cHggMjhweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMzMDA7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5oZXJvLXRleHQgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2I1MWI7XFxufVxcbi5oZXJvLWltZyBpbWcge1xcbiAgbWFyZ2luLXRvcDogNjBweDtcXG59XFxuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQ2MGE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogOHB4IDYwcHg7XFxuICBmb250LWZhbWlseTogXFxcIk1hdmVuIFByb1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5mb290ZXIgcCB7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi8qKioqKioqKipcXG4qKiBNZW51IHBhZ2UgKipcXG4qKioqKioqKioqKi9cXG5cXG4ubWVudSB7XFxuICBwYWRkaW5nOiA4MHB4IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tZW51IGgxIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ2luemVsIERlY29yYXRpdmVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAzOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNDhweDtcXG59XFxuLm1lbnVzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM0MHB4IDM0MHB4O1xcbiAgZ2FwOiA0MHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5tZW51LWl0ZW0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzMwMDtcXG4gIHdpZHRoOiAzNDBweDtcXG4gIGhlaWdodDogMjYwcHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3gtc2hhZG93OiAwcHggNHB4IDE4cHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MDcpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGVhc2UtaW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5tZW51LWl0ZW06aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG4uaXRlbS0xIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2ltYWdlcy5mb29kNTIuY29tLzdmMHluY3JhV2VZVUpHX2xMYkgyaWUxeGQ2Zz0vMjAxNngxMzQ0L2Q4MTVlODE2LTQ2NjQtNDcyZS05OTBiLWQ4ODBiZTQxNDk5Zi0tY2hpY2tlbi1iaXJ5YW5pLXJlY2lwZS5qcGcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuLml0ZW0tMiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9mYXRpbWFjb29rcy5uZXQvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDIvSU1HXzE4NzItc2NhbGVkLmpwZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAlO1xcbn1cXG4uaXRlbS0zIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3N0YXRpYy50b2lpbWcuY29tL3RodW1iLzU4NjI0MjA4LmNtcz93aWR0aD0xMjAwJmhlaWdodD05MDApO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuLml0ZW0tNCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NDAxODk1NDkzMzYtZTZlOTljMzY3OWZlP2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0zODcmcT04MCk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xcbn1cXG4ubWVudS1pdGVtIGgyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAyMHB4O1xcbiAgYm90dG9tOiAyMHB4O1xcbiAgY29sb3I6ICMzN2NkMjY7XFxuICBmb250LWZhbWlseTogXFxcIk1hdmVuIFByb1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4vKiBDb250YWN0IFNlY3Rpb24qL1xcblxcbi5jb250YWN0LXNlY3Rpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIHBhZGRpbmc6IDEyMHB4IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGhlaWdodDogNTB2aDtcXG59XFxuLmNvbnRhY3Qtc2VjdGlvbiBoMSB7XFxuICBmb250LWZhbWlseTogXFxcIkNpbnplbCBEZWNvcmF0aXZlXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuLmNvbnRhY3QtZGF0YSB7XFxuICBtYXJnaW46IDYwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG59XFxuLmNvbnRhY3QtZGF0YSBhZGRyZXNzIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWF2ZW4gUHJvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmNvbnRhY3QtZGF0YSBhZGRyZXNzIGlvbi1pY29uIHtcXG4gIGZvbnQtc2l6ZTogNDRweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTUwJTtcXG4gIGxlZnQ6IDI1JTtcXG4gIGNvbG9yOiAjZmZjMzAwO1xcbn1cXG4uY29udGFjdC1kYXRhIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LWZhbWlseTogXFxcIk1hdmVuIFByb1xcXCI7XFxuICBmb250LXNpemU6IDIycHg7XFxufVxcbi5jb250YWN0LWRhdGEgYSBpb24taWNvbiB7XFxuICBjb2xvcjogI2ZmYzMwMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBTa2VsdG9uRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0UGFnZSgpIHtcbiAgY29uc3QgY29udGFjdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgY29udGFjdFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImNvbnRhY3Qtc2VjdGlvblwiKTtcblxuICAvLyBjcmVhdGluZyBoMVxuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaDEudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgVVNcIjtcblxuICAvLyBjcmVhdGluZyBkaXYgZm9yIGNvbnRhY3QgZGF0YVxuICBjb25zdCBjb250YWN0RGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhY3REYXRhLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWRhdGFcIik7XG5cbiAgLy8gY3JlYXRpbmcgYWRkcmVzc1xuICBjb25zdCBhZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYWRkcmVzc1wiKTtcbiAgYWRyZXNzLmlubmVySFRNTCA9IGA8aW9uLWljb24gbmFtZT1cIm5hdmlnYXRlLWNpcmNsZS1vdXRsaW5lXCI+PC9pb24taWNvbj5Ib3VzZSBOby4gMS80LCBTdHJlZXQgNDIgLExhaG9yZSwgUGFraXN0YW4sIDQwNTAwLmA7XG5cbiAgLy8gY3JlYXRpbmcgYSB0ZWwgbGlua1xuICBjb25zdCB0ZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgdGVsLmhyZWYgPSBcInRlbDorMzQ2MDIwNzIwMDVcIjtcbiAgdGVsLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gIHRlbC5pbm5lckhUTUwgPSBgPGlvbi1pY29uIG5hbWU9XCJsb2dvLXdoYXRzYXBwXCI+PC9pb24taWNvbj4gKzM0NjAyMDcyMDA1YDtcblxuICAvLyBjcmVhdGluZyBFbWFpbCBMaW5rXG4gIGNvbnN0IGVtYWlsQWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBlbWFpbEFkZHJlc3MuaHJlZiA9IFwiZW1haWw6emFycml5QG91dGxvb2suY29tXCI7XG4gIGVtYWlsQWRkcmVzcy50YXJnZXQgPSBcIl9ibGFua1wiO1xuICBlbWFpbEFkZHJlc3MuaW5uZXJIVE1MID0gYDxpb24taWNvbiBuYW1lPVwibWFpbC1vdXRsaW5lXCI+PC9pb24taWNvbj4gWmFycml5QG91dGxvb2suY29tYDtcbiAgLy8gbGV0J3MgYXBwZW5kIHRoZXNlIHRoaW5ncyB0byB0aGUgRE9NXG4gIFNrZWx0b25EaXYuYXBwZW5kQ2hpbGQoY29udGFjdFNlY3Rpb24pO1xuICBjb250YWN0U2VjdGlvbi5hcHBlbmRDaGlsZChoMSk7XG4gIGNvbnRhY3RTZWN0aW9uLmFwcGVuZENoaWxkKGNvbnRhY3REYXRhKTtcbiAgY29udGFjdERhdGEuYXBwZW5kQ2hpbGQoYWRyZXNzKTtcbiAgY29udGFjdERhdGEuYXBwZW5kQ2hpbGQodGVsKTtcbiAgY29udGFjdERhdGEuYXBwZW5kQ2hpbGQoZW1haWxBZGRyZXNzKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvb3RlcigpIHtcbiAgY29uc3QgU2tlbHRvbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcblxuICAvLyBjcmVhdGluZyBwJ3NcbiAgZm9vdGVyLmlubmVySFRNTCA9XG4gICAgXCIgPHA+RGVzaWduZWQgYnkgPGEgaHJlZj0naHR0cHM6Ly96YXJyaXkuY29tLycgdGFyZ2V0PSdibGFuayc+WmFycml5PC9hPjwvcD4gPHA+QWxsIFJpZ2h0cyBSZXNlcnZlZHwgJmNvcHk7IDIwMjI8L3A+XCI7XG4gIFNrZWx0b25EaXYuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cbiIsImNvbnN0IFNrZWx0b25EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlYWRlckNyZWF0b3IoKSB7XG4gIC8vY3JlYXRpbmcgaGVhZGVyLlxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcIm5hdi1iYXJcIik7XG5cbiAgLy9jcmVhdGluZyBkaXZzXG4gIGNvbnN0IGRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYxLmNsYXNzTGlzdC5hZGQoXCJsb2dvLWRpdlwiKTtcbiAgZGl2MS5pbm5lckhUTUwgPVxuICAgICc8aW1nIHNyYz1cIi9zcmMvci1sb2dvQDJ4LnBuZ1wiIGFsdD1cIkxvZ28gZm9yIFNwb29uIGZlZWRcIiB3aWR0aD1cIjEyMHB4XCIgIGhlaWdodD1cImF1dG9cIiAvPjsnO1xuXG4gIC8vY3JlYXRpbmcgbmF2IGJhclxuICBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2Mi5jbGFzc0xpc3QuYWRkKFwibmF2LWl0ZW1zXCIpO1xuXG4gIC8vIGNyZWF0aW5nIHVsIGl0ZW1cbiAgY29uc3QgbWVudWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgbWVudWJhci5pbm5lckhUTUwgPVxuICAgIFwiPGxpIGRhdGEtbGluaz0nMScgPjxhIGhyZWY9JyMnIGNsYXNzPSdtYWluLWxpbmsnPkhvbWU8L2E+PC9saT4gPGxpIGRhdGEtbGluaz0nMicgPjxhIGhyZWY9JyMnIGNsYXNzPSdtYWluLWxpbmsnPk1lbnU8L2E+PC9saT4gPGxpIGRhdGEtbGluaz0nMyc+PGEgaHJlZj0nIycgY2xhc3M9J21haW4tbGluayc+Q29udGFjdDwvYT48L2xpPlwiO1xuXG4gIFNrZWx0b25EaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGRpdjEpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoZGl2Mik7XG4gIGRpdjIuYXBwZW5kQ2hpbGQobWVudWJhcik7XG59XG4iLCJjb25zdCBTa2VsdG9uRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZXJvQXJlYSgpIHtcbiAgY29uc3QgaGVyb0EgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgaGVyb0EuY2xhc3NMaXN0LmFkZChcImhlcm8tc2VjdGlvblwiKTtcblxuICAvLyBjcmVhdGluZyB0ZXh0RGl2XG4gIGNvbnN0IHRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0ZXh0RGl2LmNsYXNzTGlzdC5hZGQoXCJoZXJvLXRleHRcIik7XG5cbiAgLy8gY3JlYXRpbmcgY29udGVudCBmb3IgdGV4dERpdlxuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaDEudGV4dENvbnRlbnQgPSBcIkVhdCBIZWFsdGh5LCBTdGF5IEhlYWx0aHlcIjtcblxuICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHBhcmEudGV4dENvbnRlbnQgPVxuICAgIFwiU3Bvb25GZWVkIGlzIHNlcnZpbmcgaXRzIGxveWFsIGN1c3RvbWVycyBpbiBzdGF5aW5nIGhlYWx0aHkgYW5kIGZpdC4gU3Bvb25GZWVkIHNvdXJjZXMgYWxsIGl0cyBpbmdyZWRpZW50cyBkaXJlY3RseSBmcm9tIG9yZ2FuaWMgZmFybXMuIFlvdXIgdHJ1c3QgaXMgb3VyIEJyYW5kLiBTdGFydCB5b3VyIGhlYWx0aHkgbWVhbHMgdG9kYXkuXCI7XG5cbiAgLy8gY3JlYXRpbmcgYnV0dG9uXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ0bi50ZXh0Q29udGVudCA9IFwiR2V0IHlvdXIgbWVhbFwiO1xuXG4gIC8vIG5vdyBjcmVhdGluZyBpbWcgYm94LlxuICBjb25zdCBpbWdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbWdEaXYuY2xhc3NMaXN0LmFkZChcImhlcm8taW1nXCIpO1xuICBpbWdEaXYuaW5uZXJIVE1MID1cbiAgICAnPGltZyBzcmM9XCIvc3JjL2hlcm8taW1nLnBuZ1wiIGFsdD1cIkhlYWx0aHkgRm9vZCBmb3IgaGVhbHRoeSBwZW9wbGVcIiB3aWR0aD1cIjQ2MHB4XCIgaGVpZ2h0PVwiYXV0b1wiIC8+JztcblxuICBTa2VsdG9uRGl2LmFwcGVuZENoaWxkKGhlcm9BKTtcbiAgaGVyb0EuYXBwZW5kQ2hpbGQodGV4dERpdik7XG4gIGhlcm9BLmFwcGVuZENoaWxkKGltZ0Rpdik7XG4gIHRleHREaXYuYXBwZW5kQ2hpbGQoaDEpO1xuICB0ZXh0RGl2LmFwcGVuZENoaWxkKHBhcmEpO1xuICB0ZXh0RGl2LmFwcGVuZENoaWxkKGJ0bik7XG59XG4iLCJjb25zdCBTa2VsdG9uRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51QWRkKCkge1xuICBjb25zdCBtZW51U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBtZW51U2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcblxuICAvLyBub3cgY3JlYXRpbmcgaDEgaW4gbWVudSBkaXYuXG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoMS50ZXh0Q29udGVudCA9IFwiTWVudSBJdGVtc1wiO1xuXG4gIC8vIGNyZWF0aW5nIG1lbnUgZGl2LlxuICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudURpdi5jbGFzc0xpc3QuYWRkKFwibWVudXNcIik7XG5cbiAgLy8gYXBwZW5kaW5nIHRoZSBhYm92ZSBjb2RlIHRvIHRoZSBjb250ZW50IGRpdlxuICBTa2VsdG9uRGl2LmFwcGVuZENoaWxkKG1lbnVTZWN0aW9uKTtcbiAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQoaDEpO1xuICBtZW51U2VjdGlvbi5hcHBlbmRDaGlsZChtZW51RGl2KTtcbiAgLy8gY3JlYXRpbmcgYSBsb29wIGZvciBjcmVhdGluZyBtdWx0aXBsZSBkaXZzIGFuZCBnaXZpbmcgbmFtZS5cbiAgY29uc3QgZGl2cyA9IFtcIml0ZW0tMVwiLCBcIml0ZW0tMlwiLCBcIml0ZW0tM1wiLCBcIml0ZW0tNFwiXTtcbiAgZGl2cy5mb3JFYWNoKChjb250ZW50KSA9PiB7XG4gICAgY29uc3QgbWVudUl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbXMuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcbiAgICBtZW51SXRlbXMuY2xhc3NMaXN0LmFkZChjb250ZW50KTtcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnVJdGVtcyk7XG4gIH0pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGhlcm9BcmVhIGZyb20gXCIuL21haW5QYWdlXCI7XG5pbXBvcnQgbWVudUFkZCBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgQ29udGFjdFBhZ2UgZnJvbSBcIi4vY29udGFjdFwiO1xuaW1wb3J0IGhlYWRlckNyZWF0b3IgZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgZm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuLy8gY3JlYXRpbmcgdGhlIGNvbXBsZXRlIHBhZ2UgaW4gaW5kZXguanNcbi8vIHJ1bm5pbmdcbmNvbnN0IFNrZWx0b25EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4vLyBsaW5rIHNlbGVjdGlvblxuaGVhZGVyQ3JlYXRvcigpO1xuXG5jb25zdCBob21lID0gZnVuY3Rpb24gKCkge1xuICBTa2VsdG9uRGl2LmlubmVySFRNTCA9IFwiXCI7XG4gIGhlYWRlckNyZWF0b3IoKTtcbiAgaGVyb0FyZWEoKTtcbiAgZm9vdGVyKCk7XG59O1xuXG4vLyBtZW51XG5jb25zdCBtZW51ID0gZnVuY3Rpb24gKCkge1xuICBTa2VsdG9uRGl2LmlubmVySFRNTCA9IFwiXCI7XG4gIGhlYWRlckNyZWF0b3IoKTtcbiAgbWVudUFkZCgpO1xuICBmb290ZXIoKTtcbn07XG5cbi8vIGNvbnRhY3QgcGFnZVxuXG5jb25zdCBjb250YWN0ID0gZnVuY3Rpb24gKCkge1xuICBTa2VsdG9uRGl2LmlubmVySFRNTCA9IFwiXCI7XG4gIGhlYWRlckNyZWF0b3IoKTtcbiAgQ29udGFjdFBhZ2UoKTtcbiAgZm9vdGVyKCk7XG59O1xuXG4vLyBkaXNwbGF5IEhvbWVcbmhvbWUoKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0LmlubmVyVGV4dDtcbiAgaWYgKHRhcmdldCA9PT0gXCJIb21lXCIpIHtcbiAgICBob21lKCk7XG4gIH1cbiAgaWYgKHRhcmdldCA9PT0gXCJNZW51XCIpIHtcbiAgICBtZW51KCk7XG4gIH1cbiAgaWYgKHRhcmdldCA9PT0gXCJDb250YWN0XCIpIHtcbiAgICBjb250YWN0KCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9