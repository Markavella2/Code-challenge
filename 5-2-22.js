// Name: No Loops 2 - you only need one

// Instructions:
// *** No Loops Allowed ***

// You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

// Answer:
function check(a,x){
    if (a.includes(x)){
      return true
    }else{
      return false
    }
  };