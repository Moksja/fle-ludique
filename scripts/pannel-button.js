// gestion ouverture / fermeture du panneau latéral 
const button = document.getElementById('pannel-button');
const pannel = document.getElementById('side-pannel');
const menu = document.getElementById('side-menu');
const icon = document.getElementById('pannel-button-content');
const globalContainer = document.getElementById('global-container');

button.addEventListener('click', () => {
    if (button.className === 'close') {
        button.classList.remove('close');
        pannel.classList.remove('opened');
        menu.classList.remove('opened');

        button.classList.add('open');
        pannel.classList.add('closed');
        menu.classList.add('closed');
        
        globalContainer.style.marginLeft = "5rem";

        icon.className = "fa-solid fa-angle-right";

        textToIcon();

    } else if (button.className === 'open') {
        button.classList.remove('open');
        pannel.classList.remove('closed');
        menu.classList.remove('closed');

        button.classList.add('close');
        pannel.classList.add('opened');
        menu.classList.add('opened');

        globalContainer.style.marginLeft = "10rem";

        icon.className = "fa-solid fa-angle-left";

        iconToText()
    }
});


// gestion texte / icônes menu 
const listItems = document.querySelectorAll('#menu-list li')
const iconsList = ['<i class="fa-solid fa-magnifying-glass-chart"></i>', '<i class="fa-solid fa-puzzle-piece"></i>', '<i class="fa-solid fa-chart-line"></i>'];
const menuTextList = ["Vue d'ensemble", "Typologie des supports", "Impact sur l'apprentissage"];
const settings = document.getElementById('settings');

let index = 0;

function textToIcon() {
    listItems.forEach((listItem, index) => {
        // listItem.textContent = "";
        listItem.innerHTML = iconsList[index];
        settings.innerHTML = '<i class="fa-solid fa-gear"></i>';

        index++;
    });
};

function iconToText() {
    listItems.forEach((listItem, index) => {
        listItem.innerHTML = menuTextList[index];
        settings.innerHTML = 'Paramètres';

        index++;
    });
}