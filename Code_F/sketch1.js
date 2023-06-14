let x, y; // the position of the ellipse
let trail = []; // an array to store previous positions of the ellipse

function setup() {
  createCanvas(1000, 1000);
  noStroke();
  colorMode(HSB);
}

function draw() {
  background(277,19,100);
  
  // add the current position to the trail
  trail.push(createVector(x, y));
  
  // limit the length of the trail to 100 points
  if (trail.length > 100) {
    trail.shift();
  }
  
  // update the position of the ellipse to follow the mouse
  x = mouseX;
  y = mouseY;
  
  // draw the trail
  for (let i = 0; i < trail.length; i++) {
    let pos = trail[i];
    let colorValue = map(i, 0, trail.length, 250, 300); // map the index of the position to a color value
    fill(colorValue, 50,100); // set the fill color based on the index of the position
//     beginShape()
//     curveVertex(pos.x, pos.y);
//     curveVertex(pos.x+noise(i)*3*i/2, pos.y+noise(i)*3*i/2);
//     curveVertex(pos.x-noise(i)*i/2, pos.y-noise(i)*i/2);
//     curveVertex(pos.x+noise(i)*3*i/2, pos.y-noise(i)*3*i/2);
// endShape(CLOSE);
ellipse(pos.x, pos.y,3*i/2, 3*i/2); // the size of the ellipse depends on its age


    //N
    // beginShape()
    //     vertex(pos.x, pos.y);
    //     vertex(pos.x+noise(i)*10, pos.x+noise(i)*10);
    //     vertex(pos.x-noise(i)*10, pos.x-noise(i)*10);
    //     vertex(pos.x+noise(i)*20, pos.x-noise(i)*20);
    // endShape(CLOSE);
    
    
  }
  
  // // draw the current ellipse
  // // fill(255, 0, 0); // set the fill color to red
  // ellipse(x, y, 20, 20);
}
