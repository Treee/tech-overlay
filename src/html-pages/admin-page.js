import { TechOverlayControl } from "../components/tech-overlay-control/tech-overlay-control";

class AdminPage {
  _dataStore;
  _civList;
  constructor(dataStore, civList) {
    this._dataStore = dataStore;
    this._civList = civList;
  }
  buildHtml() {
    const bodyContent = document.getElementById("dynamic-content");

    const adminPage = document.createElement("div");
    adminPage.classList.add("admin-page");

    const techOverlayControl = new TechOverlayControl(this._dataStore, this._civList);
    adminPage.appendChild(techOverlayControl.buildElement());

    bodyContent.appendChild(adminPage);
  }
}

export { AdminPage };
