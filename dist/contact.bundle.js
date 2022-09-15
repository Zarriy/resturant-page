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
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTs7QUFFZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IFNrZWx0b25EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3RQYWdlKCkge1xuICBjb25zdCBjb250YWN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBjb250YWN0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1zZWN0aW9uXCIpO1xuXG4gIC8vIGNyZWF0aW5nIGgxXG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoMS50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBVU1wiO1xuXG4gIC8vIGNyZWF0aW5nIGRpdiBmb3IgY29udGFjdCBkYXRhXG4gIGNvbnN0IGNvbnRhY3REYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFjdERhdGEuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtZGF0YVwiKTtcblxuICAvLyBjcmVhdGluZyBhZGRyZXNzXG4gIGNvbnN0IGFkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhZGRyZXNzXCIpO1xuICBhZHJlc3MuaW5uZXJIVE1MID0gYDxpb24taWNvbiBuYW1lPVwibmF2aWdhdGUtY2lyY2xlLW91dGxpbmVcIj48L2lvbi1pY29uPkhvdXNlIE5vLiAxLzQsIFN0cmVldCA0MiAsTGFob3JlLCBQYWtpc3RhbiwgNDA1MDAuYDtcblxuICAvLyBjcmVhdGluZyBhIHRlbCBsaW5rXG4gIGNvbnN0IHRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICB0ZWwuaHJlZiA9IFwidGVsOiszNDYwMjA3MjAwNVwiO1xuICB0ZWwudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgdGVsLmlubmVySFRNTCA9IGA8aW9uLWljb24gbmFtZT1cImxvZ28td2hhdHNhcHBcIj48L2lvbi1pY29uPiArMzQ2MDIwNzIwMDVgO1xuXG4gIC8vIGNyZWF0aW5nIEVtYWlsIExpbmtcbiAgY29uc3QgZW1haWxBZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGVtYWlsQWRkcmVzcy5ocmVmID0gXCJlbWFpbDp6YXJyaXlAb3V0bG9vay5jb21cIjtcbiAgZW1haWxBZGRyZXNzLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gIGVtYWlsQWRkcmVzcy5pbm5lckhUTUwgPSBgPGlvbi1pY29uIG5hbWU9XCJtYWlsLW91dGxpbmVcIj48L2lvbi1pY29uPiBaYXJyaXlAb3V0bG9vay5jb21gO1xuICAvLyBsZXQncyBhcHBlbmQgdGhlc2UgdGhpbmdzIHRvIHRoZSBET01cbiAgU2tlbHRvbkRpdi5hcHBlbmRDaGlsZChjb250YWN0U2VjdGlvbik7XG4gIGNvbnRhY3RTZWN0aW9uLmFwcGVuZENoaWxkKGgxKTtcbiAgY29udGFjdFNlY3Rpb24uYXBwZW5kQ2hpbGQoY29udGFjdERhdGEpO1xuICBjb250YWN0RGF0YS5hcHBlbmRDaGlsZChhZHJlc3MpO1xuICBjb250YWN0RGF0YS5hcHBlbmRDaGlsZCh0ZWwpO1xuICBjb250YWN0RGF0YS5hcHBlbmRDaGlsZChlbWFpbEFkZHJlc3MpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9