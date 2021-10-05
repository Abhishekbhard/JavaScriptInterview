// Block  also known as compound statement is used to group statement togather into single group in {}.
// The purpose of Block is to group multiple statement where js except only one expression.
//code example 1

//if(true)some statement

// But if we want to write more statements to execute after if condition; then:

// //code example 2

// if(true){
//     statement 1
//     statement 2
//     ...
// }

// Block Scope:- Const and let allow us to declare a variable in Block Scope.
function foo() {
  if (true) {
    var fruit1 = "apple"; //exist in function scope
    const fruit2 = "banana"; //exist in block scope
    let fruit3 = "strawberry"; //exist in block scope
  }
  console.log(fruit1);
  console.log(fruit2);
  console.log(fruit3);
}

foo();
