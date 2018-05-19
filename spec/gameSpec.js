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

    it("cannot roll more than 2 times", function() {
      game.roll(5);
      game.roll(3);
      game.roll(1);
      expect(game.frame.length).toEqual(2);
      expect(game.frame).toEqual[5,3];
    });
  });

  describe("addAFrame", function() {
    it("adds a frame to frames when frame ends", function() {
      game.roll(2);
      game.roll(4);
      game.addAFrame([2, 4]);
      expect(game.frames).toEqual([[2, 4]]);
    });

    it("cannot add more than 10 frames", function() {
      game.frames.length = 10
      game.addAFrame([1, 3]);
      expect(game.frames.length).toEqual(10);
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


});
