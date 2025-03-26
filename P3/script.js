let orders = JSON.parse(localStorage.getItem("orders")) || [];

const pancakeForm = document.querySelector("#pancakeForm");
const totalPriceDisplay = document.querySelector("#totalPriceDisplay");
const totalPriceBanner = document.querySelector("#totalPriceBanner");
const seeOrderBtn = document.getElementById("seeOrder");
const ordersModal = document.getElementById("ordersModal");
const ordersList = document.getElementById("ordersList");
const seeOrdersBtn = document.getElementById("seeOrdersBtn");

// Function to update total price dynamically
const updateTotalPrice = () => {
  const pancakeType = document.querySelector("#type");
  const basePrice = parseFloat(pancakeType.selectedOptions[0].dataset.price);

  const toppingTotal = [
    ...document.querySelectorAll(".topping:checked"),
  ].reduce((sum, topping) => sum + parseFloat(topping.dataset.price), 0);
  const extraTotal = [...document.querySelectorAll(".extra:checked")].reduce(
    (sum, extra) => sum + parseFloat(extra.dataset.price),
    0
  );
  const deliveryTotal = [
    ...document.querySelectorAll("input[name='delivery']:checked"),
  ].reduce((sum, delivery) => sum + parseFloat(delivery.dataset.price), 0);

  const totalPrice = basePrice + toppingTotal + extraTotal + deliveryTotal;
  totalPriceDisplay.textContent = `${totalPrice}€`;
  totalPriceBanner.textContent = `${totalPrice}€`;
};

pancakeForm.addEventListener("change", updateTotalPrice);

// Add new order
seeOrderBtn.addEventListener("click", () => {
  const customerName = document.getElementById("customerName").value;
  if (!customerName) {
    alert("Please enter your name.");
    return;
  }

  const pancakeType = document.querySelector("#type");
  const pancakeTypeValue = pancakeType.options[pancakeType.selectedIndex].text;
  const toppingsList =
    [...document.querySelectorAll(".topping:checked")]
      .map((topping) => topping.parentNode.textContent.trim())
      .join(", ") || "None";
  const extrasList =
    [...document.querySelectorAll(".extra:checked")]
      .map((extra) => extra.parentNode.textContent.trim())
      .join(", ") || "None";
  const selectedDelivery = document.querySelector(
    "input[name='delivery']:checked"
  );
  const deliveryMethod = selectedDelivery
    ? selectedDelivery.parentNode.textContent.trim()
    : "No delivery method";

  const totalPrice = parseFloat(totalPriceDisplay.textContent);

  const order = {
    orderId: Date.now(),
    customerName,
    pancakeType: pancakeTypeValue,
    toppings: toppingsList,
    extras: extrasList,
    deliveryMethod,
    totalPrice,
    status: "Pending",
  };

  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));
  alert("Order placed successfully!");
  pancakeForm.reset();
  updateTotalPrice();
});

// Open the orders modal
seeOrdersBtn.addEventListener("click", function () {
  ordersModal.style.display = "block";
  displayOrders();
});

// Close the orders modal
function closeOrders() {
  ordersModal.style.display = "none";
}

// Display orders
function displayOrders() {
  ordersList.innerHTML = "";

  if (orders.length === 0) {
    ordersList.innerHTML = "<li>No orders available</li>";
    return;
  }

  orders.forEach((order) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>Order ID:</strong> ${order.orderId} <br>
      <strong>Name:</strong> ${order.customerName} <br>
      <strong>Pancake:</strong> ${order.pancakeType} <br>
      <strong>Toppings:</strong> ${order.toppings} <br>
      <strong>Extras:</strong> ${order.extras} <br>
      <strong>Delivery:</strong> ${order.deliveryMethod} <br>
      <strong>Total Price:</strong> ${order.totalPrice}€ <br>
      <label>Status:</label>
      <select onchange="updateStatus(${order.orderId}, this.value)">
        <option ${order.status === "Pending" ? "selected" : ""}>Pending</option>
        <option ${order.status === "Ready" ? "selected" : ""}>Ready</option>
        <option ${
          order.status === "Delivered" ? "selected" : ""
        }>Delivered</option>
      </select>
      <button onclick="cancelOrder(${order.orderId})">Cancel</button>
      <hr>
    `;
    ordersList.appendChild(li);
  });
}

// Update order status
function updateStatus(orderId, newStatus) {
  orders = orders.map((order) =>
    order.orderId === orderId ? { ...order, status: newStatus } : order
  );
  localStorage.setItem("orders", JSON.stringify(orders));
}

// Cancel order
function cancelOrder(orderId) {
  orders = orders.filter((order) => order.orderId !== orderId);
  localStorage.setItem("orders", JSON.stringify(orders));
  alert("Order canceled successfully!");
  displayOrders();
}
