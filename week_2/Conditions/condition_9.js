/* 
Write a function named canEnterEvent:
Take two parameters: age and hasID.
If age is 18 or older AND hasID is true, return "You can enter the event."
Otherwise, return "You cannot enter."
Call the function with different combinations of age and hasID. 
*/
const canEnterEvent = (age, hasID) => {
  if (age && hasID) {
    return "You can enter the event.";
  } else {
    return "You cannot enter.";
  }
};
console.log(canEnterEvent(true, true));
console.log(canEnterEvent(true, false));
console.log(canEnterEvent(false, true));
console.log(canEnterEvent(false, false));
