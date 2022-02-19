function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  noFill();
}

let e_w = 50;
// let e_x = 100;
// let e_y = 100;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - (min) + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function makeEllipse () {
  ellipse(mouseX, mouseY, e_w, e_w)
  // if (e_x < windowWidth) {
  //   e_x += getRandomIntInclusive(-50, 50);
  // }
  // if (e_y < windowHeight) {
  //   e_y += getRandomIntInclusive(-50, 50);
  // }
  e_w += getRandomIntInclusive(-25, 25);
}

function draw() {
  if (mouseIsPressed) {
    makeEllipse();
  }

}