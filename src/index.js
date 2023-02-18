import "./style.css";
import homeTab from "./home";
import menuTab from "./menu";
import contactTab from "./contactUs.js";

function nav() {
  // create navbar
  const navbar = document.createElement("div");
  navbar.setAttribute("id", "navbar");
  // create tabs
  const home = createTab("Home", "tab", "home");
  const menu = createTab("Menu", "tab", "menu");
  const contact = createTab("Contact us", "tab", "contact");

  navbar.appendChild(home);
  navbar.appendChild(menu);
  navbar.appendChild(contact);

  return navbar;
}

// creates nav tabs
function createTab(text, clas, id) {
  const tab = document.createElement("div");
  tab.textContent = text;
  tab.setAttribute("class", clas);
  tab.setAttribute("id", id);
  return tab;
}

document.querySelector("#content").appendChild(nav());
document.querySelector("#content").appendChild(homeTab());

function homeListen() {
  document
    .querySelector("#home")
    .addEventListener("click", (e) =>
      listener(e, "#menu", "#contact", homeTab())
    );
}

function menuListen() {
  document
    .querySelector("#menu")
    .addEventListener("click", (e) =>
      listener(e, "#home", "#contact", menuTab())
    );
}

function contactListen() {
  document
    .querySelector("#contact")
    .addEventListener("click", (e) =>
      listener(e, "#home", "#menu", contactTab())
    );
  document
    .querySelector("#book")
    .addEventListener("click", (e) =>
      listener(e, "#home", "#menu", contactTab())
    );
}

function listener(e, none1, none2, func) {
  e.target.setAttribute("style", "border-bottom: 2px solid #b5986d");
  document.querySelector(none1).setAttribute("style", "border: none");
  document.querySelector(none2).setAttribute("style", "border: none");
  document
    .querySelector("#content")
    .removeChild(document.querySelector(".block"));
  document.querySelector("#content").appendChild(func);
}

homeListen();
menuListen();
contactListen();
