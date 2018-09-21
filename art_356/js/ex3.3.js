//********exercise 3.3
// Do the same but make it only change color when you click on the
// rectangle.

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255,0,0);
	rect(200,200,200,200);

if (mouseX>200 && mouseX<400 && mouseY>200 && mouseY<400 && mouseIsPressed ){
	fill(0,255,0)
} else{
	fill(0,0,255)
}
