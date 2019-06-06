class Pendulum {
  constructor (ropeLength) {
    this.ropeLength = ropeLength || 200;
    this.mass = 25;
    this.velocity = 0;
    this.acceleration = 0;
    this.force = 0;
    this.friction = 1;
    this.angle = PI/8;
    this.period = 0;
    this.averagePeriod = 0;
    this.allPeriods = [];
    this.startTime = 0;
    this.x;
    this.y;
  }

  move () {
    this.force = -1 * sin(this.angle) * grav * this.mass;
    this.acceleration = this.force / (3600 * this.mass);
    this.velocity += this.acceleration;
    this.velocity *= this.friction;
    this.angle+=this.velocity/(this.ropeLength/100);
    this.x = 250 + this.ropeLength * sin(this.angle);
    this.y =  50 + this.ropeLength * cos(this.angle);
  }


  calcPeriod () {
    if (this.velocity < 0) {
      newSign = false;
    } else {
      newSign  = true;
    }

    if (oldSign != newSign) {
      this.startTime = GlobalTime;
      this.period *= 100000;
      this.period = round(this.period);
      this.period /= 100000;
      this.allPeriods.push(this.period);
      this.allPeriods.reduce((a,b) => (a+b));

      console.log(this.period);
    } else {
      this.period = GlobalTime-this.startTime;
    }
    newSign = oldSign;
  }

  render () {
    fill(30,155,255);
    ellipse(this.x, this.y, this.mass, this.mass);
  }

  drawLine () {
    line(250,50,this.x, this.y)
  }

  update () {
    this.move();
    this.calcPeriod();
    this.render();
    this.drawLine();
    //console.log(this.x)
    //console.log(this.y)
  }
}
