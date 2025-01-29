/* 
Write a function named askToContinue:
- Prompt the user to enter a number.
- Then, ask: "Do you want to continue giving numbers? (y/n)".
- If the user answers "y", ask for another number.
- If the user answers "n", stop asking and log the average of all entered numbers in the console. 
*/

const askToContinue = () => {
  let sum = 0;
  let count = 1;
  while (true) {
    let userInput = Number(prompt("Enter a number:"));
    sum += userInput;
    count++;
    let continueResponse = prompt(
      "Do you want to continue giving numbers? (y/n)"
    );
    if (continueResponse === "n") {
      let average = sum / count;
      console.log("The average of all entered numbers is: ", average);
      break;
    }
  }
};

askToContinue();
