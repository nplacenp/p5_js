var stepX;
var stepY;

function setup() {
  createCanvas(800, 400);
  noStroke();
  // hue is being set from 0 to 800, and saturation is set from 0 to 400.
  // these numbers correspond to the canvas dimensions above.
  colorMode(HSB, width, height, 100);
}

function draw() {
  // +2 being added to prevent the step from being too small
  stepX = mouseX + 2;
  stepY = mouseY + 2;

  // the first loop creates an entire row of the grid in the x direction
  // before making a new row with the next Y value.

  // the Y grid is spaced with increments calculated by the Y value of the mouse (+2)
  // and stops the grid as long as the value is less than 400 (height of the canvas)
  // the grid variables are basically used for both the starting positions of the boxes
  // but also to determine the color values for each box further below
  for (var gridY = 0; gridY < height; gridY += stepY) {
    // the X grid is spaced similarly to Y, except that the grid will stop once the value of 
    // grid is less than 800 (width of the canvas) with increments determined by the mouse
    // x position (+2) for each box size in the grid in the loop
    for (var gridX = 0; gridX < width; gridX += stepX) {
      // gridx determines hue, grixy is saturation, 100 is lightness
      fill(gridX, height - gridY, 100);
      // gridx and gridy determine the starting coordinates of each rectangle
      // stepx and stepy determine the dimensions of the each rectangle
      rect(gridX, gridY, stepX, stepY);
    }
  }
}