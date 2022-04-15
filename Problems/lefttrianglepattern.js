let n = 6;

let star = "";

for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    star = star + "*";
  }

  star = star + "\n";
}

console.log(star);
