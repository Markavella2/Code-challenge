// Name: Object Oriented Piracy

// Instructions:
// Ahoy matey!

// You are a leader of a small pirate crew. And you have a plan. With the help of OOP you wish to make a pretty efficient system to identify ships with a heavy booty on board.

// Unfortunattely for you, people weigh a lot this days, so how do you know if a ship if full of gold and not people?

// You begin with writing a generic Ship class / struct:

// function Ship(draft,crew) {
//  this.draft = draft;
//  this.crew = crew;
// }
// Every time your spies see a new ship enter the dock, they will create a new ship object based on their observations:

// draft - an estimate of the ship's weight based on how low it is in the water
// crew - the count of crew on board
// var titanic = new Ship(15, 10);
// Taking into account that an average crew member on board adds 1.5 units to the draft, a ship that has a draft of more than 20 without crew is considered worthy to loot. Any ship weighing that much must have a lot of booty!

// Add the method

// isWorthIt
// to decide if the ship is worthy to loot. For example:

// titanic.isWorthIt() // return false
// This Kata teaches you the very basic of method creation.

// Good luck!


// Answer:

// class Ship{
//     constructor(draft, crew){
//       this.draft = draft;
//       this.crew = crew;
//     }
//     isWorthIt(){
//       return this.draft - (this.crew*1.5) > 20
//     }
//   }

  
//   Second CodeWar:

//   Name:Difference of Volumes of Cuboids


//   Instructions:
//   In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.

//   Answer:

  function findDifference(a, b) {
    let aa = a.reduce((a,c) => a*c,1)
    let bb = b.reduce((a,c) => a*c,1)
    let c = aa - bb
    if (c < 0){
      return c*-1
    }
    return c
  }
  