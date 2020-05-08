'use strict';

import ibg from './modules/ibg';
import tabs from './modules/tabs';
import scrolling from './modules/scrolling';
import modals from './modules/modals';
import mask from './modules/mask';
import showMore from './modules/showMore';
import typeText from './modules/typeText';
import mobile from './modules/mobile';
import activeClass from './modules/activeClass';
import './slider';

document.addEventListener('DOMContentLoaded', () => {
	ibg();
	tabs('.paydel__tabs', '.paydel__tab', '.paydel__tabs-content__item', 'active');
	scrolling();
	modals();
	mobile();
	mask('[name="phone"]');
	showMore('.products__row .more', '.products__row');
	showMore('.portfolio__row .more', '.portfolio__row');
	typeText(["ПЕЧАТАЕМ ВАШИ ИДЕИ."], '.welcome__maintitle.ttu.cyan');
	typeText(["ЯРКО. НЕОБЫЧНО"], '.welcome__maintitle.ttu.white.type-one');
	typeText(["И СО ВКУСОМ."], '.welcome__maintitle.ttu.white.type-two');
	typeText(["Мы предлагаем услуги по изготовлению и дизайну полиграфической продукции всех видов, качественно и в кротчайшие сроки"], '.welcome__suptitle.welcome-suptitle');
	typeText(["за 10 лет работы"], '.about__toptitle');
	typeText(["Мы напечатали более 10 000 000 страниц"], '.about__title');
	activeClass('.aside__link');
	activeClass('.item', true);


});
