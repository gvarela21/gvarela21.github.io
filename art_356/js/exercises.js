


//********exercise 1.1
fill(random(256),random(256),random(256));
ellipse(30,30,60,60);

fill(random(256),random(256),random(256));
ellipse(30,90,60,60);

fill(random(256),random(256),random(256));
ellipse(30,150,60,60);

fill(random(256),random(256),random(256));
ellipse(30,210,60,60);




//********excercise 1.2
function setup() {
  createCanvas(400, 400);
}

function draw() {
  rect(random(width), random(height), 400, 400);
  rect(random(width), random(height),300,300);
  rect(random(width), random(height),200,200);
  rect(random(width), random(height),100,100);
}




//********excercise 1.3
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
