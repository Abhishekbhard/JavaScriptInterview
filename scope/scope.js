var teacher = "kyle";
var tooth;

function otherClass() {
  teacher = "Suzzy";
  topic = "React";
  console.log("Welcome");
}
otherClass();
console.log(teacher);
console.log(topic); // Variable not declared
console.log(tooth); // Undefined mean variable declared but not assigned
