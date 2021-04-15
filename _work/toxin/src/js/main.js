import ibg from "./modules/ibg";
import isMobile from "./modules/isMobile";
import modal from "./modules/modals";
import scrolling from "./modules/scrolling";
import Litepicker from "litepicker";

document.addEventListener("DOMContentLoaded", () => {
	isMobile();
	scrolling();
	ibg();
	// modal();
	const picker = new Litepicker({
    element: document.getElementById('input__startDate'),
    elementEnd: document.getElementById('input__endDate'),
		singleMode: false,
		lang: 'ru-RU',
    format: "DD.MM.YYYY"
	});
});
