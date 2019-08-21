$(document).ready(function() {
  $('.slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    prevArrow: $('.arrow-prev'),
    nextArrow: $('.arrow-next')
  });
});