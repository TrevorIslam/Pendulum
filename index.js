console.clear();
var p;
var GlobalTime;
var ropeLength = 250;
var oldSign = false;
var newSign = false;

var grav = 9.80665;

function setup () {
  createCanvas(500,500);
  GlobalTime = frameCount/60;
  p = new Pendulum(ropeLength);
}

function draw () {
  GlobalTime = frameCount/60;
  background(200);
  fill(100);
  rect(0,40,500,10);
  p.update();
}
