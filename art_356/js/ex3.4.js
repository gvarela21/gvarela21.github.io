//*********** 3.4
// Do the same with a circle. This is harder. You will need to use the
// distance between the mouse and the center of the circle.
// Something like d = dist(mouseX, mouseY, x, y)


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
	ellipse(200,200,100,100)

	var d = (dist(mouseX, mouseY, 200, 200));


	if (d<50 && mouseIsPressed){
	fill(0,255,0);}
  else {fill(0,0,255);}
}
