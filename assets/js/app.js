const w = window.outerWidth;
const h = window.outerHeight;
const scrWidth = document.querySelector('.screensize-w');
const scrHeight = document.querySelector('.screensize-h');
const appBrowser = document.querySelector('.browser');

scrWidth.children.textContent = w;
scrHeight.children.textContent = h;
