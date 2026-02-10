import Store from "./services/Store.js";
import { loadMenu } from "./services/Menu.js";

window.app = {
  store: Store,
};

// Wait for the DOM to be fully loaded before accessing or modifying it.
window.addEventListener("DOMContentLoaded", () => {
  loadMenu();
});
