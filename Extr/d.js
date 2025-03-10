// Initialize the orders array or retrieve from localStorage
let orders = JSON.parse(localStorage.getItem("orders")) || [];

// Function to calculate total price
function calculateTotalPrice() {
  const pancakeType = document.getElementById("pancakeType").value;
  const deliveryMethod = document.querySelector(
    'input[name="deliveryMethod"]:checked'
  ).value;
  const extraToppings = document.querySelectorAll(
    ".checkbox-group input:checked"
  );
  const basePrice =
    pancakeType === "Chocolate Pancake"
      ? 6
      : pancakeType === "Strawberry Pancake"
      ? 5.5
      : 5;
  let totalPrice = basePrice;

  // Add extra toppings cost
  extraToppings.forEach((topping) => {
    totalPrice += 0.5; // Each topping adds 0.5€
  });

  // Add delivery cost if applicable
  if (deliveryMethod === "Delivery") {
    totalPrice += 5;
  }

  return totalPrice;
}

// Handle the form submission
document
  .getElementById("orderForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const customerName = document.getElementById("customerName").value;
    const pancakeType = document.getElementById("pancakeType").value;
    const deliveryMethod = document.querySelector(
      'input[name="deliveryMethod"]:checked'
    ).value;
    const extraToppings = [];
    document
      .querySelectorAll(".checkbox-group input:checked")
      .forEach((topping) => {
        extraToppings.push(topping.value);
      });

    // Calculate the total price
    const totalPrice = calculateTotalPrice();

    // Create order object
    const order = {
      orderId: Date.now(),
      customerName,
      pancakeType,
      extraToppings,
      deliveryMethod,
      totalPrice,
      status: "Pending", // Default status
    };

    // Add order to orders array and save to localStorage
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    // Optionally, reset the form or give feedback to the user
    document.getElementById("orderForm").reset();
    alert(
      "Order submitted successfully! Go to the 'All Orders' page to view your order."
    );
  });
