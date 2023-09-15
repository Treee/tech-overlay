import civDataRaw from "./data.json";
import civStringData from "./strings.json";

function getCivTechnologyDescription(civName) {
  const civNameUpper = `${civName.substring(0, 1).toUpperCase()}${civName.slice(1)}`;

  const helpTextKey = civDataRaw.civ_helptexts[civNameUpper];
  const civDescription = civStringData[helpTextKey];

  return civDescription;
}

export { getCivTechnologyDescription };
