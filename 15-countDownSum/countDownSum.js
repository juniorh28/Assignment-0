class MySolution {
  countDownSum(num) {
    // this is test-15
    //given a number, add all the sum from a number down to one.

    //this can be written using sigma formula
    //return ((num * (num + 1)) / 2);
    let self = this;

    //recursively we check if we have any numbers left to add, if not return the sum
    if (num == 1) {
      return num;
    } else {
      return num + self.countDownSum(num - 1);
    }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
