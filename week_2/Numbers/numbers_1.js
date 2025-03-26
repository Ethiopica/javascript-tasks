/* /* 
Create two variables:
numString1 with the value "42".
numString2 with the value "3.14".
Use parseInt() to convert numString1 into an integer.
Use parseFloat() to convert numString2 into a floating-point number.
Print the results using console.log() with messages:
"The integer is 42."
"The floating-point number is 3.14." */

const string = "42";
let numString1 = parseInt(string);
console.log("This intiger is " + numString1 + ".");

const string2 = "3.14";
let numString2 = parseFloat(string2);
console.log("This intiger is " + numString2 + ".");

/* new Method */
let numString3 = "42";
let numString4 = "3.14";
let integer3 = parseInt(numString3);
let integer4 = Number.parseInt(numString4);
console.log("The integer is " + integer3 + ".");
console.log("The integer is " + integer4 + ".");
/* comma is to print the result using console.log as a number*/
console.log("The integer is", integer3);
