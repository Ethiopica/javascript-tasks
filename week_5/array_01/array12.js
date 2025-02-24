// Exercise 16: Merge forestAnimals and farmAnimals arrays
let forestAnimals = ["Deer", "Bear", "Wolf"];
let farmAnimals = ["Cow", "Sheep", "Goat"];

/*
Merge forestAnimals and farmAnimals into a new array.
Expected outcome: ['Deer', 'Bear', 'Wolf', 'Cow', 'Sheep', 'Goat']
*/
const mergedAnimals = forestAnimals.concat(farmAnimals);
console.log(mergedAnimals);
