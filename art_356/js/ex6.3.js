// Now be sure you can mix the lessons up. For example, can you use a for loop to put 20 random numbers in a random font size
// in random locations on the canvas? Instead of 20, can you make that number dependent on where the mouse is?

function setup(){
	createCanvas(600,600);
	background(255);						/// giving var X is called initailizing
                          	///
	// for(var x =50; x<=400; x+=50){ ////3 parts initialization,
	// 	ellipse(x,205,10,10);
	// }

	for(var x=0;x<100;x++){
		if(x%7==0){
      textSize(random(12,72))
      text(int(random(10)),int(random(600)),int(random(600)))
    }
	}    ///same thing



}
