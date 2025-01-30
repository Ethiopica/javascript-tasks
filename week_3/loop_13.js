/* 
Write a function named validatePassword:
- Use a loop to allow the user to input a password.
- If the password is "correct123", log: "Access granted!" and exit the loop.
- If incorrect, prompt the user again with: "Try again!".
 */

const validatePassword = () => {
  let userInput = "";
  while (true) {
    userInput = prompt("Enter password: ");
    if (userInput === "correct123") {
      alert("log:" + "Access granted!");
      break;
    }
    if (userInput !== "correct123" || userInput === "") {
      prompt("Try again");
    }
  }
  console.log(userInput);
};
validatePassword();
