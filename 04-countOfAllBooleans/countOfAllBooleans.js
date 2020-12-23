function countOfAllBooleans(arr) {
  //this is test-04
  //this will recieve an array of different data types, return the total numebr of booleans.

  let numOfBool = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "boolean") {
      numOfBool++;
    }
  }

  return numOfBool;
}

// Do not edit this line;
module.exports = countOfAllBooleans;