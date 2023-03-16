const nums = [1, 2, 3, 4, 5, 1, 2];
//Output [3,4,5]

function findOneOccourance(nums) {
  return nums.filter((item, index) => nums.indexOf(item) == index);
}
console.log(findOneOccourance(nums));
