const orders = JSON.parse(localStorage.getItem("orders")) || [];
const ordersContainer = document.getElementById("ordersContainer");

if (orders.length === 0) {
  ordersContainer.innerHTML = "<p>No orders found.</p>";
} else {
  orders.forEach((order) => {
    const orderDiv = document.createElement("div");
    orderDiv.classList.add("order");
    orderDiv.id = `order-${order.orderId}`;

    orderDiv.innerHTML = `
      <h3>Order ID: ${order.orderId}</h3>
      <p><strong>Customer Name:</strong> ${order.customerName}</p>
      <p><strong>Pancake Type:</strong> ${order.pancakeType}</p>
      <p><strong>Extra Toppings:</strong> ${order.extraToppings}</p>
      <p><strong>Delivery Method:</strong> ${order.deliveryMethod}</p>
      <p><strong>Total Price:</strong> $${order.totalPrice.toFixed(2)}</p>
      <p><strong>Status:</strong> 
      <span id="status-${order.orderId}" class="status">${order.status}</span>
      </p>
      <button onclick="updateOrderStatus(${
        order.orderId
      })">Update Status</button>
      <button class="cancel" onclick="cancelOrder(${
        order.orderId
      })">Cancel Order</button>
      <hr>`;

    ordersContainer.appendChild(orderDiv);
  });
}

function updateOrderStatus(orderId) {
  const statusElement = document.getElementById(`status-${orderId}`);
  const currentStatus = statusElement.textContent;

  let newStatus = "";
  if (currentStatus === "Pending") {
    newStatus = "Waiting";
    statusElement.style.backgroundColor = "yellow";
  } else if (currentStatus === "Waiting") {
    newStatus = "Ready";
    statusElement.style.backgroundColor = "blue";
  } else if (currentStatus === "Ready") {
    newStatus = "Delivered";
    statusElement.style.backgroundColor = "green";
  } else {
    newStatus = "Pending";
    statusElement.style.backgroundColor = "white";
  }

  statusElement.textContent = newStatus;

  const updatedOrders = orders.map((order) => {
    if (order.orderId === orderId) {
      order.status = newStatus;
    }
    return order;
  });

  localStorage.setItem("orders", JSON.stringify(updatedOrders));
}

function cancelOrder(orderId) {
  const updatedOrders = orders.filter((order) => order.orderId !== orderId);
  localStorage.setItem("orders", JSON.stringify(updatedOrders));

  const orderDiv = document.getElementById(`order-${orderId}`);
  if (orderDiv) {
    orderDiv.remove();
  }
}

localStorage.clear();
