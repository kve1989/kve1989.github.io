import isMobile from "./modules/isMobile";
import typeText from "./modules/typeText";
import scrolling from "./modules/scrolling";
import modal from "./modules/modals";
import ibg from "./modules/ibg";

document.addEventListener("DOMContentLoaded", () => {
	isMobile();
	typeText(["VKavetskiy"], ".header__logo");
	scrolling();
	ibg();
	modal();

	const scrSizeW = document.querySelector(".screensize-w"),
		scrSizeH = document.querySelector(".screensize-h"),
		browser = document.querySelector(".browser span"),
		switchTheme = document.querySelector(".switch__input");

	const portfolio = [
		{
			name: "Estetico",
			image_preview: "./assest/images/portfolio/estetico_thumb.jpg",
			image_full: "./assest/images/portfolio/estetico_full.jpg",
			title: "Сеть салонов красоты Estetico",
			url: "https://estetico.ru",
			description: "",
			time_work: "3 дня",
			time_edit: "1 день",
			description:
				"нужно было сверстать сайт в кратчайшие сроки, макет был сделан в Adobe Photoshop. Также нужно было сделать мобильную версию сайта, осложнялось тем, что макета для мобильной версии не было. На сайте было реализовано несколько слайдеров, модальных окон, всплывающее окно, а также реализовать отправку данных из форм(заявок) на электронный адрес без перезагрузки страницы. После завершения работы сайт сопровождался мной продолжительное время. Заказчик (маркетинговое агенство) вышел на меня через Avito, после чего продолжил со мной сотрудничество по поддержке сайтов.",
		},
		{
			name: "Medlider",
			image_preview: "./assest/images/portfolio/medlider_thumb.jpg",
			image_full: "./assest/images/portfolio/medlider_full.jpg",
			title: "Медицинский центр Medlider",
			url: "",
			description: "",
			time_work: "3 дня",
			time_edit: "1 день",
			description: "",
		},
	];

	function renderPortfolio(item) {
		let htmlPortfolio = ``;
	}

	function renderModal(item) {
		let htmlModal = `
			<div class="modal" data-modal="estetico">
				<div class="modal__content">
					<div class="modal__image">
						<img
							src="${item.image_full}"
							alt="${item.name}"
						/>
					</div>
					<div class="modal__wrapper">
						<h3 class="modal__title">${item.title}</h3>
						<div class="modal__text">
							<div class="modal__text">
								<strong>Срок выполнения:</strong> ${item.time_work}
							</div>
							<div class="modal__text">
								<strong>Исправление ошибок:</strong> ${item.time_edit}
							</div>
							<div class="modal__text">
								<strong>Ссылка:</strong>
								<a target="_blank" href="${item.url}"
									>${item.url}</a
								>
							</div>
							<div class="modal__text">
								<strong>Описание:</strong> ${item.description}
							</div>
							<div class="modal__review"></div>
						</div>
					</div>
					<button class="modal__close">❌</button>
				</div>
			</div>
		`;
		document.append(htmlModal);
	}

	if (
		sessionStorage.getItem("DarkThemeActive") &&
		sessionStorage.getItem("DarkThemeActive") != 0
	) {
		switchTheme.checked = true;
		document.querySelector(".page").classList.add("page--night");
	}

	switchTheme.addEventListener("change", (e) => {
		if (e.target.checked) {
			sessionStorage.setItem("DarkThemeActive", 1);
		} else {
			sessionStorage.setItem("DarkThemeActive", 0);
		}
	});

	scrSizeW.textContent = window.outerWidth;
	scrSizeH.textContent = window.outerHeight;
	browser.textContent = window.navigator.userAgent;

	window.addEventListener("resize", function (event) {
		scrSizeW.textContent = window.outerWidth;
		scrSizeH.textContent = window.outerHeight;
	});

	switchTheme.addEventListener("change", () => {
		document.querySelector(".page").classList.toggle("page--night");
	});
});
