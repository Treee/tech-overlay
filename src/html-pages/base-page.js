import "../style.css";

import { DefaultHTMLPageElements } from "./default-elements";

import { AdminPage } from "./admin-page";

class TechBasePage {
  _dataStore;

  constructor(dataStore) {
    this._dataStore = dataStore;
  }

  buildHTMLBasePage() {
    const defaultElements = new DefaultHTMLPageElements(this._dataStore);

    document.head.appendChild(defaultElements.buildFavIcon());

    const bodyContent = document.createElement("div");
    bodyContent.classList.add("body-content");
    bodyContent.appendChild(defaultElements.buildHeader());
    bodyContent.appendChild(new AdminPage(this._dataStore).buildHTMLAdminHomePage());
    document.body.appendChild(bodyContent);
    document.body.appendChild(defaultElements.buildFooter());
  }
}

export { TechBasePage };
