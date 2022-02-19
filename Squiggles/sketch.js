function setup() {
  createCanvas(720, 720);
  noFill();
  background(255);
}

function draw() {

  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, 40, 40);
  }

}