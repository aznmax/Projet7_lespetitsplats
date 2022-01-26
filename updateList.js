import { tabTags } from "./eventList.js";
import { recipes } from "./JSON/recipes.js";

export function updateList() {
    // Temporaire
    // if (!tabTags.tagIngredient.length) return;
    // if (!Object.keys(tabTags).reduce((cum, curr) => cum + tabTags[curr].length, 0)) return;
    if (!(tabTags.tagIngredient.length + tabTags.tagAppliance.length + tabTags.tagUstensile.length)) return;

    const ingSet = new Set();
    const ustSet = new Set();

    // 1. Parcours des recettes
    recipes.forEach((recipe) => {
        // 2. Récupérer Ingredients
        /** Ingrédients d'une recette */
        //================================
        const ingredients = recipe.ingredients.map((ing) => ing.name);
        const ustensils = recipe.ustensils;
        if(tabTags.tagUstensile.every((tag) => ustensils.includes(tag))) {
        console.log(ingredients);
        }
        // 3. Recherche si tous tes tags ingrédients en font partis
        // forEach, sort
        // map, filter => array
        // reduce
        // some, every, includes => boolean
        //find => item
        //================================
        if( true && true && true)
        if (tabTags.tagIngredient.every((tag) => ingredients.includes(tag)) && (tabTags.tagUstensile.every((tag) => ustensils.includes(tag)))&& true ) {
            recipe.element.style.removeProperty("display");

            //================================
            ingredients.filter((ing) => !tabTags.tagIngredient.includes(ing)).forEach((ing) => ingSet.add(ing));
            ustensils.filter((ust) => !tabTags.tagUstensile.includes(ust)).forEach((ust) => ustSet.add(ust));
        } else {
            recipe.element.style.setProperty("display", "none");
        }
        
  
        
        // if (tabTags.tagAppliance.every((tag2) => appliances.includes(tag2))) {
        //     recipe.element.style.removeProperty("display");
            
         
        // }else{
        //     recipe.element.style.setProperty("display","none");
            
         
        // }
        
    });

  
    // Classer liste Ingrédients //
    showItemsFromTags(document.querySelectorAll(".ingredient"), ingSet);
    showItemsFromTags(document.querySelectorAll(".ustensile"), ustSet);

    // 3.1 Si c'est inclus, on affiche la recette
    // Récupérer les autres ingrédients
    // Filtrer les ingrédients
    // 3.2 Sinon sinon on la cache
   
}

/**
 * Parcours une liste d'éléments pour ne conserver que ceux inclus dans le set
 */
function showItemsFromTags(liste, set) {

    liste.forEach((el) => {
        if (set.has(el.innerText)) {
            el.style.removeProperty("display");
        } else {
            el.style.setProperty("display", "none");
        }
    });
}

