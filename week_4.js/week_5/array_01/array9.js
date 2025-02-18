// Exercise 8: Find the index of "Fox" in the zooAnimals array
let zooAnimals = ["Elephant", "Giraffe", "Panda", "Fox", "Kangaroo"];
/*
Find and store the index of "Fox" in the zooAnimals array.
Expected outcome: "Index of Fox: 3"
*/
let index = zooAnimals.indexOf("Fox");
console.log(`Index of Fox: ${index}`);
/*
Find the index of "Penguin" in the zooAnimals array.
If it's not found, log "Penguin is not in the zoo."
Expected outcome: -1
*/
let index1 = zooAnimals.indexOf("Lion");
console.log(`Index of Lion: ${index1}`);
/*
Replace "Giraffe" with "Cheetah" in the zooAnimals array.
Expected outcome: ['Elephant', 'Cheetah', 'Panda', 'Fox', 'Kangaroo']
*/
zooAnimals.splice(1, 1, "Cheetah");
console.log(zooAnimals);
