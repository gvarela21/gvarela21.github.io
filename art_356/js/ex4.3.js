// ************ exercise 4.3
// Make a sketch with a circle that bounces off the edge of the canvas (meaning it changes direction when it gets to the edge).




var x=400;
var y=400;
var xSpeed=9;


function setup(){
createCanvas(600,600);

}

function draw(){
background(0);
  ellipse(x,y,50,50);

  if (x+25>600 || x-25<0){xSpeed*=-1;}
  x+=xSpeed;

}
