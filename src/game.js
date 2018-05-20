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

Game.prototype.isStrike = function() {
  if (this.frame[0] === 10) {
    return true;
  } else {
    return false;
  }
};

Game.prototype.isSpare = function() {
  if (this.frame[0] + this.frame[1] === 10) {
    return true;
  } else {
    return false;
  }
};

Game.prototype.calculateFramePoints = function() {
  return this.frame.reduce(function(sum, val) {return sum + val});
};
