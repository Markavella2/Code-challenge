// Name: Sort and Star

// Instructions:
// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

// Answer:
// function twoSort(s) {
//     let newSort = s.sort()
//       let word = newSort[0]
//       return word.split('').join('***')
//     }


// Name: Alan Partridge II - Apple Turnover

// Instructions:
// Alan is known for referring to the temperature of the apple turnover as 'Hotter than the sun!'. According to space.com the temperature of the sun's corona is 2,000,000 degrees C, but we will ignore the science for now.

// Your job is simple, if (x) squared is more than 1000, return 'It's hotter than the sun!!', else, return 'Help yourself to a honeycomb Yorkie for the glovebox.'.

// X will be a valid integer number.
// X will be either a number or a string. Both are valid.

// Answer:
function apple(x){
  if (x*x > 1000){
    return 'It\'s hotter than the sun!!'
  }else{
    return 'Help yourself to a honeycomb Yorkie for the glovebox.'
  }
  }