/* Create a variable userInput and assign it the value "25.75 apples".
Use parseFloat() to extract the numeric part from the input.
Use .toFixed() to round the number to 1 decimal place.
Print the result using console.log().
(If userInput doesn't start with a number, the result will be NaN.)
Example outputs:
"25.8" (if the input starts with a valid number).
"NaN" (if the input is invalid).

 */
const userInput = "25.75 apples";
let price = parseFloat(userInput);
console.log(price);
let price1 = price.toFixed(1);
console.log(price1);

/* other way*/
let userInput1 = "25.75 apples";
let extractedNum = parseFloat(userInput1);
let roundedNum = extractedNum.toFixed(1);
console.log(roundedNum);
