var img1 =0;
var img2 =0;
var img3 =0;

var locX1= 0; //creating 3 "random" start locations variables on the X-Axis
var locX2= 0;
var locX3= 0;

var locY1= 0; //creating 3 location variable for Y
var locY2= 0;
var locY3= 0;

var vy1= 0; // creating 3 correlating random variabless
var vy2= 0;
var vy3= 0;

function preload(){
  img1 = loadImage("images/1red.png");
  img2 = loadImage("images/2orange.png");
  img3 = loadImage("images/3yellow.png");
}

function setup() {
createCanvas(600, 600);
locY1= 610; ///start balloons from the bottom (y-axis)
locY2= 610;
locY3= 610;

locX1=random(25, 550); //creating 3 "random" start locations
locX2=random(25, 550);//on the x-Axis
locX3=random(25, 550);

 vy1= random(3,9); // creating 3 correlating random speeds velocity of Y
 vy2= random(3,10);
 vy3= random(3,8);
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
