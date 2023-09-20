function importAllIntoMap(r, relativeImagePath) {
  const myMap = new Map();
  r.keys()
    .map(r)
    .forEach((relativeUrl) => {
      const civKey = relativeUrl.replace(relativeImagePath, "").replace(".mp3", "").split(".")[0];
      if (myMap.has(civKey)) {
        const civKeyParts = relativeUrl.replace(relativeImagePath, "").replace(".mp3", "").split(".");
        const civKey2 = `${civKeyParts[0]}.${civKeyParts[1]}`;
        myMap.set(civKey2, relativeUrl);
      } else {
        myMap.set(civKey, relativeUrl);
      }
    });
  return myMap;
}

const civSoundMap = importAllIntoMap(require.context("./sounds/", true, /\.(png)$/), "components/civ-sounds/sounds/");

export {};
