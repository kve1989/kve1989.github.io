export default function spaceship(selector) {
  const spaceship = document.querySelector(selector);

  spaceship.style.display = 'block';
  spaceship.style.left = 1+'px';
  spaceship.style.top = 1+'px';
  spaceship.style.transform = 'rotate(45deg)';
  console.log(document.documentElement.clientWidth);
  console.log(document.documentElement.offsetWidth);

  document.addEventListener('mousemove', event => {
    spaceship.style.left = event.clientX + 'px';
    spaceship.style.top = event.clientY + 'px';
  });

}