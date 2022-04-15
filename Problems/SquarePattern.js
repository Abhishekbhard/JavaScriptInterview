let n = 6;

let string = "";

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    string = string + "* ";
  }
  string = string + "\n";
}

console.log(string);
