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

    adminPage.appendChild(this.buildWebSocketHtml());
    const civIconList = new CivIconList();
    const techOverlayControl = new TechOverlayControl(this._dataStore, civIconList, this._clientWebsocket);
    adminPage.appendChild(techOverlayControl.buildElement());

    bodyContent.appendChild(adminPage);
  }
  buildWebSocketHtml() {
    const websocketControls = document.createElement("div");
    websocketControls.id = "websocket-controls";
    websocketControls.classList.add("websocket-controls");

    const ipInputBox = document.createElement("input");
    ipInputBox.classList.add("websocket-input");
    ipInputBox.id = "websocket-ip-input";
    ipInputBox.type = "text";
    ipInputBox.value = this._dataStore._sensitiveDataStore._websocket_ip === "" ? "obs-websocket ipv4 or ipv6 address" : this._dataStore._sensitiveDataStore._websocket_ip;
    websocketControls.appendChild(ipInputBox);

    const passwordInputBox = document.createElement("input");
    passwordInputBox.classList.add("websocket-input");
    passwordInputBox.id = "websocket-password-input";
    passwordInputBox.type = "password";
    passwordInputBox.value = this._dataStore._sensitiveDataStore._websocket_password === "" ? "password" : this._dataStore._sensitiveDataStore._websocket_password;

    websocketControls.appendChild(passwordInputBox);

    const websocketConnectButton = document.createElement("input");
    websocketConnectButton.type = "button";
    websocketConnectButton.value = "Connect";
    websocketConnectButton.classList.add("websocket-setting-button", "button-blue");
    websocketConnectButton.addEventListener("click", async (event) => {
      this._dataStore.saveData();
      const result = await this.connectToObsWebsocket();
      if (result) {
        console.log("Connected to obs-websocket");
      } else {
        console.log("Invalid IP");
      }
    });
    websocketControls.appendChild(websocketConnectButton);

    const websocketDisconnectButton = document.createElement("input");
    websocketDisconnectButton.type = "button";
    websocketDisconnectButton.value = "Disconnect";
    websocketDisconnectButton.classList.add("websocket-setting-button", "button-red");
    websocketDisconnectButton.addEventListener("click", async (event) => {
      this._dataStore.saveData();
      await this.disconnectFromObsWebsocket();
      console.log("Disconnected from obs-websocket");
    });
    websocketControls.appendChild(websocketDisconnectButton);

    return websocketControls;
  }
  async connectToObsWebsocket() {
    const ip = document.getElementById("websocket-ip-input").value;
    let ipParts = ip.split(".");
    let formattedIp = "";
    let isValidIp = false;
    if (ipParts.length === 4) {
      // ipv4
      formattedIp = ip;
      isValidIp = true;
    }
    ipParts = ip.split(":");
    if (ipParts.length === 8) {
      // ipv6
      if (ip.indexOf("[") !== 0) {
        formattedIp = `[${ip}]`;
      } else {
        formattedIp = ip;
      }
      isValidIp = true;
    }
    if (isValidIp) {
      const password = document.getElementById("websocket-password-input").value;

      this._dataStore._sensitiveDataStore["_websocket_ip"] = formattedIp;
      this._dataStore._sensitiveDataStore["_websocket_password"] = password;
      await this._clientWebsocket.connect(`ws://${formattedIp}:4455`, password);
      return true;
    }
    return false;
  }
  async disconnectFromObsWebsocket() {
    await this._clientWebsocket.disconnect();
  }
}

export { AdminPage };
