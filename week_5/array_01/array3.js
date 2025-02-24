// Exercise 2: Iterate over the planets array and log each planet with its index
/*
Log each planet in the planets array along with its index.
Expected outcome:
"Planet: Mercury, Index: 0"
...
"Planet: Jupiter, Index: 4"
*/

const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];
planets.forEach((planet, index) => {
  console.log(`Planet: ${planet}`, `Index: ${index}`);
});
