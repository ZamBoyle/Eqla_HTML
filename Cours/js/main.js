import { loadPrism } from './prism-loader.mjs';
import { CopyToClipboard } from './clipboard.mjs';
import { toggleCss } from './toggle-css.mjs';

window.onload = function () {
  toggleCss();
  createSourceCodeContainer();
  loadPrism();
};

function createSourceCodeContainer() {
  var h2 = document.createElement("h2");
  h2.innerHTML = "Code source de la page ";
  var cssButton = `
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;`;
  h2.innerHTML += `<button id="btnCopy" type="button" onclick="CopyToClipboard('codeId')" style="${cssButton}">Copier code</button>`;
  
  var container = document.createElement("div");
  container.id = "source-code-container";
  container.style = `border: 4px solid ;padding: 10px;font-weight: bold; font-size: 20px;`;
  
  var html = "<!DOCTYPE html>\n" + document.documentElement.outerHTML;
  html = html.replace(/<base[^>]*>/gi, "");
  html = html.replace(/<\/body>\n<\/html>/, "</body>\n\n</html>");
  var cleanedHtml = html.replace(/<script[\s\S]*?<\/script>/gi, "");
  
  var escapedHtml = cleanedHtml
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
  
  container.innerHTML = `<pre id="codeId" style="word-break: break-all;white-space: pre-wrap;"><code class="language-html">${escapedHtml}</code></pre>`;
  document.body.appendChild(h2);
  document.body.appendChild(container);
}
