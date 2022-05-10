// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.
let nums = [0, 1, 0, 3, 12];

// const result = () => {
//   let output = nums
//     .filter((num) => {
//       return num != 0;
//     })
//     .concat(
//       nums.filter((n) => {
//         return n === 0;
//       })
//     );
//   console.log(output);
//   return output;
// };
const swap = (a, i, j) => {
  let t = a[j];
  a[j] = a[i];
  a[i] = t;
};
const result = (nums) => {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    let item = nums[i];
    if (item !== 0) {
      swap(nums, i, j);
      j++;
    }
  }
  return nums;
};
console.log(result(nums));
