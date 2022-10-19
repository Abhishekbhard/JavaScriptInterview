let promiseCount = 0;
function testPromise() {
  const thisPromiseCount = ++promiseCount;
  const log = document.getElementById("log");
  log.insertAdjacentHTML("beforeend", `${thisPromiseCount} Started <br>`);
  const p1 = new Promise((resolve, rejected) => {
    log.insertAdjacentHTML(
      "beforeend",
      `${thisPromiseCount} promise constructor<br>`
    );
    if (thisPromiseCount === 1) {
      rejected("Promise is equat to promise count");
    }

    //     setTimeout(() => {
    //       resolve(thisPromiseCount);
    //     }, Math.random() * 2000);
  });
  p1.then((val) => {
    log.insertAdjacentHTML("beforeend", `${val} Promise fulfilled<br>`);
  }).catch((reason) => {
    console.log(`Handle rejected promises (${reason}) here.`);
  });
  log.insertAdjacentHTML("beforeend", `${thisPromiseCount}) Promise made<br>`);
}
const btn = document.getElementById("make-promise");
btn.addEventListener("click", testPromise);
