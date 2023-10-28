// var xoff = 0;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }

// function draw() {
//   background(51);

//   noFill();
//   beginShape();


//   for (var x = 0; x < width; x++) {
//     var y = map(noise(xoff), 0, 1, 0, height);


//     stroke(random(255), random(255), random(255));
//     vertex(x, y);
//     xoff += 0.2;
//   }

//   endShape();
// }


// --------------------------



let noiseTime = 0;
let noiseTam = 10;




function setup() {
  createCanvas(windowWidth, windowHeight);

  background(200, 350, 350);
}

function draw() {
  // background(255);
  background(random(250), random(150), random(250), 10);
  let posX1 = map(noise(noiseTime), 0, 1, 0, windowWidth);
  let posY1 = map(noise(noiseTime + 100), 0, 1, 0, windowHeight);
  let posX2 = map(noise(noiseTime), 0, 1, 0, windowWidth);
  let posY2 = map(noise(noiseTime + 100), 0, 1, 0, windowHeight);
  let posX3 = map(noise(noiseTime), 0, 1, 0, windowWidth);
  let posY3 = map(noise(noiseTime + 300), 0, 1, 0, windowHeight);
  let posX4 = map(noise(noiseTime), 0, 1, 0, windowWidth);
  let posY4 = map(noise(noiseTime + 400), 0, 1, 0, windowHeight);
  let posX5 = map(noise(noiseTime), 0, 1, 0, windowWidth);
  let posY5 = map(noise(noiseTime + 100), 0, 10, 0, windowHeight);





  let tam1 = map(noise(noiseTam), 0, 1, 50, 5);
  let tam2 = map(noise(noiseTam), 0, 1, 50, 5);
  let tam3 = map(noise(noiseTam), 0, 1, 50, 5);
  let tam4 = map(noise(noiseTam), 0, 1, 50, 5);
  let tam5 = map(noise(noiseTam), 0, 1, 50, 5);



  noiseTime += 0.006;
  noiseTam += 0.01;





  fill(200, 94, 250);
  stroke(100, 50, 0, 50);
  strokeWeight(4);
  circle(posX1, posY1, tam1);
  fill(200, 94, 250);
  circle(posX2, posY2, tam2);
  fill(300, 0, 300);
  circle(posX3, posY3, tam3);
  fill(350, 0, 150);
  circle(posX4, posY4, tam4);
  fill(150, 250, 550);
  circle(posX5, posY5, tam5);
  fill(250, 250, 550);

}











