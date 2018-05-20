const max_pins = 10;

function Game() {
  this.frame = []
  this.frames = []
  this.rollNumber = 0;
}

Game.prototype.roll = function(pins) {
    this.frame.push(pins);
};


Game.prototype.addAFrame = function() {
    this.frames.push(this.frame);
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
  return this.frame.reduce(function(sum, val) { return sum + val });
};

// Game.prototype.calculateBonusForStrike = function() {
//   if (this.frame[0] === 10 && this.frames[this.frames.length - 2][0] === 10 && this.frames[this.frames.length - 1][0] === 10) {
//     return (this.frames[this.frames.length-1][0] + this.frame[0]);
//   } else if (this.frame[0] != 10 && this.frames[this.frames.length - 2][0] === 10 && this.frames[this.frames.length - 1][0] === 10) {
//     return (this.frames[this.frames.length - 1][0] + this.frame[0]);
//   } else {
//     return this.frame.reduce(function(sum, val) { return sum + val });
//   }
// };

Game.prototype.addRollNumber = function() {
  this.rollNumber = this.rollNumber + 1;
};
