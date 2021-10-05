// A Closure is a function having access to the parent scope even after the parent function has closed.

const myFunction = () => {
  //2. This Function will get called
  let myValue = 2;
  console.log(myValue);

  const childFunction = () => {
    console.log(myValue + 1);
  };
  return childFunction;
};
const result = myFunction(); //1. Call My Function Here.

console.log(result); // 3. Console got printed
result();
result();
result();
