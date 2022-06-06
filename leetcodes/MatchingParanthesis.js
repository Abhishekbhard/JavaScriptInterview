const input = ["[", "(", ")", "]", "{", "}", "[", "]", "}"];
// const input = "[()]{}[]";

const isValid = () => {
  const stack = [];

  for (let i = 0; i < input.length; i++) {
    let char = input[i];
    switch (char) {
      case "(":
        stack.push(")");
        break;
      case "{":
        stack.push("}");
        break;
      case "[":
        stack.push("]");
        break;
      default:
        if (char !== stack.pop()) {
          return false;
        }
    }
  }
  return stack.length === 0;
};
console.log(isValid());
