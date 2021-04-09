import isMobile from "./modules/isMobile";
import typeText from "./modules/typeText";
import scrolling from "./modules/scrolling";
import modal from "./modules/modals";
import ibg from "./modules/ibg";
import switcher from "./modules/switcher";
import Spaceship from './modules/spaceship';

document.addEventListener("DOMContentLoaded", () => {
	isMobile();
	typeText(["VKavetskiy"], ".header__logo");
	scrolling();
	ibg();
	modal();
	switcher();

  const ship1 = new Spaceship("./assets/images/ship.png", 5);
  const ship3 = new Spaceship("./assets/images/ship.png", 8);
  const ship2 = new Spaceship("./assets/images/ship2.png", 2, 'vertical');
  const ship4 = new Spaceship("./assets/images/ship2.png", 10, 'vertical');

	const scrSizeW = document.querySelector(".screensize-w"),
		scrSizeH = document.querySelector(".screensize-h"),
		browser = document.querySelector(".browser span");

	scrSizeW.textContent = window.outerWidth;
	scrSizeH.textContent = window.outerHeight;
	browser.textContent = window.navigator.userAgent;

	window.addEventListener("resize", function (event) {
		scrSizeW.textContent = window.outerWidth;
		scrSizeH.textContent = window.outerHeight;
	});
});
