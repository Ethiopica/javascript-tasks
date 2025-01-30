/* 
Write a function named sumFromOneToHundred:
- Use a loop to calculate the sum of all numbers from 1 to 100.
Log the final sum in the console.
*/
const sumFromOneToHundred = () => {
  let sum = 0;
  let a = 1;
  while (a <= 100) {
    sum += a;
    a++;
    console.log(sum);
  }
};
sumFromOneToHundred();
