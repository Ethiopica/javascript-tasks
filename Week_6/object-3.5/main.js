/* Task 5
Create an object `product` with `name`, `price`, and `quantity`.
Add an input field in HTML where the user can enter a quantity to purchase.
Update the `quantity` property and display the total price dynamically.
*/

const product = {
  name: "Laptop",
  price: 800,
  quantity: 50,
};

const purchaseQuantityInput = document.getElementById("purchaseQuantity");
const totalPriceDisplay = document.getElementById("totalPrice");
const updateBtn = document.getElementById("updateBtn");

function updateTotalPrice() {
  const quantityToPurchase = parseInt(purchaseQuantityInput.value);

  if (quantityToPurchase > product.quantity) {
    alert("Sorry, insufficient stock.");
    purchaseQuantityInput.value = product.quantity;
  } else {
    const totalPrice = product.price * quantityToPurchase;
    totalPriceDisplay.textContent = `Total Price: $${totalPrice}`;
  }
}

updateBtn.addEventListener("click", updateTotalPrice);

updateTotalPrice();
