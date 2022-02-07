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
    const searchRecipes = events.target.value.toLowerCase();

    // // On récupère la valeur de l'input
    let arrayRecipes = [];
    let recipeDescription = "";
    let recipeAppliance = "";

    for (const recipe of recipes) {
        let recipeName = "";
        let checkUst = false;
        // let recipeDescription = "";
        recipeName = recipe.name.toLowerCase();
        recipeDescription = recipe.description.toLowerCase();
        recipeAppliance = recipe.appliance.toLowerCase();
        if (recipeName.includes(searchRecipes)) {
            arrayRecipes.push(recipe);
        }
        if (recipeDescription.includes(searchRecipes)) {
            arrayRecipes.push(recipe);
        }
        if (recipeAppliance.includes(searchRecipes)) {
            arrayRecipes.push(recipe);
        }
        if (checkUst === false) {
            for (let ust of recipe.ustensils) {
               ust= ust.toLowerCase();
                if (ust.includes(searchRecipes)) {
                    checkUst = true;
                }
            }
        }
        let checkIng = false;
        for (let ing of recipe.ingredients) {
            ing = ing.name.toLowerCase();
            if (checkIng === false) {
                if (ing.includes(searchRecipes)) {
                    checkIng = true;
                }
            }
        }
        if (checkIng === true || checkUst === true) {
            arrayRecipes.push(recipe);
        }
    }
    // console.log(arrayRecipes);
    showItemsFromSearch(arrayRecipes);
    showIngredientdFromSearch(arrayRecipes);
    showApplianceFromSearch(arrayRecipes);
    showUstensilsFromSearch(arrayRecipes);
});

function showItemsFromSearch(arr) {
    for (const bloc of blocsRecipes) {
        bloc.style.display = "none";
    }
    for (const item of arr) {
        document.querySelector("[data-id='" + item.id + "']").style.display = "block";
    }
}

function showIngredientdFromSearch(arr2) {
    for (const li of listeIng) {
        li.style.display = "none";
    }
    for (const recipe of arr2) {
        for (const ing of recipe.ingredients) {
            document.querySelector('[data-spe="' + ing.name + '"]').style.display = "block";
        }
    }
}

function showApplianceFromSearch(arr3) {
    for (const liApp of listeApp) {
        liApp.style.display = "none";
        for (const recipe of arr3) {
            document.querySelector("[data-spe='" + recipe.appliance + "']").style.display = "block";
        }
    }
}

function showUstensilsFromSearch(arr4) {
    for (const liUst of listeUst) {
        liUst.style.display = "none";
        for (const recipe of arr4) {
            for (const ust of recipe.ustensils) {
                document.querySelector("[data-spe='" + ust + "']").style.display = "block";
            }
        }
    }
}
