let name = "Abhi";

let reversed = "";

const rev = (name) => {
  for (let character of name) {
    reversed = character + reversed;
  }
  return reversed;
};
console.log(rev(name));
