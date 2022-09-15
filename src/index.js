import heroArea from "./mainPage";
import menuAdd from "./menu";
import ContactPage from "./contact";
import headerCreator from "./header";
import footer from "./footer";
import "./style.css";

// creating the complete page in index.js
// running
const SkeltonDiv = document.querySelector(".content");
// link selection
headerCreator();

const home = function () {
  SkeltonDiv.innerHTML = "";
  headerCreator();
  heroArea();
  footer();
};

// menu
const menu = function () {
  SkeltonDiv.innerHTML = "";
  headerCreator();
  menuAdd();
  footer();
};

// contact page

const contact = function () {
  SkeltonDiv.innerHTML = "";
  headerCreator();
  ContactPage();
  footer();
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
