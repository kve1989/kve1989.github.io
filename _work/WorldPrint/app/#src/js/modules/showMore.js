const showMore = (trigger, wrapper) => {
	const btn = document.querySelector(trigger),
			wrappers = document.querySelectorAll(wrapper);;

	btn.addEventListener('click', () => {
		wrappers.forEach(wrap => {
			if (wrap.classList.contains('hidden')) {
				wrap.classList.remove('hidden');
				wrap.classList.add('animated', 'slideInUp');
			}
		});
		btn.remove();
	});
}

export default showMore;
