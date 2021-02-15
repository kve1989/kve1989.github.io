import { cards } from "./db/db";
import "bulma";
import "../css/style.css";

const wrapper = document.querySelector("#wrapper");
wrapper.classList.add("is-flex", "is-flex-direction-row", "is-flex-wrap-wrap");

cards.forEach((card) => {
  let cardHTML = `
		<a href="${card.url}" class="column is-4">
			<div class="card">
			<div class="card-content p-2">
				<div class="media">
				<div class="media-left">
					<figure class="image is-48x48">
					<img
						src="https://bulma.io/images/placeholders/96x96.png"
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

  wrapper.insertAdjacentHTML("beforeend", cardHTML);
});
