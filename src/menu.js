function menuTab() {
  const background = document.createElement("div");
  background.setAttribute("id", "menu-block");
  background.setAttribute("class", "block");

  background.appendChild(dish("../src/img/menu/entree.svg", "Entree", "15$"));
  background.appendChild(
    dish("../src/img/menu/breakfast.svg", "Breakfast", "10$")
  );
  background.appendChild(dish("../src/img/menu/lunch.svg", "Lunch", "13$"));
  background.appendChild(
    dish("../src/img/menu/main-dish.svg", "Main dish", "20$")
  );
  background.appendChild(dish("../src/img/menu/dessert.svg", "Dessert", "7$"));
  background.appendChild(dish("../src/img/menu/breads.svg", "Breads", ""));

  return background;
}

function dish(source, name, price) {
  let dishContainer = document.createElement("div");
  dishContainer.setAttribute("class", "dish");
  let info = document.createElement("div");
  info.setAttribute("class", "info");
  let dishName = document.createElement("p");
  dishName.textContent = name;
  let priceP = document.createElement("p");
  priceP.textContent = price;
  info.appendChild(dishName);
  info.appendChild(priceP);
  let img = document.createElement("img");
  img.src = source;
  dishContainer.appendChild(img);
  dishContainer.appendChild(info);
  return dishContainer;
}

export default menuTab;
