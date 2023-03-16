let number = prompt("Enter a number");

let sum = 0;
let r;

while (number > 0) {
  r = number % 10;
  sum = sum + r;
  number = parseInt(number / 10);
}

console.log(sum);
