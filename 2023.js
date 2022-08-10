function isLeapYear(year) {
  for (let i = 0; i < year; i++) {
    // console.log(year[i]);
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    }
    return false;
  }
}
let result = isLeapYear(2023);
console.log(result);
