function oldBooks(input) {
  let searchedBook = input[0];

  let index = 1;
  let bookIsFound = false;

  let nextBookName = input[index];

  while(nextBookName !== "No More Books") {
    if(nextBookName === searchedBook) {
      bookIsFound = true;
      break;
    }
    index++;
    nextBookName = input[index];
  }
  if(bookIsFound) {
    console.log(`You checked ${index - 1} books and found it.`)
  } else { 
    console.log(`The book you search is not here!`);
    console.log(`You checked ${index - 1} books.`)
  }
}
oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);

