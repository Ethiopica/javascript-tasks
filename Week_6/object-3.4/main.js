/* Task 4
Create an object `counter` with a `value` property.
Add two buttons in HTML: one to increase `value`, another to decrease it.
Display `value` in an HTML element and update it dynamically when buttons are clicked.
*/
const counter = {
  value: 0,
};

const valueElement = document.getElementById("value");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");

function updateValueDisplay() {
  valueElement.textContent = counter.value;
}

increaseBtn.addEventListener("click", () => {
  counter.value++;
  updateValueDisplay();
});

decreaseBtn.addEventListener("click", () => {
  counter.value--;
  updateValueDisplay();
});

updateValueDisplay();
