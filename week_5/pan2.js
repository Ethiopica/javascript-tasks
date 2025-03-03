const pancakeType = document.querySelector("#type");
const toppings = document.querySelectorAll(".topping");
const extras = document.querySelectorAll(".extra");
const totalPriceDisplay = document.querySelector("#totalPriceDisplay");
const totalPriceBanner = document.querySelector("#totalPrice");
const calculateTotal = () => {
  let totalPrice = Number(pancakeType.value);
  toppings.forEach((topping) => {
    if (topping.checked) {
      totalPrice += Number(topping.value);
    }
  });

  extras.forEach((extra) => {
    if (extra.checked) {
      totalPrice += Number(extra.value);
    }
  });
  totalPriceDisplay.textContent = `${totalPrice}€`;
  totalPriceBanner.textContent = `${totalPrice}€`;
};
pancakeType.addEventListener("change", calculateTotal);
toppings.forEach((topping) =>
  topping.addEventListener("change", calculateTotal)
);
extras.forEach((extra) => extra.addEventListener("change", calculateTotal));

const changeHandler = (event) => {
  console.log("Event target: ", event.target);
  console.log("Event target value: ", event.target.value);
};

pancakeForm.addEventListener("change", changeHandler); 
