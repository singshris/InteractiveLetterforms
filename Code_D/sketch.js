let myFont;
let textArray1 = [];
let textArray2 = [];
let r = 0;
let slider;
let noiseAmplitude = 50;
let noiseScale = 0.5;
let fSize = 800;




function preload() {
  myFont = loadFont("TestUntitledSerif-Bold.otf");

}

function setup() {
  
  createCanvas(1000, 1000);
textAlign(CENTER);
  textFont(myFont);
  slider = createSlider(0, 800, 120);
  slider.position(width/2-250, height-50);
  slider.addClass("mySliders");
  // slider.style('width', '500 px');
  // slider.style('color', )
  // frameRate(10);
  //color
  
  angleMode(DEGREES);
  textArray1 = myFont.textToPoints("D", width / 2 - 280, height / 2+250, fSize, {

    sampleFactor: 0.1,
    // sampleFactor: 0.0241 for lines effect
  });

  textArray2 = myFont.textToPoints("d", width / 2 - 250, height / 2+250, fSize, {

    sampleFactor: 0.114,
    // sampleFactor: 0.0306
  });
  // textAlign(CENTER);
  print(textArray1.length, textArray2.length);

}

function draw() {
  background("rgb(236,206,255)");
  let val = slider.value();
 
  // textSize(fSize);

  // text('D', width / 2+40, height / 2+250)
  // text('d', width / 2+40, height / 2+250)


  beginShape()
    for(let i = 0; i < textArray1.length;i++){
    
      stroke(color('#6b40e0'));
      strokeWeight(1);
      ellipse(mouseX,mouseY,30,30);
      noFill();
     
// stroke(random(100, 200), random(50, 150), random(150, 250));
circle(textArray1[i].x, textArray1[i].y, val);
   
      
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
