/* Sum of all even numbers*/

const suOfAlE = () => {
  let sum = 0;
  let i;
  for (i = 0; i <= 100; i++) {
    sum += i;
    if (i % 2 === 0) console.log(i);
  }
};
suOfAlE();
