// const person1 = {
//   name: "Alice",
//   greet: function () {
//     console.log(`Hello my name is ${this.name}`);
//   },
// };

// const person2 = {
//   name: "Bob",
// };

// person1.greet();
// //Function borrowing
// person1.greet.call(person2);

// function addNumbers(a, b, c) {
//   return a + b + c;
// }

// const sum = addNumbers.apply(null, [1, 2, 3, 7]);

// console.log(sum);

function sum(args) {
  return args.reduce((total, num) => {
    return total + num;
  }, 0);
}
console.log(sum([1, 2, 3]));
