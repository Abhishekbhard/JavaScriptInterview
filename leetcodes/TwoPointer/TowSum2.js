let numbers = [1, 2, 3, 4, 4, 9, 56, 90];
let target = 8;

// const result = () => {
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = 1; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] === target) {
//         //console.log(i);
//         if (i !== j) return [i + 1, j + 1];
//       }
//     }
//   }
// };

const result = () => {
  let start = 0;
  let end = numbers.length;
  while (start < end) {
    if (numbers[start] + numbers[end] === target) {
      return [start + 1, end + 1];
    } else if (numbers[start] + numbers[end] < target) {
      start++;
    } else {
      end--;
    }
  }
};
console.log(result());
