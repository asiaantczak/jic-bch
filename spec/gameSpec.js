describe("Game", function() {

  var game;
  const max_pins = 10;


  beforeEach(function() {
    game = new Game();
  });

  describe("Roll", function(){
    it("adds knocked pins to frame", function() {
      game.roll(6);
      expect(game.frame).toEqual([6]);
    });
  });

  describe("addAFrame", function() {
    it("adds a frame to frames when frame ends", function() {
      game.roll(2);
      game.roll(4);
      game.addAFrame();
      expect(game.frames).toEqual([[2, 4]]);
    });
  });

  describe("resetFrame", function() {
    it("resets frame once it is added to frames", function() {
      game.roll(3);
      game.roll(5);
      game.addAFrame();
      expect(game.frame).toEqual([]);
    });
  });

  describe("isStrike", function() {
    it("returns true if the frame is strike", function() {
      game.roll(10);
      expect(game.isStrike()).toBe(true);
    });
    it("returns false if the frame is not a strike", function() {
      game.roll(0);
      game.roll(10);
      expect(game.isStrike()).toBe(false);
    });

  });

  describe("isSpare", function() {
    it("returns true if the frame is a spare", function() {
      game.roll(4);
      game.roll(6);
      expect(game.isSpare()).toBe(true);
    });
    it("returns true if the game is spare - more checks", function() {
      game.roll(0);
      game.roll(10);
      expect(game.isSpare()).toBe(true);
    });
  });

  describe("calculateFramePoints", function() {
    it("calculates points for frame", function() {
      game.roll(3);
      game.roll(5);
      expect(game.calculateFramePoints()).toEqual(8);
    });
  });

  describe("knows roll number", function() {
    it("saves number of rolls", function() {
      game.roll(3);
      game.addRollNumber();
      game.roll(4);
      game.addRollNumber();
      game.roll(9);
      game.addRollNumber();
      game.roll(1);
      game.addRollNumber();
      expect(game.rollNumber).toEqual(4);
    });
  });


  // describe("calculateBonus", function() {
  //   it("calculates bonus points for 1 strike", function() {
  //     game.roll(10);
  //     game.addAFrame();
  //     game.roll(2);
  //     game.roll(3);
  //     expect(game.calculateBonusForStrike()).toEqual(5);
  //   });
  //   it("calculates bonus points for triple strike", function() {
  //     game.roll(10);
  //     game.addAFrame();
  //     game.roll(10);
  //     game.addAFrame();
  //     game.roll(10);
  //     expect(game.calculateBonusForStrike()).toEqual(20);
  //   });
  //   it("calculates bonus for double strike", function() {
  //     game.roll(10);
  //     game.addAFrame();
  //     game.roll(10);
  //     game.addAFrame();
  //     game.roll(3);
  //     game.roll(4);
  //     expect(game.calculateBonusForStrike()).toEqual(13);
  //   });
  // });



});
