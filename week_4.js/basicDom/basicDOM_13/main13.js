const inputField = document.getElementById("inputField");
const displayText = document.getElemenById("displayText");

const updateDisplayText = () => {
  displayText.innerText = inputField.value;
};
inputField.addEventListener.inputField("input", displayText);
