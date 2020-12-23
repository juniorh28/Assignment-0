function sumOfAllEvenNumbers(nums) {
  //this is test-08
  //returns the total amount of even numbers in an array.

  let sumOfEven = 0;
  nums.forEach(number => {
    if (number % 2 == 0) {
      sumOfEven++;
    }
  });
  return sumOfEven;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;