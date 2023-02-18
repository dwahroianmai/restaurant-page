import "./style.css";
import menu from "./menu";
import contact from "./contactUs.js";

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

// creates home tab
function homeTab() {
  const background = document.createElement("div");
  background.setAttribute("id", "home-block");
  background.setAttribute("class", "block");

  const headings = document.createElement("div");
  headings.setAttribute("id", "hs");

  const heading = document.createElement("h2");
  const heading1 = document.createElement("h2");
  const heading2 = document.createElement("h2");

  const description = document.createElement("p");
  description.setAttribute("id", "desc");

  const book = document.createElement("button");
  book.setAttribute("id", "book");

  description.textContent =
    "Lorem ipsum dolor sit amet, \
    consectetur adipiscing elit. \
    Donec eget dolor in felis lobortis \
    gravida et et leo. Nullam sed \
    tristique nisi. Nunc sapien tortor, \
    accumsan a fermentum sed, pharetra at ante.";

  heading.textContent = "True ingredients";
  heading1.textContent = "True flavors";
  heading2.textContent = "True passion";

  book.textContent = "Make a reservation";

  headings.appendChild(heading);
  headings.appendChild(heading1);
  headings.appendChild(heading2);

  background.appendChild(headings);
  background.appendChild(description);
  background.appendChild(book);

  return background;
}

document.querySelector("#content").appendChild(nav());
document.querySelector("#content").appendChild(homeTab());

function homeListen() {
  const home = document.querySelector("#home");
  home.addEventListener("click", (e) => {
    e.target.setAttribute("style", "border-bottom: 2px solid #b5986d");
    document.querySelector("#menu").setAttribute("style", "border: none");
    document
      .querySelector("#content")
      .removeChild(document.querySelector(".block"));
    document.querySelector("#content").appendChild(homeTab());
  });
}

function menuListen() {
  const menu = document.querySelector("#menu");
  menu.addEventListener("click", (e) => {
    e.target.setAttribute("style", "border-bottom: 2px solid #b5986d");
    document.querySelector("#home").setAttribute("style", "border: none");
    document
      .querySelector("#content")
      .removeChild(document.querySelector(".block"));
    document.querySelector("#content").appendChild(menu());
  });
}

homeListen();
menuListen();
