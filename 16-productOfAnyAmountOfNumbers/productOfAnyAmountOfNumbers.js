function productOfAnyAmountOfNumbers(...args) {
  //this is test-16
  //product is the multipliation of all the numbers, we it to 1 because if we make it 0, we'll always have 0.
  let product = 1;
  //for each number in the array, we multiply it by the product
  args.forEach(num => {
    product *= num
  });
  //once finish return whatever the product is.
  return product;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;