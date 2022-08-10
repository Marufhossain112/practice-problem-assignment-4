// A = P(1 + rt)
function interest(p, r, t) {
  // let A = p*(1+r*t);
  // return A;
  let state1 = 1 + r * t;
  let A = state1 * p;
  return A;
}
let result = interest(3000, 0.05, 2);
console.log(result);
