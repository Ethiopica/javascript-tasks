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

let list = document.getElementById("animalList");
const input = document.querySelector("#newAnimalName");
const button = document.querySelector("#addAnimal");

for (let i = 0; i < animalList.length; ++i) {
  let ul = document.createElement("ul");
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
