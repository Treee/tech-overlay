class DefaultHTMLPageElements {
  buildFooter() {
    const element = document.createElement("footer");
    element.classList.add("my-footer");

    const textSpanElement1 = document.createElement("span");
    textSpanElement1.innerHTML = "Created by ";

    const treeTwitchAnchor = document.createElement("a");
    treeTwitchAnchor.setAttribute("href", "https://www.twitch.tv/itsatreee");
    treeTwitchAnchor.innerHTML = "ItsATreee";

    const textSpanElement2 = document.createElement("span");
    textSpanElement2.innerHTML = ` (2019-${new Date().getFullYear()}) - `;

    const treeGithubAnchor = document.createElement("a");
    treeGithubAnchor.setAttribute("href", "https://github.com/Treee/tech-widget-overlay");
    treeGithubAnchor.innerHTML = "GitHub";
    const createdByElement = document.createElement("div");
    createdByElement.appendChild(textSpanElement1);
    createdByElement.appendChild(treeTwitchAnchor);
    createdByElement.appendChild(textSpanElement2);
    createdByElement.appendChild(treeGithubAnchor);

    const textSpanElement3 = document.createElement("span");
    textSpanElement3.innerHTML = `Age of Empires II © Microsoft Corporation. <b>AoE Tech/Map Overlay for Age of Empires II</b> was created under Microsoft's "`;

    const microsoftAnchor = document.createElement("a");
    microsoftAnchor.setAttribute("href", "https://www.xbox.com/en-us/developers/rules");
    microsoftAnchor.innerHTML = "Game Content Usage Rules";

    const textSpanElement4 = document.createElement("span");
    textSpanElement4.innerHTML = `" using assets from Age of Empires II, and it is not endorsed by or affiliated with Microsoft.`;
    const nonEndorsementElement = document.createElement("div");
    nonEndorsementElement.appendChild(textSpanElement3);
    nonEndorsementElement.appendChild(microsoftAnchor);
    nonEndorsementElement.appendChild(textSpanElement4);

    element.appendChild(createdByElement);
    element.appendChild(nonEndorsementElement);
    return element;
  }
  buildHeader() {
    const element = document.createElement("div");
    element.classList.add("my-header");

    const adminPageRoute = document.createElement("div");
    adminPageRoute.innerHTML = "ADMIN";

    const settingsPageRoute = document.createElement("div");
    settingsPageRoute.innerHTML = "CLIENT";

    element.appendChild(adminPageRoute);
    element.appendChild(settingsPageRoute);

    return element;
  }
  buildFavIcon() {
    const element = document.createElement("link");
    element.type = "shortcut icon";
    element.href = "favicon.gif";
    return element;
  }
}

export { DefaultHTMLPageElements };
