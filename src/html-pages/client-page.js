import { SocketEnums } from "../common-data";
import { getCivNames } from "../components/civ-images/civ-data/data-helper";
import { CivTechOverlay } from "../components/civ-tech-overlay/civ-tech-overlay";
class ClientPage {
  _dataStore;
  _clientWebsocket;
  _techOverlay;
  constructor(dataStore, clientWebsocket) {
    this._dataStore = dataStore;
    this._clientWebsocket = clientWebsocket;
    this._techOverlay = new CivTechOverlay();
    document.addEventListener("obs-websocket-overlay-push-event", this.digestWebsocketMessage.bind(this));
  }
  buildHtml() {
    const bodyContent = document.getElementById("dynamic-content");

    const clientPageDOM = document.createElement("div");
    clientPageDOM.classList.add("client-page");
    clientPageDOM.id = "client-page";
    bodyContent.appendChild(clientPageDOM);
  }

  digestWebsocketMessage(event) {
    if (event) {
      const rawData = event.detail.AGEOVERLAYPUSH;
      if (rawData) {
        const clientPage = document.getElementById("client-page");
        this._techOverlay.clearCivDivs();
        if (rawData.showOverlay) {
          const additionalOptions = (({ _showBlacksmithTech, _showUniversityTech, _showMonastaryTech }) => ({ _showBlacksmithTech, _showUniversityTech, _showMonastaryTech }))(rawData);
          rawData.pickedCivs.forEach((pickedCiv) => {
            if (rawData._autoHide) {
              clientPage.appendChild(this._techOverlay.buildElement(pickedCiv.toLowerCase(), additionalOptions, parseInt(rawData._autoHideDelay) * 1000));
            } else {
              clientPage.appendChild(this._techOverlay.buildElement(pickedCiv.toLowerCase(), additionalOptions, -1));
            }
          });

          if (rawData.pickedCivs.length > 0) {
            if (rawData._useSound) {
              const soundElement = this._techOverlay.buildSounds();
              clientPage.appendChild(soundElement);
              setTimeout(() => {
                soundElement.play();
              }, 1000);
            }
          }
        }
      }
    }
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
