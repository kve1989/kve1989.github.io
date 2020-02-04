document.addEventListener('DOMContentLoaded', () => {


	let scrSizeW = document.querySelector('.screensize-w span');
	let scrSizeH = document.querySelector('.screensize-h span');
	let browser = document.querySelector('.browser span');

	browser.textContent = window.navigator.userAgent;

	window.addEventListener('resize', function(event) {
		let w = window.outerWidth;
		let h = window.outerHeight;

		scrSizeW.textContent = w;
		scrSizeH.textContent = h;

	});
});
