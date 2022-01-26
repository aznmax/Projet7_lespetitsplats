import { tabTags } from "./eventList.js";
import { recipes } from "./JSON/recipes.js";

export function updateList() {
    // console.log(tabTags);

    if (!tabTags.tagIngredient.length) return;

    // console.log();
    // 1. Parcours des recettes
    recipes.forEach((recipe) => {
        // console.log("===============");
        // console.log(recipe.ingredients);
        // 2. Récupérer Ingredients
        /** Ingrédients d'une recette */
        const ingredients = recipe.ingredients.map((ing) => ing.name);
        // 3. Recherche si tous tes tags ingrédients en font partis
        // forEach, sort
        // map, filter => array
        // reduce
        // some, every, includes => boolean
        //find => item
        if (tabTags.tagIngredient.every((tag) => ingredients.includes(tag) )) {
            // console.log(ingredients);
            // console.log(recipe.element);
            recipe.element.style.removeProperty('display');

        } else {
            recipe.element.style.setProperty('display', 'none');
        }
    });

    // 3.1 Si c'est inclus, on affiche la recette
    // Récupérer les autres ingrédients
    // Filtrer les ingrédients
    // 3.2 Sinon sinon on la cache
}
