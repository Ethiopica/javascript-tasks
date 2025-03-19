document.addEventListener("DOMContentLoaded", function () {
  // Get stored orders from localStorage
  const orders = getOrdersFromLocalStorage();

  // Display all orders
  displayOrders(orders);

  // Handle status update for each order
  function displayOrders(orders) {
    const ordersContainer = document.getElementById("ordersContainer");
    ordersContainer.innerHTML = ""; // Clear the container before re-rendering

    orders.forEach((order) => {
      const orderElement = document.createElement("div");
      orderElement.classList.add("order-card");
      orderElement.innerHTML = `
          <h3>Order #${order.orderId}</h3>
          <p><strong>Customer Name:</strong> ${order.customerName}</p>
          <p><strong>Pancake Type:</strong> ${order.pancakeType}</p>
          <p><strong>Toppings:</strong> ${order.extraToppings || "None"}</p>
          <p><strong>Delivery Method:</strong> ${order.deliveryMethod}</p>
          <p><strong>Total Price:</strong> ${order.totalPrice}€</p>
          
          <button class="status-btn ${order.status}" data-order-id="${
        order.orderId
      }">${capitalize(order.status)}</button>
          
          <button class="update-button" data-order-id="${
            order.orderId
          }">Ready</button>
          <button class="cancel-button" data-order-id="${
            order.orderId
          }">Cancel Order</button>
        `;

      // Add event listener for the status button
      const statusBtn = orderElement.querySelector(".status-btn");
      statusBtn.addEventListener("click", function () {
        updateStatus(order);
      });

      // Add event listener for the cancel button to remove the order
      const cancelButton = orderElement.querySelector(".cancel-button");
      cancelButton.addEventListener("click", function () {
        cancelOrder(order.orderId);
      });

      // Append the order to the orders container
      ordersContainer.appendChild(orderElement);
    });
  }

  // Get orders from localStorage
  function getOrdersFromLocalStorage() {
    try {
      const storedOrders = localStorage.getItem("orders");
      if (storedOrders) {
        return JSON.parse(storedOrders);
      }
      return [];
    } catch (error) {
      console.error("Error getting orders from localStorage", error);
      return [];
    }
  }

  // Update the status of an order
  function updateStatus(order) {
    const statusOptions = ["waiting", "ready", "delivered"];
    let currentStatusIndex = statusOptions.indexOf(order.status);
    currentStatusIndex = (currentStatusIndex + 1) % statusOptions.length;
    order.status = statusOptions[currentStatusIndex];

    // Save updated order status back to localStorage
    saveOrdersToLocalStorage();

    // Re-render orders
    displayOrders(getOrdersFromLocalStorage());
  }

  // Save orders to localStorage
  function saveOrdersToLocalStorage() {
    try {
      const orders = getOrdersFromLocalStorage();
      localStorage.setItem("orders", JSON.stringify(orders));
    } catch (error) {
      console.error("Error saving orders to localStorage", error);
    }
  }

  // Remove an order from localStorage and from the DOM
  function cancelOrder(orderId) {
    const orders = getOrdersFromLocalStorage();
    const updatedOrders = orders.filter((order) => order.orderId !== orderId);

    // Save the updated orders list to localStorage
    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    // Re-render orders
    displayOrders(updatedOrders);
  }

  // Capitalize first letter of the status
  function capitalize(status) {
    return status.charAt(0).toUpperCase() + status.slice(1);
  }
});
