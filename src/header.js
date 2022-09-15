const SkeltonDiv = document.querySelector(".content");

export default function headerCreator() {
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
