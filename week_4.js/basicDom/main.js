const text = document.getElementById("content");

console.log(text.textContent);
function changeText() {
  console.log("Button was clicked");

  text.textContent = "Hello World";
}
