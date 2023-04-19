let myFrog;
let myFrogX;
let myFrogY;
let myCar = [];

function setup() {
  createCanvas(600, 600);
  myFrog = new Frog();

  for (let i = 0; i < 10; i++) {
    x = random(-480, 480);
    y = random(-480, 480);
    speed = random(5, 10);
    myCar[i] = new Car(x, y, speed);
  }
}

function draw() {
  background("lightgray");
  lanes1();
  lane2();
  lane3();
  myFrog.show(myFrogX, myFrogY);
  for (let i = 0; i < 10; i++){
     myCar[i].show();
    myCar[i].move();
  }
}

class Car {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
  }

  show() {
    push();
    translate(this.x, this.y);
    fill("red");
    rect(100, 100, 70, 35, 50);
    pop();
  }
  move() {
    this.x = this.x + this.speed;
  }
}

class Frog {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  show() {
    push();
    translate(this.x, this.y);
    noStroke();
    fill("limegreen");
    rect(300, 520, 60, 80, 100);
    ellipse(300, 530, 30);
    ellipse(360, 530, 30);
    ellipse(300, 580, 30);
    ellipse(360, 580, 30);
    pop();
  }
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    myFrogY += -7;
  }
  if (keyCode == DOWN_ARROW) {
    myFrogY += 7;
  }
  if (keyCode == RIGHT_ARROW) {
    myFrogX += 7;
  }
  if (keyCode == LEFT_ARROW) {
    myFrogX += -7;
  }
}

function lane3(x, y, size) {
  push();
  translate(x, y);
  stroke(2);
  fill("darkgrey");
  rect(0, 0, 600, 80);
  pop();
}

function lane2(x, y, size) {
  push();
  translate(x, y);
  stroke(2);
  fill("darkgrey");
  rect(0, 300, 600, 80);
  pop();
}

function lanes1(x, y, size) {
  push();
  translate(x, y);
  stroke(2);
  fill("darkgrey");
  rect(0, 520, 600, 80);
  pop();
}
