//## Closure is a function that "remembers" variable outside of it, even if you pass the function elsewhere.

function ask(question) {
  setTimeout(function waitASec() {
    console.log(question);
  }, 100);
}
ask("What is closure?");
