import { civUpgradeIconMap } from "../civ-images/image-helper";
import { getCivTechnologyUpgrades, getAgeTierLevel, filterLowestUpgradesFromCategories } from "../civ-images/civ-data/data-helper";
class CivUpgradeOverlay {
  constructor() {}
  buildElement(civName) {
    const mainDiv = this.buildUpgradeContainer(civName);
    return mainDiv;
  }
  buildUpgradeContainer(civName) {
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("civ-upgrade-overlay-container");

    const allTechs = getCivTechnologyUpgrades(civName);

    const reducedBsTechs = filterLowestUpgradesFromCategories(["blacksmith", "archery range"], allTechs);
    const reducedEcoTechs = filterLowestUpgradesFromCategories(["lumber camp", "mill", "university", "stable"], allTechs);
    const reducedMonkTechs = filterLowestUpgradesFromCategories(["monastery"], allTechs);

    mainDiv.appendChild(this.buildIconContainer(reducedBsTechs));
    mainDiv.appendChild(this.buildIconContainer(reducedEcoTechs));
    mainDiv.appendChild(this.buildIconContainer(reducedMonkTechs.slice(0, 5)));
    mainDiv.appendChild(this.buildIconContainer(reducedMonkTechs.slice(5, reducedMonkTechs.length)));

    return mainDiv;
  }
  buildIconContainer(arrayOfUpgrades) {
    const divContainer = document.createElement("div");
    divContainer.classList.add("civ-upgrade-container");

    arrayOfUpgrades.forEach((upgrade) => {
      const imagePath = `./${civUpgradeIconMap.get(upgrade.rawName.toLowerCase())}`;
      const iconElement = this.buildIcon(imagePath, upgrade.id === -1);

      const numTiers = getAgeTierLevel(upgrade.rawName);
      const tierContainer = this.buildTierContainer(numTiers, upgrade.id === -1);
      iconElement.appendChild(tierContainer);

      divContainer.appendChild(iconElement);
    });
    return divContainer;
  }
  buildIcon(imagePath, disableIcon) {
    const upgradeIconContainer = document.createElement("div");
    upgradeIconContainer.classList.add("upgrade-icon-container");

    const upgradeIcon = new Image();
    upgradeIcon.src = imagePath;
    upgradeIcon.classList.add("upgrade-icon");
    upgradeIconContainer.appendChild(upgradeIcon);

    if (disableIcon) {
      const mesoDisable = document.createElement("div");
      mesoDisable.classList.add("disable-icon-meso");
      upgradeIconContainer.appendChild(mesoDisable);
      upgradeIconContainer.appendChild(upgradeIcon);
    }
    return upgradeIconContainer;
  }
  buildTierContainer(tierLevels, fullDisabled) {
    const tierContainer = document.createElement("div");
    tierContainer.classList.add("upgrade-tier-container");

    const tier = document.createElement("div");
    if (fullDisabled) {
      tier.classList.add(`disabled-1`);
      tierContainer.appendChild(tier);
    } else if (tierLevels === -1 && !fullDisabled) {
      tier.classList.add(`enabled-1`);
      tierContainer.appendChild(tier);
    } else if (tierLevels > -1) {
      //+1 for 0 offset
      const offsetTiers = tierLevels + 1;
      for (let i = 0; i < offsetTiers; i++) {
        const multiTier = document.createElement("div");
        multiTier.classList.add(`enabled-3`);
        tierContainer.appendChild(multiTier);
      }
      if (tierLevels === 0) {
        const disableTier = document.createElement("div");
        disableTier.classList.add(`disabled-3`);
        const disableTier1 = document.createElement("div");
        disableTier1.classList.add(`disabled-3`);
        tierContainer.appendChild(disableTier);
        tierContainer.appendChild(disableTier1);
      }
      if (tierLevels === 1) {
        const disableTier = document.createElement("div");
        disableTier.classList.add(`disabled-3`);
        tierContainer.appendChild(disableTier);
      }
    }
    return tierContainer;
  }
}

export { CivUpgradeOverlay };
