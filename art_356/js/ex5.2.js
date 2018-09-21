// Make the word animate up and down bouncing off the top and the bottom of the canvas

var xloc =200;   ////start location
var	yloc =300;

var ySpeed=7;     //set speed

function setup() {
  createCanvas(600, 600);
	textFont("TimesNewRoman");

}
function draw() {
	background(255);
	fill(128);
	textSize(48);
	text("Design",xloc,yloc);
	  if (yloc>450 || yloc<50){ySpeed*=-1;}    ///motion limits
  

  yloc+=ySpeed; //start speed
}
