function test() {
  var b = 56;
  function insideTest() {
    let b = 36;
    function deepInsideTest() {
      return b;
    }
    return deepInsideTest();
  }
  return insideTest();
  // return b;
}

var value = test();
console.log(value);
