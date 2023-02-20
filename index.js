let strs = ["flower", "flow", "flight"];

function solutions() {
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) === -1) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }
  return prefix;
  //   return prefix;
  //   let count = 0;
  //   let flow = "flow";
  //   if (first.indexOf(prefix) === -1) {
  //     prefix = prefix.substring(0, prefix.length - 1);
  //     solutions(prefix, "flow");
  //   }
}

//console.log(count);
//console.log(result);

console.log(solutions());
