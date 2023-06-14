let myFont;
let textArray1 = [];
let textArray2 = [];
let r = 0;
let button;
let noiseAmplitude = 50;
let noiseScale = 0.5;
let fSize = 1000;




function preload() {
  myFont = loadFont("TestUntitledSerif-Bold.otf");

}

function setup() {
  
  createCanvas(1000, 1000);
  textFont(myFont);
  // frameRate(50);
  //color
  
  // angleMode(DEGREES);
 
  textArray1 = myFont.textToPoints("E", width / 2 - 320, height / 2+320, fSize, {
    sampleFactor: 0.08,
    // sampleFactor: 0.1,
    // sampleFactor: 0.0241 for lines effect
  });

  textArray2 = myFont.textToPoints("e", width / 2 - 250, height / 2+220, fSize, {
    sampleFactor: 0.1365,
    // sampleFactor: 0.171,
    // sampleFactor: 0.0306
  });
  // textAlign(CENTER);
  print(textArray1.length, textArray2.length);

}

function draw() {
  // background("rgb(236,206,255)");
  // let val = slider.value();
  background(236,206,255);
  textSize(fSize);
  
  // fill(0);
  // text("E",width / 2 - 320, height / 2+300);
  // fill("red");
  // text("e",width / 2 - 250, height / 2+220);

      // stroke(color('#6b40e0'));
      strokeWeight(1);
      for (let i = 0; i < textArray1.length; i++) {
   
    push();
    strokeWeight(5);
    stroke(random(100, 200), random(50, 150), random(150, 250));
    translate(textArray1[i].x, textArray1[i].y);
    rotate(r);
    r++;
    line(-10, -10, 10, 10);
    pop();

        
    if(keyCode===65){
      if(textArray1[i].x<=textArray2[i].x){
    textArray1[i].x++;
  }

   if(textArray1[i].x>=textArray2[i].x){
    textArray1[i].x--;
  }

      if(textArray1[i].y>=textArray2[i].y){
    textArray1[i].y--;
  }

   if(textArray1[i].y<=textArray2[i].y){
    textArray1[i].y++;
  }

   }
  
      }
// stroke(random(100, 200), random(50, 150), random(150, 250));
// circle(textArray1[i].x, textArray1[i].y, val);
   
  
    
    }
  // endShape();

