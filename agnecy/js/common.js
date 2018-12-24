$(document).ready(function() {

  $(".top-menu a, .top").mPageScroll2id({
    offset : 0,
    speed  : 10
    
  });

  // $('.popup').magnificPopup();


})

new WOW().init();

window.onscroll = function() {scrollFunction()};

function scrollFunction() {

// When the user scrolls the page, execute myFunction 
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";

// Скрываем кнопку #topBtn на хедере и отобраем после скролла вниз до следующей секции
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("topBtn").style.display = "block";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }

}