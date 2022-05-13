// Name: Get number from string

// Instructions:
// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

// Answer:

const getNumberFromString = s => Number(s.match(/\d/g).join(''))