import contactTab from "./contactUs";

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
  book.addEventListener("click", () => {
    console.log("works");
    document
      .querySelector("#content")
      .removeChild(document.querySelector("#home-block"));
    document.querySelector("#content").appendChild(contactTab());
    document.querySelector("#home").setAttribute("style", "border: none");
    document.querySelector("#menu").setAttribute("style", "border: none");
    document
      .querySelector("#contact")
      .setAttribute("style", "border-bottom: 2px solid #b5986d");
  });

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

export default homeTab;
