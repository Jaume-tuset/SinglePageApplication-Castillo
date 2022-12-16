import { generateCatalogo } from "../pages/catalogo.js";
export { catalogo };

function catalogo() {
  document.querySelectorAll(".projcard-description").forEach(function (box) {
    $clamp(box, { clamp: 6 });
  });
}
