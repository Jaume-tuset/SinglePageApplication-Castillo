import "../scss/styleCard.css";
//import { card } from "../utils/.js";

export { generateCard };

function generateCard() {
  let cardTemplate = document.createElement("div");
  cardTemplate.id = "cards_peliculas";
  cardTemplate.classList.add("container");
  cardTemplate.innerHTML = `
 
    `;
  return cardTemplate;
}
