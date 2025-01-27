/*
Write a function named rainAdvice:
Take a parameter isRaining.
Use a ternary operator to return:
"Stay indoors" if isRaining is true.
"Enjoy the outdoors!" otherwise.
Call the function with different values for isRaining. 
*/
const rainAdvice = (isRaining) => {
  if (isRaining) {
    return "Stay indoors";
  } else {
    return "Enjoy the out door!";
  }
};

const isRaining = true;
console.log(rainAdvice(isRaining));
console.log(rainAdvice());
