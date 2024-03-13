var foo = "bar";

function bar() {
  var foo = "baz";
  console.log(foo);
  function baz(foo) {
    foo = "bam";
    bam = "yay";
  }
  // baz();
}
bar();
console.log(foo); //bar
console.log(bam);
baz();
