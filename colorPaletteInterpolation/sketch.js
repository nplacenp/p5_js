var tileCountX = 2;
var tileCountY = 10;

var colorsLeft = [];
var colorsRight = [];
var colors = [];

var interpolateShortest = true;


function setup() {
  createCanvas(800, 800);
  colorMode(HSB);
  noStroke();
  shakeColors();
}

function draw() {
  // the number of color gradiations
  tileCountX = int(map(constrain(mouseX, 0, width), 0, width, 2, 100));
  // the number of rows are determined by mouse
  tileCountY = int(map(constrain(mouseY, 0, height), 0, height, 2, 10));
  var tileWidth = width / tileCountX;
  var tileHeight = height / tileCountY;
  var interCol;
  colors = [];

  for (var gridY = 0; gridY < tileCountY; gridY++){
    // colors for the left and right columns are set 
    
    // for each row, two colors are picked to be left and right
    // for the entire row spread through all the columns
    var col1 = colorsLeft[gridY];
    var col2 = colorsRight[gridY];

    // for every single segment on each row, an interpolated color
    // is chosen from the calculated above
    for (var gridX = 0; gridX < tileCountX; gridX++){
      var amount = map(gridX, 0, tileCountX - 1, 0, 1);

      // lerpColor calculated the intermediary colors for 
      // each segment in each row
      // performs 'amount' variable 
      if (interpolateShortest){
        colorMode(RGB);
        interCol = lerpColor(col1, col2, amount);
        colorMode(HSB);
      } else {
        interCol = lerpColor(col1, col2, amount);
      }

      fill(interCol);

      var posX = tileWidth * gridX;
      var posY = tileHeight * gridY;
      rect(posX, posY, tileWidth, tileHeight);

      // save for ase format
      colors.push(interCol)
    }
  }
}

function shakeColors(){
  // tilecount Y starts off with 10 numbers so creates a list of 10 random numbers in each list
  // as part of the intial startup of the sketch so that you're not passing 
  for (var i = 0; i < tileCountY; i++){
    colorsLeft[i] = color(random(0, 60), random(0,100), 100);
    colorsRight[i] = color(random(160, 190), 100, random(0, 100));
  }
}

function mouseReleased() {
  shakeColors();
}

function keyPressed() {
  if (key == 'c' || key == 'C') writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
  if (key == 's' || key == 'S') saveCanvas('colorInterp', 'png');
  if (key == '1') interpolateShortest = true;
  if (key == '2') interpolateShortest = false;
}
