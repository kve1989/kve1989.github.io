export default class Spaceship {
  constructor(img, speed, direction = "horizontal") {
    this.img = img;
    this.speed = speed;
    this.direction = direction;
    this.draw();
    this.direction === "vertical" ? this.moveVertical() : this.move()
  }

  draw() {
    const elem = document.createElement("div");
    this.elem = elem;
    elem.classList.add("spaceship");
    elem.innerHTML = `<img src="${this.img}" alt="spaceship" />`;
    elem.style.display = "block";
    elem.style.left = this.generateCoordinats() + "px";
    elem.style.top = this.generateCoordinats() + "px";
    if (this.direction === "vertical") {
      elem.style.transform = 'rotate(90deg)'
    }
    document.body.appendChild(elem);
  }
  move() {
    this.elem.addEventListener('click', () => {
      setInterval(() => {
        let left = parseInt(this.elem.style.left) + this.speed + "px";
        this.elem.style.left = left;
        if (
          parseInt(this.elem.style.left) + this.elem.offsetWidth >=
          document.documentElement.clientWidth
        ) {
          this.elem.style.left = "0px";
          this.elem.style.top = this.generateCoordinats() + "px";
        }
      }, 25);
    }, { once: true });
  }
  moveVertical() {
    this.elem.addEventListener('click', () => {
      setInterval(() => {
        let top = parseInt(this.elem.style.top) + this.speed + "px";
        this.elem.style.top = top;
        if (
          parseInt(this.elem.style.top) + this.elem.offsetHeight >=
          document.documentElement.clientHeight
        ) {
          this.elem.style.top = "0px";
          this.elem.style.left = this.generateCoordinats() + "px";
        }
      }, 25);
    }, { once: true })
  }
  generateCoordinats() {
    return Math.floor(
      Math.random() * document.documentElement.clientHeight -
        this.elem.offsetHeight
    );
  }
  checkCollision() {}
}