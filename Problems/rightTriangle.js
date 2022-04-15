let n = 6;
let string = "";
for (let i = 0; i < n; i++) {
  for (let j = n - 1; j >= i; j--) {
    string = string + " ";
  }
  for (let k = 0; k <= i; k++) {
    string = string + "*";
  }
  string = string + "\n";
}
console.log(string);
