function makeHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const homeImage = document.createElement("img");
    homeImage.src = "../src/nut.png";
    homeImage.alt = "nut";

    const homeParagraph = document.createElement("p");
    const homeParagraph2 = document.createElement("p");
    const homeSentence = ["Line 1", "Line 2", "Line 3"];

    homeParagraph.textContent = homeSentence[0];
    home.appendChild(homeParagraph);
    home.appendChild(homeImage);
    homeParagraph2.textContent = homeSentence[1];
    home.appendChild(homeParagraph2);
    homeParagraph.textContent = homeSentence[2];
    home.appendChild(homeParagraph);

return home;
};

function homeTab() {
    content.appendChild(makeHome());
}

export default homeTab;