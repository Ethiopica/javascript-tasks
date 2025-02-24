// Exercise 11: Sort the safariAnimals array alphabetically
let safariAnimals = ["Zebra", "Leopard", "Elephant", "Gazelle"];

/*
Sort the safariAnimals array in alphabetical order.
Expected outcome: ['Elephant', 'Gazelle', 'Leopard', 'Zebra']
*/
let order = safariAnimals.sort();
console.log(order);

// Exercise 12: Reverse the order of the safariAnimals array
/*
Reverse the order of the safariAnimals array.
Expected outcome: ['Zebra', 'Leopard', 'Gazelle', 'Elephant']
*/
let reverse = safariAnimals.reverse();
console.log(reverse);
// Exercise 13: Check if "Tiger" is in zooAnimals
/*
Check if the zooAnimals array includes "Tiger".
Expected outcome:
true (if the array contains "Tiger")
false (if it does not)
*/
const findTiger = safariAnimals.includes("Tiger");
console.log(findTiger);
