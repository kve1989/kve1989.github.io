'use strict';

document.addEventListener('DOMContentLoaded', () => {

	const startDate = document.querySelector('input[name="start"]'),
			endDate = document.querySelector('input[name="end"]');

	startDate.addEventListener('input', function () {
		endDate.value = this.value;
	});

});