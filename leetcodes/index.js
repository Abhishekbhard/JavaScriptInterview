var removeDuplicates = function (nums = [1, 1, 2, 2, 2, 3, 4, 5]) {
  let insertIndex = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] != nums[i]) {
      nums[insertIndex] = nums[i];

      insertIndex++;
    }
  }
  console.log(nums);
};
removeDuplicates();
