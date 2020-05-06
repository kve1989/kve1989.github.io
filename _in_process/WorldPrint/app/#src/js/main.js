'use strict';

import ibg from './modules/ibg';
import tabs from './modules/tabs';
import scrolling from './modules/scrolling';
import modals from './modules/modals';
import mask from './modules/mask';
import showMore from './modules/showMore';
import typeText from './modules/typeText';
import './slider';

document.addEventListener('DOMContentLoaded', () => {
	ibg();
	tabs('.paydel__tabs', '.paydel__tab', '.paydel__tabs-content__item', 'active');
	scrolling();
	modals();
	mask('[name="phone"]');
	showMore('.products__row .more', '.products__row');
	showMore('.portfolio__row .more', '.portfolio__row');
	typeText(["ПЕЧАТАЕМ ВАШИ ИДЕИ."], '.welcome__maintitle.ttu.cyan');
	typeText(["ЯРКО. НЕОБЫЧНО"], '.welcome__maintitle.ttu.white.type-one');
	typeText(["И СО ВКУСОМ."], '.welcome__maintitle.ttu.white.type-two');
	typeText(["Мы предлагаем услуги по изготовлению и дизайну полиграфической продукции всех видов, качественно и в кротчайшие сроки"], '.welcome__suptitle.welcome-suptitle');
	typeText(["за 10 лет работы"], '.about__toptitle');
	typeText(["Мы напечатали более 10 000 000 страниц"], '.about__title');

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
	} else {
		body.classList.add('mouse');
	}

	const links = document.querySelectorAll('.aside__link'),
			burger = document.querySelector('.mobile-h__burger'),
			aside = document.querySelector('.aside');

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
	});


	burger.addEventListener('click', () => {
		aside.classList.toggle('mobile');
	});
	//Custom JS
});
