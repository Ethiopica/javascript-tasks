let animalSimple = [
  { name: "Lion", species: "Panthera leo" },
  { name: "Tiger", species: "Panthera tigris" },
  { name: "Elephant", species: "Loxodonta" },
  { name: "Panda", species: "Ailuropoda melanoleuca" },
  { name: "Eagle", species: "Aquila chrysaetos" },
  { name: "Zebra", species: "Equus zebra" },
  { name: "Giraffe", species: "Giraffa camelopardalis" },
  { name: "Monkey", species: "Cercopithecoidea" },
];

const animalList = document.getElementById("animalList");
const button = document.querySelector("#addAnimal");
let searchInput = document.querySelector("#searchAnimal");

const displayAnimals = (animalArray) => {
  animalList.innerHTML = ""; // Clear Ul list.
  for (const animal of animalArray) {
    const li = document.createElement("li");
    li.textContent = `${animal.name} (${animal.species})`; // Display name and species
    animalList.appendChild(li);
  }
};

const addAnimal = () => {
  const nameInput = document.querySelector("#newAnimalName").value.trim();
  const speciesInput = document.querySelector("#newAnimalSpecies").value.trim();

  if (nameInput && speciesInput) {
    animalSimple.push({ name: nameInput, species: speciesInput });
    displayAnimals(animalSimple);
    console.log(`Added animal: ${nameInput} (${speciesInput})`);
    document.querySelector("#newAnimalName").value = "";
    document.querySelector("#newAnimalSpecies").value = "";
  }
};

const searchAnimal = () => {
  const searchText = searchInput.value.toLowerCase();
  const filteredAnimals = animalSimple.filter(
    (animal) =>
      animal.name.toLowerCase().includes(searchText) ||
      animal.species.toLowerCase().includes(searchText)
  );
  displayAnimals(filteredAnimals);
};

button.addEventListener("click", addAnimal);
searchInput.addEventListener("input", searchAnimal);

displayAnimals(animalSimple);
