import { selectedRows, presentation, uniqueBuildings } from "./overlay-model.js";
import { OBSLink, settings, saveSettings, displayURL, validState } from "./obs-link.js";
const overlay = document.body.classList.contains("overlay");
const previewMode = overlay && new URLSearchParams(location.search).has("preview");
const groups = new Map([
    [9000, "Economy"],
    [103, "Blacksmith"],
    [209, "University"],
    [104, "Monastery"],
    [87, "Archery range"],
    [101, "Stable"],
    [12, "Barracks"],
    [49, "Siege workshop"],
    [45, "Dock"],
    [82, "Castle"],
]);
const get = async (url) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to load ${url}`);
    return response.json();
};
const el = (tag, text, className) => {
    const node = document.createElement(tag);
    if (text !== undefined) node.textContent = text;
    if (className) node.className = className;
    return node;
};
const image = (url, label) => {
    const img = el("img");
    img.src = url;
    img.alt = label;
    img.addEventListener(
        "error",
        () => {
            img.removeAttribute("src");
        },
        { once: true },
    );
    return img;
};
const status = (text) => {
    if (!overlay) document.querySelector("#status").textContent = text;
    else console.info("[Overlay connection]", text);
};
const trees = new Map();
let selected = [],
    revision = -1,
    timer,
    rendering = 0,
    link,
    updateURL = () => {};

try {
    const [data, strings] = await Promise.all([get("assets/data/data.json"), get("assets/data/locales/en/strings.json")]);
    const names = Object.keys(data.civs).sort();
    const catalog = new Map();
    // Resolve even technologies absent from a civilization's tree to a consistent picture.
    const reference = await get("assets/data/trees/BRITONS.json");
    for (const node of reference.units_techs) if (node.use_type === "Tech") catalog.set(node.node_id, node);
    function draft() {
        return {
            revision: Date.now(),
            civs: [...selected],
            groups: [...document.querySelectorAll("#groups input:checked")].map((box) => Number(box.value)),
            visible: true,
            expiresAt: null,
            theme: document.querySelector("#theme").value,
            layout: document.querySelector("#layout").value,
            detail: document.querySelector("#detail").value,
        };
    }
    function preview() {
        if (!overlay) document.querySelector("#display-preview").contentWindow?.postMessage({ type: "overlay-preview", state: draft() }, location.origin);
    }

    const label = (name) => strings[data.civs[name].name_string_id] || name;
    const icon = (name) => image(`assets/img/Civs/${name.toLowerCase()}.png`, label(name));
    const tree = (name) => {
        if (!trees.has(name))
            trees.set(
                name,
                get(`assets/data/trees/${name.toUpperCase()}.json`).catch((error) => {
                    trees.delete(name);
                    throw error;
                }),
            );
        return trees.get(name);
    };
    function picks() {
        const container = document.querySelector("#picks");
        container.replaceChildren();
        selected.forEach((name, index) => {
            const button = el("button", `${index + 1}. ${label(name)} ×`);
            button.title = "Remove player";
            button.onclick = () => {
                selected.splice(index, 1);
                picks();
            };
            container.append(button);
        });
        if (!selected.length) container.append(el("p", "Select civilizations above."));
        preview();
    }
    function fitCards() {
        const container = document.querySelector('#cards');
        if (!container) return;
        const compact = document.body.dataset.theme === 'compact';
        const style = getComputedStyle(container);
        const rows = compact && container.dataset.layout === 'teams' ? Math.ceil(container.children.length / 4) : 1;
        const available = Math.max(1, (container.clientHeight - parseFloat(style.paddingTop) - parseFloat(style.paddingBottom) - (rows - 1) * parseFloat(style.rowGap || 0)) / rows);
        for (const card of container.children) {
            let content = card.querySelector('.card-content');
            if (!content) {
                content = el('div', undefined, 'card-content');
                while (card.firstChild) content.append(card.firstChild);
                card.append(content);
            }
            content.style.zoom = 1;
            const cs = getComputedStyle(card);
            const room = Math.max(1, available - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom));
            // Fit the entire card, not just its description: all icons remain visible.
            let scale = 1;
            for (let attempt = 0; attempt < 12; attempt++) {
                const height = content.getBoundingClientRect().height;
                if (height <= room + .5) break;
                scale *= Math.min(.98, room / height);
                content.style.zoom = scale;
            }
        }
    }
    if (overlay) window.addEventListener('resize', fitCards);
    async function render(state) {
        const generation = ++rendering;
        clearTimeout(timer);
        const container = document.querySelector("#cards");
        const options = presentation(state);
        document.body.dataset.theme = options.theme;
        container.dataset.layout = options.layout;
        const hide = () => {
            for (const card of container.children) card.classList.add("leaving");
            timer = setTimeout(
                () => {
                    if (generation === rendering) container.replaceChildren();
                },
                options.theme === "compact" ? 250 : 2000,
            );
        };
        if (!state.visible) {
            hide();
            return;
        }
        container.replaceChildren();
        if (state.expiresAt && state.expiresAt <= Date.now()) return;
        container.style.setProperty("--players", state.civs.length);
        const records = await Promise.all(state.civs.map(tree));
        if (generation !== rendering || (state.expiresAt && state.expiresAt <= Date.now())) return;
        state.civs.forEach((name, index) => {
            const card = el("article", undefined, "card");
            card.style.setProperty("--player-color", ["#4a90ed", "#e45b55", "#54b97a", "#e9c64a", "#51bdcc", "#b989d9", "#c4c9d0", "#ee9751"][index]);
            const watermark = icon(name);
            watermark.className = "watermark";
            watermark.alt = "";
            card.append(watermark);
            const heading = el("header");
            heading.append(icon(name), el("h1", label(name)));
            heading.append(el("span", `P${index + 1}`, "player-label"));
            const unique = records[index].units_techs.find((node) => node.node_type === "UniqueUnit" && node.node_status !== "NotAvailable" && !node.link_id);
            if (unique) {
                const portrait = image(`assets/img/Unit/${unique.picture_index}.png`, unique.name);
                portrait.className = "unique-unit";
                heading.append(portrait);
            }
            for (const building of uniqueBuildings(records[index])) {
                const portrait = image(`assets/img/${building.use_type}/${building.picture_index}.png`, building.name);
                portrait.className = "unique-building";
                portrait.title = building.name;
                heading.append(portrait);
            }
            card.append(heading);
            const description = el("div", undefined, "description");
            // Only preserve the small formatting vocabulary used by upstream descriptions.
            const parsed = new DOMParser().parseFromString(strings[data.civs[name].help_string_id] || "", "text/html");
            function copy(source, target) {
                for (const node of source.childNodes) {
                    if (node.nodeType === 3) target.append(document.createTextNode(node.textContent));
                    else if (node.nodeType === 1) {
                        if (["B", "I", "BR"].includes(node.tagName)) {
                            const safe = el(node.tagName.toLowerCase());
                            copy(node, safe);
                            target.append(safe);
                        } else if (!["SCRIPT", "STYLE"].includes(node.tagName)) copy(node, target);
                    }
                }
            }
            copy(parsed.body, description);
            if (options.theme === "compact") {
                const lines = description.innerHTML.split(/<br\s*\/?>(?:\n)?/i);
                description.replaceChildren();
                let section = el("section", undefined, "bonus-section");
                section.append(el("h2", "Civilization bonuses"));
                description.append(section);
                for (const line of lines) {
                    const plain = line.replace(/<[^>]*>/g, "").trim();
                    if (!plain) continue;
                    if (/^(Unique Units?|Unique Techs?|Team Bonus):?$/i.test(plain)) {
                        section = el("section", undefined, /Team Bonus/i.test(plain) ? "bonus-section team-bonus" : "bonus-section");
                        section.append(el("h2", plain.replace(/:$/, "")));
                        description.append(section);
                    } else {
                        const paragraph = el("p");
                        paragraph.innerHTML = line;
                        section.append(paragraph);
                    }
                }
            }
            card.append(description);
            const upgrades = el("div", undefined, "upgrades");
            const rows = selectedRows(records[index], catalog, state.groups, groups, options.theme === "compact" && options.detail === "summary");
            for (const { label: rowLabel, tiles } of rows) {
                if (!tiles.length) continue;
                const row = el("div", undefined, "tech-row");
                row.setAttribute("aria-label", rowLabel);
                if (options.theme === "compact") row.append(el("h2", rowLabel, "row-label"));
                for (const { node, tiers } of tiles) {
                    if (!node) {
                        row.append(el("div", "N/A", "tech"));
                        continue;
                    }
                    const unavailable = !tiers.some(Boolean);
                    const tile = el("div", undefined, unavailable ? "tech unavailable" : "tech");
                    const text = strings[node.name_string_id] || node.name;
                    tile.title = `${text.replace(/<[^>]*>/g, "")} - ${unavailable ? "Unavailable" : "Available"}`;
                    tile.append(image(`assets/img/${node.use_type}/${node.picture_index}.png`, tile.title));
                    if (unavailable) {
                        const cross = image("assets/img/cross.png", "Unavailable");
                        cross.className = "cross";
                        tile.append(cross);
                    }
                    const bar = el("div", undefined, "tier-bar");
                    bar.setAttribute("aria-label", `${tiers.filter(Boolean).length} of ${tiers.length} tiers available`);
                    for (const enabled of tiers) bar.append(el("span", undefined, enabled ? "tier enabled" : "tier disabled"));
                    tile.append(bar);
                    row.append(tile);
                }
                upgrades.append(row);
            }
            card.append(upgrades);
            container.append(card);
        });
        await document.fonts.ready;
        await Promise.all([...container.querySelectorAll('img')].map(img => img.decode().catch(() => {})));
        if (generation !== rendering) return;
        fitCards();
        if (state.expiresAt) timer = setTimeout(hide, Math.max(0, state.expiresAt - Date.now()));
    }
    if (!overlay) {
        document.querySelector("#display-preview").addEventListener("load", preview);
        window.addEventListener("message", (event) => {
            if (event.origin === location.origin && event.source === document.querySelector("#display-preview").contentWindow && event.data?.type === "preview-ready") preview();
        });
        for (const id of ["theme", "layout", "detail"]) document.querySelector("#" + id).addEventListener("change", preview);
        document.querySelector("#groups").addEventListener("change", preview);
        const previewFrame = document.querySelector("#display-preview");
        new ResizeObserver(() => {
            previewFrame.style.transform = `scale(${previewFrame.parentElement.clientWidth / 1920})`;
        }).observe(previewFrame.parentElement);
        document.querySelector("#obs-address").value = settings.address;
        document.querySelector("#obs-password").value = settings.password;
        updateURL = () => {
            document.querySelector("#client-url").value = displayURL(location.href, settings);
            document.querySelector("#preview").href = displayURL(location.href, settings);
        };
        document.querySelector("#copy").disabled = true;
        document.querySelector("#client-url").placeholder = "Connect to OBS to generate the display URL";
        document.querySelector("#preview").removeAttribute("href");
        document.querySelector("#connect").onclick = () => {
            const address = document.querySelector("#obs-address").value.trim();
            try {
                const url = new URL(address);
                if (!["ws:", "wss:"].includes(url.protocol)) throw new Error();
            } catch {
                status("Enter a ws:// or wss:// OBS address.");
                return;
            }
            settings.address = address;
            settings.password = document.querySelector("#obs-password").value;
            document.querySelector("#copy").disabled = true;
            document.querySelector("#client-url").value = "";
            document.querySelector("#preview").removeAttribute("href");
            link.start();
        };
        document.querySelector("#copy").onclick = async () => {
            try {
                await navigator.clipboard.writeText(document.querySelector("#client-url").value);
                status("OBS URL copied.");
            } catch {
                document.querySelector("#client-url").select();
                status("Select and copy the displayed URL.");
            }
        };
        const list = document.querySelector("#civs");
        function filter() {
            list.replaceChildren();
            for (const name of names.filter((name) => label(name).toLowerCase().includes(document.querySelector("#search").value.toLowerCase()))) {
                const button = el("button", undefined, "civ");
                button.append(icon(name), el("span", label(name)));
                button.onclick = () => {
                    if (selected.length < 8) {
                        selected.push(name);
                        picks();
                    } else status("Remove a player before adding another.");
                };
                list.append(button);
            }
        }
        document.querySelector("#search").oninput = filter;
        filter();
        picks();
        for (const [id, name] of groups) {
            const wrapper = el("label");
            const box = el("input");
            box.type = "checkbox";
            box.value = id;
            box.checked = id === 103;
            wrapper.append(box, document.createTextNode(name));
            document.querySelector("#groups").append(wrapper);
        }
        async function publish(visible) {
            if (visible && !selected.length) {
                status("Select at least one civilization.");
                return;
            }
            const duration = Number(document.querySelector("#duration").value);
            if (!Number.isInteger(duration) || duration < 0 || duration > 300) {
                status("Choose a whole number from 0 to 300 seconds.");
                return;
            }
            try {
                await link.publish({ ...draft(), visible, expiresAt: visible && duration ? Date.now() + duration * 1000 : null });
                status(visible ? "Overlay sent through OBS." : "Overlay cleared.");
            } catch {
                status("Could not send command. Connect to OBS first.");
            }
        }
        document.querySelector("#show").onclick = () => publish(true);
        document.querySelector("#clear").onclick = () => publish(false);
    }
    if (previewMode) {
        window.addEventListener("message", (event) => {
            if (event.origin === location.origin && event.source === parent && event.data?.type === "overlay-preview" && validState(event.data.state, names)) render(event.data.state).catch(console.error);
        });
        parent.postMessage({ type: "preview-ready" }, location.origin);
    }
    link = new OBSLink({
        overlay,
        onStatus: message => {
            status(message);
            if (!overlay) {
                const connected = message === 'Connected to OBS';
                const badge = document.querySelector('#connection-badge');
                badge.textContent = connected ? 'Connected' : message.startsWith('Connecting') ? 'Connecting' : 'Disconnected';
                badge.classList.toggle('connected', connected);
                if (!connected) document.querySelector('#connection-panel').open = true;
            }
        },
        onReady: () => {
            if (!overlay) {
                document.querySelector("#connection-panel").open = false;
                saveSettings();
                updateURL();
                document.querySelector("#copy").disabled = false;
            }
        },
        onState: (state) => {
            if (!validState(state, names)) return;
            revision = state.revision;
            if (overlay) render(state).catch((error) => console.error(error));
            else {
                for (const key of ["theme", "layout", "detail"]) document.querySelector("#" + key).value = state[key] || { theme: "compact", layout: "auto", detail: "summary" }[key];
                selected = [...state.civs];
                picks();
                for (const box of document.querySelectorAll("#groups input")) box.checked = state.groups.includes(Number(box.value));
            }
        },
        onDisconnect: () => {
            if (overlay) {
                ++rendering;
                clearTimeout(timer);
                document.querySelector("#cards").replaceChildren();
            }
        },
    });
    if (!previewMode && (overlay || settings.saved)) link.start();
    else status("Enter your OBS WebSocket password, then connect.");
} catch (error) {
    status("Could not load tech-tree assets. Check that the submodule is initialized.");
    console.error(error);
}
