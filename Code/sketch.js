let myFont;
let textArray1 = [];
let textArray2 = [];
let r = 0;
let button;
let fSize = 800;
let isJittering = false;

// Define an array of shapes
let shapes = [];
const palette = ['#610FA9', '#A246DD', '#7E00CC', '#8A00E0'];

function preload() {
  myFont = loadFont("TestUntitledSerif-Bold.otf");

}

function setup() {
  createCanvas(1000, 1000);
textAlign(CENTER);
  textFont(myFont);
  // Create the button
  button = createButton("JITTER");
  button.addClass("button");
  button.mousePressed(toggleJitter);
  button.position(width-200,height-170);
  
  frameRate(10);
  angleMode(DEGREES);
  textArray1 = myFont.textToPoints("J", width / 2 - 200, height / 2+120, fSize, {

    sampleFactor: 0.1,
    // sampleFactor: 0.0241 for lines effect
  });

  textArray2 = myFont.textToPoints("j", width / 2 - 200, height / 2+250, fSize, {

    sampleFactor: 0.114,
    // sampleFactor: 0.0306
  });
  // textAlign(CENTER);
  print(textArray1.length, textArray2.length);
  
}

function draw() {
  background(236,206,255);
 stroke(color('#9757EB'));
 strokeWeight(2);
  // textSize(fSize);

  // text('D', width / 2+40, height / 2+250)
  // text('d', width / 2+40, height / 2+250)

    for(let i = 0; i < textArray1.length;i++){ 
     
      // fill(palette[Math.floor(Math.random()*palette.length)]);
      fill(color('#6b40e0'));
      if (isJittering) {
        // translate(random(-2, 2), random(0)); // Apply the jitter motion
        noStroke();
        rect(random(textArray1[i].x-20,textArray1[i].x+20), random(textArray1[i].y-20,textArray1[i].y+20), width/10, height/10, 100);
      }
      else {
        rect(textArray1[i].x, textArray1[i].y, width/10, height/10, 20);
      }
      
    
   
     

// circle(textArray1[i].x, textArray1[i].y, val);
   
      
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


function toggleJitter() {
  // Toggle the isJittering variable
  isJittering = !isJittering;
  
  // Change the button text to reflect the new state
  if (isJittering) {
    button.html("DON'T JITTER");
  } else {
    button.html("JITTER");
  }
}