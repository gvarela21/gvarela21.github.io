// ********* excercise 5.1
// Spell out the word “Design” on a 600 x 600 canvas in 48 pont type

var xloc,yloc;

function setup() {
  createCanvas(600, 600);
	textFont("TimesNewRoman");
	xloc =100;
	yloc =100;
}
function draw() {

	fill(128);
	textSize(48);
	text("Design",xloc,yloc);
}
