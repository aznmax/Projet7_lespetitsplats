import { recipes } from "./JSON/recipes.js";


// SearchBar Global
const mainInput = document.querySelector("#mainSearchBar");
console.log(mainInput);

mainInput.addEventListener('keyup',function(events){
  
// On récupère la valeur de l'input
let arrayRecipes = [];
let arrayDescription =[];
const searchRecipes = events.target.value.toLowerCase();
const searchDescription = event.target.value.toLowerCase();
//Pour chaque recettes
let recipeName = "";
let recipeDescription = "";

recipes.forEach(function(recipe){
recipeName =recipe.name.toLowerCase();
recipeDescription = recipe.description.toLowerCase();

// On vérifie que l'input match avec le nom de la recette
recipeName.startsWith(searchRecipes.slice(0, Math.max(recipeName.length - 1, 1)));
recipeDescription.startsWith(searchDescription.slice(0, Math.max(recipeDescription.length - 1, 1)));
console.log(recipeDescription);
if(recipeName.startsWith(searchRecipes.slice(0, Math.max(recipeName.length - 1, 1)))){
    arrayRecipes.push(recipe);
   

}
if(recipeDescription.startsWith(searchDescription.slice(0, Math.max(recipeDescription.length - 1, 1)))){
    arrayDescription.push(recipe);
}
})
// la description
// un des ingrédients
console.log(arrayRecipes);
console.log(arrayDescription);

})
if(arrayRecipes){
    recipeName.style.display = "block";
}

// recipes.forEach(recette => recette);

