import "./style.css";

import { LocalSavedData } from "./datastore";
import { ClientPage } from "./html-pages/client-page.js";
import OBSWebSocket from "obs-websocket-js";

const savedData = new LocalSavedData();
savedData.loadData();
savedData.saveData();

const obs = new OBSWebSocket();

// https://treee.github.io/tech-overlay/client#guid:password
const url = window.location.href;
const urlParts = url.split("#");
const importantParts = urlParts[1].split(":");
// await obs.connect(`ws://${savedData._sensitiveDataStore._websocket_ip}:${savedData._sensitiveDataStore._websocket_port}`, savedData._sensitiveDataStore._websocket_password);
await obs.connect(`ws://127.0.0.1:4455`, importantParts[1]);
console.log(`ws://127.0.0.1:4455 pw:${importantParts[1]}`);

obs.on("ConnectionOpened", () => {
  console.log("CLIENT CONNECTED TO OBS WEBSOCKET");
});
obs.on("VendorEvent", ({ vendorName, eventType, eventData }) => {
  console.log({ vendorName, eventType, eventData });
});
obs.on("obs-websocket-overlay-push-event", (event) => {
  console.log(event);
});
window.addEventListener("obs-websocket-overlay-push-event", function (event) {
  console.log(event.detail);
});

const dynamicContentDiv = document.createElement("div");
dynamicContentDiv.id = "dynamic-content";
dynamicContentDiv.classList.add("body-content");
document.body.appendChild(dynamicContentDiv);

new ClientPage(savedData, obs).buildHtml();
