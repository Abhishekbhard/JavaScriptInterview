function createSetTimeout() {
  let timerId = 0;
  let timerMap = {};

  function setTimeoutPolyfill(callback, delay) {
    //Generate a unique timerId
    let id = timerId++;

    // make the timer as active
    timerMap[id] = true;

    //record the start time
    let start = Date.now();
    function triggerCallback() {
      // if the timer has been canceled do nothing an return
      if (!timerMap[id]) return;

      // if the delay has elapsed ececute the callback
      if (Date.now() > start + delay) {
        callback();
      } else {
        // if the delay has not elapsed reschedule the callback
        requestIdleCallback(triggerCallback);
      }
    }
    // schedule the callback to be ececuted to the next ideal period
    requestIdleCallback(triggerCallback);

    // return the timer id so it can be cancelled lated
    return id;
  }
  function clearTimeoutPolyfill(id) {
    delete timerId[id];
  }
  return { setTimeoutPolyfill, clearTimeoutPolyfill };
}
let { setTimeoutPolyfill, clearTimeoutPolyfill } = createSetTimeout();
console.log("start........");
setTimeoutPolyfill(() => {
  console.log("Inside the timeout");
}, 4000);
console.log("End");
