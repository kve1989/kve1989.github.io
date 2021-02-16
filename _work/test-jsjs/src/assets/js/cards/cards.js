import { cards } from '../db/db'

export function renderCards() {
	let cardHTML = ''
	cards.forEach(card => {
		cardHTML += `
			<a href="${card.url}" class="column is-4">
				<div class="card">
					<div class="card-content p-2">
						<div class="media is-align-items-center">
						<div class="media-left">
							<figure class="image is-32x32">
							<img
								src="./assets/img/${card.icon}"
							/>
							</figure>
						</div>
						<div class="media-content">
							<p class="title is-size-5 is-4">${card.name}</p>
							<p class="subtitle is-size-7 is-6">${card.url}</p>
						</div>
						</div>
					</div>
				</div>
			</a>
		`;
	});

	return cardHTML
}