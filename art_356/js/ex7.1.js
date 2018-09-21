// Do the exercise here: https://p5js.org/reference/#/p5/join
function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(220);
	var array = ['Hello', 'world!'];
	var separator = ' ';
	var message = join(array, separator);
	text(message, 5, 50);

}
