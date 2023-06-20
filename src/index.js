function makeHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const homeImage = document.createElement("img");
    homeImage.src = "../src/nut.png";
    homeImage.alt = "nut";

    const homeParagraphOne = document.createElement("p");
    const homeParagraphTwo = document.createElement("p");
    const homeParagraphThree = document.createElement("p");

    homeParagraphOne.textContent = "Line 1";
    homeParagraphTwo.textContent = "Line 2";
    homeParagraphThree.textContent = "Line 3";

    home.appendChild(homeParagraphOne);
    home.appendChild(homeImage);
    home.appendChild(homeParagraphTwo);
    home.appendChild(homeParagraphThree);

return home;
};

function homeTab() {
    const content = document.getElementById("content");
    content.textContent = "";
    content.appendChild(makeHome());
}

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
    foodImage.src = `images/${name}.png`;
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
    const content = document.getElementById("content");
    content.textContent = "";
    content.appendChild(makeMenu());
}

function makeContact() {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const contactNumber = document.createElement("p");
    contactNumber.textContent = "411";

    const contactAddress = document.createElement("p");
    contactAddress.textContent = "LEL Drive";

    const contactLocation = document.createElement("img");
    contactLocation.src = "images/location.png";
    contactLocation.alt = "location";

    contact.appendChild(contactNumber);
    contact.appendChild(contactAddress);
    contact.appendChild(contactLocation);

return contact;
}

function contactTab() {
    const content = document.getElementById("content");
    content.textContent = "";
    content.appendChild(makeContact());
}

makeHome();
homeTab();

//export home, menu and contact to their own modules. make index load the buttons
//needed and event listeners.

