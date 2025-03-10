// Retrieve orders from localStorage or initialize as an empty array
let orders = JSON.parse(localStorage.getItem("orders")) || [];

// Select necessary DOM elements
const pancakeType = document.querySelector("#type");
const toppings = document.querySelectorAll(".topping");
const extras = document.querySelectorAll(".extra");
const totalPriceDisplay = document.querySelector("#totalPriceDisplay");
const totalPriceBanner = document.querySelector("#totalPrice");
const pancakeForm = document.querySelector("#pancakeForm");
const seeOrderBtn = document.getElementById("seeOrder");
const summaryText = document.getElementById("summaryText");
const deliveryRadios = document.querySelectorAll("input[name='delivery']");

// Function to update the total price when the user changes options
const changeHandler = () => {
  // Get the base price of the selected pancake type
  const basePrice = parseFloat(pancakeType.selectedOptions[0].dataset.price);

  // Calculate the total price for the selected toppings and extras
  const toppingTotal = [
    ...document.querySelectorAll(".topping:checked"),
  ].reduce((sum, topping) => sum + parseFloat(topping.dataset.price), 0);

  const extraTotal = [...document.querySelectorAll(".extra:checked")].reduce(
    (sum, extra) => sum + parseFloat(extra.dataset.price),
    0
  );

  // Get the selected delivery method price
  const deliveryTotal = [
    ...document.querySelectorAll("input[name='delivery']:checked"),
  ].reduce((sum, delivery) => sum + parseFloat(delivery.dataset.price), 0);

  // Calculate the total price and update the DOM
  const totalPrice = basePrice + toppingTotal + extraTotal + deliveryTotal;
  totalPriceDisplay.textContent = `${totalPrice}€`;
  totalPriceBanner.textContent = `${totalPrice}€`;
};

// Add event listener to the pancake form to handle changes
pancakeForm.addEventListener("change", changeHandler);

// Function to display the order summary when the user clicks "See Order"
seeOrderBtn.addEventListener("click", () => {
  // Get the customer name
  const customerName = document.getElementById("customerName").value;

  // Get the selected pancake type
  const pancakeTypeValue = pancakeType.options[pancakeType.selectedIndex].text;

  // Get the selected toppings and extras, and join them as comma-separated values
  const toppingsList = [...document.querySelectorAll(".topping:checked")]
    .map((topping) => topping.parentNode.textContent.trim())
    .join(", ");

  const extrasList = [...document.querySelectorAll(".extra:checked")]
    .map((extra) => extra.parentNode.textContent.trim())
    .join(", ");

  // Get the selected delivery method
  const selectedDelivery = document.querySelector(
    "input[name='delivery']:checked"
  );
  const deliveryMethod = selectedDelivery
    ? selectedDelivery.parentNode.textContent
    : "No delivery method selected";

  // Update the order summary with the customer details and order items
  summaryText.textContent = `Order created by ${customerName} for ${pancakeTypeValue} with ${
    toppingsList || "No toppings selected"
  } and ${
    extrasList || "No extras selected"
  }. Delivery method: ${deliveryMethod}`;

  // Log the order summary to the console
  console.log(summaryText.textContent);

  // Create the order object
  const order = {
    orderId: Date.now(),
    customerName,
    pancakeType: pancakeTypeValue,
    extraToppings: toppingsList,
    deliveryMethod,
    totalPrice: parseFloat(totalPriceDisplay.textContent),
    status: "Pending", // Default status
  };

  // Add the order to the orders array and save it to localStorage
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));

  // Optionally, reset the form or give feedback to the user
  document.getElementById("orderForm").reset();
  alert(
    "Order submitted successfully! Go to the 'All Orders' page to view your order."
  );
});
