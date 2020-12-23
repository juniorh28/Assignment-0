function countOfAllNumbersSmallerThanTarget(nums, target) {
  //this is test-06
  //Take an array of number, compare it to the target, return the total amount of 
  //numbers smaller than the target.
  let lessThanTarget = 0

  nums.forEach(number => {
    if (number < target) {
      lessThanTarget++
    }
  });

  return lessThanTarget;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;