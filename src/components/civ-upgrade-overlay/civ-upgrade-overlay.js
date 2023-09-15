import { civUpgradeIconMap } from "../civ-images/image-helper";

class CivUpgradeOverlay {
  constructor() {}
  buildElement(civName) {
    const mainDiv = this.buildDivContainer();

    return mainDiv;
  }

  buildDivContainer() {
    const divContainer = document.createElement("div");
    divContainer.classList.add("civ-upgrade-overlay-container");
    return divContainer;
  }

  buildBlackSmithContainer(civName) {
    const divContainer = document.createElement("div");
    divContainer.classList.add("civ-blacksmit-container");
    return divContainer;
  }
}

export { CivUpgradeOverlay };
