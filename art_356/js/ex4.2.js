// ************ exercise 4.2
// Make a sketch with a circle that moves across the screen that creates a new circle when the old one moves off the canvas


var xPos=200;


function setup() {
  createCanvas(600, 600);
}


function draw()
{
  background(0);
  ellipse(xPos, 200, 40, 40);
  xPos=xPos+10;
  if (xPos>width+20)
  {
    xPos=-20;
  }
}
