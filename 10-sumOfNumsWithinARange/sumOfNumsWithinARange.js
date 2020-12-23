function sumOfNumsWithinARange(nums, start, end) {
  //this is test -10
  //return the total number of element between (and including both) the start and end of the range.
  let numInRange = 0;

  nums.forEach(number => {
    if (number <= end && number >= start) {
      numInRange++;
    }
  });
  return numInRange;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;