let myFont1;
let myFont2;
let textArray1 = [];
let textArray2 = [];
let r = 0;
let button;
let noiseAmplitude = 50;
let noiseScale = 0.5;
let fSize = 800;
const palette = ['#9CFFFA', '#06BEE1', '#F896D8', '#EDF67D', '#FFB8DE']



function preload() {
  myFont1 = loadFont("TestTiemposText-BoldItalic.otf");
myFont2 = loadFont("dogicabold.otf");
}

function setup() {
  
  createCanvas(1000, 1000);
  
  // frameRate(50);
  
  // angleMode(DEGREES);
  textFont(myFont1);
  textArray1 = myFont1.textToPoints("v", width / 2 - 290, height / 2+270, fSize+200, {
    sampleFactor: 0.117,
  });
textFont(myFont2);
  textArray2 = myFont2.textToPoints("v", width / 2 - 400, height / 2+300, fSize, {
    sampleFactor: 0.101,
  });
 
  print(textArray1.length, textArray2.length);

}

function draw() {
  background(color('#6B40E0'));

  
  // fill(0);
  // text("E",width / 2 - 320, height / 2+300);
  // fill("red");
  // text("e",width / 2 - 250, height / 2+220);

      // stroke(color('#6b40e0'));
      strokeWeight(1);
      for (let i = 0; i < textArray2.length; i++) {
   
    push();
    strokeWeight(6);
    stroke(palette[Math.floor(Math.random()*palette.length)]);
    translate(textArray2[i].x, textArray2[i].y);
    rotate(r);
    r++;
    line(-10, -10, 10, 10);
    pop();

        
    if(keyCode===65){
      if(textArray2[i].x<=textArray1[i].x){
    textArray2[i].x++;
  }

   if(textArray2[i].x>=textArray1[i].x){
    textArray2[i].x--;
  }

      if(textArray2[i].y>=textArray1[i].y){
    textArray2[i].y--;
  }

   if(textArray2[i].y<=textArray1[i].y){
    textArray2[i].y++;
  }

   }
  
      }
// stroke(random(100, 200), random(50, 150), random(150, 250));
// circle(textArray1[i].x, textArray1[i].y, val);
   
  
    
    }
  // endShape();

