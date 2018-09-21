//************ exercise 4.1
// Make a sketch with a circle that moves across a 600x600 canvas.

var circleX=0;
function setup(){
createCanvas(600,600);
}
function draw(){
  background(0);
ellipse(circleX,200,25,25);
circleX++;
}
