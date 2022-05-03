// Name: No Loops 2 - you only need one

// Instructions:
// *** No Loops Allowed ***

// You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

// Answer:
// function check(a,x){
//     if (a.includes(x)){
//       return true
//     }else{
//       return false
//     }
//   };


// Name: Multiplication table for number

//  Instructions:
//   Your goal is to return multiplication table for number that is always an integer from 1 to 10.

//   For example, a multiplication table (string) for number == 5 looks like below:
  
//   1 * 5 = 5
//   2 * 5 = 10
//   3 * 5 = 15
//   4 * 5 = 20
//   5 * 5 = 25
//   6 * 5 = 30
//   7 * 5 = 35
//   8 * 5 = 40
//   9 * 5 = 45
//   10 * 5 = 50
//   P. S. You can use \n in string to jump to the next line.
  
//   Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.

//   Answer:
  function multiTable(number) {
    let answer = '';
    for (let i = 1; i <= 10; i++){
    answer += `${i} * ${number} = ${i*number}\n`
   
  }
     return answer.trim('\n')
    }