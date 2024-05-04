import "./style.css";

import { LocalSavedData } from "./datastore";
import { ClientPage } from "./html-pages/client-page.js";
import OBSWebSocket, { EventSubscription } from "obs-websocket-js";

const savedData = new LocalSavedData();
savedData.loadData();
savedData.saveData();

const obs = new OBSWebSocket();

// https://treee.github.io/tech-overlay/client#guid:password
const url = window.location.href;
const urlParts = url.split("#");
// grab the password from the url
const importantParts = urlParts[1].split(":");

// connect to the obs websocked
await obs.connect(`ws://127.0.0.1:4455`, importantParts[1], {
  eventSubscriptions: EventSubscription.All,
  rpcVersion: 1,
});

// subscribe to custom events
obs.on("CustomEvent", (eventData) => {
  if (eventData.AGEOVERLAYPUSH) {
    console.log("event data", eventData);
    document.dispatchEvent(new CustomEvent("obs-websocket-overlay-push-event", { detail: eventData }));
  }
});

const dynamicContentDiv = document.createElement("div");
dynamicContentDiv.id = "dynamic-content";
dynamicContentDiv.classList.add("body-content");
document.body.appendChild(dynamicContentDiv);

new ClientPage(savedData, obs).buildHtml();
