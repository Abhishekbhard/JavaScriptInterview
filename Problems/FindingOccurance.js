var indices = [];
var array = ["a", "b", "a", "c", "c", "a", "d"];
var element = "a";
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
  var i = 1;
}
console.log(indices);
