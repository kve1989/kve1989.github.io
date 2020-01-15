const w = window.outerWidth;
const h = window.outerHeight;
const scrWidth = document.querySelector('.screensize-w span');
const scrHeight = document.querySelector('.screensize-h span');
const appBrowser = document.querySelector('.browser');

scrWidth.textContent = w;
scrHeight.textContent = h;
