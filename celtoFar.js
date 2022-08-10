// function celToFar(cel){
// let far = (cel * 9/5) + 32;
// return far;
// };
// let result = celToFar(45);
// console.log(result);
function farToCel(far){
let cel = (far - 32) * 5/9;
return cel;
};
let result = farToCel(45);
console.log(result);
