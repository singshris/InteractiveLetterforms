let myFont;
let textArray1 = [];
let textArray2 = [];
let r = 0;
let picker1;
let picker2;
let numSteps = 54;
let noiseAmplitude = 50;
let noiseScale = 0.5;
function preload() {
  myFont = loadFont("fonts/font.otf");
  size = 1000;
}

function setup() {
  
  createCanvas(1000, 1000);
  textFont(myFont);
  textArray1 = myFont.textToPoints("A", width / 2 - 400, height / 2+350, size, {
    sampleFactor: 0.301,
    // sampleFactor: 0.0241 for lines effect
  });

  textArray2 = myFont.textToPoints("a", width / 2 - 300, height / 2+250, size, {
    sampleFactor: 0.381,
    // sampleFactor: 0.0306
  });

  print(textArray1.length, textArray2.length);

}

function draw() {
  background("rgb(236,206,255)");
    textSize(1000);
    fill(0);
  // text('A',width / 2 - 400, height / 2+350);
    // text('a',width / 2 - 300, height / 2+250);
  //
  // strokeWeight(1);
  // beginShape();
fill(random(100, 200), random(50, 150), random(150, 250));
circle(mouseX,mouseY,30)
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
    
//     circle(textArray1[i].x, textArray1[i].y, 10);
//   }

  //     endShape();
  //   }

  //MORPH
beginShape()
    for(let i = 0; i < textArray1.length;i++){
      noStroke();
     
fill(random(100, 200), random(50, 150), random(150, 250));
      circle(textArray1[i].x, textArray1[i].y, 10);
      noFill();
  //       push();
  //   strokeWeight(5);
  // stroke(random(100, 200), random(50, 150), random(150, 250));
  //   translate(textArray1[i].x, textArray1[i].y);
  //   rotate(r);
  //   r++;
  //   line(-10, -10, 10, 10);
  //   pop();
      
      if(mouseIsPressed){
        // push();
        // fill(0);
        // textSize(30);
        // text("letter is morphing",mouseX,mouseY);
        // pop();
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
