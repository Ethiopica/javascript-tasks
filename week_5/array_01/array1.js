/* 
Initial data:
let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];

1. Loop through the `teamMembers` array and log each name to the console.  
2. Remove the first member of the array.  
3. Remove the last member of the array.  
4. Add a new member "Alex" to the front of the array.  
5. Append a new member "Linda" to the end of the array.  
6. Create a new array that excludes the first two members, keeping the original array unchanged.  
7. Find the index of "Mike" in the array.  
8. Try to find the index of "Jake" (who is not in the array).  
9. Replace "Mike" with "Carol" and "Bruce" in the same position.  
10. Concatenate "Bob" to the array and create a new array, keeping the original array unchanged.  
11. Copy the entire `teamMembers` array using `slice` and store it in a new variable.  
12. Create a `newMembers` array with `"Tina"` and `"Dean"`, then merge it with `teamMembers` into a new array.  
13. Find all occurrences of "John" in the array and store their positions in a new array.  
14. Transform all names in the array to be uppercase while keeping the original array unchanged.  
15. Sort `teamMembers` in alphabetical order.  
16. Reverse the `teamMembers` array.  
17. Check if at least one member in the array is named "John".  
18. Check if all names in the array have more than three letters. 
*/

let teamMembers = ["John", "Emily", "Mike", "Sarah"];

teamMembers.forEach((teamMember) =>
  console.log(`Team Memebr: ${teamMember}`)
); /* 1. Loop through the `teamMembers` array and log each name to the console.  */

teamMembers.shift();
console.log(teamMembers); /*Remove the first member of the array.*/

teamMembers.pop();
console.log(teamMembers); /*Remove the last member of the array. */

teamMembers.unshift("Alex");
console.log(teamMembers); /*Add a new member "Alex" to the front of the array.*/

teamMembers.push("Linda");
console.log(
  teamMembers
); /*Append a new member "Linda" to the end of the array. */

let newArray = teamMembers.slice(2, 6);
console.log(
  newArray
); /* Create a new array that excludes the first two members, keeping the original array unchanged. */

let index = teamMembers.indexOf("Mike");
console.log(index); /* Find the index of "Mike" in the array. */

let index1 = teamMembers.indexOf("Jake");
console.log(index1);

teamMembers.splice(2, 1, "Carol");
console.log(
  teamMembers
); /* Replace "Mike" with "Carol" and "Bruce" in the same position.  */

const arr1 = ["Bob"];
const arr2 = ["John", "Emily", "Mike", "Sarah"];
const combind = arr1.concat(arr2);
console.log(
  combind
); /* Concatenate "Bob" to the array and create a new array, keeping the original array unchanged. */

let copied = teamMembers.slice(0, 5);
console.log(
  copied
); /* Copy the entire `teamMembers` array using `slice` and store it in a new variable.*/

const newMembers = ["Tina", "Dean"];
const newArry = newMembers.concat(teamMembers);
console.log(
  newArry
); /*Create a `newMembers` array with `"Tina"` and `"Dean"`, then merge it with `teamMembers` into a new array.*/

const member = teamMembers.find((member) => member == ["John"]);
console.log(member);
const position = member.indexOf("John");
console.log(
  position
); /* Find all occurrences of "John" in the array and store their positions in a new array.*/

const allCapital = teamMembers.map((member) => member.toUpperCase());
console.log(
  allCapital
); /* Transform all names in the array to be uppercase while keeping the original array unchanged.*/

const sorrted = teamMembers.sort();
console.log(sorrted); /*Sort `teamMembers` in alphabetical order.*/

const sorrted1 = teamMembers.sort();
teamMembers.reverse();
console.log(sorrted); /* Reverse the `teamMembers` array. */

const name = teamMembers.some((member) => member === "John");
console.log(
  name
); /* Check if at least one member in the array is named "John".*/

const allName = teamMembers.every((member) => member.length >= 3);
console.log(
  allName
); /* Check if all names in the array have more than three letters. */
