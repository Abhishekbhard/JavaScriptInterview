function Particle() {
  this.x = 100;
  this.y = 90;
}

function Confetti() {
  Particle.call(this);
}
Particle.prototype.update = function () {
  this.x += random(-5, 5);
  this.y += random(-5, 5);
};
Particle.prototype.show = function () {
  stroke(255);
  strokeWeight(8);
  point(this.x, this.y);
};

//By adding this line confetti inherit the particale show method 3.
Confetti.prototype = Object.create(Particle.prototype);
Confetti.prototype.constructor = Confetti;
//Here both are not calling their show function 4
Confetti.prototype.show = function () {
  stroke(255, 0, 255);
  noFill();
  strokeWeight(8);
  square(this.x, this.y, 50);
};
var p;
var c;

function setup() {
  createCanvas(600, 600);
  p = new Particle();
  c = new Confetti();
  //c.show(); // getting error c.show() is not a function.
  console.log(p);
  console.log(c);
}
function draw() {
  background(0);
  p.update();
  p.show();
  c.update();
  c.show();
}
//setup();
