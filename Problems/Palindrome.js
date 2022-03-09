let number = prompt("Enter a number");

let sum = 0;
let temp = number;
let r;

while (number > 0) {
  r = number % 10;
  sum = sum * 10 + r;
  number = parseInt(number / 10);
}
if (temp == sum) {
  console.log(temp + " is Palindrom Number");
} else {
  console.log(temp + " is not a Palindrom number");
}
