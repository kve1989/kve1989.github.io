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

const createCards = (wrapperSelector, response) => {
	response.forEach(({name, email, msg}, i) => {
		let card = document.createElement('div');

		card.classList.add('col-md-4', 'mt-4');
		card.innerHTML = `
			<article class="card ${(i + 1) % 2 ? "" : "card--green"}">
			<div class="card__head text-center">${name}</div>
			<div class="card__body text-center d-flex flex-column align-content-center p-5">
				<a href="mailto:${email}" class="card__body--link">${email}</a>
				<div class="card__body--msg pt-5">${msg}</div>
			</div>
			</article>
		`;

		document.querySelector(wrapperSelector).appendChild(card);
	});
};

document.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelector(".form"),
		inputs = document.querySelectorAll(".form__input");

	const clearInputs = () => {
		inputs.forEach(input => {
			input.value = '';
		})
	};

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);

		postData(e.target.getAttribute('action'), formData)
			.then(res => {
				console.log(res);
			})
			.finally(() => {
				cards = document.querySelectorAll('.card');
				cards.forEach(card => {
					card.parentNode.remove();
				})
				clearInputs();
				getData();
			})
	});

	function getData() {
		getResource('/back.php?all')
			.then(res => {
				createCards(".cards__body .row", res);
		});
	}
	getData();
});