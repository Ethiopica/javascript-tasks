// Get the elements using DOM methods
const title = document.getElementById("title"); // Get the <h1> element
const description = document.getElementById("description"); // Get the <p> element
const changeTextBtn = document.getElementById("changeTextBtn"); // Get the button

// Function to change the text of the title and description
function changeText() {
  title.textContent = "You've changed the title!"; // Modify the text of the <h1> element
  description.textContent = "The description text has been updated."; // Modify the <p> element text
}

// Event listener to call changeText function when the button is clicked
changeTextBtn.addEventListener("click", changeText);

/* Explanation:
1. HTML Structure:
   We have an <h1> tag with the ID title, a <p> tag with the ID description, and a button with the ID changeTextBtn.

2.JavaScript:
  Getting elements: We use document.getElementById() to get references to the elements in the DOM. This allows us to manipulate them later.

- Modifying the DOM:
  The textContent property is used to modify the text inside the elements.
- When the button is clicked (addEventListener    ('click', ...)), the changeText function is called, which changes the text content of the <h1> and <p> elements. */
