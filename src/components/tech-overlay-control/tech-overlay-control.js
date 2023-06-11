import { CivIconList } from "../civ-icons/civ-icon-list";

class TechOverlayControl {
  _dataStore;
  constructor(dataStore) {
    this._dataStore = dataStore;
  }
  buildElement() {
    const element = document.createElement("div");
    element.classList.add("left-column");
    // controls
    const controlsElement = this.buildTechSettingsPanel();

    // list of civs
    const civIconListBuilder = new CivIconList();
    const civListElement = civIconListBuilder.buildElement(true);
    civListElement.classList.add("tech-civ-list");

    element.appendChild(controlsElement);
    element.appendChild(civListElement);

    setTimeout(() => {
      this.modifyCivCountCSS();
    }, 50);
    return element;
  }

  buildTechSettingsPanel() {
    //header
    const headerElement = document.createElement("h3");
    headerElement.classList.add("tech-header");
    headerElement.innerHTML = "Technology Overlay";

    const element = document.createElement("div");
    element.classList.add("tech-settings");

    element.appendChild(headerElement);
    element.appendChild(this.buildButton("Clear", "button-red", this.onClearClicked));
    element.appendChild(this.buildButton("Show", "button-blue", this.onShowClicked));

    Object.keys(this._dataStore._techOverlayStore).forEach((key, index) => {
      // console.log(`key ${key} :: ${this._dataStore._techOverlayStore[key]}`);
      if (typeof this._dataStore._techOverlayStore[key] == "boolean") {
        element.appendChild(this.buildCheckBox(key, this._dataStore._techOverlayStore[key]));
      } else if (typeof this._dataStore._techOverlayStore[key]) {
        element.appendChild(this.buildInputBox(key, this._dataStore._techOverlayStore[key]));
      }
    });

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
      if (event.target.id == "_numCivsPerRow") {
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
    console.log("clear");
  }
  onShowClicked(event) {
    console.log("show");
  }

  saveData() {
    Object.keys(this._dataStore._techOverlayStore).forEach((key, index) => {
      let storedValue;
      if (document.getElementById(key).value == "on") {
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
    document.querySelectorAll(".admin-civ-icon").forEach((e) => (e.style.flex = `1 0 ${widthPercent}%`));
  }

  sanitizeDisplayValue(value) {
    return value.replace("_show", "").replace("_use", "").replace("_", "").replace("Tech", "");
  }
}

export { TechOverlayControl };
