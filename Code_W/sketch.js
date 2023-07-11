let myFont;
let textArray1 = [];
let textArray2 = [];
let r = 0;
let slider1,slider2;
let fSize = 800;
// const palette = ['#D085FF', '#C05CFF', '#9273E8', '#6B40E0'];
const palette = ['#FF8C42', '#FFB8DE', '#EDF67D'];
//orange, pink, yellow, a different pink

function preload() {
  myFont1 = loadFont("fonts/font.otf");
 
  myFont2 = loadFont("fonts/TestCalibre-Thin.otf");

}

function setup() {
  
  createCanvas(1000, 1000);
textAlign(CENTER);
  textFont(myFont1);

  frameRate(20);
  //color
  slider1 = createSlider(20, 800, 20);
  slider1.position(width/2-150, height+30);
  slider1.addClass("mySliders");

  // angleMode(DEGREES);
  textArray1 = myFont1.textToPoints("w", width / 2 - 320, height/2+210, fSize, {

    sampleFactor: 0.15,
    // sampleFactor: 0.0241 for lines effect
  });
textFont(myFont2);
  textArray2 = myFont2.textToPoints("b", width / 2 - 180, height / 2+180, fSize, {

    sampleFactor: 0.2,
    // sampleFactor: 0.0306
  });
  // textAlign(CENTER);
  print(textArray1.length, textArray2.length);

}

function draw() {
  background(color('#6B40E0'));
  //MORPH
beginShape()
    for(let i = 0; i < textArray1.length;i++){
      noFill();
    push();
    strokeWeight(5);
    // stroke(random(100, 200), random(50, 150), random(150, 250));

    stroke(palette[Math.floor(Math.random()*palette.length)]);
    translate(textArray1[i].x, textArray1[i].y);
    rotate(r);
    r++;
    // bezier(-20, -20,slider1.value(),slider1.value(),10,10, 20, 20);
    bezier(-20, -20,30,slider1.value(),10,10, 20, 20);
  //  line(-20, -20, 20,slider1.value());

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
