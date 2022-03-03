let n = 5;
// Three loop needed to print right tringle
//First loop itrate through the rows
// Second loop print the space
// 3rd loop print the star

let string = "";

for (i = 1; i <= n; i++) {
  for (j = i; j < n; j++) {
    string += " ";
  }
  for (j = 1; j <= i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
