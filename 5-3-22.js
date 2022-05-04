// Name: L1: Bartender, drinks!

// INstructions:
// Complete the function that receives as input a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".


// Answer:
// function getDrinkByProfession(param){
//     if (param.toLowerCase() === 'jabroni'){
//         return "Patron Tequila"
//       }else if (param.toLowerCase() == "school counselor"){
//         return "Anything with Alcohol"
//       } else if (param.toLowerCase() == "programmer"){
//         return "Hipster Craft Beer"
//       } else if (param.toLowerCase() == "bike gang member"){
//         return "Moonshine"
//       } else if (param.toLowerCase() == "politician"){
//         return "Your tax dollars"
//       } else if (param.toLowerCase() == "rapper"){
//         return "Cristal"
//       } else{
//         return "Beer" 
//       } 
//   }




// Name: Plural

// Instructions:
// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

// You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

// All values will be positive integers or floats, or zero.

// Answer:
function plural(n) {
    if (n === 1){
      return false
    }else{
      return true 
    }
  }