const button = document.getElementById("toggleBtn");
const paragraph = document.getElementById("result");

const toggleVisibility = () => {
  if (paragraph.style.display === "none") {
    paragraph.style.display = "block"; // Show the paragraph
  } else {
    paragraph.style.display = "none"; // Hide the paragraph
  }
};
button.addEventListener("click", toggleVisibility);
