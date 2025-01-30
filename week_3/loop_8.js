/* 
Write a function named findMinMax:
- Ask the user how many numbers they want to input.
- Then prompt them to enter that many numbers.
- Once all numbers are entered, determine and log:
- The smallest number.
- The largest number.
Display the results in the console. 
*/

const findMinMax = () => {
  let smallestNum = -Infinity;
  let largestNum = Infinity;
  while (true) {
    let numCount = Number(prompt("How many numbers do you wish to enter?"));
    if (numCount === 0) {
      break;
    }
    for (let i = 0; i < numCount; ) {
      let userInput = Number(prompt("Enter your numbers:"));
      if (numCount === userInput) {
        break;
        smallestNum = Math.min(userInput);
        largestNum = Math.max(userInput);
      }
      console.log("The larges number is: " + largestNum);
      console.log("The smallest number is: " + smallestNum);
    }
  }
};
findMinMax();
