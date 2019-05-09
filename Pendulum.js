class Pendulum {
  constructor (startX, startY) {
    this.mass = 5
    this.startX = startX;
    this.startY = startY;
    this.v = mass * grav;
    this.angularAcceleration = 0;
  }

  draw (x, y, w, h) {
    fill(30,155,255);
    ellipse(x, y, w, h);
  }

  update () {
    this.draw();
  }
}
