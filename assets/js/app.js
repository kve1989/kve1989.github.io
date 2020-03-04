function bindModal(triggerSelector,modalSelector,closeSelector) {
    const trigger = document.querySelector(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector);

    trigger.addEventListener('click', function(e) {
        if (e.target) {
            e.eventPrevention();
        }
        modal.style.display = 'block';
        body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function() {
        modal.style.display = 'none';
        body.style.overflow = '';
    });
}

/*
  EXAMPLE:
  counter - 51106481,
  target - zayavka
*/
function customYaMetrika(selectorYa, counter, target) {
 const Ya = document.querySelectorAll(selectorYa);

 Ya.forEach(item => {
   item.addEventListener('click', function () {
     console.log('Ok');
     ym(counter, 'reachGoal', target);
     return true;
   });
 });
}

document.addEventListener("DOMContentLoaded", () => {
  let scrSizeW = document.querySelector(".screensize-w");
  let scrSizeH = document.querySelector(".screensize-h");
  let browser = document.querySelector(".browser span");

  scrSizeW.textContent = window.outerWidth;
  scrSizeH.textContent = window.outerHeight;
  browser.textContent = window.navigator.userAgent;

  window.addEventListener("resize", function (event) {
    scrSizeW.textContent = window.outerWidth;
    scrSizeH.textContent = window.outerHeight;
  });

  let isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    }
  };

  let body = document.querySelector("body");

  if (isMobile.any()) {
    body.classList.add("touch");
  } else {
    body.classList.add("mouse");
  }

  customYaMetrika('.about__portfolio li a', 52847674, 'tets');
  customYaMetrika('.about__portfolio li a', 52847674, 'tets');
});
