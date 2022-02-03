import { recipes } from "./JSON/recipes.js";


const blocsRecipes = document.querySelectorAll(".bloc_recette");


// SearchBar Global
const mainInput = document.querySelector("#mainSearchBar");


// Bloc Recettes
const allRecipes = document.querySelectorAll('.nom_recette');


mainInput.addEventListener('keyup',function(events){
  
// On récupère la valeur de l'input
let arrayRecipes = [];

const searchRecipes = events.target.value.toLowerCase();
const searchDescription = events.target.value.toLowerCase();
//Pour chaque recettes
let recipeName = "";
let recipeDescription = "";

recipes.forEach(function(recipe){
recipeName =recipe.name.toLowerCase();
recipeDescription = recipe.description.toLowerCase();

// On vérifie que l'input match avec le nom de la recette
recipeName.startsWith(searchRecipes.slice(0, Math.max(recipeName.length - 1, 1)));
if(recipeName.startsWith(searchRecipes.slice(0, Math.max(recipeName.length - 1, 1)))){
    arrayRecipes.push(recipe);
   
}

recipeDescription.startsWith(searchDescription.slice(0, Math.max(recipeDescription.length - 1, 1)))

if(recipeDescription.startsWith(searchDescription.slice(0, Math.max(recipeDescription.length - 1, 1)))){
    arrayRecipes.push(recipe)
}

let checkIng = false;
recipe.ingredients.forEach(function(ing){
    ing = ing.name.toLowerCase();
    if(checkIng === false){
        
        if(ing.startsWith(searchDescription.slice(0, Math.max(ing.length - 1, 1)))){
            checkIng = true;
            
        }
    }
})
if(checkIng ===true){
    arrayRecipes.push(recipe)
}
})

// un des ingrédients

showItemsFromSearch(arrayRecipes)

// la description


})
// recipes.forEach(recette => recette);

function showItemsFromSearch(arr) {
    // On masque tous les blocs 
    blocsRecipes.forEach(function(bloc){
        bloc.style.display = "none";
    })
    // On affiche tout les blocs des recettes qui sont dans le tableau du search
    arr.forEach(function(item){    
        document.querySelector("[data-id='"+item.id+"']").style.display="block";
    })
}