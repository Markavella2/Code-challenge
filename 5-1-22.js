// Name: Sum Mixed Array

// Instructions:
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// Answer:
// function sumMix(x){
//     return x.reduce((a,c) => a + Number(c) , 0)
//     }
    

//Name: UEFA EURO 2016

// Instructions:
// Finish the uefaEuro2016() function so it return string just like in the examples below:

// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

// Answer:

    function uefaEuro2016(teams, scores){
        if (scores[0] > scores[1]){
          return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
        }else if(scores[0] < scores[1]){
          return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
        }else{
          return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
        }
      }