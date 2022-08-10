function paperRequirements(first, second, third) {
  const firstBookPage = 100;
  const secondBookPage = 200;
  const thirdBookPage = 300;

  let firstPageNeeded = firstBookPage * first;
  let secondPageNeeded = secondBookPage * second;
  let thirdPageNeeded = thirdBookPage * third;

  total = firstPageNeeded + secondPageNeeded + thirdPageNeeded;
  return total;
}
let result = paperRequirements(23, 44, 66);
console.log(result);
