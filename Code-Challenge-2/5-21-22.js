// Name: Array plus array

// Instructions:
// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// Answer:
function arrayPlusArray(arr1, arr2) {
    const newArr1= arr1.reduce((a,c) => a+c,0)
    const newArr2 = arr2.reduce((a,c) => a+c,0)
    return newArr1 + newArr2
  }