function makeContact() {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const contactNumber = document.createElement("p");
    contactNumber.textContent = "411";

    const contactAddress = document.createElement("p");
    contactAddress.textContent = "LEL Drive";

    const contactLocation = document.createElement("img");
    contactLocation.src = "../src/location.png";
    contactLocation.alt = "location";

    contact.appendChild(contactNumber);
    contact.appendChild(contactAddress);
    contact.appendChild(contactLocation);

return contact;
}

function contactTab() {
    content.appendChild(makeContact());
}

export default contactTab;