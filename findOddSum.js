function findOddSum(numArray) {
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] % 2 !== 0) {
      sum = sum + numArray[i];
    }
  }
  return sum;
}
let result = findOddSum([5, 7, 8, 10, 45, 30]);
console.log(result);
