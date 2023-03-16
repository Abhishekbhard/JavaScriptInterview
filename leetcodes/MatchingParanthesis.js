const input = ["[", "]", "(", ")", "{", "}", "[", "]"];
// const input = "[()]{}[]";

const isValid = () => {
  const stack = [];
  for (let i = 0; i < input.length; i++) {
    const braces = input[i];
    switch (braces) {
      case "[": {
        stack.push("]");
        break;
      }
      case "{": {
        stack.push("}");
        break;
      }
      case "(": {
        stack.push(")");
        break;
      }
      default:
        if (braces !== stack.pop()) {
          return false;
        }
    }
  }

  return stack.length === 0;
};
// const isValid = () => {
//   const stack = [];
//   const map = { "{": "}", "[": "]", "(": ")" };
//   for (let i = 0; i < input.length; i++) {
//     const c = input[i];
//     if (map[c]) {
//       stack.push(map[c]);
//     } else if (c !== stack.pop()) {
//       return false;
//     }
//   }
//   return stack.length === 0;
// };
console.log(isValid());
