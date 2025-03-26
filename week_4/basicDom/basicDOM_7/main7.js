/*
const button = document.getElementById("toggleBtn");
const paragraph = document.getElementById("paragraph");

const toggleVisibility = () => {
  if (paragraph.style.display === "none") {
    paragraph.style.display = "block"; // Show the paragraph
  } else {
    paragraph.style.display = "none"; // Hide the paragraph
  }
};
button.addEventListener("click", toggleVisibility);


*/

const paragraph = document.getElementById("paragraph");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  paragraph.style.display === "none"
    ? paragraph.style.display == "block"
    : (paragraph.style.display = "none");
});
