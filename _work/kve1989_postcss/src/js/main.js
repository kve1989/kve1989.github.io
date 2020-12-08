import isMobile from './modules/isMobile';
import typeText from './modules/typeText';
import scrolling from './modules/scrolling';

document.addEventListener("DOMContentLoaded", () => {

  isMobile();
  typeText(["VKavetskiy"], '.header__logo');
  scrolling();

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

  document.querySelector(".switch__input").addEventListener('change', () => {
    document.querySelector(".page").classList.toggle("page--night");
  });
});
