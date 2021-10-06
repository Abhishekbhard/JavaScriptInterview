# This Value

1. Inside normal JavaScript function the value of this(aka Execution Context) is dynamic. The dynamic context mean that the value of this depend on how the function is invoked.
   Ex:-

```javascript
function createObject() {
  console.log("Inside create Object", this.foo);
  return {
    foo: 42,
    bar: function () {
      console.log("Inside a Bar".this.foo);
    },
  };
}
createObject({ foo: 21 }).bar(); //override this inside createObject
```

Arrow Function :-

1. Does not have their own binding "this" or super.
2. Does not have new.target keyword,
3. Not suitable for call, apply and bind method.as they were designed to allow methods to execute within different scopes -- because Arrow functions establish "this" based on the scope the Arrow function is defined within.
4. Can not used as constructor.
