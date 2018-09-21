//****** excercise 3.1
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255,0,0);
	rect(mouseX-100,mouseY-100,200,200);

}


//********exercise 3.2
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

//********exercise 3.3
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

//*********** 3.4
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
