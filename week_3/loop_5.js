/* 
Write a function named calculateAverageUntilZero:
- Continuously prompt the user to input numbers.
- Stop asking for inputs when the user enters 0.
- Calculate and log the average of all entered numbers in the console once the loop ends.
 */

const calculateAverageUntilZero = () => {
  let sum = 0;
  let count = 0;
  let average = 0;
  while (true) {
    let userInput = Number(prompt("Enter a number: "));
    if (userInput === 0) {
      break;
    }
    sum += userInput;
    count++;
    average = sum / count;
    console.log("The average is: ", average);
  }
};
calculateAverageUntilZero();
