class ClientPage {
  _dataStore;
  constructor(dataStore) {
    this._dataStore = dataStore;
  }
  buildHtml() {
    this.hideHeaderAndFooter();
    const bodyContent = document.getElementById("dynamic-content");

    const clientPage = document.createElement("div");
    clientPage.classList.add("client-page");

    bodyContent.appendChild(clientPage);
  }

  hideHeaderAndFooter() {}
}

export { ClientPage };
