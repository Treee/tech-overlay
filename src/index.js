import { TechBasePage } from "./html-pages/base-page";
import { LocalSavedData } from "./datastore";

const savedData = new LocalSavedData();
savedData.loadData();
savedData.saveData();

new TechBasePage(savedData).buildHTMLBasePage();
