function greeting(name) {
  alert("Hello", name);
}
function processUserUnit(callback) {
  var name = prompt("Please Enter what you want to display");
  callback(name);
}
processUserUnit(greeting);
