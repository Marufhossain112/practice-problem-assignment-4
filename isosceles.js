function triangle(side1, side2, side3) {
  if (side1 === side2 && side1 !== side3) {
    return "isosceles.";
  } else if (side2 === side3 && side1 !== side3) {
    return "isosceles.";
  } else if (side1 === side3 && side1 !== side2) {
    return "isosceles.";
  } else {
    return "Not isosceles.";
  }
}
let result = triangle(9, 8, 9);
console.log(result);
