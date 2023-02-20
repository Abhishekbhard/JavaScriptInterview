console.log("start");

setTimeout(() => {
  console.log("First");
}, 0);

Promise.resolve("Second").then((res) => console.log(res));
console.log("End");
