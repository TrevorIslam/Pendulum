console.clear();
var p;

var originX = 250;
var originY = 50;


var grav = 0.001;

function setup () {
  createCanvas(500,500);
  p = new Pendulum();
}

function draw () {
  background(200);
  fill(100);
  rect(0,40,500,10);
  p.update();
}
