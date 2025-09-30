const weAreText = document.getElementById("color");
let symmetry = 6;
let angle = 360 / symmetry;
let heroSection;

function setup() {
  heroSection = document.getElementById("hero");
  const canvas = createCanvas(windowWidth, heroSection.clientHeight);
  canvas.parent(heroSection);

  noLoop();
  pixelDensity(window.devicePixelRatio || 1);
  strokeCap(ROUND);
  strokeJoin(ROUND);

  angleMode(DEGREES);
  background("#FFF2F2");

  window.addEventListener("scroll", () => {
    weAreText.style.color = "black";
    background("#FFF2F2");
  });
}

function draw() {
  if(!mouseIsPressed) {
    return;
  }

  if(weAreText) {
    weAreText.style.color = "white";
  }

  // Advanced
  push();

  // Basic
  resetMatrix();

  // Advanced
  noStroke();
  fill(0, 20);
  rect(0, 0, width, height);
  pop();

  // Basic
  translate(width / 2, height / 2);

  stroke("#E599F7");
  strokeWeight(3);
  noFill();

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let lineStartX = mouseX - width / 2;
    let lineStartY = mouseY - height / 2;
    let lineEndX = pmouseX - width / 2;
    let lineEndY = pmouseY - height / 2;

    if (mouseIsPressed === true) {
      for (let i = 0; i < symmetry; i++) {
        rotate(i * angle);
        line(lineStartX, lineStartY, lineEndX, lineEndY);
        push();
        scale(1, -1);
        line(lineStartX, lineStartY, lineEndX, lineEndY);
        pop();
      }
    }
  }
}

function mousePressed() { 
  loop();
}

function mouseReleased() {
  noLoop();
}
