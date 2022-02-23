var segmentCount = 360;
var radius = 300;

function setup() {
  createCanvas(800, 800);
  noStroke();
}

function draw() {
  // width and height are used as the last variables to control saturation + lightness respectively
  colorMode(HSB, 360, width, height);
  background(360, 0, height);

  // the angle increment for the 'circle' based off of segment count
  var angleStep = 360 / segmentCount;

  beginShape(TRIANGLE_FAN);
  
  // the middle of the canvas
  vertex(width / 2, height / 2);

  // calculating the angles of the other vertices for each 'slice' depending on the angle step
  for (var angle = 0; angle <= 360; angle += angleStep) {
    // converted to radians as cos and sin require it
    var vx = width / 2 + cos(radians(angle)) * radius;
    var vy = height / 2 + sin(radians(angle)) * radius;
    vertex(vx, vy);
    // the angle that is calculated above is the hue number for the color
    fill(angle, mouseX, mouseY);
  }
  endShape();
}

function keyPressed(){
  if (key ==='s' || key ==='S') saveCanvas('colorSpectrumCircle', 'png');

  // sets up additional 'cases' for if different keys are pressed which
  // will update the number of segments.

  switch (key) {
    case "1":
      segmentCount = 360;
      break;
    case "2":
      segmentCount = 45;
      break;
    case "3":
      segmentCount = 24;
      break;
    case "4":
      segmentCount = 12;
      break;
    case "5":
      segmentCount = 6;
      break;
  }
}

