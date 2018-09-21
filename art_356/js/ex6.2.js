// Now draw 64 pixels in a grid that is eight circles wide and eight circles high. Do this by putting one loop for y values inside another loop for x values.



function setup(){
createCanvas(400,400);



}

function draw(){
	background(0);

	for(var x =25; x<=400; x+=50){
  for(var y=25; y<=400; y+=50){
		ellipse(x,y,10,10);
	}
	}

    ////3 parts initialization,

}
