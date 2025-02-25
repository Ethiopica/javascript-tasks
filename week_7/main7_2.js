let animalSimple = [
  "Lion",
  "Tiger",
  "Elephant",
  "Panda",
  "Eagle",
  "Zebra",
  "Giraffe",
  "Monkey",
];

const animalList = document.getElementById("animalList");
const button = document.querySelector("#addAnimal");
let searchInput = document.querySelector("#searchAnimal");

const displayAnimals = (animalArray) => {
  animalList.innerHTML = "";
  for (const animal of animalArray) {
    const li = document.createElement("li");
    li.textContent = `${animal}`;
    animalList.appendChild(li);
  }
};
const addAnimal = () => {
  const nameInput = document.querySelector("#newAnimalName").value.trim();
  animalSimple.push(nameInput);
  displayAnimals(animalSimple);
  console.log(nameInput);
  document.querySelector("#newAnimalName").value = "";
};
const searchAnimal = () => {
  const searchText = searchInput.value.toLowerCase();
  const filteredAnimals = animalSimple.filter((animal) =>
    animal.toLowerCase().includes(searchText)
  );
  displayAnimals(filteredAnimals);
};
button.addEventListener("click", addAnimal);
searchInput.addEventListener("input", searchAnimal);
displayAnimals(animalSimple);
