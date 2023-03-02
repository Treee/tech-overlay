import { CivIconList } from "../civ-icons/civ-icon-list";

class TechOverlayControl {
  buildElement() {
    const element = document.createElement("div");
    //header
    const headerElement = document.createElement("h3");
    headerElement.innerHTML = "Technology Overlay";
    // controls
    const controlsElement = document.createElement("div");
    // list of civs
    const civIconListBuilder = new CivIconList();
    const civListElement = civIconListBuilder.buildElement();

    element.appendChild(headerElement);
    element.appendChild(controlsElement);
    element.appendChild(civListElement);
    return element;
  }
}

export { TechOverlayControl };
