/* /* Create a variable price and assign it the value 19.56789.
Use .toFixed() to:
Round the price to 2 decimal places.
Round the price to no decimal places.
Print both results using console.log() with messages:
"Price with 2 decimals: 19.57"
"Price with no decimals: 20"
 */

let price = 19.56789;
let fruitPrice = price.toFixed(2);
console.log("Price with 2 decimals: " + fruitPrice + ".");

let price1 = 19.56789;
let fruitPrice1 = Math.round(price1);
console.log("Price with no decimals: " + fruitPrice1 + ".");

/* There is another way to do this : Check the GitHub from Margarit */
