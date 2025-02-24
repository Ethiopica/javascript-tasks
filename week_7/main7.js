let animalList = [
  "Lion",
  "Tiger",
  "Elephant",
  "Panda",
  "Eagle",
  "Zebra",
  "Giraffe",
  "Monkey",
  "Dolphin",
];
/*
let list = document.getElementById("animalList");
let input = document.querySelector("#newAnimalName");
let button = document.querySelector("#addAnimal");
let searchInput = document.querySelector("#searchAnimal");

for (let i = 0; i < animalList.length; ++i) {
  let ul = document.createElement("li");
  ul.innerText = animalList[i];
  list.appendChild(ul);
}
function updateAnimalList(event) {
  console.log(event);
  let newAnimal = document.createElement("li");
  newAnimal.textContent = input.value;
  list.appendChild(newAnimal);
  input.value = "";
}
button.addEventListener("click", updateAnimalList);

function searchAnimal() {
  let searchTerm = searchInput.value.toLowerCase(); //
  let filteredAnimals = animalList.filter((list) =>
    list.toLowerCase().includes(searchTerm)
  );
  renderAnimalList(filteredAnimals);
}

// Event listener for search input
searchInput.addEventListener("input", searchAnimal);

*/

let list = document.getElementById("animalList");
let input = document.querySelector("#newAnimalName");
let button = document.querySelector("#addAnimal");
let searchInput = document.querySelector("#searchAnimal");

// Function to clear and render the list of animals directly
function updateListDisplay(animals) {
  list.innerHTML = ""; // Clear existing list
  animals.forEach((animal) => {
    let li = document.createElement("li");
    li.innerText = animal;
    list.appendChild(li);
  });
}

// Initially render the full list of animals
updateListDisplay(animalList);

// Function to add a new animal to the list
function updateAnimalList(event) {
  let newAnimal = input.value.trim();
  if (newAnimal) {
    animalList.push(newAnimal); // Add new animal to the main array
    updateListDisplay(animalList); // Re-render the full list with the new animal
    input.value = ""; // Clear input field
  }
}

button.addEventListener("click", updateAnimalList);

// Function to filter the list based on search input
function searchAnimal() {
  let searchTerm = searchInput.value.toLowerCase(); // Get the search term
  let filteredAnimals = animalList.filter((animal) =>
    animal.toLowerCase().includes(searchTerm)
  );
  updateListDisplay(filteredAnimals); // Display filtered animals directly
}

// Event listener for search input
searchInput.addEventListener("input", searchAnimal);
