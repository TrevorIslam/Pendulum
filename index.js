var originX = 250;
var originY = 50;

var xPos = 250;
var yPos = 250;

var grav = 9.8;

function setup () {
  createCanvas(500,500);
}

function draw () {
  background(200);
  line(originX, originY, xPos, yPos);
  ellipse(xPos, yPos, 25, 25);
}
