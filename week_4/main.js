/*
const circle = document.getElemenById("alert");

function myFunction() {
  alert("How are you");
}

function button() {
  alert("click on me");
} */
//selector
const button = document.getElementById("insertBtn");
const input = document.getElementById("text");
const result = document.getElementById("result");

// function
const handleClick = () => {
  result.textContent = input.value;
};
// trigger
button.addEventListener("click", handleClick);
