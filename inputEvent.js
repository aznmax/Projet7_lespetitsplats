let inputIngredient = document.querySelector('.inp_ing');

const listeIng = document.querySelectorAll('.ingredient');


inputIngredient.addEventListener('keyup', function(e) {
  let val = e.target.value;
  
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


inputAppliance.addEventListener('keyup', function(e) {
    let val = e.target.value;
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


inputUstensile.addEventListener('keyup', function(e) {
    let val = e.target.value;
    listeUst.forEach(function(ust) {
      if (ust.innerText.toLowerCase().indexOf(val.toLowerCase()) > -1) {
        ust.style.display = 'block';
      } else {
        ust.style.display = 'none';
      }
    });
  
  });