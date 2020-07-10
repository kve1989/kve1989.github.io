$(function() {
	// Активация плавной прокруртки для навигации
	// $('.header__link').mPageScroll2id({});

	// Активация плавной прокруртки для навигации
	$('.header__mobile-link').mPageScroll2id({
		offset: 60,
	});

	// Слайдер для первого экрана
	$(".welcome__slider").slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 4000,
		fade: true,
		prevArrow: $(".arrow-left"),
		nextArrow: $(".arrow-right")
	});

	// Слайдер для блока с услугами
	$(".block4__slides").slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2500,
		fade: true,
		dots: true,
		arrows: false,
		dotsClass: 'block4__dots'
	});

	function ibg(){
		$.each($('.ibg'), function(index, val) {
			if($(this).find('img').length>0){
				$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
			}
		});
	}
	ibg();

	// Увеличение сертификата при клике в блоке с сертификатами
	baguetteBox.run('.block10__wrapper');

	// Кнопка бургер для раскрытия меню
	$('.burger').click(function() {
		$('.header').toggleClass('mobile');
	});
	// $(".header__burger").click(function () {
	// 	$(this).toggleClass('.header__burger active');
	// 	$(".header__mobile-menu").slideToggle("slow");
	// });


	$('.header__link').click(function (event) {
		if ($('.header').hasClass('mobile')) {
			$('.header').toggleClass('mobile');
		}
		// $(".header__mobile-menu").slideToggle("slow");
	});

	// Функция включения затемненного фона
	function onOverlay() {
		$('.overlay').fadeIn();
		$('body').css('overflow-y', 'hidden');
	}

	// Функция выключения затемненного фона
	function offOverlay() {
		$('.overlay').fadeOut();
		$('body').css('overflow-y', '');
	}

	function bindModal(triggerSelector, modalSelector, closeSelector, showModalByTimer = true) {
		$(triggerSelector).click(function(event) {
			if (event.target) {
				event.preventDefault();
			}
			if (showModalByTimer) {
				setTimeout(function() {
					$('.free_first_procedur').show();
					$(".free_first_procedur .banner__close").click(function () {
						$(".free_first_procedur").hide();
					});
				}, 5000);

			}
			onOverlay();
			$(modalSelector).show("slow");
			$(closeSelector).click(function (event) {
				$(modalSelector).hide();
				offOverlay();
			});
		});
	}

	// Модалка на кнопки "Обратная связь" и "Консультация"
	bindModal(".header__btn", ".callback", ".callback .banner__close", false);
	bindModal(".block7__btn", ".callback", ".callback .banner__close", false);
	bindModal(".cbbtn", ".callback", ".callback .banner__close", false);

	// Модалка ПРАЙС
	bindModal('.block6 .block6__btn', '.ban3', '.ban3 .banner__close');

	// Модалка ЛАЗЕРНАЯ ЭПИЛЯЦИЯ
	bindModal('.block5 .block4__btn', '.ban2', '.ban2 .banner__close', false);

	// Модалка LPG - МАССАЖ
	bindModal('.block4 .block4__btn', '.ban1', '.ban1 .banner__close', false);

	// Модалка в подвале сайта "Политика конфиден."
	bindModal(".footer__link-policy", ".ban4", ".ban4 .banner__close", false);


	// Отправка данных формы в AmoCRM
	$('.callback__form').submit(function(event) {
		event.preventDefault();
		var $form = $(this);
		$.ajax({
			url: $form.attr('action'),
			type: $form.attr('method'),
			data: $form.serialize(),
		})
		.done(function() {
			ym(51106481, 'reachGoal', 'ordercall');
			ym(51106481, 'reachGoal', 'advice');
			ym(51106481, 'reachGoal', 'zayavka');
			fbq('track', 'Lead');

			$('.callback').hide();
			$('.thnks').show();

			var t = setTimeout(function(){
				$('.thnks').hide("slow");
			}, 4000);

			var t2 = setTimeout(function() {
				offOverlay();
			},5000);

			$form[0].reset();
			console.log("Success");
		})
		.fail(function() {
			console.log("Error");
		})
		.always(function() {
			console.log("complete");
		});
	});

	// Назначаем маску для ввода телефона
	$('[name="phone"]').inputmask("9 - (999) 999 9999");

	$('.ms_booking').click(function() {
		fbq('track', 'Schedule');
	});

});


document.addEventListener('DOMContentLoaded', () => {
	const playButtons = document.querySelectorAll(".playBut");

	playButtons.forEach(item => {
		item.addEventListener('click', function () {
			const iframe = this.previousElementSibling;
			const pathVideo = iframe.getAttribute("src") + "?autoplay=1";
			iframe.setAttribute('src', pathVideo);
			this.remove();
		})
	});

});