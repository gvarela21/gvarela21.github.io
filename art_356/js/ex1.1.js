// EX 1.1
//Make a sketch to create four circles,
//60 pixels in diameter, stacked
// on top of each other vertically
//in a canvas 250 pixels high by 100 pixels wide.
//Make sure we can see all of each circle.
// Give them random RGB colors,
//such that every time the program is run
//the circles will have different colors

function setup() {
createCanvas(400, 400);
}

function draw() {

fill(random(256),random(256),random(256));
ellipse(30,30,60,60);

fill(random(256),random(256),random(256));
ellipse(30,90,60,60);

fill(random(256),random(256),random(256));
ellipse(30,150,60,60);

fill(random(256),random(256),random(256));
ellipse(30,210,60,60);
}
