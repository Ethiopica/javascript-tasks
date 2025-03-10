/* Task 1
Create a JavaScript object named `student` with properties:
- `name`
- `age`
- `grade`
Convert the object into a JSON string and log it to the console.
*/

const student = {
  name: "Elias",
  age: 26,
  grade: "A",
};
const obj = JSON.stringify(student);
console.log(obj);

/* Task 2
Take the JSON string from Task 1 and convert it back into a JavaScript object.
Log the `name` property of the converted object.
*/
const jsonString = '{"name": "Elias", "age": 26, "grade": "A"}';
const studentObject = JSON.parse(jsonString);
console.log(studentObject);

/* Task 3
Create an array named `classroom`, where each element is an object representing a student.
Each student object should have properties for `name`, `age`, and `grade`.
Convert the array into a JSON string and log it to the console.
*/

// Your code here
const classRoom = [
  { name: "Elias", age: 26, grade: "A" },
  { name: "Jane", age: 22, grade: "B" },
  { name: "Bob", age: 24, grade: "C" },
  { name: "Alice", age: 23, grade: "A" },
];
const classObject = JSON.stringify(classRoom);
console.log(classObject);

/* Task 4
Take the JSON string from Task 3, convert it back into a JavaScript array,
and log the names of all students in the classroom.
*/
const classString =
  '[{"name":"Elias","age":26,"grade":"A"},{"name":"Jane","age":22,"grade":"B"},{"name":"Bob","age":24,"grade":"C"},{"name":"Alice","age":23,"grade":"A"}]';
const classObjectA = JSON.parse(classString);
console.log(classObjectA);
/* Task 5
Create an object named `weatherReport` with the following properties:
- `temperature`
- `humidity`
- `conditions` (e.g., "Sunny", "Rainy")

Convert the object into a JSON string and store it in a variable named `weatherJSON`.
Then, parse the JSON string back into an object and log the `conditions` property.
*/

const weatherReport = {
  temprature: 25,
  humidity: 60,
  conditions: ["Sunny", "Rainy"],
};
const weatherJSON = JSON.stringify(weatherReport);
console.log(weatherJSON);
// Your code here

/* Task 6
Define an array named `movies`, where each movie has:
- `title`
- `director`
- `rating`

Convert this array into a JSON string, then parse it back into a JavaScript object.
Log all movie titles with a rating higher than 8.
*/
const movies = [
  { title: "Titanic", director: "James Cameron", rating: 9 },
  { title: "Johny English", director: "Rowan Atikson", rating: 7 },
  { title: "Friends", director: "Uknown", rating: 8.8 },
];
const moviesJSON = JSON.stringify(movies);
console.log(moviesJSON);

const moviesString =
  '[{"title":"Titanic","director":"James Cameron","rating":9},{"title":"Johny English","director":"Rowan Atikson","rating":7},{"title":"Friends","director":"Uknown","rating":8.8}]';
const moviesJava = JSON.parse(moviesString);
moviesJava.forEach((movie) => {
  if (movie.rating > 8) {
    console.log(movie.title);
  }
});

/* Task 7
Write a function `filterHighRatedMovies(jsonString)` that:
- Takes a JSON string representing an array of movie objects.
- Converts it into a JavaScript array.
- Returns a new array containing only movies with a rating higher than 8.
*/

function filterHighRatedMovies(jsonString) {
  const movies = JSON.parse(jsonString);
  const highRatedMovies = movies.filter((movie) => movie.rating > 8);
  return highRatedMovies;
}

/* Task 8
Define an object named `shoppingCart` with:
- `items` (an array of product objects, each with `name` and `price`)
Convert `shoppingCart` into a JSON string and log it to the console.
*/
const shoppingCart = {
  items: [
    { name: "Apple", price: 10 },
    { name: "Banana", price: 15 },
    { name: "Orange", price: 25 },
  ],
};
const shoppingCartJSON = JSON.stringify(shoppingCart);
console.log(shoppingCartJSON);

/* Task 9
Write a function `totalCartValue(jsonString)` that:
- Takes a JSON string representing a shopping cart.
- Converts it into a JavaScript object.
- Returns the total price of all items in the cart.
*/

function totalCartValue() {
  const cartJASON =
    '{"items":[{"name":"Apple","price":10},{"name":"Banana","price":15},{"name":"Orange","price":25}]}';
}
const cartObject = JSON.parse(cartJASON);
const totalPrice = item.price * item.quantity;
console.log(totalPrice);

function totalCartValue() {
  const cartJSON =
    '{"items":[{"name":"Apple","price":10,"quantity":3},{"name":"Banana","price":15,"quantity":2},{"name":"Orange","price":25,"quantity":1}]}';
  const cartObject = JSON.parse(cartJSON);
  console.log(cartObject);
  let totalPrice = 0;
  for (let item of cartObject.items) {
    totalPrice += item.price * item.quantity;
  }
  console.log(totalPrice);
}
totalCartValue();

/* Task 10
Create an object named `gameProgress` with:
- `level`
- `score`
- `livesRemaining`

Convert the object into a JSON string and log it.
Parse the JSON back into an object and update the `score` property by adding 100 points.
Log the updated object.
*/

const gameProgress = {
  level: 5,
  score: 67,
  livesRemaing: 4,
};
const gameProgressJason = JSON.stringify(gameProgress);
console.log(gameProgressJason);

const gameProgressJson = '{"level":5,"score":67,"livesRemaing":4}';
const gameProgressString = JSON.parse(gameProgressJason);
const updateScore = (gameProgressString.score += 100);
console.log(updateScore);
