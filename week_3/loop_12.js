/* 
Write a function named buildGroceryList:
- Prompt the user to input grocery items one by one.
- Stop when the user types "done".
Log the complete grocery list in the console.
 */

const buildGroceryList = () => {
  let groceryList = [];
  let i = 1;
  while (true) {
    let userInput = prompt(
      "Enter an item for your grocery list (or type 'done' to finish):"
    );

    if (userInput.toLowerCase() === "done" || userInput === "") {
      break;
    }
    groceryList.push(userInput);
    console.log(userInput);
  }
  console.log("Your grocery list:", groceryList);
};

buildGroceryList();
