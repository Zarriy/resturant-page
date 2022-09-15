/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
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
    '<img src="./images/r-logo@2x.png" alt="Logo for Spoon feed" width="120px"  height="auto" />;';

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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BOztBQUVlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUdBQWlHOztBQUVqRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvaGVhZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgU2tlbHRvbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVhZGVyQ3JlYXRvcigpIHtcbiAgLy9jcmVhdGluZyBoZWFkZXIuXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwibmF2LWJhclwiKTtcblxuICAvL2NyZWF0aW5nIGRpdnNcbiAgY29uc3QgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdjEuY2xhc3NMaXN0LmFkZChcImxvZ28tZGl2XCIpO1xuICBkaXYxLmlubmVySFRNTCA9XG4gICAgJzxpbWcgc3JjPVwiLi9pbWFnZXMvci1sb2dvQDJ4LnBuZ1wiIGFsdD1cIkxvZ28gZm9yIFNwb29uIGZlZWRcIiB3aWR0aD1cIjEyMHB4XCIgIGhlaWdodD1cImF1dG9cIiAvPjsnO1xuXG4gIC8vY3JlYXRpbmcgbmF2IGJhclxuICBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2Mi5jbGFzc0xpc3QuYWRkKFwibmF2LWl0ZW1zXCIpO1xuXG4gIC8vIGNyZWF0aW5nIHVsIGl0ZW1cbiAgY29uc3QgbWVudWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgbWVudWJhci5pbm5lckhUTUwgPVxuICAgIFwiPGxpIGRhdGEtbGluaz0nMScgPjxhIGhyZWY9JyMnIGNsYXNzPSdtYWluLWxpbmsnPkhvbWU8L2E+PC9saT4gPGxpIGRhdGEtbGluaz0nMicgPjxhIGhyZWY9JyMnIGNsYXNzPSdtYWluLWxpbmsnPk1lbnU8L2E+PC9saT4gPGxpIGRhdGEtbGluaz0nMyc+PGEgaHJlZj0nIycgY2xhc3M9J21haW4tbGluayc+Q29udGFjdDwvYT48L2xpPlwiO1xuXG4gIFNrZWx0b25EaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGRpdjEpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoZGl2Mik7XG4gIGRpdjIuYXBwZW5kQ2hpbGQobWVudWJhcik7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=