import { tabTags } from "./eventList.js";
import { recipes } from "./JSON/recipes.js";

export function updateList() {
    // Temporaire
    // if (!tabTags.tagIngredient.length) return;
    // if (!Object.keys(tabTags).reduce((cum, curr) => cum + tabTags[curr].length, 0)) return;
    if (!(tabTags.tagIngredient.length + tabTags.tagAppliance.length + tabTags.tagUstensile.length)) return;
    
    
    const ingSet = new Set();

    // 1. Parcours des recettes
    recipes.forEach((recipe) => {
        // 2. Récupérer Ingredients
        /** Ingrédients d'une recette */
        const ingredients = recipe.ingredients.map((ing) => ing.name);
        // 3. Recherche si tous tes tags ingrédients en font partis
        // forEach, sort
        // map, filter => array
        // reduce
        // some, every, includes => boolean
        //find => item
        if (tabTags.tagIngredient.every((tag) => ingredients.includes(tag))) {
            recipe.element.style.removeProperty('display');

            console.log(tabTags.tagIngredient);
            // array.includes(string)

            ingredients
                .filter(ing => !tabTags.tagIngredient.includes(ing) )
                .forEach(ing => ingSet.add(ing));

        } else {
            recipe.element.style.setProperty('display', 'none');
        }
    });
    console.log([...ingSet]);

    const listeIng = document.querySelectorAll('.ingredient');
    listeIng.forEach(el => {
        if (ingSet.has(el.innerText)) {
            el.style.removeProperty('display');
        } else {
            el.style.setProperty('display', 'none');
        }
    });

    [...ingSet].map(x => x)

    // 3.1 Si c'est inclus, on affiche la recette
    // Récupérer les autres ingrédients
    // Filtrer les ingrédients
    // 3.2 Sinon sinon on la cache
}
