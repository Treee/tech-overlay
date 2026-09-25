const storageKey = 'aoe-overlay-next-obs';
const isOverlay = typeof document !== 'undefined' && document.body.classList.contains('overlay');
let stored = {};
try { stored = JSON.parse(localStorage.getItem(storageKey) || '{}'); } catch {}
const params = new URLSearchParams(typeof location === 'undefined' ? '' : location.hash.slice(1));
export const settings = isOverlay
  ? { address: params.get('obs') || 'ws://127.0.0.1:4455', password: params.get('password') || '', session: params.get('session') || '' }
  : { address: stored.address || 'ws://127.0.0.1:4455', password: stored.password || '', session: stored.session || globalThis.crypto.randomUUID(), saved: stored.saved || false };
export function saveSettings() { settings.saved = true; try { localStorage.setItem(storageKey, JSON.stringify(settings)); } catch {} }
export function displayURL(base, config) {
  const url = new URL('overlay.html', base);
  url.hash = new URLSearchParams({ session: config.session, obs: config.address, password: config.password }).toString();
  return url.href;
}
export function validState(s, names) {
  return !!s && (s.theme === undefined || ['classic','compact'].includes(s.theme)) && (s.layout === undefined || ['auto','single','duel','teams'].includes(s.layout)) && (s.detail === undefined || ['summary','expanded'].includes(s.detail)) && Number.isFinite(s.revision) && typeof s.visible === 'boolean' &&
    (s.expiresAt === null || Number.isFinite(s.expiresAt)) && Array.isArray(s.civs) && s.civs.length <= 8 &&
    s.civs.every(c => names.includes(c)) && Array.isArray(s.groups) && s.groups.length <= 10 &&
    s.groups.every(g => [103,209,104,87,101,12,49,45,9000,82].includes(g));
}
export class OBSLink {
  constructor({ overlay, onState, onStatus, onDisconnect, onReady = () => {} }, factory = () => new globalThis.OBSWebSocket()) {
    Object.assign(this, { overlay, onState, onStatus, onDisconnect, onReady, factory });
    this.generation = 0;
    this.state = null;
    if (!overlay) { try { this.state = JSON.parse(localStorage.getItem(storageKey + '-state')); } catch {} }
  }
  async start() {
    const generation = ++this.generation;
    clearTimeout(this.retry);
    if (this.obs) { const previous = this.obs; this.obs = null; await previous.disconnect().catch(() => {}); }
    if (!settings.session) { this.onStatus('Missing session. Generate the display URL from the admin page.'); return; }
    const obs = this.factory(); this.obs = obs;
    const active = () => generation === this.generation;
    let scheduled = false;
    const reconnect = error => {
      if (!active()) return;
      if ([4005, 4009].includes(Number(error?.code))) {
        clearTimeout(this.retry);
        scheduled = true;
        this.connected = false;
        this.onDisconnect();
        this.onStatus(this.overlay
          ? 'OBS authentication failed. In the admin, connect with the OBS password, then copy the new URL into this Browser Source and refresh it.'
          : 'OBS authentication failed. Enter the password from OBS WebSocket Server Settings and click Connect & save.');
        return;
      }
      if (scheduled) return;
      scheduled = true; this.connected = false; this.onDisconnect();
      this.onStatus('OBS disconnected. Check OBS, password, and browser local-network permissions. Retrying?');
      this.retry = setTimeout(() => this.start(), 3000);
    };
    obs.on('ConnectionClosed', reconnect);
    obs.on('CustomEvent', event => {
      if (!active()) return;
      const message = event.techOverlayNext;
      if (!message || message.version !== 1 || message.session !== settings.session) return;
      if (message.type === 'request' && !this.overlay && this.state) this.send('state', this.state).catch(() => {});
      if (message.type === 'state' && this.overlay) this.onState(message.state);
    });
    this.connected = false; this.onStatus('Connecting to OBS?');
    try {
      await obs.connect(settings.address, settings.password, { eventSubscriptions: 1, rpcVersion: 1 });
      if (!active()) return;
      this.connected = true; this.onStatus('Connected to OBS'); this.onReady();
      if (this.overlay) await this.send('request');
      else if (this.state) { this.onState(this.state); await this.send('state', this.state); }
    } catch (error) { reconnect(error); }
  }
  send(type, state) {
    if (!this.connected) return Promise.reject(new Error('Not connected'));
    return this.obs.call('BroadcastCustomEvent', { eventData: { techOverlayNext: { version: 1, session: settings.session, type, ...(state ? { state } : {}) } } });
  }
  async publish(state) {
    await this.send('state', state);
    this.state = state;
    try { localStorage.setItem(storageKey + '-state', JSON.stringify(state)); } catch {}
  }
}
