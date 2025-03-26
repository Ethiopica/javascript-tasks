/* 
Write a function named planAdventure:
Take three parameters: isWeekend, isSunny, and likesFoxes.
Use logical operators:
If it’s the weekend AND sunny AND likes foxes, return "Perfect day for a fox adventure!"
If it’s the weekend OR sunny, return "Good day, but not perfect."
Otherwise, return "Maybe another day."
Call the function with different combinations of conditions. 
*/
const planAdventure = (isWeekend, isSunny, likesFoxes) => {
  if (isWeekend && isSunny && likesFoxes) {
    return "Perfect day for a fox adventure!";
  } else if (isWeekend || isSunny) {
    return "Good day, but not perfect";
  } else {
    return "Maybe another day.";
  }
};
const isWeekend = true;
const isSunny = true;
const likeFoxes = true;

console.log(planAdventure(isWeekend, isSunny, likeFoxes));
console.log(planAdventure(isWeekend, isSunny));
