(function run() {
  for (var i = 0; i < 3; i++) {
    function inner(i) {
      setTimeout(() => {
        console.log(i);
      });
    }
    inner(i);
  }
})();
