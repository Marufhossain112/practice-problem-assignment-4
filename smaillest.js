let myArray = [32, 3, 34, 45, 12, 56, 39, 98, 77, 23];
let smallest = myArray[0];
let largest = myArray[0];
for (let i = 0; i < myArray.length; i++) {
  element = myArray[i];
  if (smallest > element) {
    smallest = element;
  } else if (largest < element) {
    largest = element;
  }
}
// console.log('index',largestIndex);
// console.log("smallest", smallest);
console.log("largest", largest);
// console.log(myArray);

largestIndex = myArray.indexOf(98);
// console.log(largestIndex);
let sorted = myArray.sort();
sorted.pop();
// console.log(sorted);

let secSmallest = sorted[0];
let secLargest = sorted[0];
for (let i = 0; i < sorted.length; i++) {
  element = sorted[i];
  if (secSmallest > element) {
    secSmallest = element;
  } else if (secLargest < element) {
    secLargest = element;
  }
}
console.log("second largest", secLargest);

// console.log(myArray);
