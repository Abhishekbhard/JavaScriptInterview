// Brute Force Solution
// single pair
let arr = [2, 3, 6, 5, 7, 8, 12, 9, 4];
let val = 11;

// Brute Force all pair
// function twoSum(arr, val) {
//   let output = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === val) {
//         output.push([i, j]);
//       }
//     }
//   }
//   return output;
// }
// Effecient Optimized Solutions
//

// Using Map
function twoSum(arr, val) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const requiredNumber = val - arr[i];
    if (map.has(requiredNumber)) {
      return [arr[map.get(requiredNumber)], arr[i]];
    } else {
      map.set(arr[i], i);
    }
  }
}

console.log(twoSum(arr, val));
