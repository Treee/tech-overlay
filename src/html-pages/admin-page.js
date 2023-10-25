import { TechOverlayControl } from "../components/tech-overlay-control/tech-overlay-control";
import { CivIconList } from "../components/civ-icons/civ-icon-list";

class AdminPage {
  _dataStore;
  _clientWebsocket;
  constructor(dataStore, clientWebsocket) {
    this._dataStore = dataStore;
    this._clientWebsocket = clientWebsocket;
  }
  buildHtml() {
    document.body.classList.add("admin-body");
    const bodyContent = document.getElementById("dynamic-content");

    const adminPage = document.createElement("div");
    adminPage.classList.add("admin-page");

    const civIconList = new CivIconList();
    const techOverlayControl = new TechOverlayControl(this._dataStore, civIconList, this._clientWebsocket);
    adminPage.appendChild(techOverlayControl.buildElement());

    bodyContent.appendChild(adminPage);
  }
}

export { AdminPage };
