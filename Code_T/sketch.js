let myFont;
let textArray1 = [];
let textArray2 = [];
let r = 0;

let fSize = 800;

function preload() {
  myFont1 = loadFont("fonts/TestCalibre-Thin.otf");
 
  myFont2 = loadFont("fonts/TestUntitledSerif-Bold.otf");

}

function setup() {
  
  createCanvas(1000, 1000);
  textFont(myFont1);
  colorMode(HSB);
  frameRate(500);
  //color
  
  angleMode(DEGREES);
  textArray1 = myFont1.textToPoints("T", width / 2 - 350, height / 2+250, fSize, {

    // sampleFactor: 0.082,
    sampleFactor: 0.122,
    
  });
textFont(myFont2);
  textArray2 = myFont2.textToPoints("t", width / 2 - 480, height / 2+10, fSize, {
    sampleFactor: 0.104,
    // sampleFactor: 0.07,

  });
  // textAlign(CENTER);
  print(textArray1.length, textArray2.length);

}

function draw() {
  background(277,19,100);
  // background(236,206,255);
let colorVal;


    for(let i = 0; i < textArray1.length;i++){
      colorVal = map(i,0,textArray1.length,290,260)
      fill(colorVal,80,100,70);
      // strokeWeight(1.5);
      noStroke();
      circle(textArray1[i].x+noise(i)*frameCount,textArray1[i].y+noise(i)*frameCount,30)
      noFill();

  
      
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
