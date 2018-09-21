// Create a sketch to draw eight 10-pixel circles on a 600 x 600 canvas. Use a for loop to change the x values. They should be at 50, 100, 150, 200, 250, 300, 350, and 400



function setup(){
	createCanvas(600,600);
	background(0);						/// giving var X is called initailizing
                          	///
	// for(var x =50; x<=400; x+=50){ ////3 parts initialization,
	// 	ellipse(x,205,10,10);
	// }
///fail at 9 to get 8 circles
	for(var x=1;x<9;x++){
		ellipse(x*50,205,10,10);
	}    ///same thing



}

function draw(){ ///draw is for human interactive/visual animation





	}
