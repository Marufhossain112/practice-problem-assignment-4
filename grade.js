function gradingGPA(mark) {
  if (mark <= 100 && mark >= 80) {
    return "You got A";
  } else if (mark <= 79 && mark >= 60) {
    return "You got B";
  } else if (mark <= 59 && mark >= 50) {
    return "You got C";
  } else if (mark <= 49 && mark >= 40) {
    return "You got D";
  } else if (mark <= 39) {
    return "You got F";
  } else {
    return "Invalid number";
  }
}
let My = 85;
let Tom = 66;
let Jane = 95;
let Peter = 56;
let John = 30;
let result = gradingGPA(My);
let result2 = gradingGPA(Tom);
let result3 = gradingGPA(Jane);
let result4 = gradingGPA(Peter);
let result5 = gradingGPA(John);
console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
