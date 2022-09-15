import heroArea from "./mainPage";
import menuAdd from "./menu";
import ContactPage from "./contact";
import headerCreator from "./header";
import footer from "./footer";
import "./style.css";

// creating the complete page in index.js
// running
const SkeltonDiv = document.querySelector(".content");
// footer Section

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

// callhome
home();

// selecting nav links
// const navLinks = document.querySelectorAll("li[data-link]");

// navLinks.forEach((el) => {
//   el.addEventListener("click", function () {
//     if (el.textContent === "Home") {
//       home();
//     }
//     if (el.textContent === "Menu") {
//       menu();
//     }
//     if (el.textContent === "Contact") {
//       contact();
//     }
//   });
// });
document.addEventListener("click", function (e) {
  const target = e.target.innerText;
  console.log(target);
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
