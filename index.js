import {menuArray} from './data.js';

function renderMenu () {
    let menuHtml = '';
    menuArray.map (function (menuItem){
        menuHtml += `<div class="menu-item">
        <div class="menu-emoji">${menuItem.emoji}</div>
        <div class="menu-details">
            <h3 class="menu-name">${menuItem.name}</h3>
            <p class="menu-ingredients">${menuItem.ingredients}</p>
            <p class="menu-price">$${menuItem.price}</p>
        </div>
        <button class="add-btn" id="add-btn">+</button>
    </div>`
    }).join('');
document.getElementById('menu').innerHTML = menuHtml;
}

renderMenu();