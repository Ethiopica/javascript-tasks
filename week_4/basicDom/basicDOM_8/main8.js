/*
Create an HTML file with a <p> element and a button.
Write JavaScript to toggle the visibility of the paragraph each time the button is clicked.
 */

const paragraph = document.getElementById("paragraph");
const hideBtn = document.getElementById("hideBtn");

const toggleVisibility = () => {
  if (paragraph.style.display === "none") {
    paragraph.style.display = "block";
  } else {
    paragraph.style.display = "none";
  }
};

hideBtn.addEventListener("click", toggleVisibility);
