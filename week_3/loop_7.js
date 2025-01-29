/* 
Write a function named sumAndAverage:
- Ask the user to input ten numbers.
- Calculate and log:
    - The sum of the numbers.
    - The average of the numbers.
    - The smallest and largest numbers.
Display all results in the console.
*/

const sumAndAverage = () => {
  let sum = 0;
  let count = 0;
  let largNum = 0;
  let minNum = 0;
  let average = 0;

  for (let i = 0; i < 10; i++) {
    let userInput = Number(prompt("Enter number: "));

    sum += userInput;
    average = sum / userInput;
    largNum = Math.max(userInput);
    minNum = Math.min(userInput);
  }

  console.log("The sum of the numbers is: " + sum);
  console.log("The average of the numbers is: " + average);
  console.log("The larges number is: " + largNum);
  console.log("The smallest number is: " + minNum);
};
sumAndAverage();
