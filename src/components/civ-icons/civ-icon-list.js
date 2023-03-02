import { CivIconBuilder } from "./civ-icon.js";

function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context("../", true, /\.(png)$/));

class CivIconList {
  buildElement() {
    const element = document.createElement("div");
    const iconBuilder = new CivIconBuilder();

    images.forEach((img) => {
      const iconElement = iconBuilder.buildElement(img);
      element.appendChild(iconElement);
    });

    return element;
  }
}
export { CivIconList };
