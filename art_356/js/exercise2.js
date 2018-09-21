// *******exercise 2.1

//var x = 200;
//var y;
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

// *******exercise 2.2
var a;
var b;
var c;
var d;
var e;
var f;
var g;
var h;


function setup() {
  createCanvas(600, 600);
	 a = int(random(400));
	 b = int(random(400));
	 c = int(random(400));
	 d = int(random(400));
	 e = int(random(400));
	 f = int(random(400));
	 g = int(random(400));
	 h = int(random(400));

	//background(0);

	rect(a, b, 400, 400);

	rect(c, d,300,300);

	rect(e, f,200,200);

	rect(g, h,100,100);

}

function draw() {

}

// *******exercise 2.3

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
