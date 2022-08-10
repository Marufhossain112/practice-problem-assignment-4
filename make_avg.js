// function make_avg(first,sec,third){
// let avgAdd = first + sec + third;
// let avg  = avgAdd/3;
// return avg;
// }
// let result = make_avg(6,7,2);
// console.log(result);

function make_avg(avgArray) {
  let sum = 0;
  for (let i = 0; i < avgArray.length; i++) {
    // console.log(avgArray[i]);
    sum = sum + avgArray[i];
  }
//   console.log(sum);
  let avgLen = avgArray.length;
  let avg = sum / avgLen;
  return avg;
}
let result = make_avg([6, 7, 2]);
console.log(result);
