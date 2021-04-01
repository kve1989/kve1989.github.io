export default function spaceship(selector) {
  const spaceship = document.querySelector(selector);

  spaceship.style.display = 'block';
  spaceship.style.left = genCoords() +'px';
  spaceship.style.top = genCoords() +'px';

  function genCoords() {
    return Math.floor(Math.random() * document.documentElement.clientHeight);
  }

  let start = Date.now();
  setInterval(() => {

    let left = (parseInt(spaceship.style.left) + 1) + 'px';

    spaceship.style.left = left;

    if (
      parseInt(spaceship.style.left) + spaceship.offsetWidth >=
      document.documentElement.clientWidth
    ) {
      spaceship.style.left = '0px';
    }
  }, 1000);

}