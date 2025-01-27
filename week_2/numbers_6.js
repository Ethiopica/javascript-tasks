/* 
1. Use the Math.random() method to generate a random number between 0 and 1
2. Multiply the result by 10 and use Math.floor() to round it down to the nearest whole number.
3. Print the random number using console.log() with a message like: "Your random number is 4." 
*/
const num = Math.random();
let num1 = num * 10;
console.log(num1);
let roundNum = Math.floor(num1);
console.log("Your random number is " + roundNum);

/* other option */
