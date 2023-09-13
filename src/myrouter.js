class MyRouter {
  _routes;
  _destroyTasks;
  _windowListener;
  constructor() {
    this._routes = [];
    this._destroyTasks = [];
    this._windowListener = null;
  }

  init() {
    // remove previous event listener if it exists
    if (this._windowListener !== null) {
      window.removeEventListener("popstate", this._windowListener);
      this._windowListener = null;
    }
    // set the new listener for pop state
    this._windowListener = window.addEventListener(
      "popstate",
      function () {
        // callback we provide being set up
        this.pickRoute.call(this);
      }.bind(this)
    );
    // call the routing when the thread is available
    setTimeout(
      function () {
        this.pickRoute.call(this);
      }.bind(this)
    );
  }
  addRoute(name, url, cb) {
    const localRoute = this._routes.find((route) => {
      return route.name === name;
    });
    url = url.replace(/\//gi, "/");
    if (localRoute === undefined) {
      this._routes.push({
        callback: cb,
        name: name.toString().toLowerCase(),
        url: url,
      });
    } else {
      localRoute.callback = cb;
      localRoute.url = url;
    }
  }
  addRoutes(routes) {
    if (routes === undefined) {
      routes = [];
    }
    routes.forEach((route) => {
      this._routes.addRoute(route.name, route.url, route.callback);
    });
  }
  removeRoute(name) {
    name = name.toString().toLowerCase();
    this._routes = this._routes.filter((route) => {
      return route.name != name;
    });
  }
  pickRoute() {
    // debug this
    const hash = window.location.hash.substring(1).replace(/\//gi, "/");
    let route = this._routes.find((route) => {
      return route.url === hash;
    });
    // always default to 0
    if (route === undefined) {
      if (this._routes[0] === undefined) {
        console.error("empty routes list. add a route");
      } else {
        route = this._routes[0];
      }
    }
    this._destroyTasks.forEach((task) => {
      task();
    });
    document.getElementById("dynamic-content").innerHTML = "";
    this._destroyTasks = [];
    if (route !== undefined) {
      route.callback.call(window);
    }
  }
  onScopeDestroy(cb) {
    this._destroyTasks.push(cb);
  }
}
export { MyRouter };
