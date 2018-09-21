//********exercise 3.2
// Make a sketch with a rectangle in the center,. When the cursor is
// over the square, make it turn blue, and when it is not over, make it
// turn red.

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255,0,0);
	rect(200,200,200,200);

if (mouseX>200 && mouseX<400 && mouseY>200 && mouseY<400){
	fill(0,255,0)
} else{
	fill(0,0,255)
}

}
