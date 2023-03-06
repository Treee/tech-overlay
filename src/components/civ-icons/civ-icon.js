class CivIconBuilder {
  buildElement(imgPath) {
    const civIcon = new Image();
    civIcon.src = imgPath;

    return civIcon;
  }
}

export { CivIconBuilder };
