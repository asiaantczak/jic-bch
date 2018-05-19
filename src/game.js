const max_pins = 10;

function Game() {
  this.frame = []
  this.frames = []
}

Game.prototype.roll = function(pins) {
  if (pins > 10) {
    throw "There is max of 10 pins to knock";
  }
  if (this.frame.length < 2) {
    this.frame.push(pins);
  }
};


Game.prototype.addAFrame = function(frame) {
  if(this.frames.length < 10) {
    this.frames.push(frame);
    this.resetFrame(frame);
  }
};

Game.prototype.resetFrame = function(frame) {
  this.frame = []
};
