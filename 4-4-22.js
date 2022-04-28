// Name: Capitalization and Mutability

// Instructions:Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.


// Answer:

// function capitalizeWord(word) {
//     const otherWord = word.charAt(0).toUpperCase() + word.slice(1);
//     return otherWord;
//   }


// Second challenge:
// Name: Convert a string to an array

// Instructions:
// Write a function to split a string and convert it into an array of words.

// Examples (Input -> Output):
// * "Robin Singh" ==> ["Robin", "Singh"]

// * "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

// Answer:

function stringToArray(string){
    return string.split(" ")
    }