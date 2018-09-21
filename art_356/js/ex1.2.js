//********excercise 1.2
// Make a sketch with four squares, stacked on top of each other in
// the z axis. The should have sides of 400 pixels, 300 pixels, 200
// pixels, and 100 pixels. Stack them so the smallest is in the front
// and the largest in the back.
// In a canvas of 600 by 600 pixels, give each square a random x
// and y coordinate that will be different everytime the program is
// run (eg everytime the page is served)

function setup() {
  createCanvas(400, 400);
}

function draw() {
  rect(random(width), random(height), 400, 400);
  rect(random(width), random(height),300,300);
  rect(random(width), random(height),200,200);
  rect(random(width), random(height),100,100);
}
