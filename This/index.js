// let length = 4;
// function callback() {
//   console.log(this.length);
// }

// const object = {
//   length: 5,
//   method() {
//     arguments[0]();
//   },
// };
// console.log(object.method(callback, 1, 2));

// const user = {
//   name: "Abhishek",
//   getUser() {
//     function innerFun() {
//       console.log(this); windows object printed
//     }
//     return innerFun();
//   },
// };
// this.userName = "Abhishek";

// function getUser() {
//   this.userName = "Abhiansh";
//   const innerFunction = () => {
//     console.log(this.userName);// Abhiansh got displayed
//   };
//   return innerFunction();
// }
//console.log(getUser());
