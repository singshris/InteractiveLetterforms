let myFont;
let textArray1 = [];
let textArray2 = [];
let r = 0;
let cabin;
let button;
let vol;
let volhistory = [];
 size = 600;

function preload() {
  myFont = loadFont("MeowScript-Regular.ttf");
 
  cabin = loadSound("WithYou.mp3");
}




function setup() {
  createCanvas(800, 800);
  colorMode(HSB);
  button = createButton('  ▶ ');
  button.mousePressed(toggleSong);
  button.position(width / 2, height - 80);
  button.size(60,60);
  button.addClass("myButton");
  textFont(myFont);
  textArray1 = myFont.textToPoints(
    "P",
    width / 2 - 300,
    height / 2 + 200,
    size,
    {
      sampleFactor: 0.18,
    }
  );
  noFill();
  print(textArray1.length, textArray2.length);

amp = new p5.Amplitude();
  // cabin = new p5.AudioIn();
  // cabin.start();
}

function draw() {
  background(color("#7540a5"));
  vol = amp.getLevel();
  volhistory.push(vol);

  
  // beginShape();
  // circle(mouseX,mouseY,30

  //MORPH
  
 
  beginShape();
  for (let i = 0; i < textArray1.length; i++) {
    offset = map(vol, 0, 1, -10, -300);
 let colorValue = map(i, 0, textArray1.length, 290, 260); // map the index of the position to a color value
    // stroke(color('#ECCEFF'));
    stroke(colorValue, random(30,40),100);
    // beginShape();
    // vertex(textArray1[i].x, textArray1[i].y + offset);
    // vertex(textArray1[i].x + 50, textArray1[i].y);
    // vertex(textArray1[i].x + 50, textArray1[i].y + 40);
    // vertex(textArray1[i].x, textArray1[i].y + 40 + offset);
    // endShape(CLOSE);
     push();
      strokeWeight(5);
      translate(textArray1[i].x, textArray1[i].y);
      rotate(220);
      // r++;
      line( 5, 5, -5, -5+offset);
      pop();
  }
  // endShape();
}

function toggleSong(){
  if (cabin.isPlaying()){
    cabin.pause();
    button.html("| |");
  }
  else {
    cabin.play();
    button.html('▶');
  }
}
