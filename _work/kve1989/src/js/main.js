import isMobile from "./modules/isMobile";
import typeText from "./modules/typeText";
import scrolling from "./modules/scrolling";
import modal from "./modules/modals";
import ibg from "./modules/ibg";
import switcher from "./modules/switcher";
import customize from "./modules/customize";

document.addEventListener("DOMContentLoaded", () => {
	isMobile();
	typeText(["VKavetskiy"], ".header__logo");
	scrolling();
	ibg();
	modal();
	switcher();
	customize();

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
