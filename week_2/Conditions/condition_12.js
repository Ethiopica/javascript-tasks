/* 
Write a function named checkFoxLover:
Take two parameters: age and likesFoxes.
If age is 18 or older:
Check if likesFoxes is true.
If true, return "You are an adult who likes foxes!"
Otherwise, return "Not a fox fan, but that’s okay!"
Call the function with different ages and preferences.
 */
const checkFoxLover = (age, likeFoxes) => {
  if (age >= 18) {
    return "You are an adult who loves foxes!";
  } else {
    return "Not a fox fan, but thats okay!";
  }
};
console.log(checkFoxLover(50));
console.log(checkFoxLover(10));
