function isPalindrome(word) {
  //this is test-13
  //unfinished
  //returns true if a word is a palindrome or false if it is not.

  //if the word is one letter long or less, its a palindrome. (char or null)
  if (word.length <= 1) {
    return true;
  }


  //if its more we check if its a palindrome.
  //we make firstLetter the first letter in the word.
  let [firstLetter] = word;

  //we choose lastLetter to be the last letter in the word.
  let lastLetter = word[word.length - 1];

  //we compare the two letters, if they don't match, the word is not a palindrome.
  if (firstLetter == lastLetter) {
    //we make a string that removes the first and last letter.
    word = word.substring(1, word.length - 1);
    //we recursively call the word and repeat, checking if the first letter and last letter matches.
    return isPalindrome(word);
  }
  //if at anypoint the letters do not match, the word is not a palindrome.
  else {
    return false;
  }
}

// Do not edit this line;
module.exports = isPalindrome;