/* Task 1: Use "strict mode"
/*
Task: Create a function `task1` that uses `"use strict"`. 
      Inside the function, try using a variable without declaring it first.
      Catch the error and log: "Strict mode error: [error message]"

Example:
task1(); // Logs: "Strict mode error: variable is not defined"
*/
"use strict";
function sum(a, a, c) {
  // Duplicate parameter name not allowed in this context
  return a + a + c;
}

function task1() {
  "use strict";
  x = 10;
  console.log(x);
}

function task1() {
  "use strict";
  let x = 3.14;
  console.log(x);
}

/* Task 2: Declare Variables Correctly
/*
Task: Declare a constant `MAX_USERS = 100` and a `let` variable `currentUsers = 10`.
      Try changing `MAX_USERS` and catch the error.*/

// Declare a constant and a let variable
const MAX_USERS = 100;
let currentUsers = 10;

try {
  MAX_USERS = 200;
} catch (error) {
  console.error(
    "Error: Cannot assign to constant variable 'MAX_USERS'.",
    error
  );
}
console.log("MAX_USERS:", MAX_USERS);
console.log("currentUsers:", currentUsers);

/* Task 3: Create and Log an Object
/*
Task: Create an object `userProfile` with:
      - `name`
      - `email`
      - `isAdmin` (true or false)
      Log the object.*/
const userProfile = {
  name: "Elias",
  email: "eliobais@gmail.com",
  isAdmin: true,
};
console.log(userProfile);

/* Task: Create `calculateArea` function that returns the area of a rectangle.
      The function should take `width` and `height` as inputs. */

const width = prompt("Enter width");
const height = prompt("Enter height");
const widthNumber = Number(width);
const heightNumber = Number(height);
const calculateArea = () => {
  return widthNumber * heightNumber;
};
console.log(calculateArea());

/* Task 5: Avoid Magic Numbers
/*
Task: Define `const DISCOUNT = 0.1`. 
      Write `applyDiscount(price)` that reduces the price by the discount.

Example:
applyDiscount(100) → 90
*/

const DISCOUNT = 0.1;
function applyDiscount(price) {
  return price - price * DISCOUNT;
}
console.log(applyDiscount(100));

/* Task 6: Write Useful Comments
/*
Task: Write a function `greetUser(name)` that returns a greeting.
      Use a meaningful comment explaining the function. */

function greetUser(name) {
  return "Welcome back: " + name;
}
console.log(greetUser("Bob!"));

function greet(name = "guest") {
  return "Hello, " + name + "1";
}
console.log(greet("guest"));

/* Task 7: Refactor Unclear Code
/*
Task: Improve this function to make it clear and readable.

Before:
function f(n){return n<0 ? 'negative' : 'positive';}
After:
- Use better naming and proper formatting.
*/

function f(n) {
  return n < 0 ? "negative" : "postive";
}

/* Task 8: Fix Formatting
/*
Task: Rewrite this code to make it **formatted correctly**.

Before:
let x=10; function example(){console.log(x);}

After:
- Proper indentation and spacing.
*/

function example() {
  let x = 10;
}
console.log(x);
