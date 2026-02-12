import API from "./API.js";

export async function loadMenu() {
  app.store.menu = await API.fetchMenu();
}

export async function getProductById(id) {
  if (app.store.menu == null) {
    await LoadData();
  }

  for (let category of app.store.menu) {
    for (let product of category.products) {
      if (product.id == id) {
        return product;
      }
    }
  }

  return null;
}
