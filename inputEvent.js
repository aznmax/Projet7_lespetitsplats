let input = document.querySelector('.inp_ing');
console.log(input);
const listeIng = document.querySelectorAll('.ingredient');
console.log(listeIng);

input.addEventListener('keyPress',updateValue,false);

function updateValue() {
    input = document.querySelector('.inp_ing')
    const inputElement = input.value;
    listeIng.textContent = inputElement.value;
    console.log(updateValue);
  }
  

