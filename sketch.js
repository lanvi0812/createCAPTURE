let capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(200, 200);
  capture.hide();
  imageMode(CENTER);
  background(255);

  // Instruction text
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(32);
  text("(click anywhere)", width / 2, height / 2);
}

function draw() {
  // Nothing here as stamping only happens on click
}

function mousePressed() {
  // Stamp webcam image at mouse location
  image(capture, mouseX, mouseY, 100, 100);
  filter(ERODE);
}
