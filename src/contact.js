const SkeltonDiv = document.querySelector(".content");

export default function ContactPage() {
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
