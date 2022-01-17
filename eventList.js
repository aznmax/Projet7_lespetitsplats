import {recipes } from "./JSON/recipes.js";

const liste = document.querySelectorAll('.ingredient');
console.log(liste);


const elementTag = document.querySelector('.tagIngredients');
console.log(elementTag);


liste.forEach(function(item){
    item.addEventListener('click',function(){
        console.log(item.innerText);
        const tagIng = document.createElement('div');
        tagIng.classList.add("tagButtonIngredients");
        tagIng.innerText = `${item.innerText}`
        elementTag.append(tagIng)
    })
})

