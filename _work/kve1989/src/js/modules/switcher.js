export default function switcher() {
	const switchTheme = document.querySelector(".switch__input"),
		page = document.querySelector(".page");

	switchTheme.addEventListener("change", (e) => {
		page.classList.toggle("page--night");
    e.target.checked
      ? e.target.parentNode.parentNode.setAttribute('aria-checked', true)
      : e.target.parentNode.parentNode.setAttribute('aria-checked', false)
	});

	if (
		sessionStorage.getItem("DarkThemeActive") &&
		sessionStorage.getItem("DarkThemeActive") != 0
	) {
		switchTheme.checked = true;
    switchTheme.parentNode.parentNode.setAttribute('aria-checked', true)
		page.classList.add("page--night");
	}

	switchTheme.addEventListener("change", (e) => {
		if (e.target.checked) {
			sessionStorage.setItem("DarkThemeActive", 1);
		} else {
			sessionStorage.setItem("DarkThemeActive", 0);
		}
	});
}
