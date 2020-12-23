function sumOfAllOddNumbers(nums) {
  //this is test-09
  //return the total amount of odd numbers.
  let oddNumber = 0;
  nums.forEach(number => {
    if (number % 2 != 0) {
      oddNumber++;
    }
  });
  return oddNumber;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;