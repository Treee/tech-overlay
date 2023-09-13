class InvalidPage {
  _dataStore;
  constructor(dataStore) {
    this._dataStore = dataStore;
  }
  buildHtml() {
    const bodyContent = document.getElementById("dynamic-content");

    const invalidPage = document.createElement("div");
    invalidPage.classList.add("invalid-page");

    invalidPage.innerText = "404 Not Error Not Found";

    bodyContent.appendChild(invalidPage);
  }
}

export { InvalidPage };
