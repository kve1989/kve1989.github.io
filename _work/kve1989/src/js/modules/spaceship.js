export default function spaceship(selector) {
  const spaceship = document.querySelector(selector);

  spaceship.style.display = 'block';
  spaceship.style.left = genCoords() +'px';
  spaceship.style.top = genCoords() +'px';

  function genCoords() {
    return Math.floor(Math.random() * document.documentElement.clientHeight);
  }

  setInterval(() => {
    let left = (parseInt(spaceship.style.left) + 5) + 'px';
    spaceship.style.left = left;
    if (
      parseInt(spaceship.style.left) + spaceship.offsetWidth >=
      document.documentElement.clientWidth
    ) {
      spaceship.style.left = '0px';
      spaceship.style.top = genCoords() + "px";
    }
  }, 25);


}