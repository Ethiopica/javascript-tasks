/* Task 1
Create an object `weather` that contains properties `temperature`, `humidity`, and `condition` (e.g., "Sunny", "Rainy").
Write a function that logs `"Take an umbrella!"` if it's rainy.
*/

const weather = {
  temperature: 25,
  humidity: 60,
  condition: "Rainy",
};

function checkWeather(weather) {
  if (weather.condition === "Rainy") {
    console.log("Take an umbrella!");
  } else {
    console.log("Enjoy your day!");
  }
}

checkWeather(weather);

// Your code here

/* Task 2
Define an object named `shoppingCart` that contains an array of items.
Each item has `name`, `price`, and `quantity`.
Write a function that calculates the total price of all items in the cart.
*/

const shoppingCart = {
  items: [
    { name: "Apple", price: 1.5, quantity: 4 },
    { name: "Banana", price: 0.8, quantity: 6 },
    { name: "Orange", price: 1.2, quantity: 3 },
  ],
};

function calculateTotal(cart) {
  return cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}

console.log("Total Price: $" + calculateTotal(shoppingCart).toFixed(2));

/* Task 3
Create an array of objects named `restaurants`, each with properties `name`, `cuisineType`, and `rating`.
Write a function that returns only the restaurants with a rating of 4 or higher.
*/

const restaurants = [
  { name: "Pasta Paradise", cuisineType: "Italian", rating: 4.5 },
  { name: "Panda", cuisineType: "Japanese", rating: 4.7 },
  { name: "Hes Burger ", cuisineType: "Finnish", rating: 3.8 },
  { name: "Tajmehal", cuisineType: "Indian", rating: 4.2 },
  { name: "Taco Bell", cuisineType: "Mexican", rating: 3.5 },
];

function getTopRatedRestaurants(restaurants) {
  return restaurants.filter((restaurant) => restaurant.rating >= 4);
}
console.log(getTopRatedRestaurants(restaurants));
/* Task 4
Define an object named `bankAccount` with properties `accountHolder`, `balance`, and `transactions` (an array of numbers).
Write a function that calculates the total balance after all transactions.
*/

const bankAccount = {
  accountHolder: "Elias Bekele",
  balance: 3000,
  transactions: [-200, 500, -100, 300, -50],
};

function calculateFinalBalance(account) {
  const totalTransactions = account.transactions.reduce(
    (total, amount) => total + amount,
    0
  );
  return account.balance + totalTransactions;
}

console.log("Final Balance: $" + calculateFinalBalance(bankAccount));

/* Task 5
Create an array `students` where each student has `name`, `scores` (array of numbers), and `averageScore` (initially null).
Write a function that calculates and updates each student's `averageScore`.
*/
const students = [
  { name: "Elias", scores: [85, 80, 78], averageScore: null },
  { name: "Selam", scores: [72, 88, 95], averageScore: null },
  { name: "Dave", scores: [79, 80, 65], averageScore: null },
];

function calculateAverageScores(students) {
  students.forEach((student) => {
    const total = student.scores.reduce((sum, score) => sum + score, 0);
    student.averageScore = total / student.scores.length;
  });
}

calculateAverageScores(students);
console.log(students);

/* Task 6
Define an array named `courses`, each containing `courseName`, `instructor`, and `studentsEnrolled`.
Write a function that logs the course name of any course with more than 30 students.
*/

const courses = [
  {
    courseName: "JavaScript Basics",
    instructor: "Elias Bekele",
    studentsEnrolled: 25,
  },
  {
    courseName: "React basics",
    instructor: "Dawit Solomon",
    studentsEnrolled: 40,
  },
  {
    courseName: "Java Script",
    instructor: "Margit Tennosar",
    studentsEnrolled: 35,
  },
  { courseName: "PHP", instructor: "Martin", studentsEnrolled: 28 },
];

function logPopularCourses(courses) {
  courses
    .filter((course) => course.studentsEnrolled > 30)
    .forEach((course) => console.log(course.courseName));
}

logPopularCourses(courses);
/* Task 7
Create an object `pet` with properties `species`, `name`, and `isVaccinated`.
Write a function that returns `"Vaccination required"` if the pet is not vaccinated.
*/

const pet = {
  species: "Cat",
  name: "Bob",
  isVaccinated: false,
};

function checkVaccination(pet) {
  if (!pet.isVaccinated) {
    return "Vaccination required.";
  } else {
    return "Pet is vaccinated.";
  }
}

console.log(checkVaccination(pet));

/* Task 8
Define an object named `city` with properties `name`, `population`, and `landmark`.
Write a function that logs `"This is a big city!"` if the population exceeds 1,000,000.
*/

const city = {
  name: "New York",
  population: 8000000,
  landmark: "Statu of Libirity",
};

function checkCityPopulation(city) {
  if (city.population > 1000000) {
    console.log("This is a big city!");
  } else {
    console.log("This is a small city.");
  }
}

checkCityPopulation(city);

/* Task 9
Create an array `transactions`, where each transaction is an object with `type` ("credit" or "debit") and `amount`.
Write a function that calculates the total balance after processing all transactions.
*/

const transactions = [
  { type: "credit", amount: 1000 },
  { type: "debit", amount: 600 },
  { type: "credit", amount: 500 },
  { type: "debit", amount: 150 },
];

function calculateBalance(transactions) {
  return transactions.reduce((balance, transaction) => {
    if (transaction.type === "credit") {
      return balance + transaction.amount;
    } else if (transaction.type === "debit") {
      return balance - transaction.amount;
    }
    return balance;
  }, 0);
}

console.log("Total Balance: $" + calculateBalance(transactions));

/* Task 10
Define an object named `foxPack` containing an array of fox objects.
Each fox has `name`, `age`, and `furColor`.
Write a function that filters out only the foxes that are younger than 2.
*/

const foxPack = {
  foxes: [
    { name: "Red", age: 1, furColor: "red" },
    { name: "Flufy", age: 3, furColor: "gray" },
    { name: "Garfild", age: 0.5, furColor: "orange" },
    { name: "Beast", age: 2, furColor: "black" },
  ],
};

function filterYoungFoxes(foxPack) {
  return foxPack.foxes.filter((fox) => fox.age < 2);
}

console.log(filterYoungFoxes(foxPack));

/* Task 11
Create an object `gameCharacter` with properties `name`, `level`, `health`, and `inventory` (an array).
Write a function that logs all items in the character’s inventory.
*/

const gameCharacter = {
  name: "Hit Man",
  level: 5,
  health: 100,
  inventory: ["AKA", "Vest", "Medikit", "Bazuka"],
};

function logInventory(character) {
  console.log("Inventory of " + character.name + ":");
  character.inventory.forEach((item) => {
    console.log(item);
  });
}

logInventory(gameCharacter);

/* Task 12
Define an array named `employees`, where each employee has a `name`, `role`, and `workingHours`.
Write a function that finds and logs employees who work more than 40 hours.
*/

const employees = [
  { name: "Elias", role: "CEO", workingHours: 45 },
  { name: "Binyam", role: "Marketing Manager", workingHours: 38 },
  { name: "Selam", role: "Project Manager", workingHours: 42 },
  { name: "Dave", role: "Intern", workingHours: 30 },
];

function findOverworkedEmployees(employees) {
  const overworkedEmployees = employees.filter(
    (employee) => employee.workingHours > 40
  );
  overworkedEmployees.forEach((employee) => {
    console.log(
      `${employee.name} works ${employee.workingHours} hours as a ${employee.role}`
    );
  });
}

findOverworkedEmployees(employees);

/* Task 13
Create an array `musicAlbums` where each album has `title`, `artist`, and `releaseYear`.
Write a function that logs albums released after 2000.
*/

const musicAlbums = [
  { title: "Thriller", artist: "Michael Jackson", releaseYear: 1982 },
  { title: "Future Nostalgia", artist: "Dua Lipa", releaseYear: 2020 },
  { title: "Reputation", artist: "Taylor Swift", releaseYear: 2017 },
  { title: "Back in Black", artist: "AC/DC", releaseYear: 1980 },
  { title: "Lover", artist: "Taylor Swift", releaseYear: 2019 },
];

function logAlbumsAfter2000(albums) {
  const albumsAfter2000 = albums.filter((album) => album.releaseYear > 2000);
  albumsAfter2000.forEach((album) => {
    console.log(
      `${album.title} by ${album.artist}, released in ${album.releaseYear}`
    );
  });
}

logAlbumsAfter2000(musicAlbums);

/* Task 14
Define an array named `cars`, each containing `brand`, `model`, and `horsepower`.
Write a function that finds and returns the car with the highest horsepower.
*/

const cars = [
  { brand: "Ford", model: "Mustang", horsepower: 450 },
  { brand: "Chevrolet", model: "Camaro", horsepower: 455 },
  { brand: "Dodge", model: "Challenger", horsepower: 485 },
  { brand: "Tesla", model: "Model S", horsepower: 670 },
];

function findCarWithHighestHorsepower(cars) {
  return cars.reduce((maxHorsepowerCar, currentCar) => {
    return currentCar.horsepower > maxHorsepowerCar.horsepower
      ? currentCar
      : maxHorsepowerCar;
  });
}

const highestHorsepowerCar = findCarWithHighestHorsepower(cars);
console.log(
  `The car with the highest horsepower is the ${highestHorsepowerCar.brand} ${highestHorsepowerCar.model} with ${highestHorsepowerCar.horsepower} horsepower.`
);

/* Task 15
Create an array of `airports`, where each airport has `name`, `country`, and `flightsPerDay`.
Write a function that finds the airport with the most daily flights.
*/

const airports = [
  { name: "Heathrow", country: "UK", flightsPerDay: 1300 },
  { name: "Los Angeles International", country: "USA", flightsPerDay: 1500 },
  { name: "Tokyo Narita", country: "Japan", flightsPerDay: 1200 },
  { name: "Dubai International", country: "UAE", flightsPerDay: 1600 },
  { name: "Frankfurt Airport", country: "Germany", flightsPerDay: 1100 },
];

function findAirportWithMostFlights(airports) {
  return airports.reduce((maxFlightsAirport, currentAirport) => {
    return currentAirport.flightsPerDay > maxFlightsAirport.flightsPerDay
      ? currentAirport
      : maxFlightsAirport;
  });
}

const airportWithMostFlights = findAirportWithMostFlights(airports);
console.log(
  `The airport with the most daily flights is ${airportWithMostFlights.name} in ${airportWithMostFlights.country}, with ${airportWithMostFlights.flightsPerDay} flights per day.`
);
