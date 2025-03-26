let usernameField = document.getElementById("username");
let emailField = document.querySelector("#email");
/*let passwordField = document.getElementById("password");*/

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    validateForm(event);
  });

function validateForm(event) {
  // Assume the form is valid initially
  let isValid = true;

  // Check if the username field is empty
  if (usernameField.value.trim() === "") {
    isValid = false;
    showError(usernameField, "Username is required.");
  }

  // Validate the email format using a regex pattern
  if (!validateEmail(emailField.value)) {
    isValid = false;
    showError(emailField, "Invalid email format.");
  }
}

// Function to validate email format using a regex pattern
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Function to display error messages
function showError(field, message) {
  // Create a new div element to hold the error message
  let errorDiv = document.createElement("div");
  // Add a class name to the error div for styling
  errorDiv.className = "error";
  // Set the error message text
  errorDiv.innerText = message;
  // Insert the error message after the field
  field.parentNode.insertBefore(errorDiv, field.nextSibling);
}

/* // Check if the password length is at least 8 characters
  if (passwordField.value.length < 8) {
    isValid = false;
    showError(passwordField, "Password must be at least 8 characters long.");
  }

  // If any field is invalid, prevent form submission
  if (!isValid) {
    event.preventDefault();
  } */
