class CivIconBuilder {
  buildElement(imgPath) {
    const element = document.createElement("div");
    const civIcon = new Image();
    civIcon.src = imgPath;

    element.appendChild(civIcon);
    return element;
  }
}

export { CivIconBuilder };
