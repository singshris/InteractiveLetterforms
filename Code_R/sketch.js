let myFont;
let textArray1 = [];
let textArray2 = [];
let r = 0;
let button;
let noiseAmplitude = 50;
let noiseScale = 0.5;
let fSize = 1000;
const palette = ['#ECCEFF', '#D085FF', '#D899FF', '#A246DD'];



function preload() {
  myFont = loadFont("TestUntitledSerif-Bold.otf");

}

function setup() {
  // colorMode(HSB);
  createCanvas(1000, 1000);
  textFont(myFont);
  frameRate(40);
  //color
  
  // angleMode(DEGREES);
 
  textArray1 = myFont.textToPoints("R", width / 2 - 370, height / 2+320, fSize, {
    // sampleFactor: 0.103,
    sampleFactor: 0.201
  });

  textArray2 = myFont.textToPoints("r", width / 2 - 250, height / 2+210, fSize, {
    // sampleFactor: 0.1365,
    sampleFactor: 0.4076
  });
  // textAlign(CENTER);
  print(textArray1.length, textArray2.length);

}

function draw() {
  // background("rgb(236,206,255)");
  // let val = slider.value();
  background(236,206,255);
  textSize(fSize);
  
      // stroke(color('#6b40e0'));
      strokeWeight(1);
      for (let i = 0; i < textArray1.length; i++) {
   
    push();
    strokeWeight(5);
    stroke(color('#6B40E0'));
    translate(textArray1[i].x, textArray1[i].y);
    rotate(r);
    r++;
    // line(-10+noise(1)*millis()*0.01, -10+noise(1)*millis()*0.01, 10+noise(2)*millis()*0.01, 10+noise(2)*millis()*0.01);
    line(-10+noise(mouseX)*millis()*0.01, -10+noise(mouseY)*millis()*0.01, 10+noise(mouseX)*millis()*0.01, 10+noise(mouseY)*millis()*0.01);
    // point(-10+noise(1)*millis()*0.01, -10+noise(1)*millis()*0.01);
        // line(-10+noise(mouseX)*100, -10+noise(mouseY)*100, 10+noise(mouseX)*100, 10+noise(mouseY)*100);


    
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
    
    }
  

