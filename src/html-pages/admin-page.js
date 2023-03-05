import { TechOverlayControl } from "../components/tech-overlay-control/tech-overlay-control";

class AdminPage {
  _dataStore;
  constructor(dataStore) {
    this._dataStore = dataStore;
  }
  buildHTMLAdminHomePage() {
    const adminPage = document.createElement("div");
    adminPage.classList.add("admin-page");

    const techOverlayControl = new TechOverlayControl(this._dataStore);
    adminPage.appendChild(techOverlayControl.buildElement());

    return adminPage;
  }
}

export { AdminPage };
