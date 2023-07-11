let myFont, myFont1;
let textArray1 = [];
let textArray2 = [];
let r = 0;
let button;
let isJittering = false;


function preload() {
  myFont = loadFont("fonts/TestFeijoa-Bold.otf");
  myFont1 = loadFont("fonts/Parisienne-Regular.ttf");
  size = 800;
}

function setup() {
  
  createCanvas(1000, 1000);
  textFont(myFont);
  textArray1 = myFont.textToPoints("L", width / 2 - 250, height / 2+250, size, {
    sampleFactor: 0.15,
    // sampleFactor: 0.0241 for lines effect
  });

  textArray2 = myFont1.textToPoints("l", width / 2 - 150, height / 2+250, size, {
    sampleFactor: 0.135,
    // sampleFactor: 0.0306
  });
frameRate(100);
  print(textArray1.length, textArray2.length);
  button = createButton("lowercase");
  button.addClass("button");
  button.mousePressed(toggleJitter);
  button.position(width/2-75,height-140);

}

function draw() {
  background(color("#ECCEFF"));
  //   textSize(800);
  //   fill(0);
  // text('L',width / 2 - 250, height / 2+250, size);
  //   text('l',width / 2 - 250, height / 2+250, size,);

fill(random(100, 200), random(50, 150), random(150, 250));


  //MORPH
beginShape()
    for(let i = 0; i < textArray1.length;i++){
      noStroke();
     
fill(random(100, 200), random(50, 150), random(150, 250));
      circle(textArray1[i].x, textArray1[i].y, 50);
      noFill();
  //       push();
  //   strokeWeight(5);
  // stroke(random(100, 200), random(50, 150), random(150, 250));
  //   translate(textArray1[i].x, textArray1[i].y);
  //   rotate(r);
  //   r++;
  //   line(-10, -10, 10, 10);
  //   pop();
      
      if(isJittering){
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
function toggleJitter() {
  // Toggle the isJittering variable
  isJittering = !isJittering;
  
  // Change the button text to reflect the new state
  if (isJittering) {
    button.html("lowercase");
  } else {
    button.html("lowercase");
  }
}