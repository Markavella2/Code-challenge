// Name: Reversed sequence

// Instructions:
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// Answer:


// const reverseSeq = n => {
//     return Array(n).fill(0).map((x,i) => n-i)
//       }


// SECOND CODEWAR

// Name:
// Name on billboard

// Instructions:
// You can print your name on a billboard ad. Find out how much it will cost you. Each letter has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

// You can not use multiplier "*" operator.

// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a letter).

// Answer:
// function billboard(name, price = 30){
//     let ans=0;
//     for (let i=1; i<=name.length; i++){
//       ans += price
//     }
//     return ans
//     } 



//     THIRD CODEWAR


//     Name:
//     What is between?

//     Instructions:
//     Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

//     For example:
    
//     a = 1
//     b = 4
//     --> [1, 2, 3, 4]

//     Answer:
function between(a, b) {
  let ans = []
  for (let i = a; i<=b; i++){
    ans.push(i)
  }
  return ans
}