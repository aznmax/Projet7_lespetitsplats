import { recipes } from "./JSON/recipes.js";

const listTotalIngredients = document.querySelector("#liste_ingredients");
const listTotalAppliances = document.querySelector("#liste_appareils");
const listTotalUtensiles = document.querySelector("#liste_ustensiles");

let ingredientsArr = [];
let appliancesSet = new Set();
let ustensilesSet = new Set();

// Génération des tableaux/sets
for (const recipe of recipes) {
  for (const ingredients of recipe.ingredients) {
    if (!ingredientsArr.includes(ingredients.ingredient)) {
      ingredientsArr.push(ingredients.ingredient);
    }
  }
  
  appliancesSet.add(recipe.appliance);

  recipe.ustensils.forEach((u) => ustensilesSet.add(u));
}

// Sorts
ingredientsArr = sortArray(ingredientsArr);
// appliancesArr = sortArray(appliancesArr); 
const appliancesArr = sortSet(appliancesSet); 
const ustensilesArr = sortSet(ustensilesSet);

// Ajouts au DOM
ingredientsArr.forEach((ingredient) => createItem(ingredient,"ingredient", listTotalIngredients));
appliancesArr.forEach((appliance) => createItem(appliance, "appliance", listTotalAppliances));
ustensilesArr.forEach((ustensile) => createItem(ustensile, "ustensile",listTotalUtensiles));

const inputs = document.querySelectorAll(".input");
const closes = document.querySelectorAll(".arrowUp");

inputs.forEach((input) => input.addEventListener("click", handleOpen));
closes.forEach((close) => close.addEventListener("click", handleClose));

function handleOpen(e) {
  handleClose();
  e.target.style.setProperty("display", "none");
  getContainer(e.target).style.setProperty("display", "block");
}

function handleClose() {
  inputs.forEach((input) => {
    input.style.removeProperty("display");
    getContainer(input).style.removeProperty("display");
  });
}

function getContainer(input) {
  return input.parentElement.querySelector(".container");
}

function sortArray(arr) {
  return arr.sort(
    (a, b) => a.localeCompare(b)
  );
}

function sortSet(list) {
  return sortArray([...list]);
}

function createItem(text,classe, container) {
    const li = document.createElement("li");
    li.classList.add(classe)
    li.innerText = text;

    container.appendChild(li);
}