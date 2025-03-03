const pancakeType = document.querySelector("#type");

const toppings = document.querySelectorAll(".topping");
const extras = document.querySelectorAll(".extra");
const totalPriceDisplay = document.querySelector("#totalPriceDisplay");
const totalPriceBanner = document.querySelector("#totalPrice");
const pancakeForm = document.querySelector("#pancakeForm");
const seeOrderBtn = document.getElementById("seeOrder");
const summaryText = document.getElementById("summaryText");

const changeHandler = (event) => {
  const basePrice = parseFloat(
    document.getElementById("type").selectedOptions[0].dataset.price
  );

  const customerName = document.getElementById("customerName").value;

  const toppingTotal = [
    ...document.querySelectorAll(".topping:checked"),
  ].reduce((sum, topping) => sum + parseFloat(topping.dataset.price), 0);
  console.log("Topping total: ", toppingTotal);

  console.log("Topping: ", toppingTotal);

  const extraTotal = [...document.querySelectorAll(".extra:checked")].reduce(
    (sum, extra) => sum + parseFloat(extra.dataset.price),
    0
  );
  console.log("Extra total: ", extraTotal);

  totalPrice = basePrice + toppingTotal + extraTotal;
  console.log("Total order price: ", totalPrice);

  totalPriceDisplay.textContent = `${totalPrice}€`;
  totalPriceBanner.textContent = `${totalPrice}€`;
};
pancakeForm.addEventListener("change", changeHandler);

/* seeOrderBtn.addEventListener("click", () => {
  summaryText.textContent = `Order created by ${customerName.value} for ${pancakeType.value} with ${toppings.value} and ${extras.value}`;
});
*/

seeOrderBtn.addEventListener("click", () => {
  let toppings = document.querySelectorAll(".topping:checked");
  let extras = document.querySelectorAll(".extra:checked");
  summaryText.textContent = `Order created by ${customerName.value} for ${pancakeType.value} with here??? ${toppings.value} and ${extras.value}`;

  console.log(summaryText.textContent);
});
