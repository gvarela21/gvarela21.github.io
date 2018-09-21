************ exercise 4.1
var circleX=0;
function setup(){
createCanvas(600,600);
}
function draw(){
  background(0);
ellipse(circleX,200,25,25);
circleX++;
}

************ exercise 4.2
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

************ exercise 4.3


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

************ exercise 4.4


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
