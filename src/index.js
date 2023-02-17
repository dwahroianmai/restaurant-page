import "./style.css";

function nav() {
  // create navbar
  const navbar = document.createElement("div");
  navbar.setAttribute("id", "navbar");
  // create tabs
  const home = document.createElement("div");
  home.textContent = "Home";
  home.setAttribute("class", "tab");
  const menu = document.createElement("div");
  menu.textContent = "Menu";
  menu.setAttribute("class", "tab");
  const contact = document.createElement("div");
  contact.textContent = "Contact us";
  contact.setAttribute("class", "tab");

  navbar.appendChild(home);
  navbar.appendChild(menu);
  navbar.appendChild(contact);

  return navbar;
}

document.querySelector("#content").appendChild(nav());
