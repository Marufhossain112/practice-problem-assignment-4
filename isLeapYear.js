function isLeapYear(year) {
  let leapYearList = [];
  for (let i = 0; i < year.length; i++) {
    // console.log(year[i]);
    let years = year[i];
    if ((years % 4 === 0 && years % 100 !== 0) || years % 400 === 0) {
      //   console.log("Is a leap year.");
      leapYearList.push(years);
    } 
}
return leapYearList;
}
let result = isLeapYear([2023, 2024, 2025, 2028, 2030, 2032]);
console.log(result);
