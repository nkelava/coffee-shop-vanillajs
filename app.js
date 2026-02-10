import Store from "./services/Store.js";
import { loadMenu } from "./services/Menu.js";
import Router from "./services/Router.js";

window.app = {
  store: Store,
  router: Router,
};

// Wait for the DOM to be fully loaded before accessing or modifying it.
window.addEventListener("DOMContentLoaded", () => {
  loadMenu();
  app.router.init();
});
