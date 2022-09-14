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
/*!*************************!*\
  !*** ./src/mainPage.js ***!
  \*************************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpblBhZ2UuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7O0FBRWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL3NyYy9tYWluUGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IFNrZWx0b25EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlcm9BcmVhKCkge1xuICBjb25zdCBoZXJvQSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBoZXJvQS5jbGFzc0xpc3QuYWRkKFwiaGVyby1zZWN0aW9uXCIpO1xuXG4gIC8vIGNyZWF0aW5nIHRleHREaXZcbiAgY29uc3QgdGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRleHREaXYuY2xhc3NMaXN0LmFkZChcImhlcm8tdGV4dFwiKTtcblxuICAvLyBjcmVhdGluZyBjb250ZW50IGZvciB0ZXh0RGl2XG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoMS50ZXh0Q29udGVudCA9IFwiRWF0IEhlYWx0aHksIFN0YXkgSGVhbHRoeVwiO1xuXG4gIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcGFyYS50ZXh0Q29udGVudCA9XG4gICAgXCJTcG9vbkZlZWQgaXMgc2VydmluZyBpdHMgbG95YWwgY3VzdG9tZXJzIGluIHN0YXlpbmcgaGVhbHRoeSBhbmQgZml0LiBTcG9vbkZlZWQgc291cmNlcyBhbGwgaXRzIGluZ3JlZGllbnRzIGRpcmVjdGx5IGZyb20gb3JnYW5pYyBmYXJtcy4gWW91ciB0cnVzdCBpcyBvdXIgQnJhbmQuIFN0YXJ0IHlvdXIgaGVhbHRoeSBtZWFscyB0b2RheS5cIjtcblxuICAvLyBjcmVhdGluZyBidXR0b25cbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnRuLnRleHRDb250ZW50ID0gXCJHZXQgeW91ciBtZWFsXCI7XG5cbiAgLy8gbm93IGNyZWF0aW5nIGltZyBib3guXG4gIGNvbnN0IGltZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGltZ0Rpdi5jbGFzc0xpc3QuYWRkKFwiaGVyby1pbWdcIik7XG4gIGltZ0Rpdi5pbm5lckhUTUwgPVxuICAgICc8aW1nIHNyYz1cIi9zcmMvaGVyby1pbWcucG5nXCIgYWx0PVwiSGVhbHRoeSBGb29kIGZvciBoZWFsdGh5IHBlb3BsZVwiIHdpZHRoPVwiNDYwcHhcIiBoZWlnaHQ9XCJhdXRvXCIgLz4nO1xuXG4gIFNrZWx0b25EaXYuYXBwZW5kQ2hpbGQoaGVyb0EpO1xuICBoZXJvQS5hcHBlbmRDaGlsZCh0ZXh0RGl2KTtcbiAgaGVyb0EuYXBwZW5kQ2hpbGQoaW1nRGl2KTtcbiAgdGV4dERpdi5hcHBlbmRDaGlsZChoMSk7XG4gIHRleHREaXYuYXBwZW5kQ2hpbGQocGFyYSk7XG4gIHRleHREaXYuYXBwZW5kQ2hpbGQoYnRuKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==