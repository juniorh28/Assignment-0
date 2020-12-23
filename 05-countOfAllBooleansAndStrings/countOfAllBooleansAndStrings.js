function countOfAllBooleansAndStrings(arr) {
  //this is test-05
  //count and return the sum of all strings and booleans.

  let numOfStringBool = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "boolean" || typeof arr[i] == "string") {
      numOfStringBool++;
    }
  }
  return numOfStringBool;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;