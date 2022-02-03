import { recipes } from "./JSON/recipes.js";

const blocsRecipes = document.querySelectorAll(".bloc_recette");

// SearchBar Global
const mainInput = document.querySelector("#mainSearchBar");

// Bloc Recettes
const allRecipes = document.querySelectorAll(".nom_recette");

mainInput.addEventListener("keyup", function (events) {
    const searchRecipes = events.target.value.toLowerCase();
    const searchDescription = events.target.value.toLowerCase();
    // // On récupère la valeur de l'input
    let arrayRecipes = [];
    let recipeDescription = "";

    for (const recipe of recipes) {
        let recipeName = "";
        // let recipeDescription = "";
        recipeName = recipe.name.toLowerCase();
        recipeDescription = recipe.description.toLowerCase();
        if (recipeName.startsWith(searchRecipes.slice(0, Math.max(recipeName.length - 1, 1)))) {
            arrayRecipes.push(recipe);
        }

        if (recipeDescription.startsWith(searchRecipes.slice(0, Math.max(recipeDescription.length - 1, 1)))) {
            arrayRecipes.push(recipe);
        }

        let checkIng = false;
        for (let ing of recipe.ingredients) {
            ing = ing.name.toLowerCase();
            if (checkIng === false) {
                if (ing.startsWith(searchDescription.slice(0, Math.max(ing.length - 1, 1)))) {
                    checkIng = true;
                }
            }
        }
        if (checkIng === true) {
            arrayRecipes.push(recipe);
        }
    }

    showItemsFromSearch(arrayRecipes);
});

function showItemsFromSearch(arr) {
    for (const bloc of blocsRecipes) {
        bloc.style.display = "none";
    }
    for (const item of arr) {
        document.querySelector("[data-id='" + item.id + "']").style.display = "block";
    }
}
