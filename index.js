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

function renderOrder () {
    let orderHtml = '';
    orderHtml += `<div class="order-item">
        <h3 class="order-name">Pizza</h3>
        <button class="remove-btn" id="remove-btn">remove</button>
        <p class="order-price">${totalPrice}</p>
        <button class="complete-btn" id="complete-btn">Complete order</button>
    </div>`
    
    document.getElementById('order').innerHTML = orderHtml;
}
renderOrder();

