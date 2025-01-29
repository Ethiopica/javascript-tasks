const logEvenNumbers = () => {
  for (i = 2; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(i, 100 - i);
    }
  }
};
logEvenNumbers();
