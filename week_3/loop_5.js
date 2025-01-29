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
