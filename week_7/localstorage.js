/* Task 1
Store a string `"Hello, LocalStorage!"` in LocalStorage under the key `"message"`.
Retrieve it and log it to the console.
*/

localStorage.setItem("message", "Hello, LocalStorage!");
const storedMessage = localStorage.getItem("message");
console.log(storedMessage);

/* Task 2
Create an object `userSettings` with:
- `theme` ("dark" or "light")
- `language` ("English", "Spanish", etc.)

Convert it to a JSON string and store it in LocalStorage.
Retrieve it, parse it, and log the `theme` property.
*/

const userSettings = {
  theme: "dark",
  language: "English",
};

localStorage.setItem("userSettings", JSON.stringify(userSettings));
t;
const storedSettings = JSON.parse(localStorage.getItem("userSettings"));
console.log(storedSettings.theme);

/* Task 3
Define an array `favoriteBooks` with at least three book objects (`title` and `author`).
Store the array in LocalStorage.
Retrieve and parse it, then log the titles of all books.
*/

const favoriteBooks = [
  { title: "1984", author: "George Orwell" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
];

localStorage.setItem("favoriteBooks", JSON.stringify(favoriteBooks));

const storedBooks = JSON.parse(localStorage.getItem("favoriteBooks"));
storedBooks.forEach((book) => console.log(book.title));

/* Task 4
Write a function `saveToLocalStorage(key, object)` that:
- Converts an object to JSON.
- Stores it in LocalStorage under the provided key.
Test it by saving an object and retrieving it.
*/

function saveToLocalStorage(key, object) {
  localStorage.setItem(key, JSON.stringify(object));
}

function getFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

const userProfile = {
  name: "Elias",
  age: 37,
  city: "Helsinki",
};

saveToLocalStorage("userProfile", userProfile);
const retrievedProfile = getFromLocalStorage("userProfile");
console.log(retrievedProfile);

/* Task 5
Write a function `getFromLocalStorage(key)` that:
- Retrieves a value from LocalStorage.
- Parses it if it's JSON.
- Logs the retrieved value.
*/

function getFromLocalStorage(key) {
  const storedValue = localStorage.getItem(key);
  try {
    const parsedValue = JSON.parse(storedValue);
    console.log(parsedValue);
  } catch (e) {
    console.log(storedValue);
  }
}
localStorage.setItem(
  "userSettings",
  JSON.stringify({ theme: "dark", language: "English" })
);
localStorage.setItem("username", "Elias");

getFromLocalStorage("userSettings");
getFromLocalStorage("username");

/* Task 6
Create an object `userProfile` with:
- `username`
- `email`
- `preferences` (an object with `theme` and `notifications`)

Save it to LocalStorage.
Retrieve and update the `theme` property to `"dark mode"`, then log the updated object.
*/

const userProfile1 = {
  username: "john_doe",
  email: "john@example.com",
  preferences: {
    theme: "light mode",
    notifications: true,
  },
};

localStorage.setItem("userProfile1", JSON.stringify(userProfile));

let retrievedProfile1 = JSON.parse(localStorage.getItem("userProfile1"));

retrievedProfile1.preferences.theme = "dark mode";
console.log(retrievedProfile1);
localStorage.setItem("userProfile1", JSON.stringify(retrievedProfile1));

/* Task 7
Define an object `shoppingList` with an array `items` (strings).
Save it to LocalStorage.
Write a function `addItemToList(item)` that:
- Retrieves `shoppingList` from LocalStorage.
- Adds a new item.
- Saves the updated list back to LocalStorage.
- Logs the updated list.
*/

const shoppingList = {
  items: ["milk", "bread", "eggs"],
};

localStorage.setItem("shoppingList", JSON.stringify(shoppingList));

function addItemToList(item) {
  let list = JSON.parse(localStorage.getItem("shoppingList"));
  list.items.push(item);

  localStorage.setItem("shoppingList", JSON.stringify(list));

  console.log(list);
}

addItemToList("butter");

/* Task 8
Create a counter object with:
- `count` (starting at 0)
Store it in LocalStorage.
Write a function `incrementCounter()` that:
- Retrieves the counter.
- Increases `count` by 1.
- Saves the updated counter.
- Logs the new count.
*/

const counter = {
  count: 0,
};

localStorage.setItem("counter", JSON.stringify(counter));

function incrementCounter() {
  let currentCounter = JSON.parse(localStorage.getItem("counter"));
  currentCounter.count += 1;
  localStorage.setItem("counter", JSON.stringify(currentCounter));

  console.log("New count:", currentCounter.count);
}

incrementCounter();
incrementCounter();
incrementCounter();

/* Task 9
Create an array `tasks`, where each task is an object (`id`, `description`, `completed`).
Save it to LocalStorage.
Write a function `markTaskComplete(taskId)` that:
- Retrieves `tasks` from LocalStorage.
- Finds the task with the given ID and sets `completed` to `true`.
- Saves the updated tasks.
- Logs the updated list.
*/

const tasks = [
  { id: 1, description: "Buy groceries", completed: false },
  { id: 2, description: "Clean the house", completed: false },
  { id: 3, description: "Finish homework", completed: false },
];

localStorage.setItem("tasks", JSON.stringify(tasks));

function markTaskComplete(taskId) {
  let tasksList = JSON.parse(localStorage.getItem("tasks"));
  const task = tasksList.find((task) => task.id === taskId);
  if (task) {
    task.completed = true;
  }

  localStorage.setItem("tasks", JSON.stringify(tasksList));

  console.log(tasksList);
}
markTaskComplete(2);

/* Task 10
Write a function `clearLocalStorage()` that removes all data stored in LocalStorage.
Call it and confirm LocalStorage is empty.
*/

function clearLocalStorage() {
  localStorage.clear();
}
clearLocalStorage();
console.log(localStorage.length);
