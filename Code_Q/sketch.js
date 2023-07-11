let myFont1, myFont2;
let textArray1 = [];
let textArray2 = [];
let r = 0;
let slider;
let noiseAmplitude = 50;
let noiseScale = 0.5;
let fSize = 800;




function preload() {
  myFont1 = loadFont("ArchivoBlack-Regular.ttf");
  myFont2 = loadFont("ArchivoBlack-Regular.ttf");

}

function setup() {
  createCanvas(1000, 1000);
  rectMode(CENTER);
textAlign(CENTER);
  // textFont(myFont);
  slider = createSlider(0, 800, 120);
  slider.position(width/2-250, height-50);
  slider.addClass("mySliders");
  // slider.style('width', '500 px');
  // slider.style('color', )
  frameRate(80);
  //color
  
  angleMode(DEGREES);
  textArray1 = myFont1.textToPoints("Q", width / 2 - 330, height / 2+220, fSize, {

    sampleFactor: 0.104,
    // sampleFactor: 0.0241 for lines effect
  });

  textArray2 = myFont2.textToPoints("q", width / 2 - 280, height / 2+130, fSize, {

    sampleFactor: 0.123,
    // sampleFactor: 0.0306
  });
  // textAlign(CENTER);
  print(textArray1.length, textArray2.length);

}

function draw() {
  background(236,206,255);
  let val = slider.value();
 
  // textSize(fSize);

  // text('D', width / 2+40, height / 2+250)
  // text('d', width / 2+40, height / 2+250)


  beginShape()
    for(let i = 0; i < textArray1.length;i++){
      let colorValue = map(i, 0, textArray1.length, 290, 260); // map the index of the position to a color value
      stroke(color('#6B40E0'));
      // stroke(colorValue, random(30,40),100);
      // stroke(color('#6b40e0'));
      strokeWeight(1);
      // ellipse(mouseX,mouseY,30,30);
      noFill();
     
// stroke(random(100, 200), random(50, 150), random(150, 250));
circle(textArray1[i].x, textArray1[i].y, val);
// rect(textArray1[i].x, textArray1[i].y, val);
   
      
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
