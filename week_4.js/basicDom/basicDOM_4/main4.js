const paragraph = document.getElementById("paragraph");
const button = document.getElementById("changeParaButton");

// Add an event listener to the button
button.addEventListener("click", function () {
  // Change the text of the heading when the button is clicked
  paragraph.textContent = "Now you are seeing the replaced paragraph!";
  paragraph.style.color = "blue"; // Change the color of the heading
});
