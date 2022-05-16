let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 4;

// const removeElement = () => {
//   if (nums.length === 0) return 0;
//   let j = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       nums[j++] = nums[i];
//     }
//   }
//   return j;
// };

const removeElement = () => {
  if (nums.length === 0) return 0;
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums;
};

console.log(removeElement());
