const max_pins = 10;

function Game() {
  this.frame = []
  this.frames = []
}

Game.prototype.roll = function(pins) {
  if (pins > 10) {
    throw "There is max of 10 pins to knock";
  } else {
    this.frame.push(pins);
  }
};


Game.prototype.addAFrame = function(frame) {
  this.frames.push(frame);
}
