var img1;
var img2;
var img3;

var locX1; //creating 3 start locations variables on the X-Axis
var locX2;
var locX3;

var locY1; //creating 3 location variable for Y
var locY2;
var locY3;

var vy1; // creating 3 correlatingvelocity variabless
var vy2;
var vy3;

function preload(){
  img1 = loadImage("../images/1red.png");
  img2 = loadImage("../images/2orange.png");
  img3 = loadImage("../images/3yellow.png");

  locY1= 610; //set the baloons to bottom of screen
  locY2= 610;
  locY3= 610;

  locX1=random(25, 550); //creating 3 "random" start locations
  locX2=random(25, 550);//on the x-Axis
  locX3=random(25, 550);

   vy1= random(1,9); // creating 3 random y velovity
   vy2= random(1,10);
   vy3= random(1,8);
}

function setup() {
  createCanvas(600, 600);
  //resetSketch();// //doesn't work right
  // var button = createButton("reset");  //reset button is working
  // button.mousePressed(resetSketch);
  //so far easiest solution for reseting the sketch
  //cant get it to work unless everything for the drawing is dumped into resetSketch
  //draw has to run as well or else we have to constantly
  //click to move the animation
  // //cant get mousedIsPressed to work
  //draw() keeps the loop?
}

function draw() {
background(255);
image(img1,locX1,locY1); //preloaded image + x random lacation and y set location
image(img2,locX2,locY2); //preloaded image + x random lacation and y set location
image(img3,locX3,locY3); //preloaded image + x random lacation and y set location

locY1-=vy1; if (locY1 <= 0) {     //float up to top limit
locY1 = 0; }  ///stop volocity of y

locY2-=vy2; if (locY2 <= 0) {     //float up to top limit
locY2 = 0; }  ///stop volocity of y

locY3-=vy3; if (locY3 <= 0) {     //float up to top limit
locY3 = 0; }  ///stop volocity of y
}

function resetSketch(){
  img1 =0;  //zero out all variables
  img2 =0;
  img3 =0;

  locX1= 0;  //zero out all variables
  locX2= 0;
  locX3= 0;

  locY1= 0;  //zero out all variables
  locY2= 0;
  locY3= 0;

  vy1= 0;  //zero out all variables
  vy2= 0;
  vy3= 0;

locY1= 610; //reset the baloons to bottom of screen
locY2= 610;
locY3= 610;

locX1=random(25, 550); //(Reset)creating 3 "random" start locations
locX2=random(25, 550);//on the x-Axis
locX3=random(25, 550);

 vy1= random(1,9); // (reset) creating 3 random y velovity
 vy2= random(1,10);
 vy3= random(1,8);

 img1 = loadImage("../images/1red.png");      ///reload images (bug fix)
 img2 = loadImage("../images/2orange.png");
 img3 = loadImage("../images/3yellow.png");
 background(255);  ///finally the sketch**********************
 image(img1,locX1,locY1); //preloaded image + x random lacation and y set stop location
 image(img2,locX2,locY2); //preloaded image + x random lacation and y set stop location
 image(img3,locX3,locY3); //preloaded image + x random lacation and y set stop location

 locY1-=vy1; if (locY1 <= 0) {     //float up to top limit
 locY1 = 0; }  ///stop volocity of y

 locY2-=vy2; if (locY2 <= 0) {     //float up to top limit
 locY2 = 0; }  ///stop volocity of y

 locY3-=vy3; if (locY3 <= 0) {     //float up to top limit
 locY3 = 0; }  ///stop volocity of y
}

function mousePressed(){  ///works better with mode or level sequences
resetSketch();
}
