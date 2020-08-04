describe('FizzBuzz', function() {

  var fizzBuzz;
  // sets the scope of the variable

  describe('knows when a number is', function(){
  //use this instead of context to write meaningful tests

    it('divisible by 3', function(){
      fizzBuzz = new FizzBuzz();
      expect(fizzBuzz.isDivisibleByThree(3)).toBe(true);
    });
  });
});