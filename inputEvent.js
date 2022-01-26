let input = document.querySelector('.inp_ing');
console.log(input);
const listeIng = document.querySelectorAll('.ingredient');
console.log(listeIng);

input.addEventListener('keyup', function(e) {
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
