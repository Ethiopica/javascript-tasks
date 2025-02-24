// Exercise 5: Find common animal species between reserve1Animals and reserve2Animals

/*
Identify and log any animal species found in both reserve1Animals and reserve2Animals.
Expected outcome:
"Common species: Fox"
"Common species: Bear"
*/
let reserve1Animals = ["Fox", "Deer", "Owl", "Bear"];
let reserve2Animals = ["Bear", "Wolf", "Eagle", "Fox"];

const commonAnimals = reserve1Animals.filter((animal) =>
  reserve2Animals.includes(animal)
);
console.log(`Common species: ${commonAnimals}`);
