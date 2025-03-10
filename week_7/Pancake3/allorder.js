// Retrieve orders from localStorage or initialize as an empty array
let orders = JSON.parse(localStorage.getItem("orders")) || [];

// Select the container where all the orders will be displayed
const ordersContainer = document.getElementById("ordersContainer");

// Function to create and display order cards
const displayOrders = () => {
  // Clear any existing content in the orders container
  ordersContainer.innerHTML = "";

  // Loop through each order in the orders array
  orders.forEach((order) => {
    // Create a div for each order card
    const orderCard = document.createElement("div");
    orderCard.classList.add("order-card");

    // Create the order details content
    const orderContent = `
      <h3>Order #${order.orderId}</h3>
      <p class="order-details"><strong>Customer Name:</strong> ${
        order.customerName
      }</p>
      <p class="order-details"><strong>Pancake Type:</strong> ${
        order.pancakeType
      }</p>
      <p class="order-details"><strong>Toppings:</strong> ${
        order.extraToppings || "None"
      }</p>
      <p class="order-details"><strong>Delivery Method:</strong> ${
        order.deliveryMethod
      }</p>
      <p class="order-details"><strong>Total Price:</strong> ${
        order.totalPrice
      }€</p>
      
      <div class="status-dropdown">
        <label for="status">Status:</label>
        <select id="status-${order.orderId}" class="status-selector">
          <option value="Pending" ${
            order.status === "Pending" ? "selected" : ""
          }>Pending</option>
          <option value="Processing" ${
            order.status === "Processing" ? "selected" : ""
          }>Processing</option>
          <option value="Completed" ${
            order.status === "Completed" ? "selected" : ""
          }>Completed</option>
          <option value="Delivered" ${
            order.status === "Delivered" ? "selected" : ""
          }>Delivered</option>
        </select>
      </div>
    `;

    // Set the innerHTML of the order card to the generated content
    orderCard.innerHTML = orderContent;

    // Append the order card to the orders container
    ordersContainer.appendChild(orderCard);

    // Add an event listener for changing the status
    const statusSelector = orderCard.querySelector(`#status-${order.orderId}`);
    statusSelector.addEventListener("change", (e) => {
      // Update the status of the order
      order.status = e.target.value;
      // Save the updated orders back to localStorage
      localStorage.setItem("orders", JSON.stringify(orders));
    });
  });
};

// Call the function to display all orders when the page loads
displayOrders();
