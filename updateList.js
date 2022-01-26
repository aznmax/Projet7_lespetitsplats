import { tabTags } from "./eventList.js";
import {recipes} from "./JSON/recipes.js";


export function updateList() {
    console.log(tabTags);

    console.log()
    // 1. Parcours des recettes
    recipes.forEach(recipe => {
        console.log('===============')
       console.log(recipe.ingredients);
        const ingredients = recipe.ingredients.map(x => x)
        console.log(ingredients)
   });
   
    // 2. Récupérer Ingredients
    // 3. Recherche si tous tes tags ingrédients en font partis
        // 3.1 Si c'est inclus, on affiche la recette
          // Récupérer les autres ingrédients
          // Filtrer les ingrédients
        // 3.2 Sinon sinon on la cache
}

