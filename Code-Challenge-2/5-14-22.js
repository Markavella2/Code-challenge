// Name: Remove the Time

// Instructions:
// You're re-designing a blog and the blog's posts have the following format for showing the date and time a post was made:

// Weekday Month Day, time e.g., Friday May 2, 7pm

// You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.

// Write a function, shortenToDate, that takes the Website date/time in its original string format, and returns the shortened format.

// Assume shortenToDate's input will always be a string, e.g. "Friday May 2, 7pm". Assume shortenToDate's output will be the shortened string, e.g., "Friday May 2".

// Answer:
// function shortenToDate(longDate) {
//     return longDate.split(',')[0]
//   }


//   Name:  Crash Override

//   Instructions:
//   Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

//   Your task is to create a function that, given a proper first and last name, will return the correct alias.
  
//   Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given.
  
//   If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."
  
//   Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

//   Answer:
//   const firstLetter = str => str[0].toUpperCase()

// const isValidName = name => /[a-z]/gi.test(name)

// const aliasGen = (fName, lName) =>
//   isValidName(fName[0]) && isValidName(lName[0])
//     ? `${firstName[firstLetter(fName)]} ${surname[firstLetter(lName)]}`
//     : 'Your name must start with a letter from A - Z.'


// Name:
// Count WOrds

// Instructions:
// Can you implement a function that will return number of words in a string?

// You have to ensure that spaces in string is a whitespace for real.

// Let's take a look on some examples:

// countWords("Hello"); // returns 1 as int
// countWords("Hello, World!") // returns 2
// countWords("No results for search term `s`") // returns 6
// countWords(" Hello") // returns 1
// // ... and so on
// What kind of tests we made for your code:

// Function have to count words and not spaces. You have to be sure that you doing it right
// Empty string has no words.
// String with spaces around should be trimmed.
// Non-whitespace (ex. breakspace, unicode chars) should be treated as a delimiter
// Doublecheck that words with chars like -, ', ` are counted right.


// Answer:
function countWords(str) {
return str.split(/\s/g).filter(Boolean).length
}