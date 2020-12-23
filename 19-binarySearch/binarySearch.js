class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    //this is test-19
    //take the middle of an array of numbers and see if it is the target we're looking for.
    //if not, split the array into 2 half, if the target is greater than the target go to the 2nd half.
    //if it less than the target go to the 1st half.
    //repeat until you find the target. If by the end of the search the target isn't found, return false.
    let start = 0;
    let end = nums.length - 1;
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] == target) {
      return true;
    } else {
      //if the target is less than mid point its in the 1st half.
      if (nums[mid] < target) {
        let leftHalf = [];
        for (let i = 0; i < mid; i++) {
          leftHalf.push(nums[i]);
        }
        return this.binarySearch(leftHalf, target);
      }
      if (nums[mid] > target) {
        let rightHalf = [];
        for (let i = 0; i < mid; i++) {
          rightHalf.push(nums[i]);
        }
        return this.binarySearch(rightHalf, target);
      }

    }
    return false
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;