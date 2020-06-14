import dishesTemplate from './dishes.hbs';
import menuItems from './menu.json';
const markup = dishesTemplate(menuItems);

const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('beforeend', markup);
