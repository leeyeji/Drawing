function setup() {
  createCanvas(640, 480);
  
  //(0); black, 255: white
  // background(red, green, blue);
  background(201, 241, 43);
  
  stroke(255);
  noFill();

  line(10, 10, 90, 10); // x1, y1, x2, y2
  rect(20, 20, 80, 50); // x, y, width, height
  ellipse(50, 50, 50, 50); // centerX, centerY, width, height
}