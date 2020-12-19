var hr, mn, sc;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  hr = hour();
  mn = minute();
  sc = second();
  
}

function draw() {
  background(255,255,255);  
  translate(400,200);
  ellipse(0,0,300,300)
  drawSprites();
  angleMode(DEGREES)
  let scAngle = map(sc, 0, 60, 0, 360);
  let mnAngle = map(mn, 0, 60, 0, 360);
  let hrAngle = map(hr, 0, 12, 0, 360);
  //second hand
  noFill();
  push();
  stroke(255,0,0);
  strokeWeight(15);
  arc(0,0,300,300,-90,scAngle-90);
  pop();

  push();
  rotate(scAngle-90);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  //minute hand
  noFill();
  push();
  stroke(0,255,0);
  strokeWeight(15);
  arc(0,0,330,330,-90,mnAngle-90);
  pop();

  push();
  rotate(mnAngle-90);
  stroke(0,255,0);
  strokeWeight(10);
  line(0,0,90,0);
  pop();
  //hour hand
  noFill();
  push();
  stroke(0,0,255);
  strokeWeight(15);
  arc(0,0,360,360,-90,hrAngle-90);
  pop();

  push();
  rotate(hrAngle-90);
  stroke(0,0,255);
  strokeWeight(13);
  line(0,0,50,0);
  pop();
}