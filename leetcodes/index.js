// var reverseString = function (s) {
//   let reverse = [];
//   for (let i = s.length - 1; i >= 0; i--) {
//     reverse.push(s[i]);
//     // console.log(reverse);
//   }
//   return reverse;
// };
var reverseString = function (s) {
  for (let i = 0; i < s.length; i++) {
    for (let j = s.length - 1; j >= 0; j--) {
      // swap(s,i,j);
      let temp = s[i];
      s[i] = s[j];
      s[j] = temp;
    }
  }
  return s;
};
console.log(reverseString(["h", "e", "l", "l", "o"]));
