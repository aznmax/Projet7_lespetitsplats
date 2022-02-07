import { recipes } from "./JSON/recipes.js";

const blocsRecipes = document.querySelectorAll(".bloc_recette");
const listeIng = document.querySelectorAll(".ingredient");
const listeApp = document.querySelectorAll(".appliance");
const listeUst = document.querySelectorAll(".ustensile");

// SearchBar Global
const mainInput = document.querySelector("#mainSearchBar");

// Bloc Recettes
const allRecipes = document.querySelectorAll(".nom_recette");

mainInput.addEventListener("keyup", function (events) {
    // On récupère la valeur de l'input
    let arrayRecipes = [];
    let recipeName = "";
    let recipeDescription = "";

    const searchRecipes = events.target.value.toLowerCase();
    //Pour chaque recettes

    recipes.forEach(function (recipe) {
        recipeName = recipe.name.toLowerCase();
        recipeDescription = recipe.description.toLowerCase();

        // On vérifie que l'input match avec le nom de la recette
        if (recipeName.includes(searchRecipes)) {
            arrayRecipes.push(recipe);
        }
        if (recipeDescription.includes(searchRecipes)) {
            arrayRecipes.push(recipe);
            let checkIng = false;
            recipe.ingredients.forEach(function (ing) {
                ing = ing.name.toLowerCase();
                if (checkIng === false) {
                    if (ing.includes(searchRecipes)) {
                        checkIng = true;
                    }
                }
            });
            if (checkIng === true) {
                arrayRecipes.push(recipe);
            }
        }
    });
    // un des ingrédients
    showItemsFromSearch(arrayRecipes);
    showIngredientFromSearch(arrayRecipes);
    showApplianceFromSearch(arrayRecipes);
    // la description
});
// recipes.forEach(recette => recette);

function showItemsFromSearch(arr) {
    // On masque tous les blocs
    blocsRecipes.forEach(function (bloc) {
        bloc.style.display = "none";
    });
    // On affiche tout les blocs des recettes qui sont dans le tableau du search
    arr.forEach(function (item) {
        document.querySelector("[data-id='" + item.id + "']").style.display = "block";
    });
}

function showIngredientFromSearch(arr2) {
    listeIng.forEach(function (ing) {
        ing.style.display = "none";
    });
    arr2.forEach(function (arrayRecipes) {
        arrayRecipes.ingredients.forEach(function(ing){
            document.querySelector("[data-spe=\"" + ing.name + "\"]").style.display = "block";
        })
    });
}

function showApplianceFromSearch(arr3) {
    listeApp.forEach(function (app) {
        app.style.display = "none";
    }); 
    arr3.forEach(function (arrayRecipes) {
        document.querySelector("[data-spe=\"" + arrayRecipes.appliance + "\"]").style.display = "block";
});

};

