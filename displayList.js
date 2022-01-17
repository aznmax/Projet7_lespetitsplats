import { recipes } from "./JSON/recipes.js";

const listTotalIngredients = document.querySelector("#liste_ingredients");
const listTotalAppliances = document.querySelector("#liste_appareils");
const listTotalUtensiles = document.querySelector("#liste_ustensiles");


let ingredientsArr = [];
let appliancesArr = [];
let ustensilesArr = new Set();


for (const recipe of recipes) {
    for (const ingredients of recipe.ingredients) {
        if (!ingredientsArr.includes(ingredients.ingredient)) {
            ingredientsArr.push(ingredients.ingredient);
            const creationListe = document.createElement("li");
            creationListe.classList.add("ingredient")
            creationListe.innerText = `${ingredients.ingredient}`;

            listTotalIngredients.appendChild(creationListe);
        }
    }

    if (!appliancesArr.includes(recipe.appliance)) {
        appliancesArr.push(recipe.appliance);

        const creationListe = document.createElement("li");
        creationListe.classList.add("appareil")
        creationListe.innerText = `${recipe.appliance}`;

        listTotalAppliances.appendChild(creationListe);
    }

    recipe.ustensils.forEach(u => ustensilesArr.add(u));
}

ustensilesArr.forEach(ustensile => {
    const creationListe = document.createElement("li");
      creationListe.innerText = ustensile;
  
      listTotalUtensiles.appendChild(creationListe);
  })
  


console.log(ingredientsArr);

function createDiv(tag, classes, container) {
    const el = document.createElement(tag);

    el.classList.add(...classes);

    container.appendChild(el);

    return el;
}
