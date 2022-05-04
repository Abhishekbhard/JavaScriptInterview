let arr = [1, 3, 6, 7, 9];
let element = 6;

function searchInsertPosition(arr, element) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === element) {
      return mid;
    } else if (arr[mid] > element) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return end + 1;
}

console.log(searchInsertPosition(arr, element));
