// Name: Square(n) Sum

// Instructions:
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// Answer:
// const squareSum = numbers => numbers.reduce((a,c) => a + c**2, 0)


// Code Challenge 2

// Name: Count of positives/sum of negatives

// Instructions:
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// Answer:
function countPositivesSumNegatives(input) {
    let x = 0;
    let y = 0;
    if (input === null || input.length === 0) {
      return [];
    } else {
      input.forEach((num) => num > 0 ? x++ : y += num);
    }
    return [x , y];
}