import homeTab from "./home";
import menuTab from "./menu";
import contactTab from "./contact";

function makeHeader() {
    const header = document.createElement("div");
    header.classList.add("header");

    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "Blastin Nuts";

    header.appendChild(title);
    header.appendChild(makeNav());

return header;
};

function makeButton(name) {
    const button = document.createElement("button");
    button.classList.add("button");
    button.textContent = name;
    return button;
}

function makeNav() {
    const navBar = document.createElement("nav");
   
    const buttonTitles = ["HOME","MENU","CONTACT"];

    const homeButton = makeButton(buttonTitles[0]);
/*     homeButton.addEventListener('click',homeTab()); */

    const menuButton = makeButton(buttonTitles[1]);
   /*  menuButton.addEventListener('click',menuTab()); */

    const contactButton = makeButton(buttonTitles[2]);
   /*  contactButton.addEventListener('click',contactTab()); */

    navBar.appendChild(homeButton);
    navBar.appendChild(menuButton);
    navBar.appendChild(contactButton);
    
return navBar;
}

function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.textContent = "";
    return main;
  }

function newTab() {
    const content = document.getElementById("content");
    content.textContent = "";
    content.appendChild(makeHeader());
    content.appendChild(createMain());

    homeTab();

return content;
}

newTab();



