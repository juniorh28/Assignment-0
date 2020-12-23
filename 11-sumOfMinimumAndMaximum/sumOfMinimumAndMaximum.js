function sumOfMinimumAndMaximum(nums) {
  //this is test -11
  //return the sum of the smallest and largest number in the array.
  let sumOfMinMax = 0;
  // ... will convert an array into distinct variable so the math function can read them in
  return Math.min(...nums) + Math.max(...nums);
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
