function titleCaseEdit(title) {
  //this is test-01

  //take the title and split it everywhere there is a space and make a list out of it
  //capTitle is an array of each word in the title
  let wordsInTitle = title.split(" ");

  //we make an empty list to be filled in with all the words that make a title,
  //the words starting with capital letter.
  let capTitle = [];

  //add the word into capWord
  wordsInTitle.forEach(word => {
    let capWord = word[0].toUpperCase() + word.substring(1);
    capTitle.push(capWord);
  });

  //combine the arrya of capital words into one big string seperated by spaces.
  capTitle = capTitle.join(" ");
  return capTitle;
}

// Do not edit this line;
module.exports = titleCaseEdit;