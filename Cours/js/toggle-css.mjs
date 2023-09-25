export function toggleCss() {
    let url = window.location.href;
    if (url.indexOf('css=off') !== -1) {
      needCss(true);
    }
  };
export function needCss(needed){
  document.querySelectorAll('link[rel=stylesheet]').forEach(function (styleSheet) {
    styleSheet.disabled = needed;
  });
}
/*export function toggleCss() {
    if (window.location.search.includes("css=off")) {
      let style = document.createElement("style");
      style.innerHTML = ".no-css, .no-css * { all: initial !important; }";
      document.body.classList.add("no-css");
      document.head.appendChild(style);
    }
  }
*/