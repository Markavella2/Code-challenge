// Name: Convert number to reversed array of digits

// Instructions:
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

// Answer:
function digitize(n) {
    let newN = n.toString().split('').reverse()
    let another = newN.map(x => parseInt(x))
    return (another)
  }