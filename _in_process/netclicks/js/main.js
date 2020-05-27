const leftMenu = document.querySelector('.left-menu'),
		hamburger = document.querySelector('.hamburger'),
		cards = document.querySelectorAll('.tv-card');

hamburger.addEventListener('click', () => {
	leftMenu.classList.toggle('openMenu');
	hamburger.classList.toggle('open');
});

document.addEventListener('click', e => {
	if (!e.target.closest('.left-menu')) {
		leftMenu.classList.remove('openMenu');
		hamburger.classList.remove('open');
	}
});

leftMenu.addEventListener('click', e => {
	const target = e.target,
			dropdown = target.closest('.dropdown');

	if (dropdown) {
		dropdown.classList.toggle('active');
		leftMenu.classList.add('openMenu');
		hamburger.classList.add('open');
	}

});

cards.forEach(card => {
	const image = card.querySelector('img'),
			src = image.getAttribute('src');

	card.addEventListener('mouseover', () => {
		image.setAttribute('src', image.dataset.backdrop);
	});

	card.addEventListener('mouseout', () => {
		image.setAttribute('src', src);
	});
});
