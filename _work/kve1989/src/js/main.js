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
		customSwitch = document.querySelector(".customize__head"),
		inputBg = document.getElementById("colorBg"),
		inputAccent = document.getElementById("colorAccent"),
		inputFont = document.getElementById("colorFont");

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
		if (document.querySelector(".page").closest("page--night")) {
			inputBg.value = getComputedStyle(
				document.querySelector(".page--night")
			)
				.getPropertyValue("--bg-color")
				.trim();

			inputFont.value = getComputedStyle(
				document.querySelector(".page--night")
			)
				.getPropertyValue("--font-color")
				.trim();

			inputAccent.value = getComputedStyle(
				document.querySelector(".page")
			)
				.getPropertyValue("--accent-color")
				.trim();
		}
		inputBg.value = getComputedStyle(document.querySelector(".page"))
			.getPropertyValue("--bg-color")
			.trim();

		inputFont.value = getComputedStyle(document.querySelector(".page"))
			.getPropertyValue("--font-color")
			.trim();

		inputAccent.value = getComputedStyle(document.querySelector(".page"))
			.getPropertyValue("--accent-color")
			.trim();
	});

	customSwitch.addEventListener("click", (e) => {
		e.target.parentNode.classList.toggle("active");
		e.target.classList.toggle("active");
	});

	inputBg.value = getComputedStyle(document.querySelector(".page"))
		.getPropertyValue("--bg-color")
		.trim();

	inputFont.value = getComputedStyle(document.querySelector(".page"))
		.getPropertyValue("--font-color")
		.trim();

	inputAccent.value = getComputedStyle(document.querySelector(".page"))
		.getPropertyValue("--accent-color")
		.trim();

	inputBg.addEventListener("input", (e) => {
		document
			.querySelector(".page")
			.style.setProperty("--bg-color", e.target.value);
	});

	inputFont.addEventListener("input", (e) => {
		document
			.querySelector(".page")
			.style.setProperty("--font-color", e.target.value);
	});

	inputAccent.addEventListener("input", (e) => {
		document
			.querySelector(".page")
			.style.setProperty("--accent-color", e.target.value);
	});
});
