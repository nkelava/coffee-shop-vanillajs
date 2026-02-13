import { getProductById } from "./Menu.js";

export async function addToCart(id) {
  const product = await getProductById(id);
  const results = app.store.cart.filter(
    (cartItem) => cartItem.product.id == id,
  );

  if (results.length == 1) {
    app.store.cart = app.store.cart.map((cartItem) =>
      cartItem.product.id == id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    );
  } else {
    app.store.cart = [...app.store.cart, { product, quantity: 1 }];
  }
}

export function removeFromCart(id) {
  app.store.cart = app.store.cart.filter(
    (cartItem) => cartItem.product.id != id,
  );
}
