function sleepRandom(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time * 1e3, 0 | (Math.random() * 1e3));
  });
}
console.log("Run");

// sleepRandom(5)
//   .then((result) => {
//     console.log(result);
//     return sleepRandom(10);
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .then(() => {
//     console.log("immediately after");
//     throw new Error("Irror");
//   })
//   .then(() => {
//     console.log("will not be displayed");
//   })
//   .catch((x) => console.log(x));
function promiseReject() {
  new Promise((resolve, reject) => {
    reject("This is one promise reject");
  });
}
Promise.all([
  "foo",
  sleepRandom(5),
  sleepRandom(15),
  promiseReject(), // after 15 sec:
])
  .then((x) => console.log(x))
  .catch((reason) => console.log(reason)); // => ['foo', 956, 85, 382]
