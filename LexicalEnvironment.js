// Every Execution context has a reference to it's outer/parent environment, and that outer envionment also
//known as lexical environment.

// function two() {
//   var a; //Decleration and initilizing a variable with undefined.
//   console.log(a);
// }
// function one() {
//   var a = 2;
//   console.log(a);
//   two();
// }
// var a = 1;
// console.log(a);
// one();

// output:- 1,2,undefined
function two() {
  console.log(a); // console the value of it's outer environment also known as lexical environment.=1
}
function one() {
  var a = 2;
  console.log(a);
  two();
}
var a = 1;
console.log(a);
one();
