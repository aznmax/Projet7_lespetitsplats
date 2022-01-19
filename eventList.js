

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
});

// Tags Appareils // 

const liste2 = document.querySelectorAll('.appliance');
const applianceTag = document.querySelector('.tagAppareil');
const elementTagApr = document.querySelector('.tagAppareil');
const contApr = document.querySelector(".container_appareils");
const inpApr = document.querySelector('.target_apr');

liste2.forEach(function(item2){
    item2.addEventListener('click',function(){
        console.log(item2.innerText);
        const tagApr = document.createElement('div');
        tagApr.classList.add("tagButtonAppareil");
        tagApr.innerText = `${item2.innerText}`;
        elementTagApr.append(tagApr)
        const elementIcon2 = document.createElement('div');
        elementIcon2.classList.add("crossIcon2");
        elementIcon2.innerHTML = `<i class="far fa-times-circle"></i>`;
        console.log(elementIcon2);
        tagApr.append(elementIcon2)
        contApr.style.display = "none";
        inpApr.style.display = "block";  
        tagApr.addEventListener("click",function(){
            tagApr.style.display = "none";
        }) 
    
    })
})


