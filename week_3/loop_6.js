/* 
Write a function named countEvenNumbers:
- Prompt the user to input 20 numbers one by one.
- After all numbers are entered, log how many of them were even.
Display the result in the console. 
*/

const countEvenNumbers = () => {
  let i = 0;
  let count = 0;
  while (i < 20);
  {
    question = Number(prompt("Enter numbers"));
    if (question % 2 === 0) {
      count++;
    }
    i++;
  }
  console.log("Amount of even numbers: ", count);
};
countEvenNumbers();
