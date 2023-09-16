import { civUpgradeIconMap } from "../civ-images/image-helper";
import { getCivTechnologyUpgrades, getAgeTierLevel, filterLowestUpgrades, filterLowestUpgradesFromCategories, filterBlackSmithTechnologies, filterEcoTechnologies } from "../civ-images/civ-data/data-helper";
class CivUpgradeOverlay {
  constructor() {}
  buildElement(civName) {
    const mainDiv = this.buildDivContainer();

    mainDiv.appendChild(this.buildEconomyContainer(civName));
    mainDiv.appendChild(this.buildBlackSmithContainer(civName));

    return mainDiv;
  }

  buildDivContainer() {
    const divContainer = document.createElement("div");
    divContainer.classList.add("civ-upgrade-overlay-container");
    return divContainer;
  }

  buildBlackSmithContainer(civName) {
    const divContainer = document.createElement("div");
    divContainer.classList.add("civ-upgrade-container");

    const allTechs = getCivTechnologyUpgrades(civName);
    const bsTechs = filterBlackSmithTechnologies(allTechs);
    const reducedBsTechs = filterLowestUpgrades("blacksmith", bsTechs);

    reducedBsTechs.forEach((upgrade) => {
      const imagePath = `./${civUpgradeIconMap.get(upgrade.rawName.toLowerCase())}`;
      const iconElement = this.buildIcon(imagePath, upgrade.id === -1);

      const numTiers = getAgeTierLevel(upgrade.rawName);
      const tierContainer = this.buildTierContainer(numTiers, upgrade.id === -1);
      iconElement.appendChild(tierContainer);

      divContainer.appendChild(iconElement);
    });

    return divContainer;
  }

  buildEconomyContainer(civName) {
    const divContainer = document.createElement("div");
    divContainer.classList.add("civ-eco-upgrade-container");

    const allTechs = getCivTechnologyUpgrades(civName);
    const ecoTechs = filterEcoTechnologies(allTechs);
    const reducedEcoTechs = filterLowestUpgradesFromCategories(["lumber camp", "mill", "university", "stable"], ecoTechs);

    reducedEcoTechs.forEach((upgrade) => {
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
    } else if (tierLevels > 0) {
      //+1 for 0 offset
      const offsetTiers = tierLevels + 1;
      for (let i = 0; i < offsetTiers; i++) {
        const multiTier = document.createElement("div");
        multiTier.classList.add(`enabled-3`);
        tierContainer.appendChild(multiTier);
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
