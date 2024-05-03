import "./style.css";

import { LocalSavedData } from "./datastore";
import { ClientPage } from "./html-pages/client-page.js";
import OBSWebSocket from "obs-websocket-js";

const savedData = new LocalSavedData();
savedData.loadData();
savedData.saveData();

const obs = new OBSWebSocket();

// await obs.connect(`ws://${savedData._sensitiveDataStore._websocket_ip}:${savedData._sensitiveDataStore._websocket_port}`, savedData._sensitiveDataStore._websocket_password);
await obs.connect(`wss://127.0.0.1:${savedData._sensitiveDataStore._websocket_port}`, savedData._sensitiveDataStore._websocket_password);

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
