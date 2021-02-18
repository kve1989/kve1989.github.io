import isMobile from "./modules/isMobile";
import typeText from "./modules/typeText";
import scrolling from "./modules/scrolling";
import modal from "./modules/modals";
import ibg from "./modules/ibg";

document.addEventListener("DOMContentLoaded", () => {
	isMobile();
	typeText(["VKavetskiy"], ".header__logo");
	scrolling();
	ibg();
	modal();

	const scrSizeW = document.querySelector(".screensize-w"),
		scrSizeH = document.querySelector(".screensize-h"),
		browser = document.querySelector(".browser span"),
		switchTheme = document.querySelector(".switch__input"),
		customSwitch = document.querySelector(".customize__head");

	if (
		sessionStorage.getItem("DarkThemeActive") &&
		sessionStorage.getItem("DarkThemeActive") != 0
	) {
		switchTheme.checked = true;
		document.querySelector(".page").classList.add("page--night");
	}

	switchTheme.addEventListener("change", (e) => {
		if (e.target.checked) {
			sessionStorage.setItem("DarkThemeActive", 1);
		} else {
			sessionStorage.setItem("DarkThemeActive", 0);
		}
	});

	scrSizeW.textContent = window.outerWidth;
	scrSizeH.textContent = window.outerHeight;
	browser.textContent = window.navigator.userAgent;

	window.addEventListener("resize", function (event) {
		scrSizeW.textContent = window.outerWidth;
		scrSizeH.textContent = window.outerHeight;
	});

	switchTheme.addEventListener("change", () => {
		document.querySelector(".page").classList.toggle("page--night");
	});

	customSwitch.addEventListener("click", (e) => {
		e.target.parentNode.classList.toggle("active");
		e.target.classList.toggle("active");
	});
});
