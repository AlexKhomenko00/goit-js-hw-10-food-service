import { locale } from 'core-js';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const swithInputRef = document.querySelector('input.js-switch-input');
const bodyRef = document.querySelector('body');

checkDarkTheme();

swithInputRef.addEventListener('change', setThemeColor);

function setThemeColor(event) {
  if (event.currentTarget.checked === true) {
    setDarkTheme();
    return;
  }
  setLightTheme();
}
function setDarkTheme() {
  bodyRef.classList.remove('light-theme');
  bodyRef.classList.add('dark-theme');
  localStorage.setItem('theme', Theme.DARK);
}
function setLightTheme() {
  bodyRef.classList.remove('dark-theme');
  bodyRef.classList.add('light-theme');
  localStorage.setItem('theme', Theme.LIGHT);
}
function checkDarkTheme() {
  if (localStorage.getItem('theme') === Theme.DARK) {
    setDarkTheme();
    swithInputRef.checked = true;
  }
}
