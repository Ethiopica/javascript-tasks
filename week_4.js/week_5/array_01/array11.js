// Exercise 14: Find all occurrences of "John" in attendees
let attendees = ["John", "Sarah", "John", "Alex", "John"];

/*
Find all positions where "John" appears in the attendees array.
Expected outcome: [0, 2, 4]
*/

const johnOccurrences = [];
attendees.forEach((attendee, index) => {
  if (attendee === "John") {
    johnOccurrences.push(index);
  }
});

console.log(johnOccurrences);
// Exercise 15: Convert all names in attendees array to uppercase
/*
Create a new array where every name in attendees is written in uppercase.
Expected outcome: ['JOHN', 'SARAH', 'JOHN', 'ALEX', 'JOHN']
*/

const allCapital = attendees.map((attendee) => attendee.toUpperCase());
console.log(allCapital);
