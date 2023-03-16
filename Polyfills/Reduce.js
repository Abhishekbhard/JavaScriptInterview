Array.prototype.reducePollyfill = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + "Is not a function");
  }
  let arr = Object(this);
  let len = arr.length >>> 0;

  let accumulator = initialValue !== undefined ? initialValue : arr[0];
  for (let i = initialValue !== undefined ? 0 : 1; i < len; i++) {
    accumulator = callback.call(undefined, accumulator, arr[i]);
  }
  return accumulator;
};

let array = [1, 2, 3, 4, 5];

let sum = array.reducePollyfill((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum);
