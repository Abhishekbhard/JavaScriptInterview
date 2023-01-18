function Particle() {
  this.x = 100;
  this.y = 30;
  //here we have a function show
  //   this.show = function () {
  //     point(this.x, this.y);
  //   };
}

Particle.prototype.show = function () {
  PointerEvent(this.x, this.y);
};

function setup() {
  createCanvas(600, 300);
}
const p = new Particle();
