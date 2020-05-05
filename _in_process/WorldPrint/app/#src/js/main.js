'use strict';

import ibg from './modules/ibg';
import tabs from './modules/tabs';
import scrolling from './modules/scrolling';
import modals from './modules/modals';
import mask from './modules/mask';
import './slider';

document.addEventListener('DOMContentLoaded', () => {
	ibg();
	tabs('.paydel__tabs', '.paydel__tab', '.paydel__tabs-content__item', 'active');
	scrolling();
	modals();
	mask('[name="phone"]');

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
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	let body = document.querySelector('body');

	if (isMobile.any()) {
		body.classList.add('touch');
		let arrow = document.querySelector(".arrow");
		let subMenu = arrow.nextElementSibling;
		let thisArrow = arrow;
		arrow.addEventListener('click', function () {
			subMenu.classList.toggle('open');
			thisArrow.classList.toggle('active');
		});
	} else {
		body.classList.add('mouse');
	}

	const links = document.querySelectorAll('.aside__link');

	function deleteClass() {
		links.forEach(link => {
			link.classList.remove('active');
		})
	}
	function addClass(i = 0) {
		links[i].classList.add('active');
	}

	links.forEach((link, i) => {
		link.addEventListener('click', (e) => {
			deleteClass();
			addClass(i);
		});
	})

	//Custom JS
});
