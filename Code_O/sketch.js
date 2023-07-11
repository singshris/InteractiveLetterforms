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
const palette = ['#E0ADFF', '#D085FF', '#D899FF'];
// const palette = ['#26A697', '#37D2C0', '#69DDD0', '#9BE8DF', '#CDF4EF'];



function preload() {
  myFont1 = loadFont("fonts/font.otf");
 
  myFont2 = loadFont("fonts/TestCalibre-Thin.otf");

}

function setup() {
  
  createCanvas(1000, 1000);
textAlign(CENTER);
  textFont(myFont1);

  frameRate(10);
  //color
  
  angleMode(DEGREES);
  textArray1 = myFont1.textToPoints("O", width / 2 - 420, height / 2+320, fSize, {

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
  background(color('#7540a5'));
  
  //MORPH
  fill(color('#D085FF'));
noStroke();
  ellipse(mouseX,mouseY,30,30)
beginShape()
    for(let i = 0; i < textArray1.length;i++){
    
  
      noFill();
     
// stroke(random(100, 200), random(50, 150), random(150, 250));
// circle(textArray1[i].x, textArray1[i].y, params.circle_size);
    push();
    strokeWeight(6);
    stroke(palette[Math.floor(Math.random()*palette.length)]);
    // stroke(color('#e7cffc'));
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
