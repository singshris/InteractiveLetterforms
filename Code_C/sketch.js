let myFont;
let textArray1 = [];
let textArray2 = [];
let r = 0;
let picker1;
let picker2;
let numSteps = 54;
let noiseAmplitude = 50;
let noiseScale = 0.5;
let cabin;
function preload() {
  myFont = loadFont("fonts/TestFoundersGrotesk-Bold.otf");
 
  size = 1000;
}

function setup() {
  createCanvas(1000, 1000);
  textFont(myFont);
  textArray1 = myFont.textToPoints("C", width / 2 - 380, height / 2+320, size, {
    sampleFactor: 0.13,

  });
  noFill();
  print(textArray1.length, textArray2.length);


  cabin = new p5.AudioIn();
  cabin.start();
}

function draw() {
  background("rgb(236,206,255)");
  let vol = cabin.getLevel();
  stroke("rgb(162,70,221)");
strokeWeight(2);
  // beginShape();
// circle(mouseX,mouseY,30

  //MORPH
beginShape()
    for(let i = 0; i < textArray1.length;i++){
offset = map(vol,0,1,-10,-500);
      beginShape();
vertex(textArray1[i].x, textArray1[i].y+offset);
vertex(textArray1[i].x+50, textArray1[i].y);
vertex(textArray1[i].x+50, textArray1[i].y+20);
vertex(textArray1[i].x, textArray1[i].y+20+offset);
endShape(CLOSE);
  //  push();
  //   strokeWeight(5);
 
  //   translate(textArray1[i].x, textArray1[i].y);
  //   rotate(r);
  //   r++;
  //   line(-10, -10, 10, 10);
  //   pop();
    
    }
  // endShape();
}
