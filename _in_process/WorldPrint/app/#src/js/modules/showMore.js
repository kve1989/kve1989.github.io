const showMore = (trigger, wrapper) => {
	const btn = document.querySelector(trigger),
			wrappers = document.querySelectorAll(wrapper);;

	btn.addEventListener('click', () => {
		wrappers.forEach(wrap => {
			if (wrap.classList.contains('hidden')) {
				wrap.classList.remove('hidden')
			}
		});
		btn.remove();
	});
}

export default showMore;
