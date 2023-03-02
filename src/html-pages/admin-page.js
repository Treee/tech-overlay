import { TechOverlayControl } from "../components/tech-overlay-control/tech-overlay-control";

class AdminPage {
  buildHTMLAdminHomePage() {
    const adminPage = document.createElement("div");
    adminPage.classList.add("admin-page");

    const techOverlayControl = new TechOverlayControl();
    adminPage.appendChild(techOverlayControl.buildElement());

    return adminPage;
  }
}

export { AdminPage };
