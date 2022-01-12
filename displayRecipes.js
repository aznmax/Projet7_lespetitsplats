import { recipes } from './JSON/recipes.js';

const recettes = document.querySelector('#recettes');

console.log(recettes);

for (const recipe of recipes) {
  // création de la div contenant la recette
  const recette = document.createElement('div');
  // ajout de la classe qui va bien
  recette.classList.add('bloc_recette');

  // création du bloc image
  const recetteImage = document.createElement('div');
  // et ajout de sa classe
  recetteImage.classList.add('image');

  // création du bloc carte menu
  const recetteCarte = document.createElement('div');
  // et ajout de sa classe
  recetteCarte.classList.add('carte_menu');

  // création du bloc nom
  const recetteNom = document.createElement('div');
  // Ajout de la classe
  recetteNom.classList.add('nom_recette');
  // Ajout du contenu HTML
  recetteNom.innerHTML = `${recipe.name}<i class="far fa-clock"></i>
    <span>${recipe.time}</span>`;

  // Création du bloc infos recette
  const recetteInfos = document.createElement('div');
  // Ajout de sa classe
  recetteInfos.classList.add('information_recettes');

  // Création de la liste des ingrédients
  const recetteIngredients = document.createElement('ul');
  // Ajout de sa classe
  recetteIngredients.classList.add('liste_ingredients1');
  // Boucle dans la liste pour aller récupérer chaque ingrédient
  for (const ingredient of recipe.ingredients) {
    const ligne = document.createElement('li'); // Création de l'élément
    ligne.innerText = `${ingredient.ingredient} : ${ingredient.quantity} ${ingredient.unit}`; // Ajout du contenu
    recetteIngredients.appendChild(ligne); // ajout de chaque ingrédients à la liste
  }

  // Ajout de la liste des ingrédients aux infos recette
  recetteInfos.appendChild(recetteIngredients);

  // Ajout des différents éléments de la recette au bloc recette
  recette.append(recetteImage, recetteCarte, recetteNom, recetteInfos);

  // Ajout du bloc recette à la liste des recettes
  recettes.appendChild(recette);
}