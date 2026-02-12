export class MenuPage extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: "open" });

    const styleElement = document.createElement("style");
    this.root.appendChild(styleElement);

    async function loadCSS() {
      const response = await fetch("/components/MenuPage.css");
      const cssText = await response.text();
      styleElement.textContent = cssText;
    }

    loadCSS();
  }

  // When the component is attached to the DOM
  connectedCallback() {
    const template = document.getElementById("menu-page-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);

    window.addEventListener("appmenuchange", () => {
      this.render();
    });
  }

  render() {
    let menuElement = this.root.querySelector("#menu");

    if (app.store.menu) {
      menuElement.innerHTML = "";

      for (let category of app.store.menu) {
        const liCategory = document.createElement("li");
        liCategory.innerHTML = `
          <h3>${category.name}</h3>
          <ul class="category">
          </ul>`;

        menuElement.appendChild(liCategory);

        for (let product of category.products) {
          const item = document.createElement("product-item");
          item.dataset.product = JSON.stringify(product);
          liCategory.querySelector("ul").appendChild(item);
        }
      }
    } else {
      menuElement.innerHTML = "Loading...";
    }
  }
}

customElements.define("menu-page", MenuPage);
