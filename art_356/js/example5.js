var x;
var y;
var scoreIncreased;
var score;
var youWon;
var page;

function setup() {
  createCanvas(600,600);
  scoreIncreased = false;
  score = 0;
  page=0;
}

function draw() {
  background(255);
  rect(100,300,100,100);
  fill(0);
  textSize(24);
  text("score",125,350);
  textSize(72);
  text(score,300,400);
  fill(255,0,0);
///we need 5 conditions
  if (mouseX>100 && mouseX<200 && mouseY>300 && mouseY<400 && mouseIsPressed){
    fill(0,255,0);
    score++;
    } else {
      youWon=true
      }
    scoreIncreased = true;
  }
  if (!mouseIsPresed){
    scoreIncreased = false;
  }
  if (youWon){
    page = 1;
    }

}
