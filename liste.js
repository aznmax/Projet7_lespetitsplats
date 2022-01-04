const openListIngredients = document.querySelector('.target_ing')

openListIngredients.addEventListener('click',function(){
    document.querySelector('.container_ingredient').style.display ="block"
    openListIngredients.style.display = "none";
})

const closeListIngredients = document.querySelector(".arrowUp");

closeListIngredients.addEventListener('click',function(){
    document.querySelector('.container_ingredient').style.display = "none";
    openListIngredients.style.display = "block"
})    

