import { recipes } from "./JSON/recipes.js";
import { updateLists, resetLists } from "./updateList.js";


const tabComps = ["ingredient", "appliance", "ustensile"];
/** Liste des tags selectionnés */ 
export const tabTags = {
    tagIngredient: [],
    tagAppliance: [], // Length max = 1
    tagUstensile: [],
};

generateList();

function generateList() {
    tabComps.forEach((compo) => {
        const liste = document.querySelectorAll(`.${compo}`);
        const elementTag = document.querySelector(`.tag${capitalize(compo)}`);
        const container = document.querySelector(`.container_${compo}s`);
        const input = document.querySelector(`.target_${compo.slice(0, 3)}`);

        const tagClass = `tagButton${capitalize(compo)}`;

        liste.forEach(function (item) {
            item.addEventListener("click", () =>
                createTag(
                    elementTag,
                    container,
                    input,
                    tagClass,
                    item.innerText,
                    `tag${capitalize(compo)}`
                )
            );
        });
    });
}

function createTag(elementTag, container, input, tagClass, content, className) {
    tabTags[className].push(content);

    const tag = document.createElement("div");
    tag.classList.add("tagButton", tagClass);
    elementTag.append(tag);

    const divTag = document.createElement("div");
    divTag.classList.add('nameTag');
    divTag.innerText = content;
    tag.append(divTag);

    const elementIcon = document.createElement("div");
    elementIcon.classList.add("crossIcon");
    elementIcon.innerHTML = `<i class="far fa-times-circle"></i>`;
    tag.append(elementIcon);

    container.style.display = "none";
    input.style.display = "block";
    tag.addEventListener("click", deleteTag);

    updateLists();
}

function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
}

function deleteTag(e) {
    let el = e.target.closest(".tagButton");
    // R2cupère la classe pour avoir le type de composant
    const type = el.classList[1].replace('Button', '');
    // Récupère le nom du composant
    const name = el.querySelector('.nameTag');

    tabTags[type] = tabTags[type].filter(tag => tag !== name.innerText);

    el.remove();

    resetLists();
    updateLists();
}
