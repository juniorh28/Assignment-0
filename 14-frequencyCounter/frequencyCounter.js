function frequencyCounter(word) {
  // this is test-14
  //count how many times an individual letter appears in a word. e.g: boom -> b:1, o:2, m:1.

  //lettersInWords breaks the word into list of letter that compose the word.
  //spread operator will split the word into distinct variables.
  let lettersInWords = [...word];

  //first create a empty map
  hashmap = new Map([]);

  //for each letter in the word
  lettersInWords.forEach((letter) => {
    //we check to see if the letter is in the map
    let count = hashmap.get(letter);

    //if its not, we add it
    if (hashmap.has(letter) == false) {
      count = 1;
      hashmap.set(letter, count);
    }

    //else if it is, we increase the amount it is shown by one.
    else {
      count++;
      hashmap.set(letter, count);
    }
  });

  //now that the map has the letters and how many times it appears, we make an object of it.
  const letterCounter = Object.fromEntries(hashmap);
  return letterCounter;
}

// Do not edit this line;
module.exports = frequencyCounter;
