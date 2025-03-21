// Select the necessary DOM elements
const pancakeType = document.querySelector("#type");
const toppings = document.querySelectorAll(".topping");
const extras = document.querySelectorAll(".extra");
const totalPriceDisplay = document.querySelector("#totalPriceDisplay");
const totalPriceBanner = document.querySelector("#totalPrice");
const pancakeForm = document.querySelector("#pancakeForm");
const seeOrderBtn = document.getElementById("seeOrder");
const summaryText = document.getElementById("summaryText");

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

  // Calculate the total price and update the DOM
  const totalPrice = basePrice + toppingTotal + extraTotal;
  totalPriceDisplay.textContent = `${totalPrice}€`;
  totalPriceBanner.textContent = `${totalPrice}€`;
};

pancakeForm.addEventListener("change", changeHandler); // Add event listener to the pancake form to handle changes

seeOrderBtn.addEventListener("click", () => {
  const customerName = document.getElementById("customerName").value; // Get the customer name
  const pancakeTypeValue = pancakeType.options[pancakeType.selectedIndex].text; // Get the selected pancake type

  const toppingsList = [...document.querySelectorAll(".topping:checked")] // Get the selected toppings and extras, and join them as comma-separated values
    .map((topping) => topping.parentNode.textContent.trim())
    .join(", ");

  const extrasList = [...document.querySelectorAll(".extra:checked")]
    .map((extra) => extra.parentNode.textContent.trim())
    .join(", ");

  // Update the order summary with the customer details and order items
  summaryText.textContent = `Order created by ${customerName} for ${pancakeTypeValue} with ${
    toppingsList || "No toppings selected"
  } and ${extrasList || "No extras selected"}`;

  // Log the summary text in the console
  console.log(summaryText.textContent);
}); // Function to display the order summary when the user clicks "See Order"

// Event listener for the entire form
form.addEventListener("change", (event) => {
  // Only interested in checkboxes with the name 'topping'
  if (event.target.name === "topping") {
    // Get all checkboxes that are checked
    const checkboxes = form.querySelectorAll('input[name="topping"]:checked');

    // Create an array to store selected values
    const selectedChoices = [];

    // Loop through the checked checkboxes and push their values into the array
    checkboxes.forEach((checkbox) => {
      selectedChoices.push(checkbox.value);
    });

    // Display the selected choices
    resultDiv.textContent = "Selected toppings: " + selectedChoices.join(", ");
  }
});
