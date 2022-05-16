let nums = [4, 5, 5, 5, 5];
// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

// array size after removing duplicate
//let nums = [0, 0, 1, 1, 1, 5, 58, 58, 75];
// const removeDuplicates = () => {
//   let i = nums.length > 0 ? 1 : 0;
//   for (let n of nums) {
//     if (n > nums[i - 1]) nums[i++] = n;
//   }
//   return i;
// };

/* const removeDuplicates = () => {
  if (nums.length == 0) return 0;
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[j]) {
      j = j + 1;
      nums[j] = nums[i];
    }
  }
  return ++j;
}; */
const removeDuplicates = () => {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums.indexOf(nums[i + 1]) === i) {
      nums.splice(i, 1);
      i = i - 1;
    }
  }

  return nums;
};

// var removeDuplicates = function () {
//   let map = {};

//   for (let i = 0; i < nums.length; i++) {
//     if (map[nums[i]] !== undefined) {
//       // index for value (nums[i]) exists
//       nums.splice(map[nums[i]], 1);
//       i--; // decrease counter because of splice
//       map[nums[i]] = i; // new index for value
//     } else {
//       map[nums[i]] = i; // record new index
//     }
//   }

//   return nums.length;
// };

console.log(removeDuplicates());
