/* 
Create two variables:
num1 with the value "10".
num2 with the value "notANumber".
Convert num1 and num2 using parseFloat().
Print the sum of num1 and num2 using console.log().
(Note: If one value is NaN, the result will be NaN, which will be printed automatically.)
Example output:
NaN (if the addition involves invalid input).
10 (if both inputs are valid numbers).
*/

const string1 = "10";
let num1 = parseFloat(string1);
const string2 = "notAnumber";
let num2 = parseFloat(string2);
let sum = num1 + num2;
console.log("The sum is : " + sum);
console.log(num1);
console.log(num2);
