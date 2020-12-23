function pairSum(nums, target) {
  //this is test-18
  //given an array of numbers, check if any pair would add up to the target.
  //if so, return true.
  if (nums.length < 2) {
    throw "error";
  }
  //check the first number, if the sum of it and the next equals target return true
  //if not move up to the next number and repeat the check.
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length - 1; j++) {
      if (nums[i] + nums[j] == target) {
        return true;
      }
    }
  }
  //if none of the number equals the target, return false.
  return false;
}

// Do not edit this line;
module.exports = pairSum;