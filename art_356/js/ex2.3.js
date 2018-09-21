// *******exercise 2.3
// Make a sketch with one ellipse. Randomize the color, the location,
// the width and the height of each. Create variables for the color
// (as a color variable, the x and y locations and the width and height
// as numberical varialbles.
var a;
var b;
var c;
var d;
var e;
var f;
var g;
var h;

var aa;
var bb;
var cc;
var dd;
var ee;
var ff;
var gg;
var hh;
var ii;
var jj;
var kk;
var ll;

function setup() {
  createCanvas(400, 400);

	 a = int(random(400));
	 b = int(random(400));
	 c = int(random(400));
	 d = int(random(400));
	 e = int(random(400));
	 f = int(random(400));
	 g = int(random(400));
	 h = int(random(400));

aa = random(256);
bb = random(256);
cc = random(256);
dd = random(256);
ee = random(256);
ff = random(256);
gg = random(256);
hh = random(256);
ii = random(256);
jj = random(256);
kk = random(256);
ll = random(256);

	fill(aa,bb,cc);
	ellipse(a,b,60,60);

  fill(dd,ee,ff);
	ellipse(c,d,60,60);

	fill(gg,hh,ii);
	ellipse(e,f,60,60);

	fill(jj,kk,ll);
	ellipse(g, h,60,60);

}

function draw() {
  //background(220);
}
