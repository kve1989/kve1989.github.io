/*
  EXAMPLE:
  counter - 51106481,
  target - zayavka
*/
function customYaMetrika(selectorYa, counter, target) {
	const Ya = document.querySelectorAll(selectorYa);

	Ya.forEach(item => {
		item.addEventListener('click', function () {
			console.log('Ok');
			ym(counter, 'reachGoal', target);
			return true;
		});
	});
}

document.addEventListener("DOMContentLoaded", () => {
	let scrSizeW = document.querySelector(".screensize-w"),
		 scrSizeH = document.querySelector(".screensize-h"),
		 browser = document.querySelector(".browser span"),
		 body = document.querySelector("body");

	let isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (
				isMobile.Android() ||
				isMobile.BlackBerry() ||
				isMobile.iOS() ||
				isMobile.Opera() ||
				isMobile.Windows()
			);
		}
	};

	if (isMobile.any()) {
		body.classList.add("touch");
	} else {
		body.classList.add("mouse");
	}

	scrSizeW.textContent = window.outerWidth;
	scrSizeH.textContent = window.outerHeight;
	browser.textContent = window.navigator.userAgent;

	window.addEventListener("resize", function (event) {
		scrSizeW.textContent = window.outerWidth;
		scrSizeH.textContent = window.outerHeight;
	});

});
