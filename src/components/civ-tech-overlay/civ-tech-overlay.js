import { civIconsMap, civUniqueUnitIconsMap, civEmblemImageMap } from "../civ-images/image-helper";
import { getCivTechnologyDescription } from "../civ-images/civ-data/data-helper";

class CivTechOverlay {
  constructor() {}
  buildElement(civName) {
    const mainDiv = this.buildDivContainer();

    const nameContainerDiv = document.createElement("div");
    nameContainerDiv.classList.add("civ-name-container");
    nameContainerDiv.appendChild(this.buildCivIconElement(civName));
    nameContainerDiv.appendChild(this.buildNameElement(civName));
    nameContainerDiv.appendChild(this.buildCivUniqueUnit(civName));
    mainDiv.appendChild(nameContainerDiv);
    mainDiv.appendChild(this.buildCivDescription(civName));
    // mainDiv.appendChild(this.buildCivUniqueUnit(civName));
    mainDiv.appendChild(this.buildCivEmblem(civName));

    return mainDiv;
  }

  buildDivContainer() {
    const divContainer = document.createElement("div");
    divContainer.classList.add("civ-tech-overlay-container");
    return divContainer;
  }
  buildNameElement(civName) {
    const nameElementDiv = document.createElement("div");
    nameElementDiv.classList.add("civ-name");

    const civNameText = `${civName.substring(0, 1).toUpperCase()}${civName.slice(1)}`;
    nameElementDiv.innerText = civNameText;
    return nameElementDiv;
  }
  buildCivIconElement(civName) {
    const civIcon = new Image();
    civIcon.classList.add("civ-icon");
    civIcon.src = `./${civIconsMap.get(civName)}`;
    return civIcon;
  }
  buildCivDescription(civName) {
    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("civ-description");
    descriptionDiv.innerHTML = getCivTechnologyDescription(civName);
    return descriptionDiv;
  }
  buildCivUniqueUnit(civName) {
    const civIcon = new Image();
    civIcon.classList.add("civ-unique-unit-icon");
    civIcon.src = `./${civUniqueUnitIconsMap.get(civName)}`;
    return civIcon;
  }
  buildCivEmblem(civName) {
    const civIcon = new Image();
    civIcon.classList.add("civ-emblem");
    civIcon.src = `./${civEmblemImageMap.get(civName)}`;
    return civIcon;
  }
}

export { CivTechOverlay };
