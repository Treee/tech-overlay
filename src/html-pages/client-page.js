import { getCivNames } from "../components/civ-images/civ-data/data-helper";
import { CivTechOverlay } from "../components/civ-tech-overlay/civ-tech-overlay";
class ClientPage {
  _dataStore;
  constructor(dataStore) {
    this._dataStore = dataStore;
  }
  buildHtml() {
    this.initClientDefaults();
    const bodyContent = document.getElementById("dynamic-content");

    const clientPage = document.createElement("div");
    clientPage.classList.add("client-page");

    const techOverlayGenerator = new CivTechOverlay();
    // clientPage.appendChild(techOverlayGenerator.buildElement(getCivNames()[0].toLowerCase()));
    // clientPage.appendChild(techOverlayGenerator.buildElement(getCivNames()[1].toLowerCase()));
    // clientPage.appendChild(techOverlayGenerator.buildElement(getCivNames()[2].toLowerCase()));
    // clientPage.appendChild(techOverlayGenerator.buildElement(getCivNames()[3].toLowerCase()));

    let timer = 12000;
    clientPage.appendChild(techOverlayGenerator.buildElement(this.getRandomCiv(), timer));
    clientPage.appendChild(techOverlayGenerator.buildElement(this.getRandomCiv(), (timer += 3000)));
    clientPage.appendChild(techOverlayGenerator.buildElement(this.getRandomCiv(), (timer += 3000)));
    clientPage.appendChild(techOverlayGenerator.buildElement(this.getRandomCiv(), (timer += 3000)));
    const useSound = true;
    if (useSound) {
      const soundElement = techOverlayGenerator.buildSounds();
      clientPage.appendChild(soundElement);
      setTimeout(() => {
        soundElement.play();
      }, 1000);
    }
    bodyContent.appendChild(clientPage);
  }

  initClientDefaults() {
    document.getElementById("header").remove();
    document.getElementById("footer").remove();
    document.body.classList.add("client-body");
  }

  getRandomCiv() {
    const civNames = getCivNames();
    return civNames[this.randomIntFromInterval(0, civNames.length - 1)].toLowerCase();
  }
  randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

export { ClientPage };
