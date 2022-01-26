import { updateLists } from "./updateList.js";

const buttonsOpen = [
    document.querySelector(".target_ing"),
    document.querySelector(".target_app"),
    document.querySelector(".target_ust"),
];
const buttonsClose = [
    document.querySelector(".arrowUp"),
    document.querySelector(".arrowUp2"),
    document.querySelector(".arrowUp3"),
];
const containers = [
    document.querySelector(".container_ingredients"),
    document.querySelector(".container_appliances"),
    document.querySelector(".container_ustensiles"),
];

buttonsOpen.forEach((button, i) => button.addEventListener('click', () => {
    containers.forEach(container => container.style.display = "none");
    containers[i].style.display = "block";

    buttonsOpen.forEach(btn => btn.style.display = "block");
    button.style.display = "none";

    updateLists();
}));

buttonsClose.forEach((button, i) => button.addEventListener('click', () => {
    containers[i].style.display = "none";
    buttonsOpen[i].style.display = "block";
}));