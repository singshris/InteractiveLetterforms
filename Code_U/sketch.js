let myFont;
let textArray1 = [];
let textArray2 = [];
let angle = 0;
let picker1;
let picker2;
let numSteps = 54;
let noiseAmplitude = 50;
let noiseScale = 0.5;
let fSize = 800;
// const palette = ['#E0ADFF', '#D085FF', '#D899FF'];
// const palette = ['#26A697', '#37D2C0', '#69DDD0', '#9BE8DF', '#CDF4EF'];
const palette = ['#9CFFFA', '#06BEE1', '#F896D8', '#EDF67D', '#FFB8DE']


function preload() {
  myFont1 = loadFont("fonts/font.otf");
 
  myFont2 = loadFont("fonts/tt.otf");

}

function setup() {
  
  createCanvas(1000, 1000);
textAlign(CENTER);
  textFont(myFont1);

  frameRate(20);
  //color
  
  // angleMode(DEGREES);
  textArray1 = myFont1.textToPoints("U", width / 2 - 300, height / 2+250, fSize, {

    sampleFactor: 0.01,
    // sampleFactor: 0.0241 for lines effect
  });
textFont(myFont2);
  textArray2 = myFont2.textToPoints("u", width / 2 - 180, height / 2+180, fSize, {

    sampleFactor: 0.05,
    // sampleFactor: 0.0306
  });
  // textAlign(CENTER);
  print(textArray1.length, textArray2.length);

}

function draw() {
  background(color('#6B40E0'));
  
  //MORPH
  // fill(color('#D085FF'));
// noStroke();
  // ellipse(mouseX,mouseY,30,30)

  for (let i = 0; i < textArray1.length; i++) {
   
    push();
    
    fill(palette[Math.floor(Math.random()*palette.length)]);
    translate(textArray1[i].x, textArray1[i].y);
    
    // Calculate rotation angle based on y-coordinate
    // let angle = map(textArray1[i].y, -10, 10, 0, TWO_PI);
    
    // Add some noise to the rotation angle
    angle += noise(i) * TWO_PI;
    rotate(angle);
    angle++;
    noStroke();
    rect(-10, -10, 100, angle*0.01);
    strokeWeight(6);
    stroke(palette[Math.floor(Math.random()*palette.length)]);
    ellipse(-10, -10, angle*0.01, angle*0.01);
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
