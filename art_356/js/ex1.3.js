//********excercise 1.3
// Make a sketch with four ellipses. Randomize the color, the location,
// the width and the height of each.


function setup() {
  createCanvas(400, 400);
}
function draw() {
  fill(random(256),random(256),random(256));
  ellipse(random(width), random(height), random(width), random(height));

	fill(random(256),random(256),random(256));
  ellipse(random(width), random(height), random(width), random(height));


	fill(random(256),random(256),random(256));
  ellipse(random(width), random(height), random(width), random(height));

  fill(random(256),random(256),random(256));
  ellipse(random(width), random(height), random(width), random(height));

}
