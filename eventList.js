import {recipes } from "./JSON/recipes.js";

const liste = document.querySelectorAll('.ingredient');
console.log(liste);


const elementTag = document.querySelector('.tagIngredients');
console.log(elementTag);

const contIng = document.querySelector(".container_ingredient");
console.log(contIng);

const inpIng = document.querySelector('.target_ing');
console.log(inpIng);


liste.forEach(function(item){
    item.addEventListener('click',function(){
        console.log(item.innerText);
        const tagIng = document.createElement('div');
        tagIng.classList.add("tagButtonIngredients");
        tagIng.innerText = `${item.innerText}`
        elementTag.append(tagIng);
        const elementIcon = document.createElement('div');
        elementIcon.classList.add("crossIcon");
        elementIcon.innerHTML = `<i class="far fa-times-circle"></i>`;
        console.log(elementIcon);
        tagIng.append(elementIcon)
        contIng.style.display = "none";
        inpIng.style.display = "block";  
        tagIng.addEventListener("click",function(){
            tagIng.style.display = "none";
        }) 
    })
})

