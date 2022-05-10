let inputArray = [-2, -1, 0, 4, 5];
let outputArray = [];

// const result = () => {
//   for (let i = 0; i < inputArray.length; i++) {
//     inputArray[i] = inputArray[i] * inputArray[i];
//     //outputArray.push(square);
//   }
//   return inputArray.sort((a, b) => {
//     return a - b;
//   });
// };
const result = () => {
  let start = 0;
  let end = inputArray.length - 1;
  while (start <= end) {
    let max = 0;
    if (Math.abs(inputArray[start]) < Math.abs(inputArray[end])) {
      max = inputArray[end] ** 2;
      outputArray.unshift(max);
      end--;
    } else {
      max = inputArray[start] ** 2;
      outputArray.unshift(max);
      start++;
    }
  }
  return outputArray;
};

// var result = function (nums) {
//   let start = 0;
//   let end = nums.length - 1;
//   let newArr = [];
//   while (start <= end) {
//     let max = 0;
//     if (Math.abs(nums[start]) < Math.abs(nums[end])) {
//       max = nums[end] ** 2;
//       newArr.unshift(max);
//       end--;
//     } else {
//       max = nums[start] ** 2;
//       newArr.unshift(max);
//       start++;
//     }
//   }
//   return newArr;
// };
console.log(result([-2, -1, 0, 4, 5]));
