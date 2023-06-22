

function makeHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const homeImage = document.createElement("img");
    homeImage.src = "../src/nut.png";
    homeImage.alt = "nut";

    home.appendChild(makeHomeParagraph("Line 1"));
    home.appendChild(homeImage);
    home.appendChild(makeHomeParagraph("Line 2"));
    home.appendChild(makeHomeParagraph("Line 3"));

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