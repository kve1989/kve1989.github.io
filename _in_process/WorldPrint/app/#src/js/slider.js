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
});
