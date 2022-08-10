function age_Odd_Even(age) {
  if (age % 2 !== 0) {
    return false;
  }
  return true;
}
let result = age_Odd_Even(23);
console.log(result);
