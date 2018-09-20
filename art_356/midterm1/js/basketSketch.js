var myFont;

var hoop = 0;
var ball = 0;

var vy=1;
var mouseY=[];



function preload(){
myFont = loadFont("../data/scoreboard.ttf");
hoop = loadImage("../images/hoop.png");
ball = loadImage("../images/ball.png");
}

function setup(){
createCanvas(600,600);

}

function draw(){

background(0);
image(hoop,460,150);

//if (mouseY <= 0) {     //float up to top limit
//mouseY = 0; }
if (mouseIsPressed){
image(ball,mouseX,mouseY,30,30);
  }


}

// function mousePressed(){
//
//   x=append(x,mouseX);
//   y=append(y,mouseY);
//
// }
