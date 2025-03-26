/*Create an array `users` where each user has `name` and `score`.
Add a button in HTML that sorts the users by score in descending order and updates the displayed list.*/

function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;

  this.age = function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  };
}
const myCar = new Car("Toyota", "Corolla", 2015);
document.body.innerHTML = `<h2>My ${myCar.brand} ${
  myCar.model
} is ${myCar.age()} years old.</h2>`;
const users = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 78 },
];
function displayUsers() {
  const userList = document.getElementById("userList");
  userList.innerHTML = users
    .map((user) => `<li>${user.name}: ${user.score}</li>`)
    .join("");
}
function sortUsers() {
  users.sort((a, b) => b.score - a.score);
  displayUsers();
}
window.onload = function () {
  document.body.innerHTML += '<ul id="userList"></ul>';
  document.body.innerHTML += '<button id="sortButton">Sort by Score</button>';
  document.getElementById("sortButton").addEventListener("click", sortUsers);
  displayUsers();
};
