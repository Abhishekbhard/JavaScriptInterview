function ListNode(val, next) {
  // use defaults
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// var insert = function (l1, index, value) {
//   if (index == 0) return new ListNode(value, l1);
//   let i = 1; // start at 1
//   let p = l1;
//   while (i < index && p) {
//     p = p.next;
//     i++;
//   }
//   let tem = new ListNode(value, p.next);
//   p.next = tem;
//   return lst; // return the list
// };

function toArray(lst) {
  // utility to help display the list
  return lst ? [lst.val].concat(toArray(lst.next)) : [];
}

// let lst = new ListNode(1, new ListNode(2, new ListNode(4)));

// lst = insert(lst, 2, 3); // insert value 3 at index 2

const result = (head) => {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow.val;
};
let lst = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
console.log(result(lst));
//result(lst);
