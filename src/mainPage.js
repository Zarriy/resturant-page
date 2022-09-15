const SkeltonDiv = document.querySelector(".content");

export default function heroArea() {
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
    '<img src="./images/hero-img.png" alt="Healthy Food for healthy people" width="460px" height="auto" />';

  SkeltonDiv.appendChild(heroA);
  heroA.appendChild(textDiv);
  heroA.appendChild(imgDiv);
  textDiv.appendChild(h1);
  textDiv.appendChild(para);
  textDiv.appendChild(btn);
}
