import isMobile from './modules/isMobile';

document.addEventListener("DOMContentLoaded", () => {

  isMobile();

  let scrSizeW = document.querySelector(".screensize-w");
  let scrSizeH = document.querySelector(".screensize-h");
  let browser = document.querySelector(".browser span");

  scrSizeW.textContent = window.outerWidth;
  scrSizeH.textContent = window.outerHeight;
  browser.textContent = window.navigator.userAgent;

  window.addEventListener("resize", function (event) {
    scrSizeW.textContent = window.outerWidth;
    scrSizeH.textContent = window.outerHeight;
  });


});
