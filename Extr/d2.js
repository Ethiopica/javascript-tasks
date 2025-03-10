// Retrieve orders from localStorage or initialize an empty array if no orders exist
let orders = JSON.parse(localStorage.getItem("orders")) || [];

// Function to render orders as cards
function renderOrders() {
  const ordersContainer = document.getElementById("ordersContainer");
  ordersContainer.innerHTML = ""; // Clear any existing content

  // Loop through each order and create a card
  orders.forEach((order) => {
    const card = document.createElement("div");
    card.className = "order-card";

    // Add order details to the card
    card.innerHTML = `
      <h3>Order #${order.orderId}</h3>
      <p><strong>Customer:</strong> ${order.customerName}</p>
      <p><strong>Pancake Type:</strong> ${order.pancakeType}</p>
      <p><strong>Toppings:</strong> ${
        order.extraToppings.join(", ") || "None"
      }</p>
      <p><strong>Delivery:</strong> ${order.deliveryMethod}</p>
      <p><strong>Total:</strong> €${order.totalPrice.toFixed(2)}</p>
      <p><strong>Status:</strong> 
        <select class="status-select" data-order-id="${order.orderId}">
          <option value="Pending" ${
            order.status === "Pending" ? "selected" : ""
          }>Pending</option>
          <option value="Completed" ${
            order.status === "Completed" ? "selected" : ""
          }>Completed</option>
          <option value="In Progress" ${
            order.status === "In Progress" ? "selected" : ""
          }>In Progress</option>
        </select>
      </p>
      <button class="button delete-btn" data-order-id="${
        order.orderId
      }">Delete Order</button>
    `;

    // Append the card to the container
    ordersContainer.appendChild(card);
  });
}

// Function to handle status change
document
  .getElementById("ordersContainer")
  .addEventListener("change", function (event) {
    if (event.target.classList.contains("status-select")) {
      const orderId = parseInt(event.target.dataset.orderId);
      const newStatus = event.target.value;

      // Find the order and update its status
      const order = orders.find((order) => order.orderId === orderId);
      if (order) {
        order.status = newStatus;
        localStorage.setItem("orders", JSON.stringify(orders));
      }
    }
  });

// Function to handle order deletion
document
  .getElementById("ordersContainer")
  .addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
      const orderId = parseInt(event.target.dataset.orderId);

      // Remove the order from the array
      orders = orders.filter((order) => order.orderId !== orderId);

      // Save the updated orders array to localStorage
      localStorage.setItem("orders", JSON.stringify(orders));

      // Re-render the orders
      renderOrders();
    }
  });

// Render orders when the page loads
window.onload = function () {
  renderOrders();
};
