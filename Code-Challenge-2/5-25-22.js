// Name:Beginner - Reduce but Grow

// Instructions:Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// Answer:
// function grow(x){
//     const answer = x.reduce((a,c) => a*c,1)
//     return answer
//     }


// Answer Refactored:
const grow = x => x.reduce((a,c) => a*c,1)