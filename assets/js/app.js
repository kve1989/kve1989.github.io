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
});
