document.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelector(".form"),
		inputs = document.querySelectorAll(".form__input");

	const clearInputs = () => {
		inputs.forEach(input => {
			input.value = '';
		})
	};

	const postData = async (url, data) => {
		let res = await fetch(url, {
			method: "POST",
			body: data,
		});

		return await res.text();
	};

	const getResource = async (url) => {
		let res = await fetch(url);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}

		return await res.json();
	};

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		clearInputs();
		console.log(e);
		const formData = new FormData();

		postData(form.getAttribute('action'), formData)
			.then(res => console.log(res))
			.finally(() => {
				clearInputs();
			})
	});
});