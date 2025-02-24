// Exercise 6: Log each letter of names from the animalNames array

/*
For each item in the animalNames array, log every letter.
Expected outcome:
"Letters in 'Lion': L, i, o, n"
...
"Letters in 'Panda': P, a, n, d, a" */

/* let animalNames = ["Lion", "Tiger", "Panda"];

animalNames.forEach((name) => {
  for (let i = 0; i < name.length; i++) {
    console.log(`Letter in: ${name[i]}`);
  }
}); */

let animalNames = ["Lion", "Tiger", "Elephant", "Panda"];

animalNames.forEach((animal) => {
  // Join all letters of the animal name into a string
  const letters = animal.split("").join(", ");
  console.log(`Letters in '${animal}': ${letters}`);
});
