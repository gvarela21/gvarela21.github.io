// *******exercise 2.1

// Make a sketch to create four circles, 60 pixels in diameter, stacked
// on top of each other vertically in a canvas 250 pixels high by 100
// pixels wide. Make sure we can see all of each circle.
// Give them random RGB colors, such that every time the
// program is run the circles will have different colors
// Do this by creating 12 global variables, R1, G1, B1, R2, G2, B2, etc,
// Then in setup() giving them random values

var a;
var b;
var c;
var d;
var e;
var f;
var g;
var h;
var i;
var j;
var k;
var l;

function setup() {
 createCanvas(100, 250);
//y =int(random(400));
 a = random(256);
 b = random(256);
 c = random(256);
 d = random(256);
 e = random(256);
 f = random(256);
 g = random(256);
 h = random(256);
 i = random(256);
 j = random(256);
 k = random(256);
 l = random(256);

}

function draw() {

 fill(a,b,c);
 ellipse(30,30,60,60);

 fill(d,e,f);
 ellipse(30,90,60,60);

 fill(g,h,i);
 ellipse(30,150,60,60);

 fill(j,k,l);
 ellipse(30,210,60,60);



}
