// Name: Abbreviate a Two Word Name

// Instructions:
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// Answer:
function abbrevName(name){
    let arr = name.split(" ");
    return arr.map(x => x[0]).join(".").toUpperCase();
  
  }