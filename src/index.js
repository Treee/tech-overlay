import "./style.css";

import { LocalSavedData } from "./datastore";
import { MyRouter } from "./myrouter";
import { DefaultHTMLPageElements } from "./html-pages/default-elements";
import { InvalidPage } from "./html-pages/invalid-page";
import { AdminPage } from "./html-pages/admin-page";
import { ClientPage } from "./html-pages/client-page";
import { CivIconList } from "./components/civ-icons/civ-icon-list";

const savedData = new LocalSavedData();
savedData.loadData();
savedData.saveData();

const dynamicContentDiv = document.createElement("div");
dynamicContentDiv.id = "dynamic-content";
dynamicContentDiv.classList.add("body-content");

document.body.appendChild(dynamicContentDiv);

const civIconList = new CivIconList();
const defaultElements = new DefaultHTMLPageElements(savedData);
defaultElements.initDefaultElements();

const router = new MyRouter();
// router.addRoute("404", "", () => {
//   new InvalidPage(savedData).buildHtml();
// });
router.addRoute("admin", "", () => {
  new AdminPage(savedData, civIconList).buildHtml();
});
router.addRoute("matchset", "matchset", () => {
  new InvalidPage(savedData).buildHtml();
});
router.addRoute("client", `client/${savedData._techOverlayStore._label_userId}`, () => {
  new ClientPage(savedData).buildHtml();
});

//Start router when content is loaded
document.addEventListener("DOMContentLoaded", function () {
  router.init();
});
