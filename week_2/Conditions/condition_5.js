/* 
Write a function named checkAnimal:
Take a parameter animalType.
Use a ternary operator to return:
"You have a clever companion!" if animalType is "fox".
"Not a fox, but still cool!" otherwise.
Call the function with values like "fox" and "cat". 
*/

const checkAnimal = (animalType) => {
  if (animalType) {
    return " You have a clever companion!";
  } else {
    return " Not a fox, but still cool!";
  }
};
console.log(checkAnimal(true));
console.log(checkAnimal(false));
