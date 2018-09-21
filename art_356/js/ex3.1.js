//****** excercise 3.1
// Make a sketch with a retangle that moves across a 600x600
// canvas with the cursor.

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255,0,0);
	rect(mouseX-100,mouseY-100,200,200);

}
