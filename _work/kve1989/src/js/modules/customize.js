export default function customize() {}

const customSwitch = document.querySelector(".customize__head"),
	inputBg = document.getElementById("colorBg"),
	inputAccent = document.getElementById("colorAccent"),
	inputFont = document.getElementById("colorFont");

if (document.querySelector(".page").closest("page--night")) {
	inputBg.value = getComputedStyle(document.querySelector(".page--night"))
		.getPropertyValue("--bg-color")
		.trim();

	inputFont.value = getComputedStyle(document.querySelector(".page--night"))
		.getPropertyValue("--font-color")
		.trim();

	inputAccent.value = getComputedStyle(document.querySelector(".page"))
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

customSwitch.addEventListener("click", (e) => {
	e.target.parentNode.classList.toggle("active");
	e.target.classList.toggle("active");
});
