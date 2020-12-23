function fizzBuzz(start, end) {
  //this is test-12
  //create an array that will return the following:
  //multiple of 3 is "Fizz"
  //multiple of 5 is "Buzz"
  //multiple of 3 and 5 is "FizzBuzz"
  //not multiple of 3 and 5 is the number itself
  let fizzBuzz = [];
  for (let i = start; i <= end; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      fizzBuzz.push("FizzBuzz");
    } else if (i % 3 == 0) {
      fizzBuzz.push("Fizz");
    } else if (i % 5 == 0) {
      fizzBuzz.push("Buzz");
    } else {
      fizzBuzz.push(i);
    }
  }
  return fizzBuzz;
}

// Do not edit this line;
module.exports = fizzBuzz;
