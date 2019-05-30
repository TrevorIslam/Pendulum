class Pendulum {
  constructor () {
    this.mass = 5000;
    this.velocity = 0;
    this.acceleration = 0;
    this.force = 0;
    this.friction = 0.999;
    this.angle = PI/3;
    this.x;
    this.y;
  }

  move () {
    this.force = -1 * sin(this.angle) * grav * this.mass;
    this.acceleration = this.force / this.mass;
    this.velocity += this.acceleration;
    this.velocity *= this.friction;
    this.angle+=this.velocity;
    this.x = 250 + 200 * sin(this.angle);
    this.y =  50 + 200 * cos(this.angle);
  }

  render () {
    fill(30,155,255);
    ellipse(this.x, this.y, this.mass/100, this.mass/100);
  }

  drawLine () {
    line(250,50,this.x, this.y)
  }
  update () {
    this.move();
    this.render();
    this.drawLine();
    //console.log(this.x)
    //console.log(this.y)
  }
}
