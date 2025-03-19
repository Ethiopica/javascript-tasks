const pancakeType = document.querySelector("#type");
const toppings = document.querySelectorAll(".topping");
const extras = document.querySelectorAll(".extra");
const totalPriceDisplay = document.querySelector("#totalPriceDisplay");
const totalPriceBanner = document.querySelector("#totalPrice");
const pancakeForm = document.querySelector("#pancakeForm");
const seeOrderBtn = document.getElementById("seeOrder");
const summaryText = document.getElementById("summaryText");

const changeHandler = () => {
  const basePrice = parseFloat(pancakeType.selectedOptions[0].dataset.price);

  const toppingTotal = [
    ...document.querySelectorAll(".topping:checked"),
  ].reduce((sum, topping) => sum + parseFloat(topping.dataset.price), 0);

  const extraTotal = [...document.querySelectorAll(".extra:checked")].reduce(
    (sum, extra) => sum + parseFloat(extra.dataset.price),
    0
  );

  const totalPrice = basePrice + toppingTotal + extraTotal;
  totalPriceDisplay.textContent = `${totalPrice}€`;
  totalPriceBanner.textContent = `${totalPrice}€`;
};

pancakeForm.addEventListener("change", changeHandler);
seeOrderBtn.addEventListener("click", () => {
  const customerName = document.getElementById("customerName").value;
  const pancakeTypeValue = pancakeType.options[pancakeType.selectedIndex].text;

  const toppingsList = [...document.querySelectorAll(".topping:checked")]
    .map((topping) => topping.parentNode.textContent.trim())
    .join(", ");

  const extrasList = [...document.querySelectorAll(".extra:checked")]
    .map((extra) => extra.parentNode.textContent.trim())
    .join(", ");

  summaryText.textContent = `Order created by ${customerName} for ${pancakeTypeValue} with ${
    toppingsList || "No toppings selected"
  } and ${extrasList || "No extras selected"}`;

  console.log(summaryText.textContent);
});

form.addEventListener("change", (event) => {
  if (event.target.name === "topping") {
    const checkboxes = form.querySelectorAll('input[name="topping"]:checked');
    const selectedChoices = [];

    checkboxes.forEach((checkbox) => {
      selectedChoices.push(checkbox.value);
    });

    resultDiv.textContent = "Selected toppings: " + selectedChoices.join(", ");
  }
});
