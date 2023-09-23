export function toggleCss() {
    if (window.location.search.includes("css=off")) {
      let style = document.createElement("style");
      style.innerHTML = ".no-css, .no-css * { all: initial !important; }";
      document.body.classList.add("no-css");
      document.head.appendChild(style);
    }
  }
  