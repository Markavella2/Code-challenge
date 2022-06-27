// Name:Gravity Flip

// Instructions:
// If you've completed this kata already and want a bigger challenge, here's the 3D version

// Bob is bored during his physics lessons so he's built himself a toy box to help pass the time. The box is special because it has the ability to change gravity.

// There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). Below is an example of what a box of cubes might look like before and after switching gravity.

// Answer:
// const flip=(d, a)=>{
//     if (d==='R'){
//       return a.sort((a,b) => a-b)
//     }else{
//       return a.sort((a,b) => b-a)
//     }
//   }


//   SECOND CODEWAR

//   Name:
  
// Sum The Strings

//   Instructions:
//   Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

//   Example: (Input1, Input2 -->Output)
  
//   "4",  "5" --> "9"
//   "34", "5" --> "39"
//   "", "" --> "0"
//   "2", "" --> "2"
//   "-5", "3" --> "-2"

//   Answer:
  function sumStr(a,b) {
    let nums = Number(a) + Number(b)
    return nums.toString()
  }