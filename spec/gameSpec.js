describe("Game", function() {
  debugger;
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
      game.addAFrame([2, 4]);
      expect(game.frames).toEqual([[2, 4]]);
    });
  });

  describe("resetFrame", function() {
    it("resets frame once it is added to frames", function() {
      game.roll(3);
      game.roll(5);
      game.addAFrame([3,5]);
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

});
