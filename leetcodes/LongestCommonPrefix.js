let input = ["flower", "flow", "floight"];
// # First solution using Brute Fource
// var longestCommonPrefix = () => {
//   let firstWord = input[0];
//   let result = "";
//   for (let i = 0; i < firstWord.length; i++) {
//     let char = firstWord[i];
//     let counter = 0;
//     for (let j = 1; j < input.length; j++) {
//       let word = input[j];
//       if (char === word[i]) {
//         counter++;
//       }
//     }
//     if (counter === input.length - 1 && i === result.length) {
//       result += char;
//     }
//   }
//   return result;
// };

const longestCommonPrefix = () => {
  for (let i = 0; i <= input[0].length; i++) {
    for (let j = 1; j < input.length; j++) {
      if (input[0][i] !== input[j][i]) {
        return input[0].slice(0, i);
      }
    }
  }
  return input[0];
};

// Solution 2 using higher order function

// const longestCommonPrefix = () => {
//   return input.reduce((prev, next) => {
//     let i = 0;
//     while (prev[i] && next[i] && prev[i] === next[i]) i++;
//     return prev.slice(0, i);
//   });
// };

console.log(longestCommonPrefix());
