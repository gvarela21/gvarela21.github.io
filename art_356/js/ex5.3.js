// Create a rectangular button with the word “score” on it and next to it put a 72 point number “0”. Then add code to increase the number by one, every time the button is pushed


var x;
var y;
var score;

function setup() {
  createCanvas(600,600);
	score = 0;

}

function draw() {
  background(255);
  rect(100,300,100,100);
  textSize(28);
	text("score",115,360);
	textSize(72);
  text(score,210,380);

}

function mousePressed() {
  if (mouseX>100 && mouseX<200 && mouseY>300 && mouseY<400 && mouseIsPressed){
    score= score +1;
    }
}
