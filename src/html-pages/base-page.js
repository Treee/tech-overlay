import "../style.css";

import { DefaultHTMLPageElements } from "./default-elements";

import { AdminPage } from "./admin-page";

class DefaultPage {
  buildHTMLBasePage() {
    const defaultElements = new DefaultHTMLPageElements();

    const htmlRoot = document.getElementsByTagName("html")[0];
    htmlRoot.appendChild(defaultElements.buildFooter());

    document.body.appendChild(new AdminPage().buildHTMLAdminHomePage());
  }
}

export { DefaultPage };
