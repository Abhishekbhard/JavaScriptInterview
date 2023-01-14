// let n = 6;
// let star = "";

// for (let i = 0; i <= n; i++) {
//   for (let j = n; j > i; j--) {
//     star = star + "*";
//   }
//   star = star + "\n";
// }
// console.log(star);
var bool = true;
const numbers = [2, 5, 23, 9];
let n = numbers.reduce((total, currentValue, currIndex, array) => total * 2);
// function myFunc(total, num) {
//   return total - num;
// }
console.log(n);
