/*---- 153= 1*1*1+5*5*5+3*3*3  --- */
// Get the number of digit of the number
// Get the Module of the number
// Get the sum of module number
// Divide the number by 10

const number = prompt("Please enter a number..");

const numberOfDigits = number.length;

let sum = 0;

let temp = number;

while (temp > 0) {
  let reminder = temp % 10;
  //console.log(temp);

  sum += reminder ** numberOfDigits;
  // console.log(sum);

  temp = parseInt(temp / 10);
  // console.log(temp);
}

if (number == sum) {
  console.log(` ${number} is Armstrong `);
} else {
  console.log(`${number} is not Armstrong`);
}
