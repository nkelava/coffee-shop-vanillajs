import Store from "./services/Store.js";
import { loadMenu } from "./services/Menu.js";
import Router from "./services/Router.js";

// Web Components
import { MenuPage } from "./components/MenuPage.js";
import { OrderPage } from "./components/OrderPage.js";
import { DetailsPage } from "./components/DetailsPage.js";
import ProductItem from "./components/ProductItem.js";

window.app = {
  store: Store,
  router: Router,
};

// Wait for the DOM to be fully loaded before accessing or modifying it.
window.addEventListener("DOMContentLoaded", () => {
  loadMenu();
  app.router.init();
});
