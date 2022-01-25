import {recipes } from "./JSON/recipes.js";
console.log(recipes);

const liste = document.querySelectorAll(".ingredient");
const elementTag = document.querySelector(".tagIngredients");
const contIng = document.querySelector(".container_ingredient");
const inpIng = document.querySelector(".target_ing");

// Tag Ingredients //

liste.forEach(function (item) {
    item.addEventListener("click", function () {
        const tagIng = document.createElement("div");
        tagIng.classList.add("tagButtonIngredients");
        // tagIng.innerText = `${item.innerText}`;
        console.log(tagIng);
        elementTag.append(tagIng);
        const divTagIng = document.createElement("div");
        divTagIng.classList.add('nameTagIngredients');
        divTagIng.innerText = `${item.innerText}`;
        tagIng.append(divTagIng);
        const elementIcon = document.createElement("div");
        elementIcon.classList.add("crossIcon");
        elementIcon.innerHTML = `<i class="far fa-times-circle"></i>`;
        tagIng.append(elementIcon);
        contIng.style.display = "none";
        inpIng.style.display = "block";
        tagIng.addEventListener("click", function () {
            tagIng.style.display = "none";
        });
    });
});

// Tags Appareils //

const liste2 = document.querySelectorAll(".appliance");
const elementTagApr = document.querySelector(".tagAppareil");
const contApr = document.querySelector(".container_appareils");
const inpApr = document.querySelector(".target_apr");

liste2.forEach(function (item2) {
    item2.addEventListener("click", function () {
        console.log(item2.innerText);
        const tagApr = document.createElement("div");
        tagApr.classList.add("tagButtonAppareil");
        tagApr.innerText = `${item2.innerText}`;
        elementTagApr.append(tagApr);
        const elementIcon2 = document.createElement("div");
        elementIcon2.classList.add("crossIcon2");
        elementIcon2.innerHTML = `<i class="far fa-times-circle"></i>`;
        tagApr.append(elementIcon2);
        contApr.style.display = "none";
        inpApr.style.display = "block";
        tagApr.addEventListener("click", function () {
            tagApr.style.display = "none";
        });
    });
});

// Tags Ustensiles//
const liste3 = document.querySelectorAll(".ustensile");
const elementTagUst = document.querySelector(".tagUstensiles");
const contUst = document.querySelector(".container_ustensiles");
const inpUst = document.querySelector(".target_ust");

liste3.forEach(function (item3) {
    item3.addEventListener("click", function () {
        const tagUst = document.createElement("div");
        tagUst.classList.add("tagButtonUstensile");
        tagUst.innerText = `${item3.innerText}`;
        elementTagUst.append(tagUst);
        const elementIcon3 = document.createElement("div");
        elementIcon3.classList.add("crossIcon3");
        elementIcon3.innerHTML = `<i class="far fa-times-circle"></i>`;
        tagUst.append(elementIcon3);
        contUst.style.display = "none";
        inpUst.style.display = "block";
        tagUst.addEventListener("click", function () {
            tagUst.style.display = "none";
        });
    });
});


