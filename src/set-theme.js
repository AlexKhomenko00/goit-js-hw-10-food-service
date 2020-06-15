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
  switchThemes('light-theme', 'dark-theme');
  localStorage.setItem('theme', Theme.DARK);
}
function setLightTheme() {
  switchThemes('dark-theme', 'light-theme');
  localStorage.setItem('theme', Theme.LIGHT);
}
function switchThemes(prevTheme, nextTheme) {
  bodyRef.classList.remove(prevTheme);
  bodyRef.classList.add(nextTheme);
}
function checkDarkTheme() {
  if (localStorage.getItem('theme') === Theme.DARK) {
    setDarkTheme();
    swithInputRef.checked = true;
  }
}
