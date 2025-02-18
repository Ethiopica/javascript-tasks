// Exercise 7: Filter only positive temperatures from the temperatures array

/*
Write a function getPositiveTemperatures that returns a new array
containing only temperatures greater than 0 from the temperatures array.
Expected outcome: [5, 15, 20, 2]
*/

let temperatures = [-10, 5, -3, 15, -8, 20, 2];

let getPositiveTemperatures = temperatures.filter((number) => number > 0);
console.log(getPositiveTemperatures);
