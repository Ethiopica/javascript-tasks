/* 
Write a function named countEvenNumbers:
- Prompt the user to input 20 numbers one by one.
- After all numbers are entered, log how many of them were even.
Display the result in the console. 
*/

const calculateAverageSpeed = () => {
  let distance;
  let time;
  let speed;
  while (distance !== 0) {
    distance = Number(prompt("Enter distance in Km: "));
    if (distance === 0) {
      break;
    }

    time = Number(prompt("Enter time in Hours: "));
    speed = distance / time;
    console.log("The average speed is: ", speed);
  }
};
calculateAverageSpeed();
