const SkeltonDiv = document.querySelector(".content");

export default function menuAdd() {
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
