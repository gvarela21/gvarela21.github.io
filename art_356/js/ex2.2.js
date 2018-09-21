// Make a sketch with four squares, stacked on top of each other in
// the z axis. The should have sides of 400 pixels, 300 pixels, 200
// pixels, and 100 pixels. Stack them so the smallest is in the front
// and the largest in the back.
// In a canvas of 600 by 600 pixels, give each square a random x
// and y coordinate that will be different everytime the program is
// run (eg everytime the page is served).
// Do this by creating local variables in setup() and giving them
// random values there. What happens if your drawing commands
// are not in setup()? What if they are in draw()? What if the local
// variables are created and given values in draw() instead of in
// setup()?

// *******exercise 2.2
var a;
var b;
var c;
var d;
var e;
var f;
var g;
var h;


function setup() {
  createCanvas(600, 600);
	 a = int(random(400));
	 b = int(random(400));
	 c = int(random(400));
	 d = int(random(400));
	 e = int(random(400));
	 f = int(random(400));
	 g = int(random(400));
	 h = int(random(400));

	//background(0);

	rect(a, b, 400, 400);

	rect(c, d,300,300);

	rect(e, f,200,200);

	rect(g, h,100,100);

}

function draw() {

}
