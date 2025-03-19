
const typeSelect = document.getElementById("type");
const toppingCheckBoxe = document.querySelectorAll(".topping");
const extraCheckBoxe = document.querySelectorAll(".extra");
const totalPriceDisplay = document.getElementById("totalPriceDisplay");
const totalPriceSpan = document.getElementById("totalPrice");

function updateTotalPrice() {
  let totalPrice = Number(typeSelect.value);
  toppingCheckBoxe.forEach((checkbox) => {
    if (checkbox.checked) {
      totalPrice += Number(checkbox.value);
    }
  });

  extraCheckBoxe.forEach((checkbox) => {
    if (checkbox.checked) {
      totalPrice += Number(checkbox.value);
    }
  });
 
  totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}€`;
  totalPriceSpan.textContent = `${totalPrice.toFixed(2)}€`;
}
typeSelect.addEventListener("change", updateTotalPrice);
toppingCheckBoxe.forEach((checkbox) => {
  checkbox.addEventListener("change", updateTotalPrice);
});
extraCheckBoxe.forEach((checkbox) => {
  checkbox.addEventListener("change", updateTotalPrice);
});

updateTotalPrice();
