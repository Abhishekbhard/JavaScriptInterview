// Brute Force Solution
// single pair
let arr = [2, 3, 6, 5, 7, 8, 12, 9, 4];
let val = 11;
// function twoSum(arr, val) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === val) {
//         return [i, j];
//       }
//     }
//   }
// }
// Brute Force all pair
function twoSum(arr, val) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === val) {
        output.push([i, j]);
      }
    }
  }
  return output;
}
// Effecient Optimized Solutions
//
// const twoSum = function (arr, val) {
//   console.log("function");
//   const comp = {};
//   const output = [];

//   for (let i = 0; i < arr.length; i++) {
//     //console.log(comp);
//     if (comp[arr[i]] !== undefined) {
//       //console.log([comp[arr[i]]]);
//       output.push([comp[arr[i]], i]);
//     }
//     comp[val - arr[i]] = i;
//   }
//   return output;
// };
// console.log(twoSum(arr, val));
// let hashTwoSum = (array, sum) => {
//   let storageHash = {};
//   let nums = [];

//   for (let i in array) {
//     let addend = sum - array[i];

//     if (addend in storageHash) {
//       nums.push([addend, array[i]]);
//     }
//     storageHash[array[i]] = i;
//   }
//   return nums;
// };
// console.log(hashTwoSum(arr, val));

// console.log(twoSum(arr, val));

// Using Map
// const twoSum = function (arr, val) {
//   const map = new Map();
//   for (item in arr) {
//     let requiredNum = val - arr[item];
//     if (map.has(requiredNum)) {
//       return [arr[map.get(requiredNum)], arr[item]];
//     }
//     map.set(arr[item], item);
//   }
// };
console.log(twoSum(arr, val));
