export default class Spaceship {
  constructor(img, speed) {
    this.img = img;
    this.speed = speed;
    this.draw()
    this.move()
  }

  draw() {
    const elem = document.createElement('div')
    this.elem = elem
    elem.classList.add('spaceship')
    elem.innerHTML = `<img src="${this.img}" alt="spaceship" />`
    elem.style.display = 'block';
    elem.style.left = this.genCoords() +'px';
    elem.style.top = this.genCoords() +'px';
    document.body.appendChild(elem)
  }
  move() {
    setInterval(() => {
      let left = parseInt(this.elem.style.left) + this.speed + "px";
      this.elem.style.left = left;
      if (
        parseInt(this.elem.style.left) + this.elem.offsetWidth >=
        document.documentElement.clientWidth
      ) {
        this.elem.style.left = "0px";
        this.elem.style.top = this.genCoords() + "px";
      }
    }, 25);
  }

  genCoords() {
    return Math.floor(
      Math.random() * document.documentElement.clientHeight -
        this.elem.offsetHeight
    );
  }

}