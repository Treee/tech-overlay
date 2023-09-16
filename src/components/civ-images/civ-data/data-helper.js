import civDataRaw from "./data.json";
import civStringData from "./strings.json";

const techRelationshipMapping = {
  blacksmith: [
    ["Forging", "Iron Casting", "Blast Furnace"],
    ["Scale Mail Armor", "Chain Mail Armor", "Plate Mail Armor"],
    ["Scale Barding Armor", "Chain Barding Armor", "Plate Barding Armor"],
    ["Fletching", "Bodkin Arrow", "Bracer"],
    ["Padded Archer Armor", "Leather Archer Armor", "Ring Archer Armor"],
  ],
  "lumber camp": ["Double-Bit Axe", "Bow Saw", "Two-Man Saw"],
  mill: ["Horse Collar", "Heavy Plow", "Crop Rotation"],
  // towncenter: ["Wheelbarrow", "Hand Cart"],
  university: ["Ballistics", "Chemistry"],
  stable: ["Bloodlines"],
};

function formatRawCivNameToKey(civName) {
  if (civName === undefined) return "";
  civName = `${civName.substring(0, 1).toUpperCase()}${civName.slice(1)}`;
  return civName;
}

function getCivTechnologyDescription(civName) {
  civName = formatRawCivNameToKey(civName);

  const helpTextKey = civDataRaw.civ_helptexts[civName];
  const civDescription = civStringData[helpTextKey];

  return civDescription;
}
function getCivTechnologyUpgrades(civName) {
  civName = formatRawCivNameToKey(civName);

  const civTechsAll = civDataRaw.techtrees[civName];
  const upgradeNames = [];
  civTechsAll.techs.forEach((techId) => {
    const upgrade = civDataRaw.data.techs[techId];
    // civStringData[upgrade.LanguageHelpId]; // for description
    const payload = {
      id: techId,
      rawName: civStringData[upgrade.LanguageNameId],
    };
    upgradeNames.push(payload);
  });
  return upgradeNames;
}
function filterBlackSmithTechnologies(fullUpgradeList) {
  const blacksmithTechs = fullUpgradeList.filter((upgrade) => {
    return techRelationshipMapping.blacksmith.some((category) => {
      return category.includes(upgrade.rawName);
    });
  });
  return blacksmithTechs;
}
function filterEcoTechnologies(fullUpgradeList) {
  const modifiedUpgradeList = [];

  fullUpgradeList.forEach((upgrade) => {
    Object.keys(techRelationshipMapping).forEach((category) => {
      if (category === "blacksmith") {
        return;
      }
      if (techRelationshipMapping[category].includes(upgrade.rawName)) {
        modifiedUpgradeList.push(upgrade);
      }
    });
  });
  return modifiedUpgradeList;
}

function filterLowestUpgrades(upgradeCategory, upgradeList) {
  const modifiedUpgradeList = [];
  // for each blacksmith category
  techRelationshipMapping[upgradeCategory].forEach((category) => {
    // for upgrade in a category (start at the highest tier)
    let foundHigherTier = false;
    for (let i = category.length - 1; i > -1; i--) {
      // find the highest indexed value in upgradeList
      const upgrade = upgradeList.find((upgrade) => {
        return upgrade.rawName === category[i];
      });
      if (upgrade !== undefined && !foundHigherTier) {
        foundHigherTier = true;
        modifiedUpgradeList.push(upgrade);
      }
      // this is for meso civs that dont have the upgrade for horses
      if (i === 0 && !foundHigherTier) {
        modifiedUpgradeList.push({ rawName: category[i], id: -1 });
      }
    }
  });
  return modifiedUpgradeList;
}
function filterLowestUpgradesFromCategories(upgradeCategories, upgradeList) {
  const modifiedUpgradeList = [];
  upgradeCategories.forEach((upgradeCategory) => {
    // for upgrade in a category (start at the highest tier)
    const upgradeArrayMap = techRelationshipMapping[upgradeCategory];
    let foundHigherTier = false;
    let ignoreTier = false;
    for (let i = upgradeArrayMap.length - 1; i > -1; i--) {
      // find the highest indexed value in upgradeList
      const upgrade = upgradeList.find((upgrade) => {
        return upgrade.rawName === upgradeArrayMap[i];
      });
      if (upgradeCategory === "university") {
        ignoreTier = true;
        modifiedUpgradeList.push(upgrade);
      } else if (upgrade !== undefined && !foundHigherTier) {
        foundHigherTier = true;
        modifiedUpgradeList.push(upgrade);
      } else {
        console.log("remove: ", upgrade);
      }
      // this is for civs that dont have the upgrade
      if (i === 0 && !foundHigherTier && !ignoreTier) {
        modifiedUpgradeList.push({ rawName: upgradeArrayMap[i], id: -1 });
      }
    }
  });
  return modifiedUpgradeList;
}

export { getCivTechnologyDescription, getCivTechnologyUpgrades, filterLowestUpgrades, filterLowestUpgradesFromCategories, filterBlackSmithTechnologies, filterEcoTechnologies };
