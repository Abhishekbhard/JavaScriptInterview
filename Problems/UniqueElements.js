var a = [10, 12, 12, 14, 14, 18, 19, 18, 19];

var unique = a.filter(onlyUnique);

console.log(unique);

function onlyUnique(value, index, self) {
  var selfIndex = self.indexOf(value);
  var un;
  if (selfIndex === index) {
    un = true;
  } else {
    un = false;
  }
  return self.indexOf(value) === index;
}
