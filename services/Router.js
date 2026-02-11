const Router = {
  init: () => {
    document.querySelectorAll("a.navlink").forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();

        const url = event.target.getAttribute("href");
        Router.go(url);
      });
    });

    // Event Handler for URL changes
    window.addEventListener("popstate", (event) => {
      Router.go(event.state.route, false);
    });

    Router.go(location.pathname);
  },
  go: (route, addToHistory = true) => {
    if (addToHistory) {
      history.pushState(
        {
          route,
        },
        null,
        route,
      );
    }

    let pageElement = null;

    switch (route) {
      case "/":
        pageElement = document.createElement("menu-page");
        break;
      case "/order":
        pageElement = document.createElement("order-page");
        pageElement.textContent = "Your Order";
        break;
      default:
        if (route.startsWith("/product/")) {
          pageElement = document.createElement("details-page");
          pageElement.textContent = "Details";
        }
    }

    if (pageElement) {
      const mainElement = document.querySelector("main");

      mainElement?.children[0]?.remove();
      mainElement.appendChild(pageElement);

      window.scrollX = 0;
      window.scrollY = 0;
    }
  },
};

export default Router;
