describe("Bar", function(){
  var bar;

  beforeEach(function(){
    bar = new Bar ();
  });

  describe("squared", function() {

    it("Finds the square of a number", function() {
      expect( bar.squared(0)).eq(0);
      expect( bar.squared(1)).eq(1);
      expect( bar.squared(-2)).eq(4);
      expect( bar.squared(4)).eq(16);
    });
  });

  describe("cubed", function() {

    it("Finds the cube of a number", function() {
      expect( bar.cubed(0)).eq(0);
      expect( bar.cubed(1)).eq(1);
      expect( bar.cubed(3)).eq(27);
      expect( bar.cubed(-5)).eq(-125);
    });
  });

   describe("exponentOf", function() {

    it("Finds the exponent of a number", function() {
      var square = bar.exponentOf(2);
      expect( square(4)).to.equal(16);
      var exponent = 0;
      expect( square(0)).eq(0);
      var exponent = -3;
      expect( square(9)).eq(81);
      var exponent = 1;
      expect( square(1)).eq(1);
    });
  });

  describe("reverseString", function() {

    it("It reverses a string", function() {
      expect( bar.reverseString('racecar')).eq('racecar');
      expect( bar.reverseString('meadeslocomb')).eq('bmocolsedaem');
    });
  });

  describe("cipher", function() {

    it("It encodes a string by converting it to +100 charcode", function() {
      expect( bar.cipher('racecar')).eq('ÖÅÇÉÇÅÖ');
    });
  });

   describe("decipher", function() {

    it("It decodes a string by converting it to -100 charcode", function() {
      expect( bar.decipher('ÖÅÇÉÇÅÖ')).eq('racecar');
    });
  });

    describe("rot13", function() {

    it("It should encrypt a string by rotating each character by 13 units", function() {
      expect( bar.rot13('Javascripts are the coolest!')).eq('Wninfpevcgf ner gur pbbyrfg!');
    });
  });
});
