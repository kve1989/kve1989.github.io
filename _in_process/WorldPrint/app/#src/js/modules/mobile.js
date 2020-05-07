const mobile = () => {
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
		},
		body = document.querySelector('body'),
		burger = document.querySelector('.mobile-h__burger'),
		aside = document.querySelector('.aside');

	if (isMobile.any()) {
		body.classList.add('touch');
	} else {
		body.classList.add('mouse');
	}

	burger.addEventListener('click', () => {
		aside.classList.toggle('mobile');
	});
}

export default mobile;
