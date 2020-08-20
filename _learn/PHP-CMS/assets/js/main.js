document.addEventListener('DOMContentLoaded', () => {
	'use strict';

	const startDate = document.querySelector('input[name="start"]'),
		endDate = document.querySelector('input[name="end"]'),
		form = document.querySelectorAll("form");

	startDate.addEventListener('input', function () {
		endDate.value = this.value;
	});

	const postData = async (url, data) => {
		let res = await fetch(url, {
			method: "POST",
			body: data,
		});

		return await res.json;
	};

	form.forEach((item) => {
		item.addEventListener("submit", (e) => {
			e.preventDefault();

			const formData = new FormData(item);

			postData(item.getAttribute('action'), formData)
				.then(res => {
					console.log(res);
				})
				.catch(() => (console.log('Fail')))
				.finally(data => {
					console.log(data);
				});
		});
	});
});