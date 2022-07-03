// Name:
// Drink About

// Instructions:
// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

// Answer:
// function peopleWithAgeDrink(old) {
//     if (old < 14){
//       return "drink toddy"
//     }else if (old < 18){
//       return "drink coke"
//     }else if (old < 21){
//       return "drink beer"
//     }else{
//       return "drink whisky"
//     }
//   };
  
//   SECOND CODEWAR

//   Name:
//   Student's Final Grade

//   Instructions:
//   Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

//   This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);
  
//   This function should return a number (final grade). There are four types of final grades:
  
//   100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
//   90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
//   75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
//   0, in other cases
//   Examples(Inputs-->Output):
  
//   100, 12 --> 100
//   99, 0 --> 100
//   10, 15 --> 100
  
//   85, 5 --> 90
  
//   55, 3 --> 75
  
//   55, 0 --> 0
//   20, 2 --> 0

//   Answer:
//   function finalGrade (exam, projects) {
//     if ((exam > 90) || (projects > 10)){
//       return 100
//     }else if ((exam > 75) && (projects >= 5)){
//       return 90
//     }else if ((exam > 50) && (projects >= 2)){
//       return 75
//     }else{
//       return 0
//   }
//     }

//     THIRD CODEWAR

//     Name:Is he gonna survive?

//     Instructions:
//     A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

//     Return True if yes, False otherwise :)

//     Answer:
    function hero(bullets, dragons){
        if (bullets/2 >= dragons){
          return true
        }else{
          return false
        }
       }