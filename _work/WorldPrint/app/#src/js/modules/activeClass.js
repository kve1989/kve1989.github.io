const activeClass = (selector, toggle = false) => {
	const items = document.querySelectorAll(selector);

	function deleteClass() {
		items.forEach(item => {
			item.classList.remove('active');
		})
	}

	function addClass(i = 0) {
		if (toggle = true) {
			items[i].classList.toggle('active');
		}
		items[i].classList.add('active');
	}

	items.forEach((item, i) => {
		item.addEventListener('click', (e) => {
			deleteClass();
			addClass(i);
		});
	});
}

export default activeClass;
