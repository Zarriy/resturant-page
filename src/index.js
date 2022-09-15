import heroArea from "./mainPage";
import menuAdd from "./menu";
import ContactPage from "./contact";
import "./style.css";

// creating the complete page in index.js
// running

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
    "<li data-link='1' class='active'><a href='#'>Home</a></li> <li data-link='2'><a href='#'>Menu</a></li> <li data-link='3'><a href='#'>Contact</a></li>";

  SkeltonDiv.appendChild(header);
  header.appendChild(div1);
  header.appendChild(div2);
  div2.appendChild(menubar);
}
headerCreator();

// creating hero area

heroArea();
menuAdd();
ContactPage();

// footer Section
const footer = function () {
  const footer = document.createElement("footer");

  // creating p's
  footer.innerHTML =
    " <p>Designed by <a href='https://zarriy.com/' target='blank'>Zarriy</a></p> <p>All Rights Reserved| &copy; 2022</p>";
  SkeltonDiv.appendChild(footer);
};
footer();
