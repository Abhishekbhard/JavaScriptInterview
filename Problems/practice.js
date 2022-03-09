//ArmStrong check
//153=1*1*1+5*5*5+3*3*3=153

let n = 151;
let numberOfDigits = n.toString().length;
let sum = 0;

let tem = n;

while (tem > 0) {
  let r = tem % 10;
  sum = sum + r ** numberOfDigits;
  tem = parseInt(tem / 10);
}

if (n === sum) {
  console.log(`${n} is Armstrong Number`);
} else {
  console.log(`${n} is not Armstrong Number`);
}
