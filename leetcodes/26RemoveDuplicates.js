//Remove duplicated from sorted array.

const nums = [1, 1, 2, 2, 3];

const removeDuplicates = () => {
  let insertIndex = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] !== nums[i]) {
      nums[insertIndex] = nums[i];
      insertIndex++;
    }
  }
  return [insertIndex, nums];
};
console.log(removeDuplicates());
