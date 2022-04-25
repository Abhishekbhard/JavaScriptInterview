// Reducer with initial value
// previousValue would become the initial value on first time
/*let array = [15, 16, 17, 18, 19];
let n = array.reduce(
  (previousValue, currentValue, currentIndex, array) =>
    previousValue + currentValue,
  10
);

console.log(n);*/

let array = [15, 16, 17, 18, 19];

function reducer(previous, current, index, array) {
  const returns = previous + current;
  console.log(
    `Previous: ${previous}, current: ${current}, index: ${index} , redurn: ${returns} `
  );
  return returns;
}
console.log(array.reduce(reducer));
