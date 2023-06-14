let myFont;
let textArray1 = [];
let textArray2 = [];
let r = 0;
let picker1;
let picker2;
let numSteps = 54;
let noiseAmplitude = 50;
let noiseScale = 0.5;
let fSize = 1000;
const params = {
  circle_size: 120,
  bg_color: "#ffffff",
  color: "#0693d7",
  sample_factor1:158,
  sample_factor2: 200,
};


function preload() {
  myFont1 = loadFont("fonts/TestCalibre-Thin.otf");
 
  myFont2 = loadFont("fonts/TestCalibre-Thin.otf");

}

function setup() {
  
  createCanvas(1000, 1000);
textAlign(CENTER);
  textFont(myFont1);

  frameRate(10);
  //color
  
  angleMode(DEGREES);
  textArray1 = myFont1.textToPoints("O", width / 2 - 250, height / 2+300, fSize, {

    sampleFactor: 0.164,
    // sampleFactor: 0.0241 for lines effect
  });
textFont(myFont2);
  textArray2 = myFont2.textToPoints("o", width / 2 - 180, height / 2+180, fSize, {

    sampleFactor: 0.2,
    // sampleFactor: 0.0306
  });
  // textAlign(CENTER);
  print(textArray1.length, textArray2.length);

}

function draw() {
  background(0);
  // background(221,188,255);
    // textSize(800);
  // text('A',width / 2 - 180, height / 2+180);
  //   text('a',width / 2 - 180, height / 2+180);
  //
  // strokeWeight(1);
  // beginShape();
// fill(random(100, 200), random(50, 150), random(150, 250));

//   for (let i = 0; i < textArray1.length; i++) {
//     push();
//     strokeWeight(5);
//     // stroke(random(255),random(255),random(255));
//     translate(textArray1[i].x, textArray1[i].y);
//     rotate(r);
//     r++;
//     line(-10, -10, 10, 10);
//     pop();
//     noStroke();
    
//     circle(textArray1[i].x, textArray1[i].y, 30);
//   }

  //     endShape();
  //   }

  //MORPH
beginShape()
    for(let i = 0; i < textArray1.length;i++){
    
      stroke(random(100, 200), random(50, 150), random(150, 250));
      strokeWeight(3);
      ellipse(mouseX,mouseY,30,30)
      noFill();
     
// stroke(random(100, 200), random(50, 150), random(150, 250));
// circle(textArray1[i].x, textArray1[i].y, params.circle_size);
    push();
    strokeWeight(5);
    stroke(random(100, 200), random(50, 150), random(150, 250));
    translate(textArray1[i].x, textArray1[i].y);
    rotate(r);
    r++;
    bezier(-20, -20,mouseX,mouseY,10,10, 20, 20);
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
  // endShape();
}
