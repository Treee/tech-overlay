import "../style.css";

import { DefaultHTMLPageElements } from "./default-elements";

import { AdminPage } from "./admin-page";

class TechBasePage {
  _dataStore;

  constructor(dataStore) {
    this._dataStore = dataStore;
  }

  buildHTMLBasePage() {
    const defaultElements = new DefaultHTMLPageElements();

    document.head.appendChild(defaultElements.buildFavIcon());

    document.body.appendChild(defaultElements.buildHeader());
    document.body.appendChild(new AdminPage(this._dataStore).buildHTMLAdminHomePage());

    const htmlRoot = document.getElementsByTagName("html")[0];
    htmlRoot.appendChild(defaultElements.buildFooter());
  }
}

export { TechBasePage };
