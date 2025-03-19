const width = prompt("Enter width");
const height = prompt("Enter height");
const widthNumber = Number(width);
const heightNumber = Number(height);
const calculateArea = () => {
  return widthNumber * heightNumber;
};
console.log(calculateArea());
