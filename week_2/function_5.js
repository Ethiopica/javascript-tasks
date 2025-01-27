const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
console.log(generateRandomNumber(1, 10));

/* Other way */
