import isMobile from "./modules/isMobile";
import typeText from "./modules/typeText";
import scrolling from "./modules/scrolling";
import ibg from "./modules/ibg";

document.addEventListener("DOMContentLoaded", () => {
	isMobile();
	typeText(["VKavetskiy"], ".header__logo");
	scrolling();
	ibg();

	let scrSizeW = document.querySelector(".screensize-w");
	let scrSizeH = document.querySelector(".screensize-h");
	let browser = document.querySelector(".browser span");
	const switchTheme = document.querySelector(".switch__input");

	if (sessionStorage.getItem("DarkThemeActive")) {
		switchTheme.checked = true;
		document.querySelector(".page").classList.add("page--night");
	}

	switchTheme.addEventListener("change", (e) => {
		if (e.target.checked) {
			sessionStorage.setItem("DarkThemeActive", true);
		} else {
			sessionStorage.setItem("DarkThemeActive", false);
		}
	});

	scrSizeW.textContent = window.outerWidth;
	scrSizeH.textContent = window.outerHeight;
	browser.textContent = window.navigator.userAgent;

	window.addEventListener("resize", function (event) {
		scrSizeW.textContent = window.outerWidth;
		scrSizeH.textContent = window.outerHeight;
	});

	document.querySelector(".switch__input").addEventListener("change", () => {
		document.querySelector(".page").classList.toggle("page--night");
	});
});
