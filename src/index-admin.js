import "./style.css";

import { LocalSavedData } from "./datastore.js";
import { DefaultHTMLPageElements } from "./html-pages/default-elements.js";
import { AdminPage } from "./html-pages/admin-page.js";
import OBSWebSocket from "obs-websocket-js";

const savedData = new LocalSavedData();
savedData.loadData();
savedData.saveData();

const obs = new OBSWebSocket();

const dynamicContentDiv = document.createElement("div");
dynamicContentDiv.id = "dynamic-content";
dynamicContentDiv.classList.add("body-content");
document.body.appendChild(dynamicContentDiv);

const defaultElements = new DefaultHTMLPageElements(savedData);
defaultElements.initDefaultElements();

new AdminPage(savedData, obs).buildHtml();
