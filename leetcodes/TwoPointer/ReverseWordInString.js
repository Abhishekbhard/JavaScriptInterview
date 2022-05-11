let s = "Let's take LeetCode contest";

// const result = () => {
//   let words = s.split(" ");
//   let reversed = words.map((element) => element.split("").reverse().join(""));

//   console.log(reversed.join(" "));
// };

const result = () => {
  let output = "";
  let space = "";
  let word = "";
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char === " ") {
      output += space + word;
      word = "";
      space = " ";
    } else {
      word = s[i] + word;
    }
    if (i === s.length - 1) {
      output += space + word;
    }
  }
  return output;
};
console.log(result());
