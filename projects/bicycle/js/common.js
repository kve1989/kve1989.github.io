//Сюда складываем всё, что работает с jQuery
$(document).ready(function() {

  $(".top-menu a, .top").mPageScroll2id({
    offset : 0,
    speed  : 10
  
  });

  $('.popup').magnificPopup();


})

//Скрываем кнопку #topBtn на хедере и отобраем после скролла вниз до следующей секции
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("topBtn").style.display = "block";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }
}