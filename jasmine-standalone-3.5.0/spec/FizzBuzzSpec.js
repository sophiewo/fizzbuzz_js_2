describe('FizzBuzz', function() {

  var fizzBuzz;
  // sets the scope of the variable

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });
  // to DRY tests up, no need to instantiate fizzbuzz each time.

  describe('knows when a number is', function(){
  //use this instead of context to write meaningful tests
    it('divisible by 3', function(){
      expect(fizzBuzz.isDivisibleByThree(3)).toBe(true);
    });
  });

  describe('knows when a number is not', function(){
    it('divisible by 3', function(){
      expect(fizzBuzz.isDivisibleByThree(5)).toBe(false);
    });
  });

  describe('knows number is', function(){
    it('divisible by 5', function(){
      expect(fizzBuzz.isDivisibleByFive(5)).toBe(true);
    });
  });
});