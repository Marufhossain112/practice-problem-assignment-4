// has param has return
function odd_even(num) {
  if (num === 0) {
    return "nor a even or odd";
  } else if (num % 2 === 0) {
    return "even";
  }
  return "odd";
}
let result = odd_even(2);
console.log(result);

// has param no return
function odd_even(num) {
  if (num === 0) {
    console.log("nor a even or odd");
  } else if (num % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
let result1 = odd_even(4);
console.log(result1);

// has return no param
function odd_even() {
  let num = 6;
  if (num === 0) {
    return "nor a even or odd";
  } else if (num % 2 === 0) {
    return "even";
  }
  return "odd";
}
console.log(odd_even());

// no return no param
function odd_even() {
  let num = 9;
  if (num === 0) {
    console.log("nor a even or odd");
  } else if (num % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
odd_even();
