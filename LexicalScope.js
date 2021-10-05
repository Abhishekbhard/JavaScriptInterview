// LexicalScope describe that how nested also know as child function have access to the variable defined
// to the parent scope.
//The lexical scope of childFunction allows access to the parent scope.

const myFunction = () => {
  let myValue = 2;
  console.log(myValue);
  const childFunction = () => {
    console.log((myValue += 1));
  };
  childFunction();
};

myFunction();
