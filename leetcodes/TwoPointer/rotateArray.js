//Given an array, rotate the array to the right by k steps, where k is non-negative.
//Input: nums = [1,2,3,4,5,6,7], k = 3

let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 7;

// const rotate = () => {

//   for (let i = 0; i < k; i++) {
//     nums.unshift(nums.pop());
//   }
//   return nums;
// };
const rotate = () => {
  if (nums.length < k) k = k % nums.length;
  const temp = nums.splice(nums.length - k, k);
  nums.unshift(...temp);
  return nums;
};
console.log(rotate());
