function setUnionOfAnyAmountOfSets(...args) {
  //this is test-17
  //given a list of an array of numbers, make a set object that takes them

  //creat an empty set to be added unqiue values
  let set1 = new Set();

  //take the values of the args and make them into unqiue array
  for (const value of args) {
    //take those unique set and add every value once.
    //ignore repeating values.
    for (let value2 of value) {
      set1.add(value2);
    }
  }
  return set1;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
