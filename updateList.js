import { tabTags } from "./eventList.js";
import { recipes } from "./JSON/recipes.js";

const lists = {
    ingredients:document.querySelectorAll(".ingredient"),
    appliances:document.querySelectorAll(".appliance"),
    ustensils:document.querySelectorAll(".ustensile"),
    recipes: document.querySelectorAll('.bloc_recette')
}

export function updateLists() {
    console.trace(tabTags)
    // Temporaire
    // if (!Object.keys(tabTags).reduce((cum, curr) => cum + tabTags[curr].length, 0)) return;
    if (!(tabTags.tagIngredient.length + tabTags.tagAppliance.length + tabTags.tagUstensile.length)) return;
    console.log('update les listes')

    const ingSet = new Set();
    const appSet = new Set();
    const ustSet = new Set();

    // 1. Parcours des recettes
    recipes.forEach((recipe) => {
        /** Ingrédients d'une recette */
        const ingredients = recipe.ingredients.map((ing) => ing.name);
        /** L'appareil d'une recette */
        const appliance = recipe.appliance;
        /** Ustensiles d'une recette */
        const ustensils = recipe.ustensils;

        // 3. Recherche si tous tes tags ingrédients en font partis
        // forEach, sort
        // map, filter => array
        // reduce
        // some, every, includes => boolean
        //find => item
        //================================
        if (
            tabTags.tagIngredient.every((tag) => ingredients.includes(tag)) &&
            tabTags.tagAppliance.every((tag) => appliance === tag) &&
            tabTags.tagUstensile.every((tag) => ustensils.includes(tag))
        ) {
            recipe.element.style.removeProperty("display");

            ingredients.filter((ing) => !tabTags.tagIngredient.includes(ing)).forEach((ing) => ingSet.add(ing));
            if (!tabTags.tagAppliance.includes(appliance)) appSet.add(appliance);
            ustensils.filter((ust) => !tabTags.tagUstensile.includes(ust)).forEach((ust) => ustSet.add(ust));
        } else {
            recipe.element.style.setProperty("display", "none");
        }
    });

    // Classer liste Ingrédients //
    showItemsFromTags(lists.ingredients, ingSet);
    showItemsFromTags(lists.appliances, appSet);
    showItemsFromTags(lists.ustensils, ustSet);

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


export function resetLists() {
    for (const list of Object.values(lists)) {
        list.forEach(el => el.style.removeProperty("display"))
    }
}