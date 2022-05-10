let arr = [1, 3, 5, 7, 30, 43];
let element = 43;

function findElement(arr, element) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + end / 2);
    if (arr[mid] === element) {
      return mid;
    } else if (arr[mid] > element) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}
console.log(findElement(arr, element));
