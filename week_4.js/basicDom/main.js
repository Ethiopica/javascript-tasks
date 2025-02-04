document.addEventListener("DOMContentLoaded", function () {
  // Get references to the elements by their IDs
  const header = document.getElementById("header");
  const button = document.getElementById("changeTextButton");

  // Add an event listener to the button
  button.addEventListener("click", function () {
    // Change the text of the heading when the button is clicked
    header.textContent = "You clicked the button!";
    header.style.color = "blue"; // Change the color of the heading
  });
});
/* Explanation of the JavaScript:
document.addEventListener('DOMContentLoaded', ...): This ensures that the JavaScript only runs after the HTML document has been fully loaded. This is important to make sure the elements you're trying to manipulate are available in the DOM.
document.getElementById(): We use this method to select the elements by their IDs (header and changeTextButton).
Event listener: We attach a click event listener to the button. When the button is clicked, it changes the text content of the <h1> element to "You clicked the button!" and also changes its color to blue.*/
