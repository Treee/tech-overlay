class TechnologyOverlayStore {
  _useSound = false;
  _autoHide = true;
  _showTechOverlay = true;
  _showBlacksmithTech = false;
  _showUniversityTech = false;
  _showMonastaryTech = false;
  _showDockTech = false;
  _showBarracksTech = false;
  _showArcheryTech = false;
  _showStableTech = false;
  _showSiegeWorkshopTech = false;
  _autoHideDelay = 12;
}
class UISettingsOverlayStore {
  _fontSize = 22;
  _techBackgroundOpacity = 0.8;
}

class LocalSavedData {
  _techOverlayStore;
  _uiSettingsOverlayStore;

  constructor() {
    this._techOverlayStore = new TechnologyOverlayStore();
    this._uiSettingsOverlayStore = new UISettingsOverlayStore();
  }

  saveData() {
    localStorage.setItem("techOverlayStore", JSON.stringify(this._techOverlayStore));
    localStorage.setItem("uiSettingsOverlayStore", JSON.stringify(this._uiSettingsOverlayStore));
  }

  loadData() {
    this._techOverlayStore = JSON.parse(localStorage.getItem("techOverlayStore"));
    this._uiSettingsOverlayStore = JSON.parse(localStorage.getItem("uiSettingsOverlayStore"));
  }

  deleteData(key) {
    localStorage.removeItem(key);
  }
}

export { LocalSavedData };
