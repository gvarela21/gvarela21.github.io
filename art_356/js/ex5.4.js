// Put a circle on the canvas. Animate it by moving it left when the “A” key is pressed, up when the “W” key is pressed, right when the “D” key is pressed and down when the “S” key is pressed.

var x,y;

function setup(){
  createCanvas(600,600);
  x=300;
  y=300;
}

function draw(){
  background(255);
  fill(255,0,0);
  ellipse(x,y,50,50);
  if (keyIsPressed){
    if (key =="a"){
      x = x -1;
    }
    if (key =="w"){
      y = y -1;
    }
    if (key =="s"){
      x = x +1;
    }
    if (key =="d"){
      y = y +1;
    }
  }
}
