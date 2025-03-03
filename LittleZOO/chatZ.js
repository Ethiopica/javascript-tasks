// Array to hold animal objects
let animals = [
  { name: "Lion", type: "Mammal", age: 5, sex: "Female" },
  { name: "Parrot", type: "Bird", age: 1, sex: "Male" },
  { name: "Snake", type: "Reptile", age: 2, sex: "Female" },
  { name: "Frog", type: "Amphibian", age: 1, sex: "Male" },
  { name: "Goldfish", type: "Fish", age: 0.5, sex: "Male" },
  { name: "Shark", type: "Fish", age: 3, sex: "Male" },
  { name: "Tiger", type: "Mammal", age: 7, sex: "Female" },
  { name: "Crow", type: "Bird", age: 15, sex: "Male" },
  { name: "Corocodile", type: "Reptile", age: 8, sex: "Male" },
];

// DOM elements
const searchInput = document.getElementById("searchAnimal");
const filterSelect = document.getElementById("filterType");
const sortButton = document.getElementById("sortAnimals");
const animalList = document.getElementById("animalList");
const addAnimalButton = document.getElementById("addAnimal");
const newAnimalName = document.getElementById("newAnimalName");
const newAnimalType = document.getElementById("newAnimalType");

// Function to display animals
function displayAnimals() {
  // Clear the list before displaying the updated list
  animalList.innerHTML = "";

  // Get search query and filter type
  const searchQuery = searchInput.value.toLowerCase();
  const filterValue = filterSelect.value;

  // Filter and search the animals
  const filteredAnimals = animals.filter((animal) => {
    const matchesSearch = animal.name.toLowerCase().includes(searchQuery);
    const matchesFilter = filterValue === "All" || animal.type === filterValue;
    return matchesSearch && matchesFilter;
  });

  // Sort the animals alphabetically by name if necessary
  filteredAnimals.sort((a, b) => a.name.localeCompare(b.name));

  // Display the filtered and sorted list of animals
  filteredAnimals.forEach((animal) => {
    const li = document.createElement("li");
    li.textContent = `${animal.name} (${animal.type})`;
    animalList.appendChild(li);
  });
}

// Function to add a new animal
function addAnimal() {
  const name = newAnimalName.value.trim();
  const type = newAnimalType.value;

  if (name && type) {
    animals.push({ name, type });
    newAnimalName.value = ""; // Reset input fields
    newAnimalType.value = ""; // Reset the type dropdown
    displayAnimals(); // Update the list after adding the new animal
  }
}
// Event listeners for user interactions
searchInput.addEventListener("input", displayAnimals);
filterSelect.addEventListener("change", displayAnimals);
sortButton.addEventListener("click", displayAnimals);
addAnimalButton.addEventListener("click", addAnimal);

// Initial display of animals
displayAnimals();
