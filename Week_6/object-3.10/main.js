  // Object representing the shopping list
  const shoppingList = {
    items: [],

    // Method to add new item to the list
    addItem: function (item) {
      this.items.push(item); // Add the item to the items array
    },

    // Method to render the shopping list on the webpage
    renderList: function () {
      const itemListDiv = document.getElementById("itemList");
      itemListDiv.innerHTML = ""; // Clear the existing list

      // Loop through the items and display them
      this.items.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        itemListDiv.appendChild(li);
      });
    },
  };

  // Event listener for adding a new item
  document
    .getElementById("addItemBtn")
    .addEventListener("click", function () {
      const itemInput = document.getElementById("itemInput");
      const newItem = itemInput.value.trim(); // Get the input value and remove excess spaces

      if (newItem) {
        shoppingList.addItem(newItem); // Add the new item to the shopping list
        shoppingList.renderList(); // Re-render the updated list
        itemInput.value = ""; // Clear the input field
      } else {
        alert("Please enter an item!");
      }
    });

  // Initial render of the shopping list (empty initially)
  shoppingList.renderList();
