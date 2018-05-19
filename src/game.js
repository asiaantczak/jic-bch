const max_pins = 10;

function Game() {
  this.frame = []
  this.frames = []
}

Game.prototype.roll = function(pins) {
    this.frame.push(pins);
};


Game.prototype.addAFrame = function(frame) {
    this.frames.push(frame);
    this.resetFrame();
};

Game.prototype.resetFrame = function(frame) {
  this.frame = []
};
