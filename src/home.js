

function makeHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const homeImage = document.createElement("img");
    homeImage.src = "../src/nut.png";
    homeImage.alt = "nut";

    home.appendChild(makeHomeParagraph("Best Spirits since the dawn of life."));
    home.appendChild(homeImage);
    home.appendChild(makeHomeParagraph("Summoning orders available 3-4AM."));

return home;
};

function makeHomeParagraph(sentence) {
    const homeParagraph = document.createElement("p");
    homeParagraph.textContent = sentence
    return homeParagraph;
}

function homeTab() {
    const center = document.querySelector(".center");
    center.textContent = "";
    center.appendChild(makeHome());
}

export default homeTab;