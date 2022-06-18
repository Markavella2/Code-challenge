// Name:
// Determine offspring sex based on genes XX and XY chromosomes

// Instructions:
// The male gametes or sperm cells in humans and other mammals are heterogametic and contain one of two types of sex chromosomes. They are either X or Y. The female gametes or eggs however, contain only the X sex chromosome and are homogametic.

// The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.

// Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.

// If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";

// Answer:
// const chromosomeCheck = sperm => sperm == 'XY' ? "Congratulations! You're going to have a son." : "Congratulations! You're going to have a daughter."



// 2nd Codewar:

// Name: Bin to Decimal

// Instructions:Complete the function which converts a binary number (given as a string) to a decimal number.

// Answer:
// function binToDec(bin){
//     return parseInt(bin,2)
//   }



//3rd Codewar:

//   Name:Grasshopper - Debug sayHello

//   Instructions:
//   Debugging sayHello function
//   The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!
  
//   Example output:
  
//   Hello, Mr. Spock

//   Answer:

  function sayHello(name) {
    return `Hello, ${name}`
  }