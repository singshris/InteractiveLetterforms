let myFont;
let textArray1 = [];
let textArray2 = [];
let r = 0;
let button;
let noiseAmplitude = 50;
let noiseScale = 0.5;
let fSize = 1000;
let x, y; // the position of the ellipse
let trail = [];



function preload() {
  myFont = loadFont("TestUntitledSerif-Bold.otf");

}

function setup() {
  noStroke();
  createCanvas(1000, 1000);
  textFont(myFont);
  frameRate(120);
  // angleMode(DEGREES);
 
  // textArray1 = myFont.textToPoints("E", width / 2 - 320, height / 2+320, fSize, {
  //   sampleFactor: 0.08,
  //   // sampleFactor: 0.1,
  //   // sampleFactor: 0.0241 for lines effect
  // });

  // textArray2 = myFont.textToPoints("e", width / 2 - 250, height / 2+220, fSize, {
  //   sampleFactor: 0.1365,
  //   // sampleFactor: 0.171,
  //   // sampleFactor: 0.0306
  // });
  // // textAlign(CENTER);
  // print(textArray1.length, textArray2.length);

}

function draw() {
  background(236,206,255);
  // let val = slider.value();

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
   let colorValue = map(i, 0, trail.length, random(100, 200), random(150,250)); // map the index of the position to a color value
   fill(colorValue-50, colorValue-120, colorValue); 
  //  fill(random(100, 200), random(50, 150), random(150, 250));// set the fill color based on the index of the position
   textSize(3*i/2);
  text("F",pos.x, pos.y); // the size of the ellipse depends on its age
 }

 if(mouseIsPressed){
  background(236,206,255);
 }
  
}

