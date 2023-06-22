function makeBody() {
    const body = document.createElement("body");
    body.classList.add("body");
    body.textContent = "";
    return body;
  }

  export default makeBody;