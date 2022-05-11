let input = ["H", "E", "L", "L", "O"];
let output = [];

// const result = () => {
//   let end = input.length - 1;
//   let mid = Math.floor(input.length / 2);
//   for (let i = 0; i < mid; i++) {
//     let temp = input[i];
//     input[i] = input[end];
//     input[end] = temp;
//     end--;
//   }
//   return input;
// };
const result = (i, input, j) => {
  if (i >= j) return input;
  temp = input[i];
  input[i] = input[j];
  input[j] = temp;
  return result(i + 1, input, j - 1);
};
const reverse = () => {
  return result(0, input, input.length - 1);
};

console.log(reverse());
