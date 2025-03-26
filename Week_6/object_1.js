/* Task 1
Create a JavaScript array named `library` that represents a collection of books.
Each book should have properties for `title`, `author`, and `yearPublished`.
Add at least two book objects to this collection.
*/

const library = [
  {
    title: "Management Challenges for 21st century",
    autor: "Peter F. Drucker",
    yearPublished: 1999,
  },
  {
    title: "Organizational Behavior",
    autor: "Stephen P. Robbins",
    yearPublished: 2013,
  },
  {
    title: "E-commerce",
    autor: "Kenneth C. Laudon",
    yearPublished: 2017,
  },
];

/* Access the `title` of the first book in the `library` collection and log it to the console.
  Modify the `yearPublished` for the second book in the collection to a new year, then log the updated book object to the console.*/
library[1].yearPublished = 2020;
console.log(library[0].title);
console.log(library[1].title);
console.log(library[2].title);
/* or */
library.forEach((book) => {
  console.log(book.title);
});
/* Task 3
  Use dot notation to add a new property `genres` (an array of strings) to the first book in the `library`.
  Use bracket notation to add a boolean property `isAvailable` to the same book, indicating its availability.
  */

library[0].genere = "Leadership"; // adding gener in the first book
library[1].genere = "Behavioral Sceince";
library[2].genere = "Commerce";
library[0]["isAvailable"] = true; // check weather it is available or not
console.log(library[0].genere); // display gener of the firat book in the console
console.log(library[1].genere);
console.log(library[2].genere);
console.log(library[0]); // display the first bok or array on the console.

/* Task 4
Define a constructor function named `Book` that can create new book objects with properties for `title`, `author`, `yearPublished`, and `genres`.
Using the `Book` constructor, create a new book object with the provided input values and add it to the `library` collection.
*/

function book(title, author, yearPublished, genere) {
  this.title = title;
  this.author = author;
  this.yearPublished = yearPublished;
  this.genere = genere;
}

const newBook1 = new book(
  "Financial Markets and Institutions",
  "Frederic S. Mishkin",
  2018,
  "Finance"
);
library.push(newBook1);

library.forEach((book) => {
  console.log(book.title);
});
library.forEach((book) => {
  console.log(book.genere);
});
library.forEach((book) => {
  console.log(book.yearPublished);
});
library.forEach((book) => {
  console.log(book.autor);
});
library.forEach((book) => {
  console.log(book.genere);
});

/* Task 5
Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
The function should return a new book object with these properties.
Test `createBook` by creating a new book object with user-provided input and logging the new book object to the console.
*/
// Function to create a book object
function createBook(title, author, yearPublished, genres) {
  return {
    title: title,
    author: author,
    yearPublished: yearPublished,
    genres: genres,
  };
}

// Test the function by prompting the user for input and logging the new book object to the console
const title = prompt("Enter the title of the book:");
const author = prompt("Enter the author of the book:");
const yearPublished = prompt("Enter the year the book was published:");
const genresInput = prompt("Enter the genres of the book (comma-separated):");

// Convert the genres input into an array
const genres = genresInput.split(",").map((genre) => genre.trim());

// Create the new book object
const newBook = createBook(title, author, yearPublished, genres);

// Log the new book object to the console
console.log(newBook);

/* Task 6
Convert the `library` collection to a JSON string and log it to the console.
Parse the JSON string back into a JavaScript object and log the first book's title to the console.
*/

const library = [
  {
    title: "Management Challenges for 21st century",
    author: "Peter F. Drucker",
    yearPublished: 1999,
  },
  {
    title: "Organizational Behavior",
    author: "Stephen P. Robbins",
    yearPublished: 2013,
  },
  {
    title: "E-commerce",
    author: "Kenneth C. Laudon",
    yearPublished: 2017,
  },
];

// Convert the library collection to a JSON string
const libraryJSON = JSON.stringify(library);

// Log the JSON string to the console
console.log("Library as JSON string:", libraryJSON);

// Parse the JSON string back into a JavaScript object
const parsedLibrary = JSON.parse(libraryJSON);

// Log the title of the first book from the parsed object
console.log("First book's title:", parsedLibrary[0].title);

/* Task 7
Create an array named `students`, where each student has a `name`, `age`, and `grade`.
Log the name of any student who has a grade higher than 90.
*/

const students = [
  {
    name: "Elias",
    age: 25,
    grade: 95,
  },
  {
    name: "Peter",
    age: 23,
    grade: 90,
  },
  {
    name: "Helen",
    age: 35,
    grade: 67,
  },
];

const highGradeStudents = students.filter((student) => student.grade >= 90);

// Log the name of each student with grade >= 90 using forEach
highGradeStudents.forEach((student) => {
  console.log(student.name);
});

/* Task 8
Define an object named `car` with properties for `brand`, `model`, `year`, and `isElectric`.
Use a function to check if the car is electric. If it is, log `"This car is eco-friendly!"`. Otherwise, log `"This car runs on fuel."`
*/
const car = {
  brand: "BMW",
  model: "X5",
  year: 2023,
  isElectric: false,
};

// Function to check if the car is electric
function checkCarType(car) {
  if (car.isElectric) {
    console.log("This car is eco-friendly!");
  } else {
    console.log("This car runs on fuel.");
  }
}
// Call the function to check the car's type
checkCarType(car);

/* Task 9
Create a `movies` array where each movie is an object with properties for `title`, `director`, and `rating`.
Write a loop that logs all movie titles with a rating higher than 8.
*/

const movies = [
  {
    title: "Johnny English",
    director: "Oliver Parker",
    rating: 6.3,
  },
  {
    title: "Transformers",
    director: "Michael Bay",
    rating: 7.1,
  },
  {
    title: "Friends",
    director: "David Crane",
    rating: 8.9,
  },
];
const higherRatingMovies = movies.filter((movie) => movie.rating >= 8.5);
higherRatingMovies.forEach((movie) => {
  console.log("The highest rated movie is: " + movie.title);
});
/* Task 10
Write a function `findOldestCar` that takes an array of car objects and returns the car with the earliest `year`.
*/

const cars = [
  {
    brandName: "Lexus RX300 ",
    yearOfRelease: 1999,
  },
  {
    brandName: "Chevy Impala",
    yearOfRelease: 1957,
  },
  {
    brandName: "Nissan Juke",
    yearOfRelease: 2020,
  },
];

function findOldestCar(cars) {
  return cars.reduce((oldest, car) => {
    return car.yearOfRelease < oldest.yearOfRelease ? car : oldest;
  }, cars[0]); // Initial value is the first car in the array
}
const oldestCar = findOldestCar(cars);
console.log("The oldes car is: " + oldestCar.brandName);
/* Task 11
Define a `userProfiles` array containing objects representing users.
Each user should have a `username`, `email`, and `isAdmin` property.
Write a function that filters and returns only the users who are administrators.
*/

const userProfiles = [
  {
    username: "Alex",
    email: "alex.yobo@edu.bc.fi",
    isAdmin: false,
  },
  {
    username: "Elias",
    email: "elias.tekle@edu.bc.fi",
    isAdmin: true,
  },
  {
    username: "Hanna",
    email: "hanna.mengistu@edu.bc.fi",
    isAdmin: false,
  },
  {
    username: "Rahel",
    email: "rahel.abebe@edu.bc.fi",
    isAdmin: true,
  },
];

// Function to filter and return only administrators
function getAdmins(users) {
  return users.filter((user) => user.isAdmin === true);
}

// Call the function and log the result
const admins = getAdmins(userProfiles);
admins.forEach((admin) => {
  console.log(admin.username);
});

/* Task 12
Define an array named `orders`, where each order contains `orderId`, `customerName`, `totalAmount`, and `status` (either "pending" or "completed").
Write a function that returns only the completed orders.
*/

// Your code here
let orders = [
  { orderId: 1, customerName: "Elias", totalAmount: 15, status: "pending" },
  { orderId: 2, customerName: "Shiab", totalAmount: 25, status: "completed" },
  { orderId: 3, customerName: "Margit", totalAmount: 13, status: "pending" },
  { orderId: 4, customerName: "Sara", totalAmount: 11, status: "completed" },
  { orderId: 5, customerName: "Hana", totalAmount: 10, status: "completed" },
];
function checkStatus(orders) {
  return orders.filter((order) => order.status === "completed"); // Filter orders where the status is 'completed'
}
let readyItems = checkStatus(orders);

readyItems.forEach((order) => {
  console.log(order.customerName);
}); // Print customer names for orders that are completed

/* Task 13
Create an object named `smartphone` with properties for `brand`, `model`, `batteryLife`, and `is5GEnabled`.
Write a function that logs `"This phone supports 5G!"` if `is5GEnabled` is `true`, otherwise logs `"This phone does not support 5G."`
*/

// Your code here

const smartPhone = {
  brand: "Samsung",
  model: "Galaxy S",
  batteryLife: "Good",
  is5GEnabled: false,
};

function support5G(smartPhone) {
  if (smartPhone.is5GEnabled) {
    return "This phone supports 5G.";
  } else {
    return "This phone does not support 5G.";
  }
}

console.log(support5G(smartPhone));

/* Task 14
Define an object named `fox` with properties `name`, `age`, and `habitat`.
Write a function that logs `"This fox is young"` if its age is under 3, `"This fox is an adult"` if 3 or older.
*/

// Your code here
const fox = {
  name: "Mini",
  age: 2,
  habitat: "mountain",
};

function checkAge(fox) {
  if (fox.age < 3) {
    return "This fox is young.";
  } else {
    return "This fox is adult.";
  }
}

console.log(checkAge(fox));
/* Task 15
Define an array named `employees`, where each employee has `name`, `position`, and `salary`.
Write a function that calculates the total salary of all employees in the company.
*/

// Your code here

const employees = [
  { name: "Elias", position: "Junior web developer", salary: 3500 },
  { name: "Hana", position: "Junior Back end developer", salary: 2500 },
  { name: "Beza", position: "Senior Graphic designer", salary: 4000 },
  { name: "Sepö", position: "CEO", salary: 7000 },
];

function totalSalary(employees) {
  // Use reduce to sum up all the salaries
  return employees.reduce((sum, employee) => sum + employee.salary, 0);
}

let total = totalSalary(employees);

console.log("Total salary of all employees:", total);
