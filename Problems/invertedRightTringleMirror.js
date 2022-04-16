let n = 6;
let start = "";
for (let i = 0; i <= n; i++) {
  for (let k = 0; k <= i; k++) {
    start = start + " ";
  }
  for (let j = n; j > i; j--) {
    start = start + "*";
  }

  start = start + "\n";
}
console.log(start);
