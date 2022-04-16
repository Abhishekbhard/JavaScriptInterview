let n = 6;
let star = "";

for (let i = 0; i <= n; i++) {
  for (let j = n; j > i; j--) {
    star = star + "*";
  }
  star = star + "\n";
}
console.log(star);
