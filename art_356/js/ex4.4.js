// Make a sketch with the circle moving diagonally so it bounces off of all four edges of the canvas
//
// ************ exercise 4.4


//bouncing ball 4 corner

//bouncing ball

var x=50;
var y=100;
var xSpeed=8;
var ySpeed=8;

function setup(){
createCanvas(600,600);

}

function draw(){
background(0);
  ellipse(x,y,50,50);
  if (y+25>600 || y-25<0){ySpeed*=-1;}
  if (x+25>600 || x-25<0){xSpeed*=-1;}
  x+=xSpeed;
  y+=ySpeed;
}
