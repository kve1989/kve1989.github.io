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
    allowRepick: true,
		singleMode: false,
    showTooltip: false,
		lang: 'ru-RU',
    format: "DD.MM.YYYY",
    resetButton: () => {
      let btn = document.createElement('button');
      btn.innerText = 'Clear';
      btn.addEventListener('click', (evt) => {
        evt.preventDefault();

        // some custom action
      });

      return btn;
    },
	});
});
