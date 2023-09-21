import { civIconsMap, civUniqueUnitIconsMap, civEmblemImageMap } from "../civ-images/image-helper";
import { getCivTechnologyDescription } from "../civ-images/civ-data/data-helper";
import { buildAudioElement, getAudioSource } from "../civ-sounds/sound-helper";

import { CivUpgradeOverlay } from "../civ-upgrade-overlay/civ-upgrade-overlay";

class CivTechOverlay {
  _soundsToPlay;
  _soundIndex;
  constructor() {
    this._soundIndex = 0;
    this._soundsToPlay = [];
  }
  buildElement(civName, autoHideDelay) {
    this._soundsToPlay.push(civName.toLowerCase());
    const mainDiv = this.buildDivContainer(civName, autoHideDelay);

    const nameContainerDiv = document.createElement("div");
    nameContainerDiv.classList.add("civ-name-container");
    nameContainerDiv.appendChild(this.buildCivIconElement(civName));
    nameContainerDiv.appendChild(this.buildNameElement(civName));
    nameContainerDiv.appendChild(this.buildCivUniqueUnit(civName));
    mainDiv.appendChild(nameContainerDiv);
    mainDiv.appendChild(this.buildCivDescription(civName));

    const civUpgrades = new CivUpgradeOverlay();
    mainDiv.appendChild(civUpgrades.buildElement(civName));

    mainDiv.appendChild(this.buildCivEmblem(civName));
    return mainDiv;
  }

  buildSounds() {
    const soundElement = buildAudioElement(this._soundsToPlay[this._soundIndex].toLowerCase());
    soundElement.onended = () => {
      this._soundIndex++;
      if (typeof this._soundsToPlay[this._soundIndex] !== "undefined") {
        // play next sound
        soundElement.src = getAudioSource(this._soundsToPlay[this._soundIndex]);
        soundElement.play();
      }
    };
    return soundElement;
  }
  buildDivContainer(autoHideDelay) {
    const divContainer = document.createElement("div");

    divContainer.classList.add("civ-tech-overlay-container");
    divContainer.classList.add("mask-img-vertical");
    setTimeout(() => {
      divContainer.classList.remove("civ-tech-animation-leave-active");
      divContainer.classList.add("civ-tech-animation-enter-active");
      if (autoHideDelay > -1) {
        setTimeout(() => {
          divContainer.classList.remove("civ-tech-animation-enter-active");
          divContainer.classList.add("civ-tech-animation-leave-active");
          divContainer.remove();
        }, autoHideDelay);
      }
    }, 1000);
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
