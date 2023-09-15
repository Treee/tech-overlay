import { CivTechOverlay } from "../components/civ-tech-overlay/civ-tech-overlay";
class ClientPage {
  _dataStore;
  constructor(dataStore) {
    this._dataStore = dataStore;
  }
  buildHtml() {
    this.initClientDefaults();
    const bodyContent = document.getElementById("dynamic-content");

    const clientPage = document.createElement("div");
    clientPage.classList.add("client-page");

    const techOverlayGenerator = new CivTechOverlay();
    clientPage.appendChild(techOverlayGenerator.buildElement("aztecs"));
    clientPage.appendChild(techOverlayGenerator.buildElement("lithuanians"));

    bodyContent.appendChild(clientPage);
  }

  initClientDefaults() {
    document.getElementById("header").remove();
    document.getElementById("footer").remove();
    document.body.classList.add("client-body");
  }
}

export { ClientPage };
