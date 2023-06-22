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

function makeNav() {
    const navBar = document.createElement("nav");

    const homeButton = document.createElement("button");
    homeButton.classList.add("home-button");
    homeButton.textContent = "HOME";
    homeButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        homeTab();
      });

      const contactButton = document.createElement("button");
      contactButton.classList.add("contact-button");
      contactButton.textContent = "CONTACT";
      contactButton.addEventListener("click", (e) => {
          if (e.target.classList.contains("active")) return;
          contactTab();
        });

  const menuButton = document.createElement("button");
      menuButton.classList.add("menu-button");
      menuButton.textContent = "MENU";
      menuButton.addEventListener("click", (e) => {
          if (e.target.classList.contains("active")) return;
          menuTab();
        });

    navBar.appendChild(homeButton);
    navBar.appendChild(menuButton);
    navBar.appendChild(contactButton);
    
return navBar;
}

function makeCenter() {
    const center = document.createElement("div");
    center.classList.add("center");
    return center;
  }

function newTab() {
    const content = document.getElementById("content");
    content.textContent = "";
    content.appendChild(makeHeader());
    content.appendChild(makeCenter());
    homeTab();

return content;
}

newTab();



