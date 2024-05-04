import { SocketEnums } from "../../common-data";
class TechOverlayControl {
  _dataStore;
  _civList;
  _clientWebsocket;
  constructor(dataStore, civList, clientWebsocket) {
    this._dataStore = dataStore;
    this._civList = civList;
    this._clientWebsocket = clientWebsocket;
  }
  buildElement() {
    const element = document.createElement("div");
    element.classList.add("left-column");
    // controls
    const controlsElement = this.buildTechSettingsPanel();

    // list of civs
    const civListElement = this._civList.buildElement(true);
    civListElement.classList.add("tech-civ-list");

    element.appendChild(controlsElement);
    element.appendChild(civListElement);

    //when the dom loads the civ list, update it with our settings
    setTimeout(() => {
      this.modifyCivCountCSS();
    }, 50);
    return element;
  }

  buildTechSettingsPanel() {
    const element = document.createElement("div");
    element.classList.add("tech-settings");

    //header
    const headerElement = document.createElement("div");
    headerElement.classList.add("tech-header");
    headerElement.innerHTML = "Technology Overlay";
    element.appendChild(headerElement);

    const buttonsElement = document.createElement("div");
    buttonsElement.classList.add("action-buttons");
    buttonsElement.appendChild(this.buildButton("Clear", "button-red", this.onClearClicked.bind(this)));
    buttonsElement.appendChild(this.buildButton("Show", "button-blue", this.onShowClicked.bind(this)));
    element.appendChild(buttonsElement);

    const settingsElement = document.createElement("div");
    settingsElement.classList.add("action-settings");
    Object.keys(this._dataStore._techOverlayStore).forEach((key, index) => {
      // console.log(`key ${key} :: ${this._dataStore._techOverlayStore[key]}`);
      if (key === "_label_userId") {
        return;
      }
      if (typeof this._dataStore._techOverlayStore[key] === "boolean") {
        settingsElement.appendChild(this.buildCheckBox(key, this._dataStore._techOverlayStore[key]));
      } else if (typeof this._dataStore._techOverlayStore[key]) {
        settingsElement.appendChild(this.buildInputBox(key, this._dataStore._techOverlayStore[key]));
      }
    });
    element.appendChild(settingsElement);

    return element;
  }
  buildCheckBox(label, value) {
    const container = document.createElement("div");
    container.classList.add("setting-container");

    const element = document.createElement("label");
    element.classList.add("switch");
    element.setAttribute("for", label);

    const spanLabel = document.createElement("span");
    spanLabel.innerHTML = this.sanitizeDisplayValue(label);

    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = label;
    inputCheckbox.checked = value;
    inputCheckbox.addEventListener("change", (event) => {
      this.saveData(event);
    });

    const spanCheckbox = document.createElement("span");
    spanCheckbox.classList.add("slider");
    spanCheckbox.classList.add("round");

    container.appendChild(spanLabel);
    container.appendChild(element);

    element.appendChild(inputCheckbox);
    element.appendChild(spanCheckbox);

    return container;
  }
  buildInputBox(label, value) {
    const element = document.createElement("div");
    element.classList.add("setting-container");

    const elementLabel = document.createElement("label");
    elementLabel.setAttribute("for", label);

    const spanLabel = document.createElement("span");
    spanLabel.innerHTML = this.sanitizeDisplayValue(label);

    const inputNumber = document.createElement("input");
    inputNumber.classList.add("input-number");
    inputNumber.type = "number";
    inputNumber.id = label;
    inputNumber.value = value;
    inputNumber.addEventListener("change", (event) => {
      this.saveData(event);
      if (event.target.id === "_numCivsPerRow") {
        this.modifyCivCountCSS();
      }
    });

    element.appendChild(elementLabel);
    element.appendChild(spanLabel);
    element.appendChild(inputNumber);

    return element;
  }
  buildButton(label, buttonClass, callback) {
    const element = document.createElement("div");
    element.classList.add("setting-container");

    const button = document.createElement("button");
    button.classList.add("setting-button", buttonClass);
    button.id = label;
    button.innerHTML = label;
    button.addEventListener("click", callback, false);
    element.appendChild(button);
    return element;
  }

  onClearClicked(event) {
    const data = {
      eventData: { AGEOVERLAYPUSH: this.buildPayload(false) },
    };
    this._clientWebsocket.call("BroadcastCustomEvent", data);
    this._civList.resetState();
  }
  onShowClicked(event) {
    const data = {
      eventData: { AGEOVERLAYPUSH: this.buildPayload(true) },
    };
    this._clientWebsocket.call("BroadcastCustomEvent", data);
  }

  buildPayload(show) {
    const payload = Object.assign({}, this._dataStore._techOverlayStore, { showOverlay: show, pickedCivs: this._civList.getListOfCivsClicked() });
    return payload;
  }

  saveData() {
    Object.keys(this._dataStore._techOverlayStore).forEach((key, index) => {
      let storedValue;
      if (key === "_label_userId") {
        storedValue = this._dataStore._techOverlayStore[key];
      } else if (document.getElementById(key).value === "on") {
        storedValue = document.getElementById(key).checked;
      } else {
        storedValue = document.getElementById(key).value;
      }
      this._dataStore._techOverlayStore[key] = storedValue;
    });
    this._dataStore.saveData();
  }
  modifyCivCountCSS() {
    const widthPercent = 100 / this._dataStore._techOverlayStore._numCivsPerRow;
    document.querySelectorAll(".admin-civ-icon").forEach((e) => {
      e.style.flex = `1 0 ${widthPercent}%`;
    });
  }

  sanitizeDisplayValue(value) {
    return value.replace("_show", "").replace("_use", "").replace("_", "").replace("Tech", "");
  }
}

export { TechOverlayControl };
