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
			breakpoint: 530,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				// centerMode: true,
			}
		}]
	});
});
