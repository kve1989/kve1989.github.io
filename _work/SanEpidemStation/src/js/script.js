$(document).ready(function(){
	//Модальные окна
	$('[data-modal=consultation]').on('click', function() {
		console.log('123');
		$('.modal, .overlay').fadeIn();
	});

	$('.modal__close').on('click', function() {
		$('.overlay, #consultation, #thanks, #order').fadeOut();
	});

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$('.nav__menu_toggle').slideToggle();
		return false;
	});
	$(".nav__menu-item_toggle").click(function() {
		$(".toggle-mnu").toggleClass("on");
		$('.nav__menu_toggle').slideToggle();
	});
	

	function outDate() {
		let now = new Date();
		var arr=[
			'Января',
			'Февраля',
			'Марта',
			'Апреля',
			'Мая',
			'Июня',
			'Июля',
			'Августа',
			'Сентября',
			'Октября',
			'Ноября',
			'Декабря',
			];

			$('.date').text(now.getDate()+1 + ' ' + arr[now.getMonth()]);
	}
	outDate();

	$('body').on('click', '.article__full', function(e) {
		e.preventDefault();
		$(this).next('span').slideToggle();
		return false;
	});
});
