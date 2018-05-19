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

    it("can knock max of 10 pins in one roll", function() {
      expect(function() { game.roll(11) }).toThrow("There is max of 10 pins to knock");
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


});
