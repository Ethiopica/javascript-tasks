/* const inputField = document.getElementById("inputField");
const displayText = document.getElemenById("displayText");
const button = document.getElementById("addFruit");

const updateDisplayText = () => {
  displayText.innerText = inputField.value;
};

let newInput = document.createElement("li");
newInput.textContent = input.value;
list.appendChild(newInput);
input.value = "";
button.addEventListener("click", updateAnimalList);
inputField.addEventListener.inputField("input", displayText); */

const inputField = document.getElementById("fruitInput"); // Updated to match the HTML input field's id
const displayText = document.getElementById("displayText"); // This is fine
const button = document.getElementById("addFruit");
const list = document.getElementById("fruitList"); // Correctly referencing the fruit list

const updateDisplayText = () => {
  displayText.innerText = inputField.value;
};

const updateAnimalList = () => {
  let newInput = document.createElement("li");
  newInput.textContent = inputField.value;
  list.appendChild(newInput);
  inputField.value = ""; // Clear the input field after adding
};

button.addEventListener("click", updateAnimalList);
