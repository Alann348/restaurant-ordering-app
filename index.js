import {menuArray} from './data.js';


let orderArray = [];
document.addEventListener('click', function(e){
    if (e.target.dataset.add) {
        const item = menuArray.find(item => item.id === Number (e.target.dataset.add))
        orderArray.push(item)
        renderOrder();
    } else if (e.target.dataset.remove) {
        orderArray.splice(Number(e.target.dataset.remove), 1)
        renderOrder();
    } else if (e.target.classList.contains('complete-btn')) {
        document.getElementById('payment-modal').style.display = 'flex';
    }
});

document.getElementById('payment-form').addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    document.getElementById('payment-modal').style.display = 'none';
    this.reset();
    orderArray = [];

    const message = document.createElement('p');
    message.className = 'thanks-message';
    message.textContent = `Thanks, ${name}! Your order is on its way!`;
    document.getElementById('order').replaceChildren(message);
});

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
        <button class="add-btn" data-add="${menuItem.id}">+</button>
    </div>`
    }).join('');
document.getElementById('menu').innerHTML = menuHtml;
}

renderMenu();

function renderOrder () {
    if (orderArray.length === 0) {
        document.getElementById('order').innerHTML = '';
        return;
    }

    const totalPrice = orderArray.reduce((total, item) => total + item.price, 0);

    let orderHtml = '<h2 class="order-title">Your order</h2>';
    orderArray.forEach(function (order, index) {
    orderHtml += `<div class="order-item">
        <h3 class="order-name">${order.name}</h3>
        <button class="remove-btn" data-remove="${index}">remove</button>
        <p class="order-price">$${order.price}</p>
    </div>`
})

    orderHtml += `<p class="order-total"><span>Total price:</span><span>$${totalPrice}</span></p>
        <button class="complete-btn">Complete order</button>`

    document.getElementById('order').innerHTML = orderHtml;
}
renderOrder();
