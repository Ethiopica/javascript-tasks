// Get references to DOM elements
const typeSelect = document.getElementById("type");
const toppingCheckBoxe = document.querySelectorAll(".topping");
const extraCheckBoxe = document.querySelectorAll(".extra");
const totalPriceDisplay = document.getElementById("totalPriceDisplay");
const totalPriceSpan = document.getElementById("totalPrice");
// Function to update the total price
function updateTotalPrice() {
  // Get the price of the selected pancake type
  let totalPrice = Number(typeSelect.value);
  // Add price for selected toppings (1€ each)
  toppingCheckBoxe.forEach((checkbox) => {
    if (checkbox.checked) {
      totalPrice += Number(checkbox.value);
    }
  });
  // Add price for selected extras
  extraCheckBoxe.forEach((checkbox) => {
    if (checkbox.checked) {
      totalPrice += Number(checkbox.value);
    }
  });
  // Update the displayed total price
  totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}€`;
  totalPriceSpan.textContent = `${totalPrice.toFixed(2)}€`;
}
// Event listeners to update price when options change
typeSelect.addEventListener("change", updateTotalPrice);
toppingCheckBoxe.forEach((checkbox) => {
  checkbox.addEventListener("change", updateTotalPrice);
});
extraCheckBoxe.forEach((checkbox) => {
  checkbox.addEventListener("change", updateTotalPrice);
});
// Initial price update
updateTotalPrice();
