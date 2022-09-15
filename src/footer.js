export default function footer() {
  const SkeltonDiv = document.querySelector(".content");
  const footer = document.createElement("footer");

  // creating p's
  footer.innerHTML =
    " <p>Designed by <a href='https://zarriy.com/' target='blank'>Zarriy</a></p> <p>All Rights Reserved| &copy; 2022</p>";
  SkeltonDiv.appendChild(footer);
}
