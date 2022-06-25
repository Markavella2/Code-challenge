// Name:
// Cat years, Dog years

// Instructions:
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that


// Answer:
// var humanYearsCatYearsDogYears = function(humanYears) {
//     let cy = 24+(humanYears-2)*4;
//     let dy = 24+(humanYears-2)*5;
//     if (humanYears == 1){
//        return [1,15,15]
//     }else if (humanYears == 2){
//        [2, 24, 24]
//     }else if (humanYears >= 3){
//        [humanYears, cy, dy]
//     }
//     return [humanYears, cy, dy];
//   }


//   SECOND CODEWAR

//   Name:
//   Enumerable Magic #20 - Cascading Subsets

//   Instructions:
//   Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

//   each_cons([1,2,3,4], 2)
//     #=> [[1,2], [2,3], [3,4]]
  
//   each_cons([1,2,3,4], 3)
//     #=> [[1,2,3],[2,3,4]]
    
//   As you can see, the lists are cascading; ie, they overlap, but never out of order.

//   Answer:

//   function eachCons(array, n) {
//     return array.map((x,y) => array.slice(y, y+n)).filter((x => x.length == n))
//     }


//     THIRD CODEWAR

//     Name: Is it even?

//     Instructions:
//     In this Kata we are passing a number (n) into a function.

//     Your code will determine if the number passed is even (or not).
    
//     The function needs to return either a true or false.
    
//     Numbers may be positive or negative, integers or floats.
    
//     Floats with decimal part non equal to zero are considered UNeven for this kata.

//     Answer:
    function testEven(n) {
        if (n%2==0){
          return true
        }else{
          return false
        }
     }