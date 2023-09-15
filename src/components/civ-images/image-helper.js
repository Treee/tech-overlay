function importAll(r) {
  return r.keys().map(r);
}
function importAllIntoMap(r, relativeImagePath) {
  const myMap = new Map();
  r.keys()
    .map(r)
    .forEach((relativeUrl) => {
      const civKey = relativeUrl.replace(relativeImagePath, "").replace(".png", "").split(".")[0];
      if (myMap.has(civKey)) {
        const civKeyParts = relativeUrl.replace(relativeImagePath, "").replace(".png", "").split(".");
        const civKey2 = `${civKeyParts[0]}.${civKeyParts[1]}`;
        myMap.set(civKey2, relativeUrl);
      } else {
        myMap.set(civKey, relativeUrl);
      }
    });
  return myMap;
}
const civIconsMap = importAllIntoMap(require.context("./icons/", true, /\.(png)$/), "components/civ-images/icons/");
const civUniqueUnitIconsMap = importAllIntoMap(require.context("./civ-unique-units/", true, /\.(png)$/), "components/civ-images/civ-unique-units/");
const civEmblemImageMap = importAllIntoMap(require.context("./civ-emblems/", true, /\.(png)$/), "components/civ-images/civ-emblems/");

export { civIconsMap, civUniqueUnitIconsMap, civEmblemImageMap };
