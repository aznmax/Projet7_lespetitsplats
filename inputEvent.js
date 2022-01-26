let inputIngredient = document.querySelector('.inp_ing');
console.log(inputIngredient);
const listeIng = document.querySelectorAll('.ingredient');
console.log(listeIng);

inputIngredient.addEventListener('keyup', function(e) {
  let val = e.target.value;
  console.log(val);
  listeIng.forEach(function(ing) {
    if (ing.innerText.toLowerCase().indexOf(val.toLowerCase()) > -1) {
      ing.style.display = 'block';
    } else {
      ing.style.display = 'none';
    }
  });

});

let inputAppliance = document.querySelector('.inp_apr');
const listeApp = document.querySelectorAll('.appliance');
console.log(listeApp);

inputAppliance.addEventListener('keyup', function(e) {
    let val = e.target.value;
    console.log(val);
    listeApp.forEach(function(app) {
      if (app.innerText.toLowerCase().indexOf(val.toLowerCase()) > -1) {
        app.style.display = 'block';
      } else {
        app.style.display = 'none';
      }
    });
  
  });

  let inputUstensile = document.querySelector('.inp_ust');
const listeUst = document.querySelectorAll('.ustensile');
console.log(listeUst);

inputUstensile.addEventListener('keyup', function(e) {
    let val = e.target.value;
    console.log(val);
    listeUst.forEach(function(ust) {
      if (ust.innerText.toLowerCase().indexOf(val.toLowerCase()) > -1) {
        ust.style.display = 'block';
      } else {
        ust.style.display = 'none';
      }
    });
  
  });