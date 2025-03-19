// Retrieve orders from localStorage or initialize an empty array
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
const customerNameInput = document.getElementById("customerName");
const deliveryRadios = document.querySelectorAll("input[name='delivery']");

// Function to update total price
const updateTotalPrice = () => {
  let basePrice = parseFloat(pancakeType.value) || 0;

  let toppingTotal = [...document.querySelectorAll(".topping:checked")].reduce(
    (sum, topping) => sum + parseFloat(topping.value),
    0
  );

  let extraTotal = [...document.querySelectorAll(".extra:checked")].reduce(
    (sum, extra) => sum + parseFloat(extra.value),
    0
  );

  let deliveryTotal = [
    ...document.querySelectorAll("input[name='delivery']:checked"),
  ].reduce((sum, delivery) => sum + parseFloat(delivery.value), 0);

  let totalPrice = basePrice + toppingTotal + extraTotal + deliveryTotal;

  // Apply animation effect when price updates
  totalPriceDisplay.classList.add("price-update");
  totalPriceDisplay.textContent = `${totalPrice}€`;
  totalPriceBanner.textContent = `${totalPrice}€`;

  // Remove animation after effect completes
  setTimeout(() => {
    totalPriceDisplay.classList.remove("price-update");
  }, 600);
};

// Attach event listener to update price dynamically
pancakeForm.addEventListener("change", updateTotalPrice);

// Function to display the order summary
const displayOrderSummary = () => {
  let customerName = customerNameInput.value.trim();

  // Validate customer name
  if (!customerName) {
    alert("Please enter your name.");
    return;
  }

  let pancakeTypeValue = pancakeType.options[pancakeType.selectedIndex].text;

  let toppingsList =
    [...document.querySelectorAll(".topping:checked")]
      .map((topping) => topping.parentNode.textContent.trim())
      .join(", ") || "No toppings selected";

  let extrasList =
    [...document.querySelectorAll(".extra:checked")]
      .map((extra) => extra.parentNode.textContent.trim())
      .join(", ") || "No extras selected";

  let selectedDelivery = document.querySelector(
    "input[name='delivery']:checked"
  );
  let deliveryMethod = selectedDelivery
    ? selectedDelivery.parentNode.textContent.trim()
    : "No delivery method selected";

  let totalPrice = parseFloat(totalPriceDisplay.textContent);

  // Order summary text
  summaryText.innerHTML = `<strong>Order by ${customerName}:</strong><br>
    <em>${pancakeTypeValue}</em> with <em>${toppingsList}</em> and <em>${extrasList}</em>.<br>
    Delivery Method: <em>${deliveryMethod}</em>.<br>
    <strong>Total: ${totalPrice}€</strong>`;

  // Create the order object
  const order = {
    orderId: Date.now(),
    customerName,
    pancakeType: pancakeTypeValue,
    extraToppings: toppingsList,
    deliveryMethod,
    totalPrice,
    status: "Pending", // Default status
  };

  // Save order to localStorage
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));

  // Reset form & notify user
  pancakeForm.reset();
  updateTotalPrice(); // Reset price to default
  alert(
    "✅ Order submitted successfully! Check the 'All Orders' page to view your order."
  );
};

// Attach event listener to order button
seeOrderBtn.addEventListener("click", displayOrderSummary);
