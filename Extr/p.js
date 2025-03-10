// Get orders from localStorage or initialize an empty array if not found
let orders = JSON.parse(localStorage.getItem("orders")) || [];

// Function to generate a unique Order ID using Date.now
function generateOrderId() {
  return Date.now();
}

// Handle the order submission
document
  .getElementById("orderForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get values from the form fields
    const customerName = document.getElementById("customerName").value;
    const pancakeType = document.getElementById("pancakeType").value;
    const toppings = document.getElementById("toppings").value;
    const deliveryMethod = document.getElementById("deliveryMethod").value;
    const totalPrice = parseFloat(document.getElementById("totalPrice").value);

    // Create a new order object
    const order = {
      orderId: generateOrderId(),
      customerName,
      pancakeType,
      toppings,
      deliveryMethod,
      totalPrice,
      status: "Pending", // Default status is "Pending"
    };

    // Add the order to the orders array
    orders.push(order);

    // Store the updated orders array in localStorage
    localStorage.setItem("orders", JSON.stringify(orders));

    // Optionally, reset the form or give feedback to the user
    document.getElementById("orderForm").reset();
    alert(
      "Order submitted successfully! Go to the 'All Orders' page to view your order."
    );
  });
