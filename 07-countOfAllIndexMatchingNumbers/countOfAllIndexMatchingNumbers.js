function countOfAllIndexMatchingNumbers(nums) {
  //this is test-07
  //return the total number of elements in an array that matches its index position.
  let matchIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == i) {
      matchIndex++;
    }
  }
  return matchIndex;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;
