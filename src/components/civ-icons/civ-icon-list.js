import { CivIconBuilder } from "./civ-icon.js";

function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context("../", true, /\.(png)$/));

class CivIconList {
  buildElement(includeLabel) {
    const element = document.createElement("div");
    const iconBuilder = new CivIconBuilder();

    images.forEach((img) => {
      const iconDiv = document.createElement("div");
      iconDiv.classList.add("admin-civ-icon");

      const iconElement = iconBuilder.buildElement(img);
      if (includeLabel) {
        const iconLabel = document.createElement("span");
        iconLabel.innerHTML = this.sanitizeDisplayValue(img);
        iconDiv.appendChild(iconLabel);
      }
      iconDiv.appendChild(iconElement);

      element.appendChild(iconDiv);
    });

    return element;
  }

  sanitizeDisplayValue(value) {
    // components/civ-icons/images/aztecs.260fe25c924f8d9b9ca1.png base pattern
    value = value.replace("components/civ-icons/images/", "").replace(".png", "");
    value = value.split(".")[0];
    value = `${value[0].toUpperCase()}${value.substring(1, value.length)}`;
    return value;
  }
}
export { CivIconList };
