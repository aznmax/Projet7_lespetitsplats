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
        console.log(recipeName);
        recipeDescription = recipe.description.toLowerCase();
        if (recipeName.includes(searchRecipes)) {
            arrayRecipes.push(recipe);
        }

        if (recipeDescription.includes(searchRecipes)) {
            arrayRecipes.push(recipe);
        }

        let checkIng = false;
        for (let ing of recipe.ingredients) {
            ing = ing.name.toLowerCase();
            if (checkIng === false) {
                if (ing.includes(searchDescription)) {
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
