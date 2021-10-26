function setup() {
  var myCanvas = createCanvas(600, 600);
  background(15, 101, 201);
}

function draw() {
  textSize(24);
  fill(random(255), random(255), random(255));
  text("fiumba", random(600), random(600));
}
