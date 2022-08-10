function isPrime(num) {
  if (num < 2 || num == 2) {
    return "Not a prime number.";
  } else if (num > 2) {
    for (let i = 2; i < 10; i++) {
      if (num % i === 0) {
        return "Not a prime number.";
      } else {
        return "Is a prime number.";
      }
    }
  }
}
let result = isPrime(-3);
console.log(result);
