/*
Write a function named canVote:
Take an age as a parameter.
Return true if the age is 18 or older, otherwise false.
Print "Eligible to vote" or "Not eligible to vote" based on the result of the function. 
*/
const canVote = (age) => {
  if (age >= 18) {
    return "Eligiable to vote!";
  } else {
    return "Not eligiable to vote!";
  }
};
console.log(canVote(18));
console.log(canVote(17));
