/* Task 3
Create an object `theme` with properties `name` (light or dark) and `isActive`.
Add a button in HTML. When clicked, toggle the theme between light and dark, updating the `isActive` property.
*/

const theme = {
  name: "light",
  isActive: true,
};

const button = document.getElementById("toggleThemeBtn");

function toggleTheme() {
  if (theme.name === "light") {
    theme.name = "dark";
    theme.isActive = false;
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  } else {
    theme.name = "light";
    theme.isActive = true;
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  }

  console.log(`Theme: ${theme.name}, Active: ${theme.isActive}`);
}

button.addEventListener("click", toggleTheme);
