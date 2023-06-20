function makeHome() {
    const home = document.createElement("div");

    const homeImage = document.createElement("img");
    homeImage.src = "../src/nut.png";
    homeImage.alt = "nut";

    home.appendChild(homeImage);

return home;
};

function resetContent() {
    const content = document.getElementById("content");
    content.textContent = "";
    content.appendChild(makeHome());
}


makeHome();
resetContent();

function createMenuItem(name,description) {
    const menuItem = document.createElement("div");

    const foodName = document.createElement("name");
    foodName.textContent = name;

    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;

    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
}