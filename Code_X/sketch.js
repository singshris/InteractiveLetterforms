let rects = []; //an array for the x and y positions of each shape
let rects1 = []; //anti-clockwise direction
let stepSize = 50;


function setup() {
  createCanvas(800, 800);
  for (let i = 0; i < width; i++) {
    rects.push({ x: i * stepSize, y: i * stepSize, angle: 0, delay: i * 500 }); 
  }
  
   for (let i = 0; i < width; i++) {
    rects1.push({ x: width-i * stepSize, y: i * stepSize, angle: 0, delay: i * 500 });
  }
  rectMode(CENTER);
  colorMode(HSB);
  noStroke();
}

function draw() {
  background(277,15,100);


let w = width/5;
let h = height/20;
 colorMode(HSB, 360, 100, 100, 1.0);
  for (let i = 0; i < rects.length; i++) {
    
    const { x, y, angle, delay } = rects[i];
    if (millis()*5 > delay) {
      rects[i].angle += 1;
    }
    push();
    translate(x, y);
    rotate(radians(angle));
      let colorValue = map(x, 0, rects.length, 290, 240); // map the index of the position to a color value
    fill(colorValue, 60, 100,1);

    rect(0, 0, w*angle*0.01, h);
    pop();
  }
  

 for (let i = 0; i < rects1.length; i++) {
    const { x, y, angle, delay } = rects1[i];
    if (millis()*5 > delay) {
      rects1[i].angle -= 1;
    }
    push();
    translate(x, y);
    rotate(radians(angle));
    let colorValue = map(x, 0, rects.length, 240, 290); // map the index of the position to a color value
    fill(colorValue, 60, 100,1);

    rect(0, 0, w*angle*0.01, h);
    pop();
  }
  
}
