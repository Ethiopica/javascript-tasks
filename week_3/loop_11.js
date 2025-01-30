/* 

Write a function named generateMultiplicationTable:
- Take a number (e.g., 5) as input.
- Use a loop to generate the multiplication table for that number.
Log the table in the console.

Example for 5:

5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50
 */
/*
const generateMultiplicationTable = () => {
  let y = 1;
  let product = x * y;
  let x = Number(prompt("Enter number:"));
  for (y = 1; y <= 5; y++) {
    const product = y * x;
  }
  console.log(" x" + "*" + "y" + "=" + product);
};
generateMultiplicationTable();

*/
const generateMultiplicationTable = () => {
  let x = Number(prompt("Enter number:"));
  for (let y = 1; y <= 5; y++) {
    let product = x * y;
    console.log(`${x} * ${y} = ${product}`);
  }
};
generateMultiplicationTable();
