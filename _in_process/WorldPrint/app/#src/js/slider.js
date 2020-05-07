import $ from 'jquery';
import 'slick-carousel';

$(function() {
	$('.partners__slider').slick({
		autoplay: true,
		infinite: true,
		autoplaySpeed: 4000,
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		adaptiveHeight: true,
		lazyLoad: "",
		responsive: [{
			breakpoint: 769,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 2,
			}
		},
	{
		breakpoint: 480,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
		}
	}]
	});

	var section = $('.section'),
		nav = $('.aside__lists'),
		navHeight = nav.outerHeight(); // получаем высоту навигации


	  // поворот экрана
	  window.addEventListener('orientationchange', function () {
	  	navHeight = nav.outerHeight();
	  }, false);

	  $(window).on('scroll', function () {
	  	const position = $(this).scrollTop();

	  	section.each(function () {
	  		const top = $(this).offset().top - navHeight - 5,
	  			bottom = top + $(this).outerHeight();

	  		if (position >= top && position <= bottom) {
	  			nav.find('a').removeClass('active');
	  			section.removeClass('active');

	  			$(this).addClass('active');
	  			nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
	  		}
	  	});
	  });

	  nav.find('a').on('click', function () {
	  	const id = $(this).attr('href');

	  	$('html, body').animate({
	  		scrollTop: $(id).offset().top - navHeight
	  	}, 500);

	  	return false;
	  });
});
