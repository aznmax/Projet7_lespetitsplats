// Liste déroulante Ingrédients

// Ouverture liste ingrédients
const openListIngredients = document.querySelector(".target_ing");

openListIngredients.addEventListener("click", function () {
    document.querySelector(".container_ingredient").style.display = "block";
    openListIngredients.style.display = "none";
    document.querySelector(".container_appareils").style.display = "none";
    openListAppareils.style.display = "block";
    document.querySelector(".container_ustensiles").style.display ="none";
    openListUstensiles.style.display = "block";
    
});

// Fermeture liste ingrédients
const closeListIngredients = document.querySelector(".arrowUp");

closeListIngredients.addEventListener("click", function () {
    document.querySelector(".container_ingredient").style.display = "none";
    openListIngredients.style.display = "block";
});

// Liste déroulante Appareils

// Ouverture liste Appareils
const openListAppareils = document.querySelector(".target_apr");
openListAppareils.addEventListener("click", function () {
    document.querySelector(".container_appareils").style.display = "block";
    openListAppareils.style.display = "none";
    document.querySelector(".container_ingredient").style.display = "none";
    openListIngredients.style.display = "block";
    document.querySelector(".container_ustensiles").style.display ="none";
    openListUstensiles.style.display = "block";
});

// Fermeture liste Appareils
const closeListAppareils = document.querySelector(".arrowUp2");
closeListAppareils.addEventListener("click", function () {
    document.querySelector(".container_appareils").style.display = "none";
    openListAppareils.style.display = "block";
});

// Ouverture liste Ustensiles
const openListUstensiles = document.querySelector(".target_ust");
openListUstensiles.addEventListener("click", function () {
    document.querySelector(".container_ustensiles").style.display = "block";
    openListUstensiles.style.display = "none";
    document.querySelector(".container_appareils").style.display ="none";
    openListAppareils.style.display = "block";
    document.querySelector(".container_ingredient").style.display = "none";
    openListIngredients.style.display = "block";
    
});

// Fermeture liste Ustensiles
const closeListUstensiles = document.querySelector(".arrowUp3");
closeListUstensiles.addEventListener("click", function () {
    document.querySelector(".container_ustensiles").style.display = "none";
    openListUstensiles.style.display = "block";
});
