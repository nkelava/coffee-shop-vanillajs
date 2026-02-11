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
  }
}

customElements.define("menu-page", MenuPage);
