const promises = [
  Promise.resolve(8),
  Promise.reject(2),
  Promise.reject(4),
  Promise.resolve(3),
];
//Promise.all() resolve if all the promises resolve reject if any of the promise reject with the reason of first rejected promise
// Promise.all(promises)
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// Promise.allSettled() always resolve with an array of objects representing the state of each promise
// Promise.allSettled(promises)
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//Resolve as soon as if any of the promises resolved or rejected
Promise.race(promises)
  .then((results) => {
    console.log(results);
  })
  .then((error) => {
    console.log(error);
  });

//Resolve if any of the promises resolve and reject only if all the promises reject
// Promise.any(promises)
//   .then((results) => {
//     console.log(results);
//   })
//   .then((error) => {
//     console.log(error);
//   });
