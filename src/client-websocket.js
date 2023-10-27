import { SocketEnums } from "./common-data";

class MyWebSocketClient {
  _clientId;
  _clientSocket;
  _pingInterval;
  constructor() {}

  formatDataForWebsocket(dataType, rawData) {
    console.log(`Formatting Data for websocket.\nDataType: ${dataType} / ClientId: ${this._clientId} / RawData:`, JSON.stringify(rawData));
    return JSON.stringify({ type: dataType, data: rawData, toClientId: this._clientId });
  }
  sendMessage(dataType, rawData) {
    this._clientSocket.send(this.formatDataForWebsocket(dataType, rawData));
  }
  startClient(clientId, isLocal) {
    this._clientId = clientId;
    const url = isLocal ? "ws://localhost:8443" : "wss://itsatreee.com/websocket-server/";
    this._clientSocket = new WebSocket(url);
    this._clientSocket.onopen = this.onOpen.bind(this);
    this._clientSocket.onmessage = this.onMessage.bind(this);
    this._clientSocket.onclose = this.onClose.bind(this);
    this._clientSocket.onerror = this.onError.bind(this);
  }
  onOpen() {
    console.log("[open] Connection established");
    this.sendMessage(SocketEnums.ClientRegister, this._clientId);
    this._pingInterval = setInterval(() => {
      this.sendMessage(SocketEnums.PING, this._clientId);
    }, 45 * 1000); // ping the server on startup every 45 seconds to keep the connection alive
  }
  onMessage(event) {
    // console.log(`DataType: ${event.type} / RawData: ${JSON.stringify(event.data)}`);
    var newEvent = new CustomEvent("aoe-websocket-event", { detail: event });
    document.dispatchEvent(newEvent);
  }
  onClose(event) {
    if (event.wasClean) {
      console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
    } else {
      // e.g. server process killed or network down
      // event.code is usually 1006 in this case
      console.log("[close] Connection died");
    }
    this.sendMessage(SocketEnums.ClientUnRegister, this._clientId);
    clearInterval(this._pingInterval);
  }
  onError(event) {
    console.log(`[error] ${event.message}`);
  }
}

export { MyWebSocketClient };
