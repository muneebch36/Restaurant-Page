function makeMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    menu.appendChild(createMenuItem("vanilla bean","the mean bean is seen"));

return menu;
}

function createMenuItem(name,description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const foodImage = document.createElement("img");
    foodImage.src = `${name}.png`;
    foodImage.alt = `${name}`;

    const foodName = document.createElement("p");
    foodName.textContent = name;

    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;

    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
}

function menuTab() {
    content.appendChild(makeMenu());
}

export default menuTab;