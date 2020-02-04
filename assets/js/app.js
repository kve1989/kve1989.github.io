document.addEventListener('DOMContentLoaded', () => {

	const w = window.outerWidth;
	const h = window.outerHeight;

	let scrSizeW = document.querySelector('.screensize-w span');
	let scrSizeH = document.querySelector('.screensize-h span');
	let browser = document.querySelector('.browser span');

	scrSizeW.textContent = w;
	scrSizeH.textContent = h;
	browser.textContent = window.navigator.userAgent;
});
