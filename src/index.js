import "./style.css";

const divSelection = document.querySelector(".content");
const element = document.createElement("p");
element.textContent = "This is the text content of the div";
element.classList.add("hello");
divSelection.appendChild(element);

const yesElement = document.createElement("p");
yesElement.textContent = "this is for testing";
yesElement.classList.add("yes");
divSelection.appendChild(yesElement);
